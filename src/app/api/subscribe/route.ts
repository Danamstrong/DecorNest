import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// "onboarding@resend.dev" works with no domain setup but only delivers to the
// Resend account's own address. Verify the domain and set RESEND_FROM to
// deliver welcome emails to real subscribers.
const FROM = process.env.RESEND_FROM ?? `${SITE_NAME} <onboarding@resend.dev>`;
const NOTIFY_TO = process.env.NEWSLETTER_NOTIFICATION_TO;

function welcomeEmail() {
  const text = [
    `Welcome to ${SITE_NAME}.`,
    "",
    "You're on the list. Once a week you'll get one email: a new post, a few",
    "things worth buying, and nothing else. No spam, and you can unsubscribe",
    "from any email.",
    "",
    `Read the latest: ${SITE_URL}/blog`,
    "",
    `— ${SITE_NAME}`,
  ].join("\n");

  const html = `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:520px;margin:0 auto;color:#2c2c2c;line-height:1.7">
    <h1 style="font-size:22px;font-weight:500;margin:0 0 16px">Welcome to ${SITE_NAME}.</h1>
    <p style="margin:0 0 16px">
      You're on the list. Once a week you'll get one email: a new post, a few
      things worth buying, and nothing else. No spam, and you can unsubscribe
      from any email.
    </p>
    <p style="margin:0 0 24px">
      <a href="${SITE_URL}/blog" style="color:#b15f3d">Read the latest &rarr;</a>
    </p>
    <p style="margin:0;font-size:13px;color:#4a4642">&mdash; ${SITE_NAME}</p>
  </div>`;

  return { text, html };
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("/api/subscribe: RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "The newsletter isn't set up yet. Please try again later." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email).trim().toLowerCase()
      : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { text, html } = welcomeEmail();

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: email,
      subject: `Welcome to ${SITE_NAME}`,
      text,
      html,
    });

    if (error) {
      console.error("/api/subscribe: Resend send failed", error);
      return NextResponse.json(
        { error: "We couldn't send your welcome email. Please try again." },
        { status: 502 },
      );
    }

    // Best-effort owner notification; never blocks the subscriber's response.
    if (NOTIFY_TO) {
      resend.emails
        .send({
          from: FROM,
          to: NOTIFY_TO,
          subject: `New ${SITE_NAME} subscriber`,
          text: `New newsletter signup: ${email}`,
        })
        .catch((e) => console.error("/api/subscribe: notification failed", e));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/subscribe: unexpected error", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

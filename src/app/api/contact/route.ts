import { NextResponse } from "next/server";
import { Resend } from "resend";

// Email delivery env configuration is documented in README.md.
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
const TO_EMAIL = process.env.RESEND_TO_EMAIL;

function misconfiguredResponse() {
  console.error("Contact form misconfigured", {
    hasApiKey: Boolean(resendApiKey),
    hasFrom: Boolean(FROM_EMAIL),
    hasTo: Boolean(TO_EMAIL),
  });

  return NextResponse.json(
    { error: "Η υπηρεσία αποστολής email δεν έχει ρυθμιστεί." },
    { status: 500 }
  );
}

export async function POST(request: Request) {
  if (!resend || !FROM_EMAIL || !TO_EMAIL) {
    return misconfiguredResponse();
  }

  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Απαιτούνται ονοματεπώνυμο, email και μήνυμα." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: subject || "Νέο μήνυμα από την φόρμα επικοινωνίας",
      text: `Όνομα: ${name}\nEmail: ${email}\nΘέμα: ${subject ?? "-"}\n\nΜήνυμα:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Αποτυχία αποστολής email. Ελέγξτε το Resend API key." },
      { status: 500 }
    );
  }
}


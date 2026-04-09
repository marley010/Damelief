import { Resend } from "resend";

export async function sendContactEmail(recipientEmail, name, phone, message) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <h1 style="color: #333;">Nieuw Contactformulier Bericht</h1>
          <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #666; margin: 10px 0;"><strong>Naam:</strong> ${name}</p>
            <p style="color: #666; margin: 10px 0;"><strong>Email:</strong> ${recipientEmail}</p>
            <p style="color: #666; margin: 10px 0;"><strong>Telefoonnummer:</strong> ${phone}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; margin: 10px 0;"><strong>Bericht:</strong></p>
            <p style="color: #666; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "stefanpftf@gmail.com",
    subject: `Nieuw contactformulier bericht van ${name}`,
    html: htmlContent,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result;
}

export async function sendAfspraakEmail(recipientEmail, name, phone, date, message) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <h1 style="color: #333;">Nieuwe Afspraak Aanvraag</h1>
          <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #666; margin: 10px 0;"><strong>Naam:</strong> ${name}</p>
            <p style="color: #666; margin: 10px 0;"><strong>Email:</strong> ${recipientEmail}</p>
            <p style="color: #666; margin: 10px 0;"><strong>Telefoonnummer:</strong> ${phone}</p>
            <p style="color: #666; margin: 10px 0;"><strong>Gewenste Datum:</strong> ${date}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; margin: 10px 0;"><strong>Bericht:</strong></p>
            <p style="color: #666; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "stefanpftf@gmail.com",
    subject: `Nieuwe afspraak aanvraag van ${name} voor ${date}`,
    html: htmlContent,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result;
}

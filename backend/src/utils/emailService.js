import { Resend } from "resend";

export async function sendContactEmail(recipientEmail, name, phone, message) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const htmlContent = `
    <html>
      <body style="font-family: Georgia, 'Garamond', serif; padding: 20px; margin: 0; background-color: #FBF9F6;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #F2F8F4; padding: 40px; border-radius: 24px; box-shadow: 0 4px 6px rgba(70, 108, 87, 0.15);">
          <h1 style="color: #466c57; font-size: 28px; text-align: center; margin: 0 0 30px 0; font-weight: 400;">Nieuw Contactformulier Bericht</h1>
          <div style="background-color: #FBF9F6; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <div style="margin-bottom: 18px;">
              <p style="color: #466c57; margin: 0 0 6px 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Naam</p>
              <p style="color: #466c57; margin: 0; font-size: 16px;">${name}</p>
            </div>
            <div style="margin-bottom: 18px;">
              <p style="color: #466c57; margin: 0 0 6px 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
              <p style="color: #466c57; margin: 0; font-size: 16px;">${recipientEmail}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #466c57; margin: 0 0 6px 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Telefoonnummer</p>
              <p style="color: #466c57; margin: 0; font-size: 16px;">${phone}</p>
            </div>
            <div style="border-top: 1px solid #ddefe5; padding-top: 20px; margin-top: 20px;">
              <p style="color: #466c57; margin: 0 0 12px 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Bericht</p>
              <p style="color: #466c57; margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddefe5;">
            <p style="color: #8a9c8f; font-size: 12px; margin: 0;">Dit bericht is verzonden via het contactformulier van DAMELIEF</p>
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

export async function sendAfspraakEmail(
  recipientEmail,
  name,
  phone,
  date,
  message,
) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const htmlContent = `
    <html>
      <body style="font-family: Georgia, 'Garamond', serif; padding: 20px; margin: 0; background-color: #FBF9F6;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #F2F8F4; padding: 40px; border-radius: 24px; box-shadow: 0 4px 6px rgba(70, 108, 87, 0.15);">
          <h1 style="color: #466c57; font-size: 28px; text-align: center; margin: 0 0 30px 0; font-weight: 400;">Nieuwe Afspraak Aanvraag</h1>
          <div style="background-color: #FBF9F6; padding: 25px; border-radius: 12px; margin: 20px 0;">
            <div style="margin-bottom: 18px;">
              <p style="color: #466c57; margin: 0 0 6px 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Naam</p>
              <p style="color: #466c57; margin: 0; font-size: 16px;">${name}</p>
            </div>
            <div style="margin-bottom: 18px;">
              <p style="color: #466c57; margin: 0 0 6px 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
              <p style="color: #466c57; margin: 0; font-size: 16px;">${recipientEmail}</p>
            </div>
            <div style="margin-bottom: 18px;">
              <p style="color: #466c57; margin: 0 0 6px 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Telefoonnummer</p>
              <p style="color: #466c57; margin: 0; font-size: 16px;">${phone}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="color: #466c57; margin: 0 0 6px 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Gewenste Datum</p>
              <p style="color: #466c57; margin: 0; font-size: 16px;">${date}</p>
            </div>
            <div style="border-top: 1px solid #ddefe5; padding-top: 20px; margin-top: 20px;">
              <p style="color: #466c57; margin: 0 0 12px 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Bericht</p>
              <p style="color: #466c57; margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddefe5;">
            <p style="color: #8a9c8f; font-size: 12px; margin: 0;">Dit bericht is verzonden via DAMELIEF</p>
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

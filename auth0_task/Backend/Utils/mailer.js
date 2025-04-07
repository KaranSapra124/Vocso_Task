const nodemailer = require("nodemailer");

const getTokenEmailTemplate = (token) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>Verify Your Account</title>
        </head>
        <body style="margin: 0; padding: 0; background: #f3f4f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td align="center" style="padding: 40px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" style="
                  background-color: #ffffff;
                  border-radius: 12px;
                  padding: 40px;
                  box-shadow: 0 4px 14px rgba(0,0,0,0.1);
                ">
                  <tr>
                    <td style="text-align: center;">
                      <h1 style="font-size: 28px; color: #111827; margin-bottom: 10px;">🔐 Authentication Verification Token</h1>
                      <p style="font-size: 16px; color: #4b5563; margin: 0 0 24px;">
                        Hello! Use the following one-time token to complete your sign-in process:
                      </p>
  
                      <div style="
                        display: inline-block;
                        background: linear-gradient(to right, #6366f1, #8b5cf6);
                        color: #ffffff;
                        font-size: 20px;
                        font-weight: 600;
                        padding: 14px 28px;
                        border-radius: 8px;
                        margin: 24px 0;
                        letter-spacing: 1px;
                      ">
                        ${token}
                      </div>
  
                      <p style="font-size: 14px; color: #6b7280;">
                        This token will expire in 10 minutes. Please do not share it with anyone.
                      </p>
  
                      <hr style="margin: 40px 0; border: none; border-top: 1px solid #e5e7eb;" />
  
                      <p style="font-size: 12px; color: #9ca3af;">
                        &copy; 2025 Summit.AI • This email was sent to verify your account.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
};

const sendTokenEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Auth Task: " <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Verification Token",
    html: getTokenEmailTemplate(token),
  };

  await transporter.sendMail(mailOptions);
  console.log("✅ Token mail sent successfully to:", email);
};

module.exports = sendTokenEmail;

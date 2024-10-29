const fs = require('fs');
const path = require('path');

function getTemplate(verificationCode) {
  return `
    <html>
      <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      </head>
      <body>Verification: ${verificationCode}</body>
    </html>
  `;
}

const verificationCode = process.env.YANDEX_WEBMASTER_VERIFICATION_CODE;

fs.writeFile(
  path.join('public', `yandex_${verificationCode}.html`),
  getTemplate(verificationCode),
  (err) => {
    if (err) {
      console.error('Error writing verification file:', err);
      return;
    }
    console.log('Verification file written successfully');
  }
);

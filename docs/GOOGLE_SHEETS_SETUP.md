# Google Sheets contact form setup (no service account)

Use Google Apps Script so contact form submissions go to a Google Sheet and optionally trigger email notifications. Works with any Google account.

---

## 1. Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ Blank** and name the spreadsheet **Customer Inquiries**
3. In **Row 1** add these headers:

| A     | B    | C     | D     | E       | F       | G            |
|-------|------|-------|-------|---------|---------|--------------|
| Date  | Name | Email | Phone | Service | Message | Company name |

4. Rename the sheet tab to **Sheet1** if needed.

---

## 2. Add the Apps Script

1. In the sheet: **Extensions** → **Apps Script**
2. Delete any existing code and paste the script below
3. Save (Ctrl+S) and name the project **Unirath Form Handler**

**Script (all 7 columns + email).** Use the version below; if you get **500** or "Submission failed", switch to the **no-CORS** version (the site uses a proxy so CORS is not required).

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Inquiries') || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.message || '',
      data.company || ''
    ]);

    var emailTo = 'support@unirathinfo.com';
    var subject = 'New Customer Inquiry - UNIRATH INFOTECH';
    var body = 'New inquiry received:\n\n' +
               'Name: ' + (data.name || '') + '\n' +
               'Email: ' + (data.email || '') + '\n' +
               'Phone: ' + (data.phone || 'Not provided') + '\n' +
               'Service: ' + (data.service || 'Not specified') + '\n' +
               'Company: ' + (data.company || 'Not provided') + '\n' +
               'Message: ' + (data.message || '');

    try {
      MailApp.sendEmail(emailTo, subject, body);
    } catch (mailError) {
      console.log('Email failed: ' + mailError);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved!' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: test from Apps Script (Run → testPost)
function testPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        service: 'RCM',
        message: 'Test message',
        company: 'Test Co'
      })
    }
  };
  var result = doPost(testData);
  console.log(result.getContent());
}
```

---

## 3. Deploy as web app

1. Click **Deploy** (top right) → **New deployment**
2. Click the **gear** next to “Select type” → choose **Web app**
3. Set:
   - **Description:** Form Handler v1
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
4. Click **Deploy**
5. **Authorize**: choose your Google account → **Advanced** → **Go to Unirath Form Handler (unsafe)** → **Allow**
6. **Copy the Web App URL** (e.g. `https://script.google.com/macros/s/AKfycbx.../exec`)

---

## 4. Configure the site

**Local / Vite:**

Create or edit `.env` in the project root:

```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace with your actual URL from step 3. **Restart the dev server** (e.g. stop and run `npm run dev` again).

The app posts to `/api/contact`; in development Vite proxies that to your Apps Script URL so you avoid "Failed to fetch" / CORS.

**Render:**

1. Open [dashboard.render.com](https://dashboard.render.com) → your service
2. **Environment** tab
3. Add:

| Key                         | Value                                      |
|-----------------------------|--------------------------------------------|
| `VITE_GOOGLE_APPS_SCRIPT_URL` | `https://script.google.com/macros/s/.../exec` |

4. Save and let the service redeploy (rebuild so the env var is baked in).

---

## 5. Test

1. Open the site’s contact page and submit the form.
2. Check the Google Sheet for a new row.
3. Check the inbox for `support@unirathinfo.com` (if you kept the email line).

---

## Optional: change notification email

In the Apps Script, edit:

```javascript
var emailTo = 'support@unirathinfo.com'; // your email
```

Then **Deploy** → **Manage deployments** → pencil icon → **New version** → **Deploy**.  
The Web App URL stays the same; no need to change the site env.

---

## Troubleshooting

| Issue | What to do |
|-------|------------|
| **“Failed to fetch”** | Ensure `VITE_GOOGLE_APPS_SCRIPT_URL` is in `.env` and **restart the dev server** so the proxy forwards `/api/contact` to the script. |
| **404** | The Web App URL in `.env` is wrong or still the placeholder. Get the real URL: **Google Sheet** → **Extensions** → **Apps Script** → **Deploy** → **Manage deployments** → open the deployment → copy **Web app URL**. It must look like `https://script.google.com/macros/s/AbC123.../exec` and end with **/exec**. Put it in `.env` as `VITE_GOOGLE_APPS_SCRIPT_URL=...`, then restart the dev server. |
| **“Submission failed” / 500** | Script error. In Apps Script: (1) Rename the sheet tab to **Inquiries** (or change `getSheetByName('Inquiries')` in the script to your tab name). (2) Remove any `.setHeaders()` or `doOptions` if present. (3) Check **Executions** in Apps Script for the real error. (4) In the browser console you’ll see `[Contact form] status body` to debug. |
| “Authorization required” | Redo step 3 (authorize the script). |
| Data not in sheet | Check **Extensions** → **Apps Script** → **Executions**. Confirm the Web App URL in `.env` / Render. |
| “Script function not found: doPost” | Save the script and ensure the function is named exactly `doPost`. |
| CORS / network errors from the site | Ensure the URL is the **exec** URL, deployment is **Web app** with **Anyone** access, and the script returns CORS headers (doOptions + setHeaders). |

---

## Summary

| Item | Where |
|------|--------|
| Form data | Google Sheet (Customer Inquiries) |
| Email alerts | Sent by Apps Script to `support@unirathinfo.com` |
| Site config | `VITE_GOOGLE_APPS_SCRIPT_URL` in `.env` or Render env |
| No service account | Only a normal Google account and one deploy. |

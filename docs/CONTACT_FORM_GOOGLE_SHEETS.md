# Contact Form → Google Sheets Setup

The contact form sends a POST request to your Google Apps Script Web App with this payload:

- `name` → Sheet column B (Name)
- `email` → Sheet column C (Email)
- `phone` → Sheet column D (Phone)
- `service` → Sheet column E (Service)
- `message` → Sheet column F (Message / Requirements)
- `company` → Sheet column G (Company name)

## Environment variable

Set in Render (or in `.env` locally):

| Key | Value |
|-----|--------|
| `VITE_GOOGLE_APPS_SCRIPT_URL` | Your Web App URL (e.g. `https://script.google.com/macros/s/AKfycbx.../exec`) |

## Apps Script `appendRow` (match 7 columns)

Your sheet has 7 columns: **Date | Name | Email | Phone | Service | Message | Company name**.

In your Apps Script `doPost`, use:

```javascript
sheet.appendRow([
  new Date().toISOString(),
  data.name || '',
  data.email || '',
  data.phone || '',
  data.service || '',
  data.message || '',
  data.company || ''
]);
```

## CORS

If the browser shows a CORS error when submitting, the Apps Script Web App does not allow your site’s origin. Options:

1. Deploy the script with **Execute as: Me** and **Who has access: Anyone** (no “anonymous” restriction).
2. Use a small backend or serverless function that receives the form POST and forwards it to the Apps Script URL (same-origin request from the frontend to your backend).

# notion-cloudflare

A lightweight Cloudflare Worker that maps a Notion public page to a custom domain.

This project allows you to use your own domain (e.g., `shaotian.me`) to serve a Notion page, without relying on third-party paid services.

---

## 📌 Features

- 🌍 Serve Notion pages via your own domain
- ⚡ Fast global access using Cloudflare's edge network
- 💸 Completely free — no server, no hosting fees
- 🛠️ Simple setup: just one `index.js` file

---

## 📄 Configuration

In `index.js`, configure the following:

```javascript
const NOTION_PAGE = "your_notion_page_id"; // Replace with your Notion page ID
const CUSTOM_DOMAIN = "yourdomain.com";    // Replace with your custom domain
const NOTION_DOMAIN = "your-notion-subdomain.notion.site"; // Replace with your Notion domain


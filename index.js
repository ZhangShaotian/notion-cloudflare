const NOTION_PAGE = "1dc4e718285380a6b97ace0025817388"; // Notion 页面 ID
const NOTION_DOMAIN = "curse-text-01f.notion.site";
const CUSTOM_DOMAIN = "shaotian.me";

addEventListener("fetch", event => {
  event.respondWith(fetchAndApply(event.request));
});

async function fetchAndApply(request) {
  const url = new URL(request.url);

  // Allow both custom domain and workers.dev to trigger
  if (url.hostname === CUSTOM_DOMAIN || url.hostname.endsWith(".workers.dev")) {
    // Construct Notion page URL
    return Response.redirect(`https://${NOTION_DOMAIN}/${NOTION_PAGE}`, 302);
  }

  return new Response("Invalid request", { status: 404 });
}

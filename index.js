const NOTION_PAGE = "1d04e718285380cfab06d00efdfe4343"; 
const CUSTOM_DOMAIN = "shaotian.me";                      
const NOTION_DOMAIN = "curse-text-01f.notion.site";      

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (url.hostname === CUSTOM_DOMAIN || url.hostname.endsWith(".workers.dev")) {
    url.hostname = NOTION_DOMAIN;
    url.pathname = "/" + NOTION_PAGE;
    return fetch(url.toString(), {
      headers: {
        "host": NOTION_DOMAIN,
        "user-agent": request.headers.get("user-agent") || "",
      }
    });
  }

  return new Response("Invalid request", { status: 404 });
}

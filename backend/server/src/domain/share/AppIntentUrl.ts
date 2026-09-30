// The app's custom scheme (AndroidManifest.xml): dirtpolice://sites/{id}, dirtpolice://areas/{kind}/{id}.
const APP_SCHEME = "dirtpolice";

// An Android intent:// link to the app page that matches a web app page. Android browsers (Chrome, Samsung Internet,
// Firefox, Custom Tabs) open the installed app at dirtpolice://{path}, and go to browser_fallback_url when it is not installed.
export class AppIntentUrl {
  readonly #packageName: string;

  constructor(packageName: string) {
    this.#packageName = packageName;
  }

  // null for a web URL with no page to open in the app (the home page an unknown site or area falls back to).
  forWebUrl(webUrl: string): string | null {
    const path = new URL(webUrl).pathname.replace(/^\/+|\/+$/g, "");
    if (path === "") return null;
    const fallback = encodeURIComponent(webUrl);
    return `intent://${path}#Intent;scheme=${APP_SCHEME};package=${this.#packageName};S.browser_fallback_url=${fallback};end`;
  }
}

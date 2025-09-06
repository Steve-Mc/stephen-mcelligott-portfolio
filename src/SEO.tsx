import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function SEO({ title, description, url, image }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attrName: string, content: string) => {
      let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        if (selector.includes("[property")) tag.setAttribute("property", attrName);
        else tag.setAttribute("name", attrName);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    if (description) {
      setMeta('meta[name="description"]', "description", description);
      setMeta('meta[property="og:description"]', "og:description", description);
      setMeta('meta[name="twitter:description"]', "twitter:description", description);
    }

    if (url) {
      setMeta('meta[property="og:url"]', "og:url", url);
    }

    if (image) {
      setMeta('meta[property="og:image"]', "og:image", image);
      setMeta('meta[name="twitter:image"]', "twitter:image", image);
    }

    setMeta('meta[property="og:title"]', "og:title", title);
    setMeta('meta[name="twitter:title"]', "twitter:title", title);
    setMeta('meta[name="twitter:card"]', "twitter:card", "summary_large_image");
  }, [title, description, url, image]);

  return null;
}

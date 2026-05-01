import ResourcesClient from "./resourcesClient";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { client } from "@/lib/contentful/client";

export default async function Resources() {
  const response = await client.getEntries({
    content_type: "resources",
    include: 1,
  });

  const resources = response.items.map((item: any) => {
    const imageAsset = item.fields.image;

    return {
      id: item.sys.id,
      title: item.fields.title,
      text: item.fields.text,
      author: item.fields.author,
      reference: item.fields.reference
        ? documentToPlainTextString(item.fields.reference)
        : "",
      imageUrl: imageAsset
        ? `https:${imageAsset.fields.file.url}`
        : "/fallback-image.jpg",
    };
  });

  return <ResourcesClient resources={resources} />;
}
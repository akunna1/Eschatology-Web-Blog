import { client } from "@/lib/contentful/client";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import ResourcesClient from "./resourcesClient";

// Fetching Contentful data safely on the server without exposing API keys
export default async function Resources() {
  const response = await client.getEntries({
    content_type: "resources",
    include: 1, // including linked assets (like images)
  });

  // Transforming Contentful response into data for the UI
  const resources = response.items.map((item: any) => {
    const imageAsset = item.fields.image;

    return {
      // Extracting necessary fields and handling rich text conversion for references
      id: item.sys.id,
      title: item.fields.title,
      text: item.fields.text,
      author: item.fields.author,
      reference: item.fields.reference // Converting rich text to plain text (if it exists)
        ? documentToPlainTextString(item.fields.reference)
        : "",
      imageUrl: imageAsset
        ? `https:${imageAsset.fields.file.url}`
        : "photos/apo.jpg",
    };
  });

   // Passing cleaned data to client component for rendering
  return <ResourcesClient resources={resources} />;
}
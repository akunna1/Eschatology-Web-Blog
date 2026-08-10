import Homepic from "@/components/homepic";
import Verse from "@/components/verse";
import Button from "@/components/button";
import Resources from "@/components/resources"; // server component with client component inside

export const revalidate = 60;

export default function Home () {
  return (
    <div>
      < Homepic />
      < Verse />
      < Button />
      < Resources />
    </div>
)};
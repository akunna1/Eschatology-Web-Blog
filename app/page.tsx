import Homepic from "./components/homepic";
import Verse from "./components/verse";
import Button from "./components/button";
import Resources from "./components/resources";

// client components can be imported into server components, but not the other way around
const Home = () => (
  <div>
    < Homepic />
    < Verse />
    < Button />
    < Resources /> {/* serverside component that fetches data and passes it to a client component */}
  </div>
);

export default Home;
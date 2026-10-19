import HomepageHeader from "./HomepageHeader";
import HomepageBody from "./HomepageBody";
import HomepageFooter from "./HomepageFooter";

export default function Homepage() {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <HomepageHeader />
      <HomepageBody />
      <HomepageFooter />
    </div>
  );
}

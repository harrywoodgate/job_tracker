import HomepageHeader from "./HomepageHeader";
import HomepageBody from "./HomepageBody";
import HomepageFooter from "./HomepageFooter";
import HomepageCallToAction from "./HomepageCallToAction";

export default function Homepage() {
  return (
    <div className="w-screen min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-[1600px] w-full flex flex-col justify-between">
        <div>
          <HomepageHeader />
          <HomepageBody />
          <HomepageFooter />
          <HomepageCallToAction />
        </div>
        <p className="flex justify-center sm:text-xs text-[10px] text-gray py-2">Created by @HarryWoodgate 2026</p>
      </div>
    </div>
  );
}

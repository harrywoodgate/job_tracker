import HomepageHeader from "./HomepageHeader";
import HomepageBody from "./HomepageBody";
import HomepageFooter from "./HomepageFooter";

export default function Homepage() {
  return (
    <div className="w-screen min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-[1600px]">
        <HomepageHeader />
        <HomepageBody />
        <HomepageFooter />
        <p className="flex justify-center sm:text-xs text-[10px] text-gray py-2">Created by @HarryWoodgate 2026</p>
      </div>
    </div>
  );
}

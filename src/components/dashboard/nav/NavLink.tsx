import { Link } from "react-router";

export default function NavLink({
  linkUrl,
  linkText,
  svg,
}: {
  linkUrl: string;
  linkText: string;
  svg: React.JSX.Element
}) {
  return (
    <>
      <Link to={linkUrl} className="flex items-center gap-x-3 hover:bg-secondary-blue rounded-md py-2 px-3 text-sm">{svg}{linkText}</Link>
    </>
  );
}

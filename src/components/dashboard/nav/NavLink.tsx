import { Link } from "react-router";

export default function NavLink({
  linkUrl,
  linkText,
  svg,
  setMobileNavActive,
  selected,
  setSelected,
}: {
  linkUrl: string;
  linkText: string;
  svg: React.JSX.Element;
  setMobileNavActive: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  const linkStyling =
    "flex items-center gap-x-3 hover:bg-secondary-blue rounded-md py-2 px-3 text-sm mb-1";
  return (
    <>
      <Link
        onClick={() => {setMobileNavActive(false);
          setSelected(linkText)
        }}
        to={linkUrl}
        className={
          selected === linkText
            ? `${linkStyling} bg-secondary-blue`
            : linkStyling
        }
      >
        {svg}
        {linkText}
      </Link>
    </>
  );
}

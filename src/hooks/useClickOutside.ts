import { useRef, useEffect } from "react";

export default function useClickOutside(
  setterFunction: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const dropDownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setterFunction(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return { dropDownRef };
}

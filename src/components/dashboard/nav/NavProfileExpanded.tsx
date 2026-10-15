import useNavContext from "../../../hooks/useNavContext";
import { supabase } from "../../../supabaseClient";

export default function NavProfileExpanded({ active }: { active: boolean }) {
  const { user } = useNavContext();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    }
  }

  return (
    <div
      className={
        active
          ? "absolute left-0 bottom-full rounded-md w-full text-sm text-black bg-white flex flex-col p-2"
          : "hidden"
      }
    >
      <h3 className="font-semibold">{user.display_name}</h3>
      <p className="text-xs text-gray italic mb-2">Joined 20/10/2026</p>
      <button className="bg-teal rounded-md text-white font-semibold flex justify-center gap-x-1 py-1 cursor-pointer"
      onClick={signOut}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[18px] fill-white"
        >
          <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" />
        </svg>
        Log out
      </button>
    </div>
  );
}

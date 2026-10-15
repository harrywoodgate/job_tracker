import useNavContext from "../../../hooks/useNavContext";
import { supabase } from "../../../supabaseClient";

export default function NavProfileExpanded({ active }: { active: boolean }) {
  const { user } = useNavContext();
  const createdAt = user.created_at.slice(0, 10);

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
          ? "absolute left-0 bottom-full rounded-md w-full text-sm text-black bg-white flex flex-col p-2 mb-2"
          : "hidden"
      }
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-semibold">{user.display_name}</h3>
          <p className="text-xs text-gray italic">Joined {createdAt}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-[18px] fill-gray"
        >
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
        </svg>
      </div>
      <button
        className="bg-teal rounded-md text-white font-semibold flex justify-center gap-x-1 py-1 cursor-pointer"
        onClick={signOut}
      >
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

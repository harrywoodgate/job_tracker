export default function DataMessage() {
  return (
    <div className="bg-gradient-to-br from-[#F2FFF8] to-emerald-50 w-[40%] rounded-md shadow-sm p-6 flex gap-x-6 h-min">
      <div className="bg-emerald-200 h-min p-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[30px] fill-emerald-700">
          <path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18V21Z" />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold">Your data is secure</h3>
        <p className="font-light w-[80%] text-xs mt-2 text-gray">
          Your information is stored securely and is only used to manage your
          account and job applications
        </p>
      </div>
    </div>
  );
}

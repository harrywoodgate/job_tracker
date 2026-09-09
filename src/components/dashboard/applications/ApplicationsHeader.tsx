export default function ApplicationsHeader({
  setFormActive,
  setStatus,
}: {
  setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-y-1">
        <h1 className="font-semibold text-2xl">Applications</h1>
        <p className="text-gray text-sm">
          Track and manage all your job applications
        </p>
      </div>
      <button
        className="flex cursor-pointer gap-x-1 bg-primary-blue text-white text-sm h-min py-2 px-3 rounded-md"
        onClick={() => {
          setStatus("applied")
          setFormActive(true)}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-white w-[20px]"
        >
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <span>New Application</span>
      </button>
    </div>
  );
}

import UDFirstRowTile from "./UDFirstRowTile";
import { useOutletContext } from "react-router";
import type { outletContext } from "../../../../types/outletContext";
import useSortApplications from "../../../../hooks/useSortApplications";
import useGetApplicationsData from "../../../../hooks/useGetApplicationsData";

export default function UDFirstRow() {
  const { applicationHistory } = useOutletContext<outletContext>();
  const { sortedApplications } = useSortApplications(applicationHistory);
  const { currentWeekApplications } =
    useGetApplicationsData(applicationHistory);

  return (
    <div className="grid grid-cols-4 gap-x-4">
      <UDFirstRowTile
        heading="Applications"
        colourScheme={"blue"}
        count={applicationHistory.length}
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[30px] fill-blue-500"
          >
            <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
          </svg>
        }
        comment={
          <p className="text-xs text-gray">
            <span
              className={
                currentWeekApplications.total > 0
                  ? "text-green-700"
                  : "text-red-500"
              }
            >
              {currentWeekApplications.total > 0 ? "\u2191 " : ""}
              {currentWeekApplications.total}
            </span>{" "}
            this week
          </p>
        }
      />
      <UDFirstRowTile
        heading="Responses"
        colourScheme="blue"
        count={sortedApplications.response.length}
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[30px] fill-blue-500"
          >
            <path d="M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H6L2,22V4C2,2.89 2.9,2 4,2H20M4,4V17.17L5.17,16H20V4H4M6,7H18V9H6V7M6,11H15V13H6V11Z" />
          </svg>
        }
        comment={
          <p className="text-xs text-gray">
            <span>
              {(
                (sortedApplications.response.length /
                  applicationHistory.length) *
                100
              ).toFixed(2)}
              %{" "}
            </span>
            response rate
          </p>
        }
      />
      <UDFirstRowTile
        heading="Interviews"
        colourScheme="orange"
        count={sortedApplications.interview.length}
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[30px] fill-orange-500"
          >
            <path d="M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z" />
          </svg>
        }
        comment={
          <p className="text-xs text-gray">
            <span
              className={
                currentWeekApplications.interview > 0
                  ? "text-green-700"
                  : "text-red-500"
              }
            >
              {currentWeekApplications.interview > 0 ? "\u2191 " : "\u2193 "}
              {currentWeekApplications.interview}
            </span>{" "}
            this week
          </p>
        }
      />
      <UDFirstRowTile
        heading="Offers"
        colourScheme="green"
        count={sortedApplications.offer.length}
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[30px] fill-green-700"
          >
            <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
          </svg>
        }
        comment={
          <p className="text-xs text-gray">
            {sortedApplications.offer.length > 0
              ? "Keep it up!"
              : "Keep trying!"}
          </p>
        }
      />
    </div>
  );
}

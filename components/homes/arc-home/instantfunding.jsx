"use client";

const Right = () => {
  return (
    <svg
      className="w-4 h-4 text-green-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917 5.724 10.5 15 1.5"
      />
    </svg>
  );
};



export default function InstantFunding() {
  return (
    <div className="common-table">
      <div className="rounded-2lg border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-jacarta-100 border-t">
            <tbody>
              <tr
                className="border-t border-jacarta-100 py-2 px-4 transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-900"
              >
                {/* Table Heading */}
                <th
                  scope="row"
                  className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Account Size
                </th>
                <td className="px-6 py-4 text-center text-base">
                  <div className="flex flex-col items-center">
                    <span>5,000</span>
                    <button className="mt-2 text-sm rounded-lg bg-accent p-2 px-3 text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                      <span className="font-semibold text-md">Get Plan</span>
                      <br />
                      $149
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  15% Profit Share From Challenge Phase
                </th>
                <td className="px-6 py-4 text-center text-base">
                  <div className="flex flex-col items-center">
                    <span>$117</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Profit Target
                </th>
                <td className="px-6 py-4 text-center text-base">
                  <div className="flex flex-col items-center">
                    <span>$117</span>
                  </div>
                </td>
                </tr>
                <tr>
                <th
                  scope="row"
                  className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Maximum Daily Loss
                </th>
                <td className="px-6 py-4 text-center text-base">
                  <div className="flex flex-col items-center">
                    <Right/>
                  </div>
                </td>
                </tr>
                <tr>
                <th
                  scope="row"
                  className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Minimum Trading Days
                </th>
                <td className="px-6 py-4 text-center text-base">
                  <div className="flex flex-col items-center">
                    <span>$117</span>
                  </div>
                </td>
                </tr>
                <tr>
                <th
                  scope="row"
                  className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  News Trading
                </th>
                <td className="px-6 py-4 text-center text-base">
                  <div className="flex flex-col items-center">
                    <span>$117</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

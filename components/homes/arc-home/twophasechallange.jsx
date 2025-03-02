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

const tableData = [
  {
    heading: "Account Size",
    values: [
      { size: "8,000", price: " $39" },
      { size: "15,000", price: " $75" },
      { size: "25,000", price: "$139" },
      { size: "50,000", price: "$269" },
      { size: "100,000", price: "$529" },
    ],
    showButton: true,
  },
  {
    heading: "15% Profit Share From Challenge Phase",
    values: ["$117", "$292.50", "$487.50", "$487.50", "$487.50"],
  },
  {
    heading: "Profit Target",
    values: ["P1: 8%, P2: 5%", "P1: 8%, P2: 5%", "P1: 8%, P2: 5%", "P1: 8%, P2: 5%", "P1: 8%, P2: 5%"],
  },
  {
    heading: "Maximum Daily Loss",
    values: ["5% ($300)", "5% ($300)", "5% ($300)", "5% ($300)", "5% ($300)"],
  },
  {
    heading: "Maximum Overall Loss",
    values: ["5% ($300)", "5% ($300)", "5% ($300)", "5% ($300)", "5% ($300)"],
  },
  {
    heading: "Minimum Trading Days",
    values: ["5 Days", "5 Days", "5 Days", "5 Days", "5 Days"],
  },
  {
    heading: "News Trading",
    values: [<Right />, <Right />, <Right />, <Right />, <Right />],
  },
];

export default function TwoPhase() {
  return (
    <div className="common-table">
      <div className="rounded-2lg border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-jacarta-100 border-t">
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-t border-jacarta-100 py-2 px-4 transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-900"
                >
                  {/* Table Heading */}
                  <th
                    scope="row"
                    className="px-6 py-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {row.heading}
                  </th>

                  {/* Table Values */}
                  {row?.values.map((value, colIndex) => (
                    <td  key={`${rowIndex}-${colIndex}`}  className="px-6 py-4 text-center text-base">
                      <div className="flex flex-col items-center">
                        {/* If it's the "Account Size" row, show size and price together */}
                        {row.showButton ? (
                          <>
                            <span>{value.size}</span>
                            <button className="mt-2 text-sm rounded-lg bg-accent p-2 px-3 text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                              <span className="font-semibold text-md">Get Plan</span>
                              <br />
                              {value.price}
                            </button>
                          </>
                        ) : (
                          value
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

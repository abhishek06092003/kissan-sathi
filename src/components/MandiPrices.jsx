import {
  useEffect,
  useState,
} from "react";

import {
  FaChartLine,
} from "react-icons/fa";

import {
  getMandiPrices,
} from "../services/mandiService";

const MandiPrices = () => {

  const [mandiData, setMandiData] =
    useState([]);

  const [search, setSearch] =
    useState("");

  // LOAD DATA

  useEffect(() => {

    loadPrices();

  }, []);

  const loadPrices =
    async () => {

      const data =
        await getMandiPrices();

      setMandiData(data);
  };

  // FILTER DATA

  const filteredData =

    mandiData.filter((item) =>

      item.commodity
        ?.toLowerCase()
        .includes(

          search.toLowerCase()
        )
    );

  return (

    <div className="bg-[#112233]/70 backdrop-blur-xl border border-[#1d3d4f] rounded-[35px] p-10 shadow-2xl mt-10 hover:scale-[1.01] transition duration-300 relative overflow-hidden min-h-[500px]">

      {/* GLOW */}

      <div className="absolute top-0 right-0 w-52 h-52 bg-[#00ff99]/10 blur-3xl rounded-full"></div>

      {/* HEADER */}

      <div className="flex items-center gap-5 relative z-10">

        <div className="w-20 h-20 rounded-full bg-[#0b1622] flex items-center justify-center">

          <FaChartLine className="text-[#00ff99] text-4xl" />

        </div>

        <div>

          <h2 className="text-4xl font-bold">

            Live Mandi Prices

          </h2>

          <p className="text-gray-400 mt-3 text-lg">

            Real-time crop market prices

          </p>

        </div>

      </div>

      {/* SEARCH */}

      <div className="mt-10 relative z-10">

        <input

          type="text"

          placeholder="Search crop price..."

          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

          className="
          w-full
          bg-white
          border border-[#d1d5db]
          focus:border-[#00ff99]
          focus:ring-2 focus:ring-[#00ff99]/30
          p-6
          rounded-3xl
          text-black
          placeholder-gray-500
          outline-none
          text-lg
          shadow-inner shadow-slate-200/50
          transition duration-300
          "

        />

      </div>

      {/* TABLE */}

      <div className="mt-10 overflow-x-auto relative z-10">

        <table className="w-full border-separate border-spacing-y-5">

          <thead>

            <tr>

              <th className="text-left text-gray-400 text-lg pb-4">

                Crop

              </th>

              <th className="text-left text-gray-400 text-lg pb-4">

                Market

              </th>

              <th className="text-left text-gray-400 text-lg pb-4">

                Price

              </th>

              <th className="text-left text-gray-400 text-lg pb-4">

                Status

              </th>

            </tr>

          </thead>

          <tbody>

            {(search

              ? filteredData

              : mandiData.slice(0, 3)

            ).map((item, index) => (

              <tr

                key={index}

                className="bg-[#0b1622]"

              >

                {/* CROP */}

                <td className="px-8 py-6 rounded-l-3xl">

                  <h3 className="text-2xl font-bold">

                    {item.commodity}

                  </h3>

                </td>

                {/* MARKET */}

                <td className="px-8 py-6">

                  <p className="text-lg text-gray-300">

                    {item.market}

                  </p>

                </td>

                {/* PRICE */}

                <td className="px-8 py-6">

                  <p className="text-[#00ff99] text-2xl font-bold">

                    ₹{item.modal_price}/q

                  </p>

                </td>

                {/* STATUS */}

                <td className="px-8 py-6 rounded-r-3xl">

                  <span className="bg-green-500/20 text-green-400 px-5 py-3 rounded-2xl text-lg font-bold">

                    Live

                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default MandiPrices;
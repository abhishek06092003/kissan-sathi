import {
  FaCloudSun,
} from "react-icons/fa";

const WeatherPanel = () => {

  return (

    <div className="bg-[#112233]/70 backdrop-blur-xl border border-[#1d3d4f] rounded-[35px] p-10 shadow-2xl">

      {/* TOP */}

      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* LEFT */}

        <div className="flex items-center gap-8">

          {/* ICON */}

          <div className="w-32 h-32 rounded-full bg-[#1a2d3d] flex items-center justify-center shadow-xl">

            <FaCloudSun className="text-[#00ff99] text-7xl" />

          </div>

          {/* WEATHER */}

          <div>

            <h2 className="text-5xl font-bold">

              32°C

            </h2>

            <p className="text-[#00ff99] text-2xl mt-3">

              Sunny Climate

            </p>

            <p className="text-gray-400 mt-3 text-lg">

              Saharanpur, Uttar Pradesh

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-2 gap-6">

          {/* HUMIDITY */}

          <div className="bg-[#0b1622] px-8 py-6 rounded-3xl border border-[#1d3d4f] min-w-[170px]">

            <p className="text-gray-400 text-lg">

              Humidity

            </p>

            <h3 className="text-4xl font-bold mt-3 text-[#00ff99]">

              68%

            </h3>

          </div>

          {/* WIND */}

          <div className="bg-[#0b1622] px-8 py-6 rounded-3xl border border-[#1d3d4f] min-w-[170px]">

            <p className="text-gray-400 text-lg">

              Wind

            </p>

            <h3 className="text-4xl font-bold mt-3 text-[#00ff99]">

              12 km/h

            </h3>

          </div>

          {/* FEELS */}

          <div className="bg-[#0b1622] px-8 py-6 rounded-3xl border border-[#1d3d4f] min-w-[170px]">

            <p className="text-gray-400 text-lg">

              Feels Like

            </p>

            <h3 className="text-4xl font-bold mt-3 text-[#00ff99]">

              34°C

            </h3>

          </div>

          {/* CLIMATE */}

          <div className="bg-[#0b1622] px-8 py-6 rounded-3xl border border-[#1d3d4f] min-w-[170px]">

            <p className="text-gray-400 text-lg">

              Climate

            </p>

            <h3 className="text-4xl font-bold mt-3 text-[#00ff99]">

              Sunny

            </h3>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WeatherPanel;
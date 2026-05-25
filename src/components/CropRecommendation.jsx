import {
  useState,
} from "react";

import {
  FaSeedling,
} from "react-icons/fa";

const CropRecommendation = () => {

  const [soil, setSoil] =
    useState("");

  const [season, setSeason] =
    useState("");

  const [weather, setWeather] =
    useState("");

  const [result, setResult] =
    useState("");

  // AI LOGIC

  const recommendCrop = () => {

    let crop = "";

    if (

      soil === "Loamy" &&
      season === "Winter"

    ) {

      crop = "Wheat 🌾";
    }

    else if (

      soil === "Clay" &&
      season === "Rainy"

    ) {

      crop = "Rice 🌱";
    }

    else if (
      weather === "Hot"
    ) {

      crop = "Cotton ☀";
    }

    else {

      crop = "Maize 🌽";
    }

    setResult(crop);
  };

  return (

    <div className="bg-[#112233]/70 backdrop-blur-xl border border-[#1d3d4f] rounded-[35px] p-10 shadow-2xl mt-10">

      {/* HEADER */}

      <div className="flex items-center gap-5">

        <div className="w-20 h-20 rounded-full bg-[#0b1622] flex items-center justify-center">

          <FaSeedling className="text-[#00ff99] text-4xl" />

        </div>

        <div>

          <h2 className="text-4xl font-bold">

            Crop Recommendation

          </h2>

          <p className="text-gray-400 mt-3 text-lg">

            AI-powered smart farming suggestions

          </p>

        </div>

      </div>

      {/* INPUTS */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

        {/* SOIL */}

        <select

          value={soil}

          onChange={(e) =>
            setSoil(
              e.target.value
            )
          }

          className="bg-white border border-[#1d3d4f] p-6 rounded-3xl text-black outline-none text-lg"

        >

          <option value="">

            Select Soil Type

          </option>

          <option value="Loamy">

            Loamy

          </option>

          <option value="Clay">

            Clay

          </option>

          <option value="Sandy">

            Sandy

          </option>

        </select>

        {/* SEASON */}

        <select

          value={season}

          onChange={(e) =>
            setSeason(
              e.target.value
            )
          }

          className="bg-white border border-[#1d3d4f] p-6 rounded-3xl text-black outline-none text-lg"

        >

          <option value="">

            Select Season

          </option>

          <option value="Winter">

            Winter

          </option>

          <option value="Summer">

            Summer

          </option>

          <option value="Rainy">

            Rainy

          </option>

        </select>

        {/* WEATHER */}

        <select

          value={weather}

          onChange={(e) =>
            setWeather(
              e.target.value
            )
          }

          className="bg-white border border-[#1d3d4f] p-6 rounded-3xl text-black outline-none text-lg"

        >

          <option value="">

            Select Weather

          </option>

          <option value="Hot">

            Hot

          </option>

          <option value="Cold">

            Cold

          </option>

          <option value="Humid">

            Humid

          </option>

        </select>

      </div>

      {/* BUTTON */}

      <button

        onClick={recommendCrop}

        className="mt-10 bg-[#00ff99] hover:bg-[#00cc77] transition text-black font-bold px-10 py-5 rounded-3xl text-lg shadow-xl"

      >

        Recommend Crop

      </button>

      {/* RESULT */}

      {result && (

        <div className="mt-10 bg-[#0b1622] border border-[#1d3d4f] rounded-[35px] p-8">

          <h3 className="text-3xl font-bold text-[#00ff99]">

            Recommended Crop

          </h3>

          <p className="text-5xl font-bold mt-8">

            {result}

          </p>

        </div>
      )}

    </div>
  );
};

export default CropRecommendation;
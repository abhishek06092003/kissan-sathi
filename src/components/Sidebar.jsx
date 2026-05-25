import {

  FaHome,
  FaCloudSun,
  FaRobot,
  FaLeaf,
  FaRupeeSign,
  FaSeedling,
  FaTasks,
  FaSignOutAlt,

} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

const Sidebar = () => {

  const navigate =
    useNavigate();

  return (

    <div className="w-[300px] min-h-screen bg-[#081520] border-r border-[#163040] p-8 flex flex-col justify-between">

      {/* TOP */}

      <div>

        {/* LOGO */}

        <div>

          <h1 className="text-5xl font-bold text-[#00ff99]">

            किसान साथी

          </h1>

          <p className="text-gray-400 mt-4 text-lg">

            Smart Farming Dashboard

          </p>

        </div>

        {/* MENU */}

        <div className="mt-16 space-y-5">

          {/* DASHBOARD */}

          <div className="flex items-center gap-5 bg-[#00ff99] text-black px-6 py-5 rounded-2xl font-bold text-lg shadow-lg cursor-pointer">

            <FaHome className="text-2xl" />

            <span>Dashboard</span>

          </div>

          {/* WEATHER */}

          <div className="flex items-center gap-5 bg-[#112233] hover:bg-[#163040] transition px-6 py-5 rounded-2xl text-lg cursor-pointer">

            <FaCloudSun className="text-[#00ff99] text-2xl" />

            <span>Weather</span>

          </div>

          {/* AI */}

          <div className="flex items-center gap-5 bg-[#112233] hover:bg-[#163040] transition px-6 py-5 rounded-2xl text-lg cursor-pointer">

            <FaRobot className="text-[#00ff99] text-2xl" />

            <span>AI Assistant</span>

          </div>

          {/* DISEASE */}

          <div className="flex items-center gap-5 bg-[#112233] hover:bg-[#163040] transition px-6 py-5 rounded-2xl text-lg cursor-pointer">

            <FaLeaf className="text-[#00ff99] text-2xl" />

            <span>Disease Detection</span>

          </div>

          {/* MANDI */}

          <div className="flex items-center gap-5 bg-[#112233] hover:bg-[#163040] transition px-6 py-5 rounded-2xl text-lg cursor-pointer">

            <FaRupeeSign className="text-[#00ff99] text-2xl" />

            <span>Mandi Prices</span>

          </div>

          {/* CROP */}

          <div className="flex items-center gap-5 bg-[#112233] hover:bg-[#163040] transition px-6 py-5 rounded-2xl text-lg cursor-pointer">

            <FaSeedling className="text-[#00ff99] text-2xl" />

            <span>Crop Recommendation</span>

          </div>

          {/* TASKS */}

          <div className="flex items-center gap-5 bg-[#112233] hover:bg-[#163040] transition px-6 py-5 rounded-2xl text-lg cursor-pointer">

            <FaTasks className="text-[#00ff99] text-2xl" />

            <span>Farm Tasks</span>

          </div>

        </div>

      </div>

      {/* LOGOUT */}

      <button

        onClick={() =>
          navigate("/login")
        }

        className="flex items-center gap-5 bg-red-500 hover:bg-red-600 transition px-6 py-5 rounded-2xl text-lg font-bold"

      >

        <FaSignOutAlt className="text-2xl" />

        <span>Logout</span>

      </button>

    </div>
  );
};

export default Sidebar;
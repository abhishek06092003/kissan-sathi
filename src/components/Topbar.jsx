import {
  FaMapMarkerAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

const Topbar = () => {

  const navigate =
    useNavigate();

  return (

    <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-8">

      {/* LEFT */}

      <div>

        <h1 className="text-5xl font-bold">

          नमस्ते किसान 👋

        </h1>

        <p className="text-gray-400 mt-5 text-xl">

          Welcome back to your smart farming dashboard

        </p>

      </div>

      {/* RIGHT */}

      <div className="flex justify-between items-center w-full xl:w-auto gap-10">

        {/* LOCATION */}

        <div className="bg-[#112233]/70 backdrop-blur-xl border border-[#1d3d4f] px-8 py-5 rounded-3xl flex items-center gap-4 shadow-2xl min-w-[350px]">

          <FaMapMarkerAlt
            className="text-[#00ff99] text-2xl"
          />

          <span className="text-lg">

            Saharanpur, Uttar Pradesh

          </span>

        </div>

        {/* PROFILE */}

        <div className="bg-[#112233]/70 backdrop-blur-xl border border-[#1d3d4f] px-8 py-5 rounded-3xl flex items-center gap-5 shadow-2xl ml-auto">

          <div>

            <p className="text-gray-400 text-sm">

              Logged in as

            </p>

            <h3 className="text-[#00ff99] text-xl font-bold mt-1">

              Farmer

            </h3>

          </div>

          {/* LOGOUT */}

          <button

            onClick={() =>
              navigate("/login")
            }

            className="w-12 h-12 rounded-2xl bg-red-500 hover:bg-red-600 flex items-center justify-center transition"

          >

            <FaSignOutAlt
              className="text-xl"
            />

          </button>

        </div>

      </div>

    </div>
  );
};

export default Topbar;
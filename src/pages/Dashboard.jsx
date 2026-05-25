import DashboardLayout
from "../layouts/DashboardLayout";

import WeatherCard
from "../components/WeatherCard";

import SoilCard
from "../components/SoilCard";

import CropCard
from "../components/CropCard";

const Dashboard = () => {

  return (

    <DashboardLayout>

      <div>

        <h1 className="text-5xl font-bold text-primary">

          🌾 किसान साथी

        </h1>

        <p className="text-gray-400 mt-4 text-xl">

          Smart AI Farming Dashboard

        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          <WeatherCard />

          <SoilCard />

          <CropCard />

        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;
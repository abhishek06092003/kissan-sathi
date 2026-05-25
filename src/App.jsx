

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import MainLayout from "./layouts/MainLayout";

import Topbar from "./components/Topbar";
import WeatherPanel from "./components/WeatherPanel";
import AIAssistant from "./components/AIAssistant";
import DiseaseDetection from "./components/DiseaseDetection";
import MandiPrices from "./components/MandiPrices";
import CropRecommendation from "./components/CropRecommendation";
import FarmTasks from "./components/FarmTasks";

import ProtectedRoute from "./components/ProtectedRoute";

function Dashboard() {

  return (

    <MainLayout>

  {/* TOPBAR */}

  <Topbar />

  {/* GRID */}

  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 mt-10">

    {/* WEATHER */}

    <div className="2xl:col-span-2">

      <WeatherPanel />

    </div>

    {/* AI */}

    <AIAssistant />

    {/* DISEASE */}

    <DiseaseDetection />

    {/* MANDI */}

    <MandiPrices />

    {/* CROP */}

    <CropRecommendation />

    {/* TASKS */}

    <div className="2xl:col-span-2">

      <FarmTasks />

    </div>

  </div>

</MainLayout>
  );
}

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route

          path="/"

          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }

        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
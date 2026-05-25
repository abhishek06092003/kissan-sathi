import Sidebar
from "../components/Sidebar";

import Navbar
from "../components/Navbar";

const DashboardLayout = ({
  children,
}) => {

  return (

    <div className="flex bg-dark min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <Navbar />

        <div className="mt-8">

          {children}

        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;
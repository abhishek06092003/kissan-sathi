import Sidebar
from "../components/Sidebar";

const MainLayout = ({
  children,
}) => {

  return (

    <div className="min-h-screen bg-[#071018] text-white">

      <div className="flex">

        {/* SIDEBAR */}

        <div className="hidden lg:block">

          <Sidebar />

        </div>

        {/* MAIN */}

        <main className="flex-1 p-4 md:p-8">

          {children}

        </main>

      </div>

    </div>
  );
};

export default MainLayout;
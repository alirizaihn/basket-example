import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row items-start  justify-between min-h-screen p-4">
        <Outlet />
      </div>
    </>
  );
};

export default HeaderLayout;

import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex h-[53.7rem]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

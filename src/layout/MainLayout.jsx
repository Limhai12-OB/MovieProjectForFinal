import { Outlet } from "react-router";
import SideBar from "../components/sidebar";

import Header from "../components/header";

export function MainLayout() {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1 ">
          <SideBar />
        </div>
        <div className="md:col-span-5  lg:col-span-4 col-span-5">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

import { Outlet } from "react-router";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import Footer from "../components/footer";

export function MainLayout() {
  return (
    <>
      <main className="  bg-[url('https://pub-f354ec240bea480db7320bd0e29d972e.r2.dev/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png')]">
        <div class="grid grid-cols-5 backdrop-blur-sm bg-black/50">
          <div className="col-span-1 ">
            <SideBar />
          </div>
          <div className="md:col-span-5  lg:col-span-4 col-span-5">
            <Header />
            <Outlet />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

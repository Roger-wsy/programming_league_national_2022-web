import Image from "next/image";
import MobileMenu from "../components/MobileMenu";
import Sidebar from "../components/Sidebar";

const Layout = ({ children, bg }) => {
  return (
    <div className="">
      <MobileMenu />
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div
        className={`min-h-[100vh] ${bg} lg:side_layout grid overflow-hidden`}
      >
        <div className="w-[90px] h-full hidden lg:block" />
        <div className="w-full">
          <div className="layout">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

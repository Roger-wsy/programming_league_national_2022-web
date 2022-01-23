import Image from "next/image";
import Sidebar from "../components/Sidebar";

const Layout = ({ children, bg }) => {
  return (
    <div className="">
      <Sidebar />
      <div className={`h-[100vh] ${bg} side_layout`}>
        <div className="w-[90px] h-full" />
        <div className="w-full">
          <div className="layout">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

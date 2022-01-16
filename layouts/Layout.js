import Image from "next/image";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="side_layout w-full">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;

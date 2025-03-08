import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../Context/sidebarContext";
import "./Sidebar.css";

import Logo from "/src/assets/Icons/logo.png";

const Sidebar = () => {
  const { mobileSidebarVisible, setMobileSidebarVisible } =
    useContext(SidebarContext);

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className="fixed sidebar w-[230px] h-screen flex-col border hidden md:flex "
        style={{ zIndex: 9999 }}
      >
        <div className="flex flex-row items-center w-[230px] pl-9 my-7 mb-7">
          <img src={Logo} alt="logo" className="h-6" />
          <span
            style={{ fontFamily: "Inter" }}
            className="text-[20px] ml-3 font-[500] text-headingColor"
          >
            Trezr.
          </span>
        </div>
        <SidebarLinks />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`z-index-100 fixed inset-0 bg-white w-[230px] h-screen flex-col border md:hidden transition-transform duration-500 ${
          mobileSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 9999 }}
      >
        <button
          className="absolute top-4 right-4 text-xl font-bold"
          onClick={() => setMobileSidebarVisible(false)}
        >
          &times;
        </button>
        <div className="flex flex-row items-center w-[230px] justify-center my-7 mb-7">
          <img src={Logo} alt="logo" className="h-6" />
          <span
            style={{ fontFamily: "Inter" }}
            className="text-[20px] ml-3 font-[500] text-headingColor"
          >
            Dashboard.
          </span>
        </div>
        <SidebarLinks />
      </div>
    </>
  );
};

const SidebarLinks = () => (
  <div className="flex flex-col" style={{ zIndex: 9999 }}>
    <NavLink
      to="/"
      style={{ fontFamily: "Inter" }}
      className={({ isActive }) =>
        isActive
          ? "w-[210px] px-[35px] text-md h-[30px] pt-2 active my-3"
          : "w-[210px] px-[35px] text-md h-[30px] pt-2 non-active my-3 "
      }
    >
      <span className="text-left w-[200px]">
        <i className="fa-solid fa-house text-md mr-2"></i>Dashboard
      </span>
    </NavLink>
    <NavLink
      to="/transactions"
      style={{ fontFamily: "Inter" }}
      className={({ isActive }) =>
        isActive
          ? "w-[220px] px-[35px] text-md h-[30px] pt-2 active my-3"
          : "w-[220px] px-[35px] text-md h-[30px] pt-2 non-active my-3 "
      }
    >
      <span className="text-left w-[200px]">
        <i className="fa-light fa-money-bill-transfer text-md mr-2"></i>
        Transactions
      </span>
    </NavLink>
    <NavLink
      to="/accounts"
      style={{ fontFamily: "Inter" }}
      className={({ isActive }) =>
        isActive
          ? "w-[210px] px-[35px] text-md h-[30px] pt-2 active my-3"
          : "w-[210px] px-[35px] text-md h-[30px] pt-2 non-active my-3 "
      }
    >
      <span className="text-left w-[200px]">
        <i className="fa-solid fa-user text-md mr-2"></i>Accounts
      </span>
    </NavLink>
    <NavLink
      to="/investments"
      style={{ fontFamily: "Inter" }}
      className={({ isActive }) =>
        isActive
          ? "w-[210px] px-[35px] text-md h-[30px] pt-2 active my-3"
          : "w-[210px] px-[35px] text-md h-[30px] pt-2 non-active my-3 "
      }
    >
      <span className="text-left w-[200px]">
        <i className="fa-solid fa-chart-mixed-up-circle-dollar text-md mr-2"></i>
        Investments
      </span>
    </NavLink>
    <NavLink
      to="/credit-cards"
      style={{ fontFamily: "Inter" }}
      className={({ isActive }) =>
        isActive
          ? "w-[220px] px-[35px] text-md h-[30px] pt-2 active my-3"
          : "w-[220px] px-[35px] text-md h-[30px] pt-2 non-active my-3 "
      }
    >
      <span className="text-left w-[200px]">
        <i className="fa-solid fa-credit-card-front text-md mr-2"></i>Credit
        Cards
      </span>
    </NavLink>
    <NavLink
      to="/loans"
      style={{ fontFamily: "Inter" }}
      className={({ isActive }) =>
        isActive
          ? "w-[210px] px-[35px] text-md h-[30px] pt-2 active my-3"
          : "w-[210px] px-[35px] text-md h-[30px] pt-2 non-active my-3 "
      }
    >
      <span className="text-left w-[200px]">
        <i className="fa-solid fa-hand-holding-dollar text-md mr-2"></i>Loans
      </span>
    </NavLink>
    <NavLink
      to="/services"
      style={{ fontFamily: "Inter" }}
      className={({ isActive }) =>
        isActive
          ? "w-[210px] px-[35px] text-md h-[30px] pt-2 active my-3"
          : "w-[210px] px-[35px] text-md h-[30px] pt-2 non-active my-3 "
      }
    >
      <span className="text-left w-[200px]">
        <i className="fa-solid fa-screwdriver-wrench text-md mr-2"></i>Services
      </span>
    </NavLink>
    <NavLink
      to="/setting"
      style={{ fontFamily: "Inter" }}
      className={({ isActive }) =>
        isActive
          ? "w-[210px] px-[35px] text-md h-[30px] pt-2 active my-3"
          : "w-[210px] px-[35px] text-md h-[30px] pt-2 non-active my-3 "
      }
    >
      <span className="text-left w-[200px]">
        <i className="fa-solid fa-gear text-md mr-2"></i>Settings
      </span>
    </NavLink>
  </div>
);

export default Sidebar;

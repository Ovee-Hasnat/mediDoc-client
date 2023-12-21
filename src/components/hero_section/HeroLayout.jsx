import Sidebar from "../sidebar/Sidebar";
import ThemeChangeButton from "../utility/ThemeChangeButton";
import { IoChevronDown } from "react-icons/io5";

const HeroLayout = () => {
  function openSidebar() {
    document.getElementById("sidebar").style.width = "100%";
    document.getElementById("black_backdrop").style.width = "100%";
  }

  function closeSidebar() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("black_backdrop").style.width = "0px";
  }

  return (
    <div className="gradient_primary_lg h-[500px] sm:h-auto md:px-8 lg:max-w-[740px]">
      {/* Backdrop */}
      <div
        id="black_backdrop"
        className="fixed h-screen bg-black/20 z-10 w-0 easy backdrop-blur-[2px] md:hidden"
      />

      {/* Sidebar */}
      <div
        id="sidebar"
        className="fixed top-0 left-0 h-screen w-0 overflow-hidden easy z-50"
      >
        <Sidebar close={closeSidebar} />
      </div>

      {/* Header */}
      <div className="pt-12 md:py-6 px-5 md:px-0 flex items-center justify-between md:bg-transparent lg:hidden">
        <div className="flexCenter gap-3">
          <div
            className="bg-white block w-fit p-1.5 rounded-lg shadow-md md:hidden"
            onClick={openSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M3.5 21H24.5"
                stroke="#FF7594"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 14H24.5"
                stroke="#FF7594"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 7H24.5"
                stroke="#FF7594"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-base font-semibold text-white md:text-textPrimary-300 dark:text-white">
            Home
          </h2>
        </div>

        <div className="flexCenter gap-2">
          <ThemeChangeButton />
          <img src="/img/Avatar.svg" className="h-9" />
          <IoChevronDown className="hidden md:block" />
        </div>
      </div>

      {/* Hero */}
      <div className="sm:flex items-center justify-center md:justify-between gradient_primary md:rounded-lg">
        {/* Hero Lottie */}
        <div className="flexCenter">
          <img src="/img/hero.png" />
        </div>

        {/* Hero Line */}
        <div className="p-8 text-white text-sm md:text-base">
          <p className="text-xl md:text-2xl font-semibold mb-3">
            Hello, Mary Jane!
          </p>
          <p className="leading-5 mb-2">
            Stay Up-to-Date with your appointments.
          </p>
          <p className="leading-5">You Have No pending Reports</p>
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;

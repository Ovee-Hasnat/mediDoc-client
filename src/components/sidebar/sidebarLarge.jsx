import { FiMenu } from "react-icons/fi";
import { FiHome, FiUser } from "react-icons/fi";
import { LuCalendarDays, LuHistory, LuSettings } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";

const SidebarLarge = () => {
  function openSidebar() {
    document.getElementById("sidebar").style.width = "390px";
  }

  return (
    <div className="relative w-20 hidden md:block py-8 bg-white dark:bg-textPrimary-800 h-screen">
      <div
        className="bg-white dark:bg-hotPink block w-fit p-1.5 rounded-lg shadow-md mx-auto cursor-pointer"
        onClick={openSidebar}
      >
        <FiMenu size={28} className="text-hotPink dark:text-white" />
      </div>

      <div className="mt-28 text-textPrimary-800 dark:text-textWhite space-y-5 w-fit mx-auto">
        <FiHome size={32} className="text-hotPink" />
        <FiUser size={32} />
        <LuCalendarDays size={32} />
        <LuHistory size={32} />
        <LuSettings size={32} />
      </div>

      <div className="w-12 h-12 gradient_button rounded-full left-0 right-0 mx-auto flexCenter absolute bottom-16 cursor-pointer">
        <div className="flexCenter p-1 rounded-full bg-white/20">
          <IoAdd size={22} className="block text-white" />
        </div>
      </div>
    </div>
  );
};

export default SidebarLarge;

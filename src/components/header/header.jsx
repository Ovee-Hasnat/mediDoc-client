import ThemeChangeButton from "../utility/ThemeChangeButton";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  return (
    <div className="p-7 flex items-center justify-between md:bg-transparent">
      <div className="flexCenter gap-3">
        <h2 className="text-base font-semibold text-white md:text-textPrimary-300 dark:text-white">
          Home
        </h2>
      </div>

      <div className="flexCenter gap-2">
        <ThemeChangeButton />
        <img src="/img/Avatar.svg" className="h-9" />
        <IoChevronDown />
      </div>
    </div>
  );
};

export default Header;

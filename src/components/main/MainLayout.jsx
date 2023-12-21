import CovidLayout from "../covid/CovidLayout";
import Header from "../header/header";
import HeroLayout from "../hero_section/HeroLayout";
import SidebarLarge from "../sidebar/sidebarLarge";
import TodoList from "../todoList/TodoList";
import UpcomingLayout from "../upcoming/UpcomingLayout";
import VitalsLayout from "../vitals/VitalsLayout";

const MainLayout = () => {
  return (
    <div className="bg-[#FBFBFF] dark:bg-bg_dark flex">
      <SidebarLarge />
      <div className="flex-1 h-screen overflow-auto">
        <div className="hidden lg:block">
          <Header />
        </div>

        <div className="lg:flex items-start justify-center">
          <div>
            <HeroLayout />
            <VitalsLayout />
            <div className="hidden lg:block">
              <TodoList />
            </div>
          </div>

          <div className="hidden lg:block w-[510px]">
            <UpcomingLayout />
            <CovidLayout />
          </div>
        </div>

        <div className="md:flex flex-row-reverse items-center justify-center gap-1 md:px-7 lg:hidden">
          <div className="md:min-w-[340px] flex-1">
            <UpcomingLayout />
          </div>

          <div className="md:min-w-[340px] flex-1">
            <TodoList />
          </div>
        </div>

        <div className="lg:hidden">
          <CovidLayout />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

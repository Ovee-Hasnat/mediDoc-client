import UpcomingCard from "./UpcomingCard";

const UpcomingLayout = () => {
  return (
    <div className="p-4 md:p-0 lg:px-7">
      <div className="p-3 border border-[#EDEBEB] dark:border-0 rounded-lg bg-white dark:bg-white/10">
        <h2 className="font-semibold">Upcoming Appointments</h2>

        <div className="mt-3 space-y-2 max-h-[400px] overflow-auto py-2">
          <UpcomingCard />
          <UpcomingCard />
          <UpcomingCard />
          <UpcomingCard />
          <UpcomingCard />
          <UpcomingCard />
        </div>
      </div>
    </div>
  );
};

export default UpcomingLayout;



const UpcomingCard = () => {
  return (
    <div className="flex">
      <div className="w-14 bg-white border-2 border-[##EDEBEB] dark:border-0 rounded-md flex flex-col items-center justify-evenly text-textPrimary-300">
        <p className="font-medium text-xs">2023</p>
        <p className="font-semibold text-2xl text-textPrimary-800">13</p>
        <p className="font-medium text-xs">Dec</p>
      </div>
      <div className="bg-babyPeach-100 dark:bg-white/10 border border-babyPeach-200 dark:border-0 rounded-md flex-1 p-2">
        <p className="font-medium text-sm">Dr. Muhammad Abdul Hussein</p>
        <p className="text-xs">Cardiologist</p>

        <div className="mt-2 text-sm flex gap-2 text-textPrimary-800">
          <div className="bg-white w-fit p-1 rounded-md">
            <span>Slot </span>
            <span className="font-medium">Morning</span>
          </div>
          <div className="bg-white w-fit p-1 rounded-md">
            <span>Time </span>
            <span className="font-medium">10.30 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;

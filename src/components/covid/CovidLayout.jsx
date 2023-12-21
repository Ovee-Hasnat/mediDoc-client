const CovidLayout = () => {
  return (
    <div className="p-4 md:p-7">
      <div className="p-3 border border-[#EDEBEB] dark:border-0 rounded-lg bg-white dark:bg-white/10">
        <div className="sm:flex justify-between">
          <h2 className="font-semibold text-xl text-hotPink dark:text-textWhite">
            Covid-19 Updates
          </h2>

          <div className="mt-5 sm:mt-0">
            <p className="font-medium">10 December 2023</p>
            <p className="font-light text-textPrimary-200 dark:text-textWhite/60">
              Thursday 10:00 PM
            </p>
          </div>
        </div>

        <div className="sm:flex items-center justify-around gap-3 sm:mt-3">
          <div className="flexCenter">
            <img src="/img/covid.png" />
          </div>

          <div className="gradient_primary p-7 md:p-0 md:pt-4 w-fit mx-auto rounded-lg text-white font-medium text-center grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 flex-1 lg:h-[230px] overflow-y-auto">
            <div>
              <p className="text-sm">Infection Number</p>
              <p className="text-[40px]">500</p>
            </div>
            <div>
              <p className="text-sm">Total Infection</p>
              <p className="text-[40px]">500,000</p>
            </div>
            <div>
              <p className="text-sm">Infection Rate</p>
              <p className="text-[40px]">10%</p>
            </div>

            <div>
              <p className="text-sm">Number Of Death</p>
              <p className="text-[40px]">20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidLayout;

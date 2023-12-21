import { IoAdd } from "react-icons/io5";

const TodoList = () => {
  return (
    <div className="p-4 md:p-0 lg:px-7 lg:max-w-[740px]">
      <div className="p-3 border border-[#EDEBEB] dark:border-0 rounded-lg bg-white dark:bg-white/10">
        <h2 className="font-semibold">To-Do List</h2>

        <div className="mt-3 max-h-[400px] overflow-auto py-2">
          <div className="relative">
            <textarea
              className="border border-[#EDEBEB] rounded-lg p-3 w-full bg-transparent focus:outline-none"
              rows={2}
            />
            <button className="text-white absolute gradient_button bottom-4 right-2 rounded-full p-1">
              <IoAdd size={22} />
            </button>
          </div>

          <div className="mt-4 px-3">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded accent-hotPink text-sm"
                />
                <p>Select All</p>
              </div>

              <button className="gradient_button py-1 px-2 text-white flexCenter gap-1 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.94855 8.81803C4.82627 8.81803 4.70931 8.76753 4.62558 8.67847L2.47106 6.38396C2.30315 6.20586 2.31245 5.92541 2.49056 5.75794C2.6691 5.59047 2.94955 5.59933 3.11658 5.77744L4.94412 7.72283L8.66922 3.64596C8.83492 3.46476 9.11492 3.45279 9.29568 3.61761C9.476 3.78242 9.48841 4.06286 9.32359 4.24318L5.27552 8.6736C5.19267 8.76487 5.07482 8.81715 4.95166 8.81803H4.94855Z"
                    fill="#FBFBFB"
                  />
                </svg>
                Done
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded accent-hotPink text-sm"
                />
                <div className="flex-1 space-y-2 lg:space-y-0 lg:flex items-center justify-between">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                  <p className="text-xs opacity-60">Last Added: 17 dec 2023</p>
                </div>
              </div>

              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded accent-hotPink text-sm"
                />
                <div className="flex-1 space-y-2 lg:space-y-0 lg:flex items-center justify-between">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                  <p className="text-xs opacity-60">Last Added: 17 dec 2023</p>
                </div>
              </div>

              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded accent-hotPink text-sm"
                />
                <div className="flex-1 space-y-2 lg:space-y-0 lg:flex items-center justify-between">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                  <p className="text-xs opacity-60">Last Added: 17 dec 2023</p>
                </div>
              </div>

              <div className="flex gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded accent-hotPink text-sm"
                />
                <div className="flex-1 space-y-2 lg:space-y-0 lg:flex items-center justify-between">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                  <p className="text-xs opacity-60">Last Added: 17 dec 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

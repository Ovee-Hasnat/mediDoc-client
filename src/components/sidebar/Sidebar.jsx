/* eslint-disable react/prop-types */
import { FiHome, FiUser } from "react-icons/fi";
import { LuCalendarDays, LuHistory, LuSettings } from "react-icons/lu";

const Sidebar = ({ close }) => {
  return (
    <div className="relative h-screen bg-white dark:bg-textPrimary-800 w-64 p-8">
      <div className="absolute -right-6" onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <g filter="url(#filter0_d_1_4524)">
            <circle cx="22" cy="20" r="17" fill="white" />
          </g>
          <path
            d="M25.6941 13.3082C25.89 13.5055 26 13.7732 26 14.0523C26 14.3314 25.89 14.599 25.6941 14.7964L20.5221 20.0064L25.6941 25.2163C25.8844 25.4148 25.9897 25.6807 25.9873 25.9566C25.985 26.2326 25.8751 26.4966 25.6814 26.6917C25.4876 26.8869 25.2256 26.9976 24.9516 27C24.6777 27.0024 24.4137 26.8963 24.2167 26.7045L18.3059 20.7505C18.11 20.5531 18 20.2854 18 20.0064C18 19.7273 18.11 19.4596 18.3059 19.2622L24.2167 13.3082C24.4126 13.1108 24.6783 13 24.9554 13C25.2324 13 25.4981 13.1108 25.6941 13.3082Z"
            fill="#FF7594"
          />
          <defs>
            <filter
              id="filter0_d_1_4524"
              x="0"
              y="0"
              width="44"
              height="44"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_4524"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_4524"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="flex items-center justify-start gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M18.25 6C17.6533 6 17.081 6.23705 16.659 6.65901C16.2371 7.08097 16 7.65326 16 8.25C16 12.5302 12.5302 16 8.25 16C7.65326 16 7.08097 16.2371 6.65901 16.659C6.23705 17.081 6 17.6533 6 18.25V29.75C6 30.3467 6.23705 30.919 6.65901 31.341C7.08097 31.7629 7.65326 32 8.25 32C12.5302 32 16 35.4698 16 39.75C16 40.3467 16.2371 40.919 16.659 41.341C17.081 41.7629 17.6533 42 18.25 42H29.75C30.3467 42 30.919 41.7629 31.341 41.341C31.7629 40.919 32 40.3467 32 39.75C32 35.4698 35.4698 32 39.75 32C40.3467 32 40.919 31.7629 41.341 31.341C41.7629 30.919 42 30.3467 42 29.75V18.25C42 17.6533 41.7629 17.081 41.341 16.659C40.919 16.2371 40.3467 16 39.75 16C35.4698 16 32 12.5302 32 8.25C32 7.65326 31.7629 7.08097 31.341 6.65901C30.919 6.23705 30.3467 6 29.75 6H18.25Z"
            fill="url(#paint0_linear_1_4383)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_4383"
              x1="13.0108"
              y1="18.1538"
              x2="57.3099"
              y2="19.3666"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7594" />
              <stop offset="0.536458" stopColor="#FF797B" />
              <stop offset="1" stopColor="#FF7C65" />
            </linearGradient>
          </defs>
        </svg>

        <p className="text-2xl font-semibold text-textPrimary-700 dark:text-white">
          Medi<span className="text-hotPink">Doc</span>
        </p>
      </div>

      {/* Sidebar Menu */}
      <div className="mt-24 text-textPrimary-800 dark:text-textWhite space-y-5 font-medium tracking-[0.20px]">
        <div className="flex items-center justify-between p-2">
          <FiHome size={32} className="text-hotPink" />

          <p className="w-32 text-hotPink">Home</p>
        </div>

        <div className="flex items-center justify-between p-2">
          <FiUser size={32} />

          <p className="w-32">Patient Profile</p>
        </div>

        <div className="flex items-center justify-between p-2">
          <LuCalendarDays size={32} />

          <p className="w-32">Appointments</p>
        </div>

        <div className="flex items-center justify-between p-2">
          <LuHistory size={32} />

          <p className="w-32">Medical History</p>
        </div>

        <div className="flex items-center justify-between p-2">
          <LuSettings size={32} />

          <p className="w-32">Settings</p>
        </div>
      </div>

      {/* Appointment Button */}
      <div className="gradient_button w-[190px] left-0 right-0 h-11 mx-auto flexCenter absolute bottom-16">
        <p className="text-sm text-white font-medium">New appointment</p>
      </div>
    </div>
  );
};

export default Sidebar;

import { Link } from "react-router-dom";
import ConnectButton from "../../../components/Button/ConnectButton";

const Header = ({ darkmode, setDarkMode }) => {
  return (
    <header
      className={` border-b border-[rgb(204,104,50)] shadow shadow-[#636e75] w-screen z-20 fixed  ${
        darkmode ? "bg-[#1D2A32]" : "bg-[#f9e8d0]"
      }`}
    >
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-5">
        <Link to="/" className="flex items-center">
          <img src="logo1.png" alt="logo1" />
          <img src="logo2.png" className="hidden md:block" alt="logo2" />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {darkmode ? (
            <svg
              width="25"
              height="21"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1074 1.57141H0.893066M24.1074 10.5H0.893066M24.1074 19.4286H0.893066"
                stroke="#DDDBD5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="25"
              height="21"
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1074 1.57141H0.893066M24.1074 10.5H0.893066M24.1074 19.4286H0.893066"
                stroke="url(#paint0_linear_55_435)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.1074 1.57141H0.893066M24.1074 10.5H0.893066M24.1074 19.4286H0.893066"
                stroke="black"
                stroke-opacity="0.2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_55_435"
                  x1="12.5002"
                  y1="1.57141"
                  x2="12.5002"
                  y2="19.4286"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CC6832" />
                  <stop
                    offset="0.880208"
                    stop-color="#CC6832"
                    stop-opacity="0.647917"
                  />
                  <stop offset="1" stop-color="#CC6832" stop-opacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </button>
        <div
          className="hidden w-full lg:flex lg:w-auto lg:justify-end"
          id="navbar-dropdown"
        >
          <ul className="flex flex-col lg:p-0 lg:flex-row lg:items-center lg:space-x-8">
            <li className="p-5 lg:p-0">
              <Link to="/" className="text-[#CC6832]">
                Dashboard
              </Link>
            </li>
            <li className="p-5 lg:p-0">
              <Link to="/" className="">
                Cloud
              </Link>
            </li>
            <li className="p-5 lg:p-0">
              <Link to="/" className="">
                Burn
              </Link>
            </li>
            <li className="p-5 lg:p-0">
              <Link to="/" className="">
                Stake
              </Link>
            </li>
            <li className="p-5 lg:p-0">
              <Link to="/" className="">
                Farm
              </Link>
            </li>
            <li className="">
              <div className="md:ml-5 xl:ml-32 flex items-center space-x-2 md:space-x-5">
                <button
                  onClick={() => {
                    setDarkMode(!darkmode);
                  }}
                  className="mr-8 md:mr-0"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.7083 22.9167C16.2674 22.9167 15.0389 22.4087 14.0229 21.3928C13.0069 20.3768 12.4993 19.1487 12.5 17.7084C12.5 16.2674 13.008 15.0389 14.024 14.023C15.0399 13.007 16.2681 12.4993 17.7083 12.5C19.1493 12.5 20.3778 13.008 21.3937 14.024C22.4097 15.04 22.9174 16.2681 22.9167 17.7084C22.9167 19.1493 22.4087 20.3778 21.3927 21.3938C20.3767 22.4098 19.1486 22.9174 17.7083 22.9167ZM20 19.948C20.0868 19.8612 20.1087 19.757 20.0656 19.6355C20.0226 19.5139 19.9399 19.4445 19.8177 19.4271C19.3663 19.3403 18.9451 19.1709 18.5542 18.9188C18.1632 18.6667 17.8465 18.3327 17.6042 17.9167C17.3611 17.5 17.2267 17.0573 17.201 16.5886C17.1753 16.1198 17.2403 15.6684 17.3958 15.2344C17.4306 15.1129 17.409 15.0042 17.3312 14.9084C17.2535 14.8125 17.1535 14.7823 17.0312 14.8177C15.8681 15.0261 15.0736 15.6858 14.6479 16.7969C14.2222 17.908 14.3917 18.941 15.1562 19.8959C15.7639 20.6598 16.5625 21.0504 17.5521 21.0678C18.5417 21.0851 19.3576 20.7118 20 19.948ZM9.63542 22.9167L9.21875 19.5834C8.99305 19.4966 8.78021 19.3924 8.58021 19.2709C8.38021 19.1493 8.18507 19.0191 7.99479 18.8803L4.89583 20.1823L2.03125 15.2344L4.71354 13.2032C4.69618 13.0816 4.6875 12.9643 4.6875 12.8511V12.149C4.6875 12.0358 4.69618 11.9184 4.71354 11.7969L2.03125 9.76567L4.89583 4.81775L7.99479 6.11983C8.18576 5.98094 8.38125 5.85074 8.58125 5.72921C8.78125 5.60768 8.99375 5.50351 9.21875 5.41671L9.63542 2.08337H15.3646L15.7812 5.41671C16.0069 5.50351 16.2198 5.60768 16.4198 5.72921C16.6198 5.85074 16.8149 5.98094 17.0052 6.11983L20.1042 4.81775L22.9687 9.76567L21.0417 11.224C20.5208 10.9636 19.9826 10.7639 19.4271 10.625C18.8715 10.4862 18.2986 10.4167 17.7083 10.4167C17.3611 10.4167 17.0271 10.4473 16.7062 10.5084C16.3854 10.5695 16.0597 10.6431 15.7292 10.7292C15.3993 10.1563 14.9524 9.70039 14.3885 9.3615C13.8247 9.02261 13.2125 8.85351 12.5521 8.85421C11.5451 8.85421 10.6858 9.21011 9.97396 9.92192C9.26215 10.6337 8.90625 11.4931 8.90625 12.5C8.90625 13.1598 9.06701 13.7674 9.38854 14.323C9.71007 14.8785 10.1483 15.3212 10.7031 15.6511C10.599 15.9983 10.5253 16.3587 10.4823 16.7323C10.4392 17.1059 10.4174 17.4747 10.4167 17.8386C10.434 18.8108 10.6295 19.7355 11.0031 20.6125C11.3767 21.4896 11.9104 22.2577 12.6042 22.9167H9.63542Z"
                      fill="url(#paint0_linear_34_45)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_34_45"
                        x1="12.5"
                        y1="2.08337"
                        x2="12.5"
                        y2="22.9167"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor={darkmode ? "#000" : "#CC6832"} />
                        <stop
                          offset="1"
                          stopColor={darkmode ? "#000" : "#CC6832"}
                          stopOpacity="0.6"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>

                <div className="hidden lg:flex w-full">AKASHI: 0</div>
                <div
                  className="flex justify-center space-x-2 md:space-x-5"
                  style={{ width: "calc(100% - 25px)" }}
                >
                  <div
                    className={`rounded-full ${
                      darkmode ? "border-white" : "border-[#CC6832]"
                    } border px-4 py-1 text-sm`}
                  >
                    <select
                      className="bg-transparent"
                      defaultValue={"Ethereum"}
                    >
                      <option value={"Ethereum"}>Ethereum</option>
                    </select>
                  </div>
                  <ConnectButton
                    image="btn1.png"
                    label="Connect"
                  ></ConnectButton>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import ConnectButton from "../../../components/Button/ConnectButton";
import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconThemeToggle, Logo1, Logo2 } from "../../../components/svg/icon";
import { AppContext } from "../../../context/AppContext";
import { NotificationManager } from "react-notifications";
import { shortenAddress } from "../../../utility/Utils";

const Header = ({ darkmode, setDarkMode }) => {
  const {
    account,
    connectWallet,
    disconnectWallet,
  } = useContext(AppContext);

  // eslint-disable-next-line
  const [loading, setLoading] = useState(false)
  const [shortaddress, setShortAddress] = useState("");

  const [links, setLinks] = useState({
    dashboard: "",
    cloud: "",
    burn: "",
    stake: "",
    farm: "",
  });
  const { pathname } = useLocation();
  const location = useLocation();
  useEffect(() => {
    setLinks((prevLinks) => ({
      ...prevLinks,
      dashboard: pathname === "/" ? "text-[#CC6832]" : "",
      cloud: pathname === "/cloud" ? "text-[#CC6832]" : "",
      burn: pathname === "/burn" ? "text-[#CC6832]" : "",
      stake: pathname === "/stake" ? "text-[#CC6832]" : "",
      farm: pathname === "/farm" ? "text-[#CC6832]" : "",
    }));
    // eslint-disable-next-line
  }, [location.pathname]);

  const { dashboard, cloud, burn, stake, farm } = links;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleConnect = () => {
    setLoading(true);
    connectWallet()
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        NotificationManager.warning('Warning', error.message, 3000);
        setLoading(false);
      })
  }

  useEffect(() => {
    if (account) {
      const vlaue = shortenAddress(account)
      setShortAddress(vlaue);
    }
  }, [account])

  return (
    <header
      className={` border-b border-[#cc6832] shadow shadow-[#636e75] w-screen z-20 fixed  ${darkmode ? "bg-[#1D2A32]" : "bg-[#f9e8d0]"
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
          aria-expanded={isDropdownOpen}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {darkmode ? <Logo2 /> : <Logo1 />}
        </button>
        <div
          className={`${isDropdownOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:justify-end`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col lg:p-0 lg:flex-row lg:items-center lg:space-x-8">
            <li className="p-5 lg:p-0">
              <Link to="/" className={`${dashboard}`}>
                Dashboard
              </Link>
            </li>
            <li className="p-5 lg:p-0">
              <Link to="/cloud" className={`${cloud}`}>
                Cloud
              </Link>
            </li>
            <li className="p-5 lg:p-0">
              <Link to="/burn" className={`${burn}`}>
                Burn
              </Link>
            </li>
            <li className="p-5 lg:p-0">
              <Link to="/" className={`${stake}`}>
                Stake
              </Link>
            </li>
            <li className="p-5 lg:p-0">
              <Link to="/" className={`${farm}`}>
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
                  <IconThemeToggle darkmode={darkmode} />
                </button>

                <div className="hidden lg:flex w-full">AKASHI: 0</div>
                <div
                  className="flex justify-center space-x-2 md:space-x-5"
                  style={{ width: "calc(100% - 25px)" }}
                >
                  <div
                    className={`rounded-full ${darkmode ? "border-white" : "border-[#CC6832]"
                      } border px-4 py-1 text-sm`}
                  >
                    <select
                      className="bg-transparent"
                      defaultValue={"Ethereum"}
                    >
                      <option value={"Ethereum"}>Ethereum</option>
                    </select>
                  </div>
                  {
                    account ?
                      <ConnectButton
                        image="btn1.png"
                        label={shortaddress}
                        handleClick={disconnectWallet}
                      ></ConnectButton>
                      :
                      <ConnectButton
                        image="btn1.png"
                        label="Connect"
                        handleClick={handleConnect}
                      ></ConnectButton>
                  }
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

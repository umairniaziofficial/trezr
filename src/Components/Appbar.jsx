import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchBox from "./Helper/SearchBox";
import ProfilePic from './Helper/UserProfilePic';
import { SidebarContext } from "../Context/sidebarContext";
import IconButton from '../Components/Helper/IconButton';
import SettingIcon from '/src/assets/Icons/settingIcon.png'
import NotificationIcon from '/src/assets/Icons/notification.png'


const Appbar = () => {
  const { mobileSidebarVisible, setMobileSidebarVisible } = useContext(SidebarContext);
  const [title, setTitle] = useState('Overview');
  const location = useLocation();

  useEffect(() => {
    const printPageLocation = () => {
      let locationPath = location.pathname;
      let newLocationPath = locationPath.substring(1);
      changeTitle(newLocationPath);
    };

    const changeTitle = (name) => {
      switch (name) {
        case '': {
          setTitle('Overview');
          break;
        }
        case 'transactions': {
          setTitle('Transactions');
          break;
        }
        case 'accounts': {
          setTitle('Accounts');
          break;
        }
        case 'investments': {
          setTitle('Investments');
          break;
        }
        case 'credit-cards': {
          setTitle('Credit Cards');
          break;
        }
        case 'loans': {
          setTitle('Loans');
          break;
        }
        case 'services': {
          setTitle('Services');
          break;
        }
        case 'setting': {
          setTitle('Setting');
          break;
        }
        case 'my-priviliges': {
          setTitle('My Priviliges');
          break;
        }
        default: {
          setTitle('Overview');
          break;
        }
      }
    };

    printPageLocation();
  }, [location]);

  return (
    <div className="md:h-[75px] h-[110px] w-full px-10 pt-5 flex flex-col sticky top-0 bg-white z-10 shadow-md">

      <div className="w-full px-0 pt-0 flex justify-between items-center mb-2">
        <button className="ml-4 md:hidden mr-2" onClick={() => setMobileSidebarVisible(!mobileSidebarVisible)}>
          <i className="fa-solid fa-bars"> </i>
        </button>

        <h1 style={{ fontFamily: 'Inter' }} className="text-2xl font-[500] text-headingColor">
          {title}
        </h1>

        <div className="flex items-center gap-3">
          <SearchBox customClass="hidden md:flex" />
          <div className="flex items-center gap-3">
            <IconButton src={SettingIcon} />
            <IconButton src={NotificationIcon} />
          </div>
          <ProfilePic src="https://www.shareicon.net/data/128x128/2016/09/15/829443_man_512x512.png" />
        </div>
      </div>

      {/* Mobile Search Box */}
      <div>
        <SearchBox customClass="flex md:hidden lg:hidden" />
      </div>
    </div>
  );
};

export default Appbar;

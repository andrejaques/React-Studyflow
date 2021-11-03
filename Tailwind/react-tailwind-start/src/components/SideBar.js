import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

import ToggleTheme from './ToggleTheme';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-gray-400 light:text-gray-900 shadow-xl
                    dark:bg-gray-900 dark:text-white">

      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <ToggleTheme />
    </div>
  )
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => {
  return (
    <div className="sidebar-icon group">
      { icon }

      <span className="sidebar-tooltip group-hover:scale-100">
        { text }
      </span>
    </div>
  );
};

export default SideBar;
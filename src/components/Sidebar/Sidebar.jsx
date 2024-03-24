import { NavLink } from 'react-router-dom';
import BillIcon from '../../assets/icons/BillIcon.jsx';
import CouponIcon from '../../assets/icons/CouponIcon.jsx';
import FoodIcon from '../../assets/icons/FoodIcon.jsx';
import HomeIcon from '../../assets/icons/HomeIcon.jsx';
import LogoutIcon from '../../assets/icons/LogoutIcon.jsx';
import MapIcon from '../../assets/icons/MapIcon.jsx';
import OrderIcon from '../../assets/icons/OrderIcon.jsx';
import SettingsIcon from '../../assets/icons/SettingsIcon.jsx';
import UserIcon from '../../assets/icons/UserIcon.jsx';

import Logo from '../../assets/logo/logo.png';
export function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='logo' src={Logo} />
      <nav className='side-nav'>
        <NavLink className='icon'>
          <HomeIcon />
        </NavLink>
        <NavLink className='icon'>
          <MapIcon />
        </NavLink>
        <NavLink to='/orders' className='icon active-link'>
          <OrderIcon />
        </NavLink>
        <NavLink className='icon'>
          <UserIcon />
        </NavLink>
        <NavLink className='icon'>
          <FoodIcon />
        </NavLink>
        <NavLink className='icon'>
          <BillIcon />
        </NavLink>
        <NavLink className='icon' style={{ marginBottom: '70px' }}>
          <CouponIcon />
        </NavLink>
        <NavLink className='icon'>
          <SettingsIcon />
        </NavLink>
        <NavLink className='icon'>
          <LogoutIcon />
        </NavLink>
      </nav>
    </aside>
  );
}

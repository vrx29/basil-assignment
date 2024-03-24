import { useParams } from 'react-router-dom';
import BellIcon from '../../assets/icons/BellIcon';
import profile from '../../assets/images/profile.png';
import Button from '../Button/Button';
import { InputField } from '../InputField/InputField';
function Header() {
  const { id } = useParams();
  return (
    <header className='header'>
      <div className='cont-left'>
        <p>All Orders</p>
        <span>
          All Orders
          {id && (
            <>
              <span className='order-id-sep'>/</span>
              <span>{id}</span>
            </>
          )}
        </span>
      </div>

      <div className='cont-right'>
        <InputField type='text' placeholder='Search' searchIcon={true} />
        <Button variant='transparent'>
          <BellIcon />
        </Button>
        <button className='profile-btn'>
          <img src={profile} />
        </button>
      </div>
    </header>
  );
}

export default Header;

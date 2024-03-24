import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import CancelIcon from '../../assets/icons/CancelIcon';
import Button from '../Button/Button';

const Modal = ({ header, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='modal-header'>
          <p>{header}</p>
          <Button variant='transparent' onClick={onClose}>
            <CancelIcon />
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;

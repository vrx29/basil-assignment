import PropTypes from 'prop-types';
import CancelIcon from '../../assets/icons/CancelIcon';

function Button(props) {
  return (
    <button
      className={`button ${props.variant} ${props.size} ${props.className} ${props.type} `}
      {...props}
    >
      {props.children}
      {props.variant === 'chip' && <CancelIcon />}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};
Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  type: '',
};

export default Button;

import SearchIcon from '../../assets/icons/SearchIcon';
import PropTypes from 'prop-types';
export function InputField(props) {
  return (
    <div className='input'>
      <span className='icon'>{props.searchIcon && <SearchIcon />}</span>
      <input {...props} />
    </div>
  );
}
InputField.propTypes = {
  searchIcon: PropTypes.bool,
};

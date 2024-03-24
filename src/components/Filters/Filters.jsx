import Button from '../Button/Button';
import PropTypes from 'prop-types';

function Filters({ openModal }) {
  return (
    <div className='filters'>
      <p className='heading'>filters</p>
      <div className='filter-actions'>
        <Button variant='outline' onClick={openModal}>
          Select Filters
        </Button>
        <Button variant='link'>Clear All</Button>
      </div>
      <div className='filter-group'>
        <p>Date From:</p>
        <Button variant='chip'>21/03/2022</Button>
      </div>
      <div className='filter-group'>
        <p>Date To:</p>
        <Button variant='chip'>21/03/2022</Button>
      </div>
      <div className='filter-group'>
        <p>Status:</p>
        <Button variant='chip'>Success</Button>
        <Button variant='chip'>Failure</Button>
        <Button variant='chip'>Pending</Button>
        <Button variant='chip'>Refund Completed</Button>
        <Button variant='chip'>Refund Initiated</Button>
        <Button variant='chip'>Sent</Button>
      </div>
      <div className='filter-group'>
        <p>Machines:</p>
        <Button variant='chip'>Aahaar Stall 23</Button>
        <Button variant='chip'>Aahaar Stall 37</Button>
        <Button variant='chip'>Aahaar Stall 88</Button>
      </div>
      <div className='filter-group-expand'>
        <Button variant='link'>see more</Button>
      </div>
    </div>
  );
}

Filters.propTypes = {
  openModal: PropTypes.func,
};

export default Filters;

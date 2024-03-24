import PropTypes from 'prop-types';
import TableRow from './TableRow';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import DoubleBack from '../../assets/icons/DoubleBack';
import BackIcon from '../../assets/icons/BackIcon';
import ForwardIcon from '../../assets/icons/ForwardIcon';
import DoubleForward from '../../assets/icons/DoubleForward';

function Table(props) {
  return (
    <>
      <table className='table'>
        <thead>
          <tr className='table-header'>
            {props.columnDefs.map((col) => (
              <th key={col.name} className='table-header-col'>
                {col.name === 'selection' ? <Checkbox /> : col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows &&
            props.rows.map((row, id) => (
              <TableRow key={id} data={row} cols={props.columnDefs} />
            ))}
        </tbody>
      </table>
      <div className='table-footer'>
        <div>showing 1 to {props.rows.length} of 1 entries</div>
        <div>Rows per page 10</div>
        <div className='table-actions'>
          <Button variant='transparent'>
            <DoubleBack />
          </Button>
          <Button variant='transparent'>
            <BackIcon />
          </Button>
          <Button variant='primary'>1</Button>
          <Button variant='transparent'>
            <ForwardIcon />
          </Button>
          <Button variant='transparent'>
            <DoubleForward />
          </Button>
        </div>
      </div>
    </>
  );
}

Table.propTypes = {
  columnDefs: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;

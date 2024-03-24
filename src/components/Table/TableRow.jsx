import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

function TableRow(props) {
  const { cols } = props;
  const navigate = useNavigate();
  const status =
    cols.filter((col) => col.status && col.status === true).length > 0;
  const action =
    cols.filter((col) => col.action && col.action === true).length > 0;
  const checkbox =
    cols.filter((col) => col.checkbox && col.checkbox === true).length > 0;
  console.log(cols, props.data);
  return (
    <tr
      onClick={() =>
        navigate(`${props.data['order id']}`, { state: { data: props.data } })
      }
    >
      {Object.entries(props.data).map(
        ([key, value], id) =>
          cols.some((col) => col.name === key) && (
            <>
              {console.log(key)}
              {status && (key === 'status' || key === 'drink status') ? (
                <td key={id}>
                  {value === 'Success' && (
                    <Button variant='outline' size='xm' type='success'>
                      {value.toUpperCase()}
                    </Button>
                  )}
                  {value === 'Failure' && (
                    <Button variant='outline' size='xm' type='danger'>
                      {value.toUpperCase()}
                    </Button>
                  )}
                  {value === 'Pending' && (
                    <Button variant='outline' size='xm' type='warning'>
                      {value.toUpperCase()}
                    </Button>
                  )}
                  {value === 'Sent' && (
                    <Button variant='outline' size='xm' type='sent'>
                      {value.toUpperCase()}
                    </Button>
                  )}
                  {value === 'Refund Initiated' && (
                    <Button variant='outline' size='xm' type='blue'>
                      {value.toUpperCase().substring(0, value.length - 1)}
                    </Button>
                  )}
                  {value === 'Refund Completed' && (
                    <Button variant='outline' size='xm' type='purple'>
                      {value.toUpperCase().substring(0, value.length - 2)}
                    </Button>
                  )}
                </td>
              ) : action && key === 'action' ? (
                <td key={id}>
                  <Button variant='primary'>Refund</Button>
                </td>
              ) : checkbox && key === 'selection' ? (
                <td key={id}>
                  <Checkbox />
                </td>
              ) : (
                <td key={id}>{value}</td>
              )}
            </>
          )
      )}
    </tr>
  );
}

TableRow.propTypes = {
  data: PropTypes.object,
  cols: PropTypes.arrayOf(PropTypes.string),
};
export default TableRow;

import { useLocation, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ExcelExportIcon from '../../assets/icons/ExcelExportIcon';
import SaveIcon from '../../assets/icons/SaveIcon';
import ReverseIcon from '../../assets/icons/ReverseIcon';
import { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import { orders } from '../../data/orders.js';
function OrderDetail() {
  const [tableColumns, setTableColumns] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    let cols = Object.keys(orders[0]);
    cols = cols.reduce((acc, curr) => {
      let newacc = [...acc];
      if (curr === 'status' || curr === 'drink status') {
        console.log(curr);
        newacc.push({ name: curr, status: true });
      } else if (curr === 'action') {
        newacc.push({ name: curr, action: true });
      } else {
        if (curr !== 'img') {
          newacc.push({ name: curr });
        }
      }
      return newacc;
    }, []);
    setTableColumns(cols);
    setTableRows(orders);
  }, []);
  const { id } = useParams();
  const { state } = useLocation();
  return (
    <div>
      <div className='orders-details-action-cont'>
        <Button variant='primary'>
          <ReverseIcon />
          Refund Complete Order
        </Button>
        <Button variant='outline' className='export-btn'>
          <ExcelExportIcon />
        </Button>
        <Button variant='outline'>
          <SaveIcon />
        </Button>
      </div>
      <div className='order-data'>
        <div className='order-summary'>
          <div className='flex-sb'>
            <p>{id}</p>
            <Button variant='outline' size='sm' type='success'>
              SUCCESS
            </Button>
          </div>
          <div className='group-header'>
            <p>BASIC INFORMATION</p>
            <div className='field-group-cont flex-sb'>
              <div className='field-group'>
                <p>Data and Time</p>
                <p>{state.data.date}</p>
              </div>
              <div className='field-group'>
                <p>Machine</p>
                <p>{state.data['machine name']}</p>
              </div>
            </div>
          </div>
          <div className='group-header'>
            <p>Order Summary</p>
            <div className='field-group-cont flex-sb'>
              <div className='field-group'>
                <p>Payment Id</p>
                <p>TX1042480129481</p>
              </div>
              <div className='field-group'>
                <p>Total Amount</p>
                <p>₹ {state.data['total amount']}</p>
              </div>
            </div>
          </div>
          <div className='group-header'>
            <p>Customer Information</p>
            <div className='field-group-cont flex-sb'>
              <div className='field-group'>
                <p>Name</p>
                <p>{state.data['customer name']}</p>
              </div>
              <div className='field-group'>
                <p>Contact Number</p>
                <p>{state.data['contact number']}</p>
              </div>
              <div className='field-group'>
                <p>Email</p>
                <p>simranjeet.kaur@basil.health</p>
              </div>
            </div>
          </div>
          <div className='group-header'>
            <p>Refund Information</p>
            <div className='field-group-cont flex-sb'>
              <div className='field-group'>
                <p>Refund Transaction Id</p>
                <p>TX1042480129481</p>
              </div>
            </div>
          </div>
        </div>
        <div className='order-details'>
          <p>order details</p>
          <Table columnDefs={tableColumns} rows={tableRows} />
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;

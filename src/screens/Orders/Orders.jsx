import { useEffect, useState } from 'react';
import ExcelExportIcon from '../../assets/icons/ExcelExportIcon';
import SaveIcon from '../../assets/icons/SaveIcon';
import Button from '../../components/Button/Button';
import { InputField } from '../../components/InputField/InputField';
import Table from '../../components/Table/Table';
import Filters from '../../components/Filters/Filters';
import Modal from '../../components/Modal/Modal';
import FiltersModal from '../../components/FiltersModal/FiltersModal';

export function Orders() {
  const [tableColumns, setTableColumns] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch('src/data/tableData.json')
      .then((res) => res.json())
      .then((data) => {
        let cols = Object.keys(data[0]);
        cols = cols.reduce((acc, curr) => {
          let newacc = [...acc];
          if (curr === 'status') {
            newacc.push({ name: curr, status: true });
          } else if (curr === 'action') {
            newacc.push({ name: curr, action: true });
          } else {
            newacc.push({ name: curr });
          }
          return newacc;
        }, []);
        setTableColumns(cols);
        setTableRows(data);
      });
  }, []);

  return (
    <div className='orders-page'>
      <div className='orders-action-cont'>
        <InputField type='text' placeholder='Search' searchIcon={true} />
        <Button variant='outline' className='export-btn'>
          <ExcelExportIcon />
        </Button>
        <Button variant='outline'>
          <SaveIcon />
        </Button>
      </div>
      <div className='orders-table-cont'>
        <div>
          <div className='orders-info'>
            <div className='orders-info-col'>
              <span>Machines:</span>
              <span>6</span>
            </div>
            <div className='orders-info-col'>
              <span>Orders:</span>
              <span>28</span>
            </div>
            <div className='orders-info-col'>
              <span>Customer:</span>
              <span>28</span>
            </div>
            <div className='orders-info-col'>
              <span>Drinks:</span>
              <span>28</span>
            </div>
            <div className='orders-info-col'>
              <span>Total Amount:</span>
              <span>₹ 250000</span>
            </div>
            <div className='orders-info-col'>
              <span>Refunds Initiated:</span>
              <span>3</span>
            </div>
          </div>
          <Table columnDefs={tableColumns} rows={tableRows.slice(0, 10)} />
        </div>
        <Filters openModal={openModal} />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} header='Filters'>
        <FiltersModal />
      </Modal>
    </div>
  );
}

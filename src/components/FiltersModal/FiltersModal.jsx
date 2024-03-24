import Button from '../Button/Button';
import { InputField } from '../InputField/InputField';
import { filterTableData } from '../../data/filterTable';
import { useEffect, useState } from 'react';
import Table from '../Table/Table';

function FiltersModal() {
  const [tableColumns, setTableColumns] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    let cols = Object.keys(filterTableData[0]);
    cols = cols.reduce((acc, curr) => {
      let newacc = [...acc];
      if (curr === 'status' || curr === 'drink status') {
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
    cols.unshift({ name: 'selection', checkbox: true });
    setTableColumns(cols);
    let newRowData = filterTableData.map((row) => ({
      selection: false,
      ...row,
    }));
    setTableRows(newRowData);
  }, []);
  return (
    <div className='filters-modal'>
      <InputField type='text' placeholder='Search' />
      <div className='machines-cont'>
        <div className='filter-group'>
          <p className='filter-name'>Machines</p>
          <Button variant='link'>Clear All</Button>
        </div>
        <div className='chip-cont'>
          <Button variant='chip'>Aahaar Stall 3</Button>
          <Button variant='chip'>Aahaar Stall 23</Button>
          <Button variant='chip'>Aahaar Stall 22</Button>
        </div>
      </div>
      <Table columnDefs={tableColumns} rows={tableRows} />
    </div>
  );
}

export default FiltersModal;

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';

const Users = () => {
  const [products] = useState([
    {
      code: 1,
      name: 'Product Name',
      category: 'Product Category',
      quantity: '1',
    },
  ]);
  return (
    <div className='users-page'>
      <div className='container'>
        <h1>CRUD Operation</h1>
        <div className='users-list'>
          <DataTable value={products}>
            <Column field='code' header='Code'></Column>
            <Column field='name' header='Name'></Column>
            <Column field='category' header='Category'></Column>
            <Column field='quantity' header='Quantity'></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};
export default Users;

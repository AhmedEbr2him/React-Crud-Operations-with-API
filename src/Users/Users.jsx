import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import ViewUser from './_ViewUser';

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users');
      if (response) {
        setUsersList(response.data);
      }
    } catch (error) {
      alert('Unalbe to connect to the server!');
    }
  };

  const actionsTemplate = rowDate => {
    return (
      <>
        <button
          className='btn btn-primary'
          onClick={() => {
            setSelectedUserId(rowDate.id);
            setShowViewModal(true);
          }}
        >
          <i className='pi pi-eye'></i>
        </button>
        <button className='btn btn-secondary' onClick={() => console.log(rowDate.id)}>
          <i className='pi pi-file-edit'></i>
        </button>
        <button className='btn btn-danger' onClick={() => console.log(rowDate.id)}>
          <i className='pi pi-trash'></i>
        </button>
      </>
    );
  };
  return (
    <div className='users-page'>
      <div className='container'>
        <h1>CRUD Operation</h1>
        <div className='users-list'>
          <DataTable value={usersList}>
            <Column field='name' header='Name'></Column>
            <Column field='username' header='User Name'></Column>
            <Column field='email' header='Email'></Column>
            <Column field='phone' header='Phone'></Column>
            <Column field='website' header='Website'></Column>
            <Column header='Actions' body={actionsTemplate}></Column>
          </DataTable>
        </div>
      </div>

      <Dialog
        header='View User Data'
        visible={showViewModal}
        style={{ width: '50vw' }}
        onHide={() => setShowViewModal(false)}
      >
        <ViewUser userId={selectedUserId} />
      </Dialog>
    </div>
  );
};
export default Users;

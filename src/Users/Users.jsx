import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import ViewUser from './_ViewUser';
import AddUser from './_AddUser';
import EditUser from './_EditUser';

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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
  useEffect(() => {
    getAllUsers();
  }, []);
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
        <button
          className='btn btn-secondary'
          onClick={() => {
            setShowEditModal(true);
            setSelectedUserId(rowDate.id);
          }}
        >
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
          <div className='add-new-user'>
            <button className='btn btn-primary' onClick={() => getAllUsers()}>
              Refresh
            </button>
            <button className='btn btn-success' onClick={() => setShowAddModal(true)}>
              Add New User <i className='pi pi-plus'></i>
            </button>
          </div>
          <DataTable value={usersList}>
            <Column field='fullname' header='User Name'></Column>
            <Column field='name' header='Name'></Column>
            <Column field='email' header='Email'></Column>
            <Column field='phone' header='Phone'></Column>
            <Column field='website' header='Website'></Column>
            <Column header='Actions' body={actionsTemplate}></Column>
          </DataTable>
        </div>
      </div>

      {/*  POPUP VIEW MODEL */}
      <Dialog
        header='View User Data'
        visible={showViewModal}
        style={{ width: '70vw' }}
        onHide={() => setShowViewModal(false)}
      >
        <ViewUser userId={selectedUserId} />
      </Dialog>
      {/*  POPUP ADD USER MODEL */}
      <Dialog
        header='Add New User'
        visible={showAddModal}
        style={{ width: '70vw' }}
        onHide={() => setShowAddModal(false)}
      >
        <AddUser
          setUserAdded={() => {
            setShowAddModal(false);
            getAllUsers();
          }}
        />
      </Dialog>
      {/*  POPUP EDIT USER MODEL */}
      <Dialog
        header='Edit User Information'
        visible={showEditModal}
        style={{ width: '70vw' }}
        onHide={() => setShowEditModal(false)}
      >
        <EditUser
          setUserEdited={() => {
            setShowEditModal(false);

            // REFRESH THE MAIN USERS
            getAllUsers();
          }}
          editModel={() => {
            setShowEditModal(false);
          }}
          userId={selectedUserId}
        />
      </Dialog>
    </div>
  );
};
export default Users;

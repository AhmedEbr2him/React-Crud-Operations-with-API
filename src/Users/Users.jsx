import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import ViewUser from './_ViewUser';
import AddUser from './_AddUser';
import EditUser from './_EditUser';
import { ConfirmDialog } from 'primereact/confirmdialog'; // To use <ConfirmDialog> tag
import { confirmDialog } from 'primereact/confirmdialog'; // To use confirmDialog method

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
        <button className='btn btn-danger' onClick={() => deleteUserConfirmation(rowDate.id)}>
          <i className='pi pi-trash'></i>
        </button>
      </>
    );
  };

  /* CONFIRM POPUP */
  const deleteUserConfirmation = userId => {
    confirmDialog({
      message: 'Are you sure you want to delete this user?',
      header: 'Delete Confirmation',
      icon: 'pi pi-trash',
      accept: () => deleteUser(userId),
      // reject: () => rejectFunc(),
    });
  };

  const deleteUser = async userId => {
    try {
      const response = await axios.delete(`http://localhost:4000/users/${userId}`);
      if (response) {
        // DELETE USER AND REFRSH THE USERS LIST
        getAllUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='users-page'>
      <div className='container'>
        <h1>CRUD Operation</h1>
        <div className='users-list'>
          <div className='top-btn-group'>
            <button className='btn btn-outline-warning' onClick={() => getAllUsers()}>
              Refresh
            </button>
            <button className='btn btn-success' onClick={() => setShowAddModal(true)}>
              Add New User <i className='pi pi-plus'></i>
            </button>
          </div>
          <DataTable value={usersList}>
            <Column field='name' header='Name'></Column>
            <Column field='fullname' header='Full Name'></Column>
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

      <ConfirmDialog />
    </div>
  );
};
export default Users;

import axios from 'axios';
import { useEffect, useState } from 'react';

/* CREATE DEFAULT USER INFO */
const initialUserInfo = {
  id: '',
  name: '',
  fullname: '',
  email: '',
  phone: '',
  website: '',
  address: {
    city: '',
    street: '',
    suite: '',
    zipcode: '',
  },
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};

const ViewUser = props => {
  const [useInfo, setUserInf] = useState(initialUserInfo);

  const fetchUserData = async () => {
    const response = await axios.get(`http://localhost:4000/users/${props.userId}`);

    try {
      if (response) {
        setUserInf(response.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='user-view'>
      <h1>Basic Info</h1>
      <div className='box'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>User Name:&nbsp;</span>
              <span>{useInfo.name}</span>
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Full Name:&nbsp;</span>
              <span>{useInfo.fullname}</span>
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Email Address:&nbsp;</span>
              <span>{useInfo.email}</span>
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Phone Number:&nbsp;</span>
              <span>{useInfo.phone}</span>
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Website:&nbsp;</span>
              <span>{useInfo.website}</span>
            </p>
          </div>
        </div>
      </div>

      <h1>User Address&nbsp;</h1>
      <div className='box'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>City:&nbsp;</span>
              <span>{useInfo.address.city}</span>
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Street:&nbsp;</span>
              <span>{useInfo.address.street}</span>
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Suite:&nbsp;</span>
              <span>{useInfo.address.suite}</span>
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>ZIP Code:&nbsp;</span>
              <span>{useInfo.address.zipcode}</span>
            </p>
          </div>
        </div>
      </div>
      <h1>User Company</h1>
      <div className='box'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Company Name:&nbsp;</span>
              <span>{useInfo.company.name}</span>
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Catch Phrase:&nbsp;</span>
              <span>{useInfo.company.catchPhrase}</span>
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>BS:&nbsp;</span>
              <span>{useInfo.company.bs}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewUser;

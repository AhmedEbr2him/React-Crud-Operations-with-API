import axios from 'axios';
import { useEffect, useState } from 'react';

/* CREATE DEFAULT USER INFO */
const initialUserInfo = {
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
const AddUser = props => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [error, setError] = useState({});

  const addNewUser = async () => {
    try {
      const response = await axios.post('http://localhost:4000/users', userInfo);
      if (response) {
        props.setUserAdded();
      }
    } catch (e) {
      console.log(e);
    }
    validation();
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // VALIDATION
  const validation = () => {
    const newErrors = {};

    if (!userInfo.name) {
      newErrors.name = '* Name is required!';
    }
    if (!userInfo.fullname) {
      newErrors.fullname = '* Full name is required!';
    }
    if (!userInfo.email) {
      newErrors.email = '* Email address is required!';
    }
    if (!userInfo.phone) {
      newErrors.phone = '* Phone number is required!';
    }
    if (!userInfo.website) {
      newErrors.website = '* Website is required!';
    }
    if (!userInfo.address.city) {
      newErrors.city = '* City is required!';
    }
    if (!userInfo.address.street) {
      newErrors.street = '* Street is required!';
    }
    if (!userInfo.address.suite) {
      newErrors.suite = '* Suite is required!';
    }
    if (!userInfo.address.zipcode) {
      newErrors.zipcode = '* Zip code is required!';
    }
    if (!userInfo.company.name) {
      newErrors.companyName = '* Company name is required!';
    }
    if (!userInfo.company.catchPhrase) {
      newErrors.companyCatchPhrase = '* Catch phrase name is required!';
    }
    if (!userInfo.company.bs) {
      newErrors.companyBs = '* Bs is required!';
    }
    setError(newErrors);
  };

  return (
    <div className='user-view _add-view'>
      <h1>Basic Info</h1>
      <div className='box'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>User Name:&nbsp;</span>
              <input
                type='text'
                name='user_name'
                placeholder='Enter User Name'
                className='form-control'
                value={userInfo.name}
                onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
              />
              {error && <span className='error'> {error.name}</span>}
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Full Name:&nbsp;</span>
              <input
                type='text'
                name='user_full_name'
                placeholder='Enter Full Name'
                className='form-control'
                value={userInfo.fullname}
                onChange={e => setUserInfo({ ...userInfo, fullname: e.target.value })}
              />
              {error && <span className='error'> {error.fullname}</span>}
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Email Address:&nbsp;</span>
              <input
                type='email'
                name='user_email_adress'
                placeholder='Enter Email Address'
                className='form-control'
                value={userInfo.email}
                onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
              />
              {error && <span className='error'> {error.email}</span>}
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Phone Number:&nbsp;</span>
              <input
                type='text'
                name='user_phone_number'
                placeholder='Enter Phone Number'
                className='form-control'
                value={userInfo.phone}
                onChange={e => setUserInfo({ ...userInfo, phone: e.target.value })}
              />
              {error && <span className='error'> {error.phone}</span>}
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Website:&nbsp;</span>
              <input
                type='text'
                name='user_website'
                placeholder='Enter User Website'
                className='form-control'
                value={userInfo.website}
                onChange={e => setUserInfo({ ...userInfo, website: e.target.value })}
              />
              {error && <span className='error'> {error.website}</span>}
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
              <input
                type='text'
                name='user_city'
                placeholder='Enter User City'
                className='form-control'
                value={userInfo.address.city}
                onChange={e =>
                  setUserInfo({
                    ...userInfo,
                    address: {
                      ...userInfo.address,
                      city: e.target.value,
                    },
                  })
                }
              />
              {error && <span className='error'> {error.city}</span>}
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Street:&nbsp;</span>
              <input
                type='text'
                name='user_street'
                placeholder='Enter User Street'
                className='form-control'
                value={userInfo.address.street}
                onChange={e =>
                  setUserInfo({
                    ...userInfo,
                    address: {
                      ...userInfo.address,
                      street: e.target.value,
                    },
                  })
                }
              />
              {error && <span className='error'> {error.street}</span>}
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Suite:&nbsp;</span>
              <input
                type='text'
                name='user_suite'
                placeholder='Enter User Suite'
                className='form-control'
                value={userInfo.address.suite}
                onChange={e =>
                  setUserInfo({
                    ...userInfo,
                    address: {
                      ...userInfo.address,
                      suite: e.target.value,
                    },
                  })
                }
              />
              {error && <span className='error'> {error.suite}</span>}
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>ZIP Code:&nbsp;</span>
              <input
                type='text'
                name='user_zip_code'
                placeholder='Enter ZIP Code'
                className='form-control'
                value={userInfo.address.zipcode}
                onChange={e =>
                  setUserInfo({
                    ...userInfo,
                    address: {
                      ...userInfo.address,
                      zipcode: e.target.value,
                    },
                  })
                }
              />
              {error && <span className='error'> {error.zipcode}</span>}
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
              <input
                type='text'
                name='user_company_name'
                placeholder='Enter Company Name'
                className='form-control'
                value={userInfo.company.name}
                onChange={e =>
                  setUserInfo({
                    ...userInfo,
                    company: {
                      ...userInfo.company,
                      name: e.target.value,
                    },
                  })
                }
              />
              {error && <span className='error'> {error.companyName}</span>}
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>Catch Phrase:&nbsp;</span>
              <input
                type='text'
                name='user_catch_phrase'
                placeholder='Enter Catch Phrase'
                className='form-control'
                value={userInfo.company.catchPhrase}
                onChange={e =>
                  setUserInfo({
                    ...userInfo,
                    company: {
                      ...userInfo.company,
                      catchPhrase: e.target.value,
                    },
                  })
                }
              />
              {error && <span className='error'> {error.companyCatchPhrase}</span>}
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p>
              <span>BS:&nbsp;</span>
              <input
                type='text'
                name='user_bs'
                placeholder='Enter User BS'
                className='form-control'
                value={userInfo.company.bs}
                onChange={e =>
                  setUserInfo({
                    ...userInfo,
                    company: {
                      ...userInfo.company,
                      bs: e.target.value,
                    },
                  })
                }
              />
              {error && <span className='error'> {error.companyBs}</span>}
            </p>
          </div>
        </div>
      </div>

      <button
        className='btn btn-success'
        onClick={() => {
          addNewUser();
        }}
      >
        Add New User
      </button>
    </div>
  );
};
export default AddUser;

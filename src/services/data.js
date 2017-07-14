import axios from 'axios';
import formData from 'form-data';

const data = store => next => action => {

  next(action);

  switch(action.type){

    case 'GET_USER_ITEMS':


  };
}

export const logoutUser = () => {
  let url = 'http://localhost:3000/users/loggedin';
  let data = axios.get(url, {})
    .then(res => {
      console.log(res.data);
      return res.data;
    });
}

export const loginUser = (username, password) => {
  let url = 'http://localhost:3000/authenticate';
  let data = axios.post(url, {
    name: 'Nick Cerminara',
    password: '1',
  }).then(res => {
    console.log(res);
    return ('response', res.data);
  }).catch(err => {
    console.log('err', err);
    return err;
  });

  return data;
}

// headers: {
//   'x_access_token': token
// }

export const getUsers = (token) => {
  let url = 'http://localhost:3000/api/users?token=' + token;
  let data = axios.get(url)
    .then(res => {
      console.log(res);
      return res.data;
    });
  return data;
}

export const uploadFile = (file, token) => {
  console.log(file);
  let url = 'http://localhost:3000/api/upload?token=' + token;
  var formData = new FormData();
  formData.append("file", file);
  let data = axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
}

export const getFile = (token) => {
  let url = 'http://localhost:3000/api/file?token=' + token;
  let data = axios.get(url)
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
}
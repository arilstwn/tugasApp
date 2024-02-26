import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .get("http://localhost:3030/user")
      .then(({ data }) => {
        const admin = data.find(
          (x) => x.email === email && x.password === password
        );
        if (admin) {
          localStorage.setItem("email", admin.email);
          localStorage.setItem("id", admin.id);
          Swal.fire({
            icon: "success",
            title: "Login Berhasil",
            text: "Anda telah berhasil masuk!",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            history.push("/");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Gagal",
            text: "Email atau password tidak valid",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Terjadi kesalahan. Silakan coba lagi nanti.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="box form login mt-5">
      <span className="borderLine"></span>

      <form onSubmit={handleSubmit}>
        <span className="title mt-2">Login</span>
        <div className="input-field">
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <i className="uil uil-envelope icon"></i>
        </div>
        <div className="input-field">
          <input
            type="password"
            className="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <i className="uil uil-lock icon"></i>
          <i className="uil uil-eye-slash showHidePw"></i>
        </div>

        <div className="checkbox-text">
          <div className="checkbox-content">
            <input type="checkbox" id="logCheck" />
            <label htmlFor="logCheck" className="text">
              Remember me
            </label>
          </div>

          <a href="" className="text">
            Forgot password
          </a>
        </div>

        <div className="input-field button">
          <input type="submit" value="Login Now" />
        </div>
      </form>

      {error && <div className="error">{error}</div>}

      <div className="login-signup">
        <span className="text">Not a member?</span>
        <a href="#" className="text signup-text">
          Signup Now
        </a>
      </div>
    </div>
  );
}

export default LoginForm;

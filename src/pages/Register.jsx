import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [age, setAge] = useState();
  const [role, setRole] = useState("member");

  const navigate =useNavigate();

  const handleSubmitRegister = (event) =>{
    event.preventDefault();
    axios
      .post("http://localhost:3307/register", {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        firstname: firstname,
        lastname: lastname,
        age: age,
        role: role,
      })
      .then((res) => {
        if (res.data.Status === "OK") {
          navigate("/");
          Swal.fire({
            icon: "success",
            title: "You are signup Successfully!!!",
          });
        } else if (res.data.Error === "Email already exists") {
          Swal.fire({
            icon: "error",
            title: "Email already exists",
          });
        } else if(res.data.Error === "Passwords do not match"){
          Swal.fire({
            icon: "error",
            title: "Passwords do not match",
          });
        }
      })

      .then((err) => console.log(err));
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-indigo-300">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="../video/bg-register.mp4"
        autoPlay
        loop
        muted
      />
      <div className="max-w-4xl w-full h-auto bg-white rounded-3xl flex flex-col lg:flex-row relative">
        <div className="flex-1 w-full h-full relative text-center p-4 lg:p-8">
          <div className="mt-2 w-full shadow-sm pb-5">
            <h1 className="text-2xl font-bold ">Register</h1>
          </div>
          <div className="w-full h-auto p-4">
            <form onSubmit={handleSubmitRegister} className="mx-auto w-full h-full">
              <div className="w-full flex flex-col items-center">
                <div className="relative mt-5 flex items-center">
                  <label
                    htmlFor="email"
                    className="text-black text-md bg-white px-1 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faUser} className="p-2" />
                  </label>
                  <div className="w-64 lg:w-80">
                    <input
                      id="email"
                      type="text"
                      placeholder="Email"
                      className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="relative mt-5 flex items-center">
                  <label
                    htmlFor="password"
                    className="text-black text-md bg-white px-1 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faLock} className="p-2" />
                  </label>
                  <div className="w-64 lg:w-80">
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="relative mt-5 flex items-center">
                  <label
                    htmlFor="comfirm-password"
                    className="text-black text-md bg-white px-1 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faLock} className="p-2" />
                  </label>
                  <div className="w-64 lg:w-80">
                    <input
                      id="confirm-password"
                      type="password"
                      placeholder="Comfirm password"
                      className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setConfirmPassword(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="relative mt-5 flex items-center">
                  <label
                    htmlFor="password"
                    className="text-black text-md bg-white px-1 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faLock} className="p-2" />
                  </label>
                  <div className="w-64 lg:w-80">
                    <input
                      id="firstname"
                      type="text"
                      placeholder="Firstname"
                      className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setFirstname(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="relative mt-5 flex items-center">
                  <label
                    htmlFor="password"
                    className="text-black text-md bg-white px-1 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faLock} className="p-2" />
                  </label>
                  <div className="w-64 lg:w-80">
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Lastname"
                      className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setLastname(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="relative mt-5 flex items-center">
                  <label
                    htmlFor="password"
                    className="text-black text-md bg-white px-1 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faLock} className="p-2" />
                  </label>
                  <div className="w-64 lg:w-80">
                    <input
                      id="age"
                      type="text"
                      placeholder="age"
                      className="block w-full bg-slate-50 rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(event) => {
                        setAge(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 w-40 h-10 flex justify-center text-white bg-blue-500 rounded-lg mx-auto shadow-md shadow-blue-500/50 cursor-pointer">
                <input
                  type="submit"
                  value="Create account"
                  className="cursor-pointer"
                />
              </div>
            </form>
            <div className="w-full h-20 relative mt-4">
              <h1 className="w-full flex justify-center">
                Already have account?{" "}
                <Link
                  to={"/login"}
                  className="text-blue-400 ml-2 cursor-pointer hover:underline"
                >
                  Login
                </Link>
              </h1>
              <div className="relative left-32 top-20">
                <div className="flex">
                  <Link
                    to={"/"}
                    className="hover:text-blue-400 flex transition-transform transform hover:-translate-x-2"
                  >
                    <p>Back to home</p>
                    <div className="pl-2">
                      <FontAwesomeIcon icon={faHouse} className="" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full h-full bg-indigo-500 relative rounded-3xl hidden lg:block">
          <div className="relative w-[400px] h-[550px] p-10  rounded-3xl mx-auto mt-10 lg:mt-20 overflow-hidden ">
            <img
              src="../img/img-register/bg-register.jpg"
              className="w-full h-full object-cover rounded-3xl "
              alt=""
            />
          </div>
          <div className="w-12 h-12 mx-auto relative -top-5 bg-indigo-800 rounded-full">
            <div className="text-2xl text-red-300 text-center p-2">
              <FontAwesomeIcon icon={faBolt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FiEye,FiEyeOff} from 'react-icons/fi';

export default function SignupPage() {
  
  const navigate = useNavigate();
  const [passToText,setPassToText] = useState(false);
  const [confirmPassToText, setConfirmPassToText] = useState(false);

  const [data,setData] = useState({
    email:"",
    password:"",
    confirmPassword: ""
  });

  console.log(data);

  const handlePassToText = () => {
    setPassToText(preve => !preve);
  }

  const handleConfirmPassToText = () => {
    setConfirmPassToText(preve => !preve);
  }

  const handleOnChange = (e) => {
    const {name,value} = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      }
    })
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("Signup form submitted");
    const {email,password,confirmPassword} = data;

    if(email && password && confirmPassword){
        if(password === confirmPassword){
            const fetchData = await fetch("http://localhost:8080/signup",{
              method: "POST",
              headers: {
                "content-type" : "application/json"
              },
              body: JSON.stringify(data)
            })
          
          const dataRes = await fetchData.json();
          if(dataRes.alert){
            alert(dataRes.message);
             navigate("/login");
          }
          else{
            alert(dataRes.message);
          }
           
        }
        else{
          alert("Passwords does not match!");
        }
    }
    else{
      alert("Enter all the fields!");
    }

  };

  return (
    <section className="h-screen">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSubmit}>
              {/* <!--Sign up section--> */}
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Create an account</p>
              </div>

              {/* <!-- Separator between social media sign up and email/password sign up --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>

              {/* <!-- Email input --> */}
              <div className="mb-6">
                <label className="block mb-1 font-semibold">Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-primary"
                  onChange = {handleOnChange}
                  value = {data.email}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <label className="block mb-1 font-semibold">Password</label>
                <input
                  type={passToText ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-primary"
                  onChange = {handleOnChange}
                  value = {data.password}
                />
                <span className="cursor-pointer" onClick={handlePassToText}>
                  {passToText? <FiEye/>:<FiEyeOff/> }
                </span>
                
              </div>

              {/* <!-- Confirm Password input --> */}
              <div className="mb-6">
                <label className="block mb-1 font-semibold">Confirm Password</label>
                <input
                  type={confirmPassToText ? "text":"password"}
                  placeholder="Confirm your password"
                  name = "confirmPassword"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-primary"
                  onChange = {handleOnChange}
                  value = {data.confirmPassword}
                />
                <span className="cursor-pointer" onClick={handleConfirmPassToText}>{confirmPassToText ? <FiEye/>:<FiEyeOff/>}</span>
              </div>

              {/* <!-- Sign up button --> */}
              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign Up
                </button>

                {/* <!-- Login link --> */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Already have an account?{" "}
                  <a
                    href="#!"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    <Link to={"/login"} className="text-sky-500 hover:text-sky-700">Log In</Link>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

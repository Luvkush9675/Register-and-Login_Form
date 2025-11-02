// import React, { useState } from 'react';
// import BG_Image from '../assets/Backgroung.jpg';

// function LogIn() {
//     const [isLogin, setIsLogin] = useState(true);
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(isLogin ? "Login button clicked!" : "Register button clicked!");
//         console.log(formData);
//         setFormData({
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//         })

//     };

//     return (
//         <div
//             className="h-screen flex items-center justify-between px-20 text-white"
//             style={{
//                 background: `linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${BG_Image}) center/cover no-repeat`,
//             }}
//         >

//             <div className="max-w-lg">
//                 <h1 className="text-6xl font-extrabold mb-6">
//                     Welcome to <span className="text-yellow-400">ShopEase</span>
//                 </h1>
//                 <p className="text-2xl font-light">
//                     Smart shopping, better living.
//                     <br />
//                     {isLogin ? "Login to explore exclusive deals." : "Register to start your journey."}
//                 </p>
//             </div>


//             <div className="p-8 rounded-xl w-[380px]  border border-white shadow-lg shadow-red-500">
//                 <h1 className="text-center text-3xl font-semibold text-black mb-4">
//                     {isLogin ? "Login" : "Register Now"}
//                 </h1>

//                 <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
//                     {!isLogin && (
//                         <div className="grid grid-cols-2 gap-4">
//                             <div className="flex flex-col">
//                                 <label>First Name</label>
//                                 <input type="text" name='firstName' placeholder="Enter First Name" value={formData.firstName} required className="px-3 py-2 border rounded" />
//                             </div>
//                             <div className="flex flex-col">
//                                 <label>Last Name</label>
//                                 <input type="text" name='lastName' placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} required className="px-3 py-2 border rounded" />
//                             </div>

//                         </div>
//                     )}

//                     <div className="flex flex-col">
//                         <label>Email:</label>
//                         <input type="email" name='email' placeholder="Enter Email" value={formData.email} onChange={handleChange} required className="px-3 py-2 border rounded" />
//                     </div>

//                     <div className="flex flex-col">
//                         <label>Password:</label>
//                         <input type="password" name='password' placeholder="Enter Password" value={formData.password} onChange={handleChange} required className="px-3 py-2 border rounded" />
//                     </div>


//                     <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-white hover:text-black transition cursor-pointer  ">
//                         {!isLogin ? "Register Now" : "Login"}
//                     </button>
//                 </form>

//                 <div className="text-center mt-3">
//                     <span>
//                         {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
//                         <span onClick={() => setIsLogin(!isLogin)} className="text-red-600 hover:underline cursor-pointer">
//                             {!isLogin ? "Login" : "Register Now"}
//                         </span>
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LogIn;




import React, { useState } from "react";
import BG_Image from "../assets/Backgroung.jpg"; 
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter both email and password!");
      return;
    }

    console.log("Logged in user:", formData);

    
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div
      className="h-screen flex items-center justify-between px-20 text-white"
      style={{
        background: `linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${BG_Image}) center/cover no-repeat`,
      }}
    >
      
      <div className="max-w-lg">
        <h1 className="text-6xl font-extrabold mb-6">
          Welcome Back to <span className="text-yellow-400">ShopEase</span>
        </h1>
        <p className="text-2xl font-light">
          Log in to continue shopping smart!
        </p>
      </div>

     
      <div className="p-8 rounded-xl w-[400px] border border-white shadow-lg shadow-red-500 bg-white/10 backdrop-blur-md">
        <h1 className="text-center text-3xl font-semibold text-black mb-4">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-3 py-2 border rounded text-black"
            />
          </div>

          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="px-3 py-2 border rounded text-black"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-white hover:text-black transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-3 text-black">
          <span>
            Don’t have an account?{" "}
            <Link to="/Register" className="text-red-400 hover:underline">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

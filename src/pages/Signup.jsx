import React, { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import uploadCloudinaryImage from "../utils/uploadCloudinary";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(avatar);
  const [preview, setpreview] = useState(" ");
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    email: "",

    photo: selectedFile,
    role: "patient",

    gender: "male",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async (event) => {
  
    const file = event.target.files[0];
    const data = await uploadCloudinaryImage(file);
    // ;
    setpreview(data.url)
    setSelectedFile(data.url)
    setFormData({ ...FormData, photo:data.url})
  };
  const submitHandler = async (event) => {
    console.log(FormData);
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-col-1 lg:grid-cols-2">
          {/* image section */}

          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure>
              <img className="rounded-l-lg" src={signupImg} alt=""></img>
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-[10]">
              Create an <span className="text-primaryColor"> account</span>
            </h3>
            {/* //..................................................................................................... */}

            <form onSubmit={submitHandler}>
              <div className="mb-5 mt-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={FormData.name}
                  onChange={handleInputChange}
                  className="w-full pr-4  py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b border-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md "
                />
              </div>

              <div className="mb-5 mt-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={FormData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4  py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md "
                ></input>
              </div>

              <div className="mb-5 mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={FormData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#1f478261] focus:outline-none focus:border-b-primaryColortext text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md "
                ></input>
              </div>

              <div className="mb-5 flex items-end justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a
                  <select
                    name="role"
                    onChange={handleInputChange}
                    value={FormData.role}
                    className="text-textColor font-semibold rext-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value={"patient"}>patient</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender
                  <select
                    name="gender"
                    onChange={handleInputChange}
                    value={FormData.gender}
                    className="text-textColor font-semibold rext-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img
                    className="w-full h-full rounded-full"
                    src={`${selectedFile}`}
                  ></img>
                </figure>
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg, .png, .gif"
                    onChange={handleFileInputChange}
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute left-0 right-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    upload photo
                  </label>
                </div>
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  disabled={loading && true}
                  className="btn w-full bg-primaryColor text-white text-[18px] rounded-lg"
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "SignUp"
                  )}
                </button>
                <p className="mt-5 text-center text-textColor">
                  {" "}
                  Already have an Acount?{" "}
                  <Link
                    to="/login"
                    className="text-primaryColor font-medium ml-1"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

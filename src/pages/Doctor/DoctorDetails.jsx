import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import startIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import {BASE_URL} from "../../../config";
import customHook from "../../hooks/customHook";
import Error from "../../components/Error/Error.jsx"
import Loader from "../../Loader/Loading.jsx"
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const {doctorId}=useParams()
  console.log("id",doctorId)
  const {data:doctor, loading, error}=customHook(`${BASE_URL}/doctor/${doctorId}`)
  console.log("doctor",doctor)
  const {name,photo,avgRating,totalRating,specialization, reviews}=doctor
  console.log(specialization)

  return (
    <>
      <section>
        <div className="container max-w=[1170px] px-5 mx-auto">
        {loading && <Loader/>}
        {error && <Error/>}
         {!loading && !error && <div className="grid md:grid-cols-3  gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={photo} className="w-full"></img>
                </figure>

                <div>
                  <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:leading-7 font-semibold rounded">
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px] flex-row ">
                    <span className="text-[14px] leading-6 lg:text=[16px] lg:leading-6 font-semibold text-headingColor ">
                      <img src={startIcon}></img>{avgRating} 
                    </span>
                    <span>({totalRating})</span>
                  </div>
                </div>
              </div>

              {/* <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
            <button onClick={()=>setTab('about')} className={`${tab==='about' && "border-b-solid border-primaryColor"} py-2 px-5 text-[16px] leading-7 text-headingColor font-semibold`}>About</button>
            <button onClick={()=>setTab('feedback')} className={` ${tab==='feedback' && "border-b-solid border-primaryColor"}  py-2 px-5 text-[16px] leading-7 text-headingColor font-semibold`}>FeedBack</button>
         
          </div> */}
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-b-primaryColor"
                  } py-2 px-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor"
                  } py-2 px-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>
              <div className="mt-[50px]">
                {tab === "about" && <DoctorAbout key={doctorId} doctor={doctor} />}

                {tab === "feedback" && <Feedback reviews={reviews} totalRating={totalRating} />}
              </div>
            </div>
          </div>}
        </div>
      </section>
    </>
  );
};

export default DoctorDetails;

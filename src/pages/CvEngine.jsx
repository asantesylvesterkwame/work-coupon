import React, { useState } from "react";
import Card from "../Components/Card";
import { CgFileDocument } from "react-icons/cg";
import { MdEditOff, MdEmail } from "react-icons/md";
import { ImBin2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import PersonalDetails from "../Components/PersonalDetails";
import FormInput from "../Components/FormInput";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSolidBriefcase } from "react-icons/bi";

const CvEngine = () => {
  const [tab, setTab] = useState(true);
  const contentTab = document.getElementById("ContentDiv");
  const customizeTab = document.getElementById("CustomizeDiv");
  if (!tab) {
    contentTab.style.background = "none"
    customizeTab.style.background = "#f3f4f6";

  }else{
    contentTab.style.background = "#f3f4f6";
    customizeTab.style.background = "none";
  }

  return (
    <div className="main flex  justify-center items-center bg-[#f3f4f6] h-screen  m-0 p-0">
      <div className="MainCvSectionDiv -4 w-[1440px] p-10 flex gap-10 bg-[#f3f4f6] h-screen">
        <div className="layoutDiv  ">
          <Card
            shadoweffect={"shadow-lg"}
            // width={5}
            // height={10}
            padding={1}
          >
            <button
              onClick={() => {
                setTab(true);
              }}
              id="ContentDiv"
              className="ContentDiv flex flex-col justify-center items-center  w-24 p-2.5 cursor-pointer bg-slate-200 rounded-md  active:scale-90 transition"
            >
              <span>
                <CgFileDocument />
              </span>
              Content
            </button>
            <button
              onClick={() => {
                setTab(false);
              }}
              id="CustomizeDiv"
              className="CustomizeDiv  active:scale-90 transition flex flex-col justify-center items-center p-2.5  w-24 rounded-md cursor-pointer"
            >
              <span>
                <MdEditOff />
              </span>
              Customize
            </button>
          </Card>
        </div>

        <div className="DetailFormDiv flex flex-col gap-5">
          <div className="ResumePresenceDiv sticky ">
            <Card
              padding={0.2}
              position="sticky"
            >
              <div className="ContainerDiv flex gap-10 px-3 justify-between py-1">
                <button className="ClearResumeDiv  active:scale-90 transition flex p-1 justify-center items-center gap-2 text-red-700 font-semibold cursor-pointer text-sm">
                  <span>
                    <ImBin2 />
                  </span>
                  <span>Clear</span>Resume
                </button>
                <button className="loadExampleDiv  active:scale-90 transition flex gap-1 justify-center items-center border px-20 rounded-lg bg-slate-300 font-semibold cursor-pointer text-sm">
                  <span>Load</span>Example
                </button>
              </div>
            </Card>
          </div>
          {tab ? (
            <div className="PersonalDetailFormDiv flex flex-col gap-5">
              <div className="bg-white  rounded-lg shadow flex  flex-col p-5  gap-2.5 ">
                <div className="PersonalDetailsForm">
                  <div className="FormTitle">
                    <h1 className="font-bold text-xl ">Personal Details</h1>
                  </div>
                  <FormInput
                    Label="Full Name"
                    placeholder="John Doe"
                  />
                  <FormInput
                    Label="Email"
                    placeholder="johndoe@mail.com"
                    recommendation="recommended"
                  />
                  <FormInput
                    Label="Phone Number"
                    placeholder="+233 12 3456 7890"
                    recommendation="recommended"
                  />
                  <FormInput
                    Label="Address"
                    placeholder="city, country"
                    recommendation="recommended"
                  />
                </div>
              </div>

              <div className="bg-white  rounded-lg shadow flex items-center p-5  gap-2.5 font-bold text-2xl justify-between">
                <div className="flex items-center gap-3">
                  <button>
                    <FaGraduationCap />
                  </button>
                  <span>Education</span>
                </div>
                <div className="flex justify-center items-center text-2xl">
                  <span>
                    <RiArrowDropDownLine className="text-4xl text-gray-500" />
                  </span>
                </div>
              </div>
              <div className="bg-white  rounded-lg shadow flex items-center p-5  gap-2.5 font-bold text-2xl justify-between">
                <div className="flex items-center gap-3">
                  <button>
                    <BiSolidBriefcase />
                  </button>
                  <span>Experience</span>
                </div>
                <div className="flex justify-center items-center text-2xl">
                  <span>
                    <RiArrowDropDownLine className="text-4xl text-gray-500" />
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white  rounded-lg shadow flex items-center p-5  gap-2.5 font-bold text-2xl justify-between">
              <div className="flex items-center gap-3">
                <h1>Layout</h1>
              </div>
            </div>
          )}
        </div>
        <div className="MainResumeDiv border w-screen max-h-[100vh] h-screen bg-white shadow-xl">
          <div className="TopBanner border bg-[#0e374e] h-1/6  flex flex-col text-white justify-center items-center gap-5">
            <div className="workerNameDiv text-white font-bold text-4xl">
              <h1>Sylvester Asante</h1>
            </div>
            <div className="WorkerDetails flex justify-center items-center gap-5">
              <div className="workerEmailDiv flex gap-1 justify-center items-center">
                <span>
                  <MdEmail />
                </span>
                sylvesterasante17@gmail.com
              </div>
              <div className="phoneNumberDiv flex gap-1 justify-center items-center">
                <span>
                  <BsFillTelephoneFill />
                </span>
                +233 24 681 5631
              </div>
              <div className="AddressDiv flex gap-1 justify-center items-center">
                <span>
                  <FaMapMarkerAlt />
                </span>
                Accra, Ghana
              </div>
            </div>
          </div>
          <PersonalDetails
            title="Education"
            date="01/2023"
            address="Kumasi, Ghana"
            name="Kwame Nkrumah University Of Science And Technology"
            mainInfo=" BSc. Telecommunications Engineering"
          />
          <PersonalDetails
            title="Professional Experience"
            date="02/2023"
            address="Tema, Ghana"
            name="Michan Web Solutions"
            mainInfo="Frontend Developer"
            desc="Experienced frontend developer with a strong proficiency in HTML, CSS, and JavaScript, and a passion for creating visually appealing and responsive web applications. Proven track record of translating design concepts into interactive user experiences, optimizing website performance, and collaborating effectively with cross-functional teams."
          />
        </div>
      </div>
    </div>
  );
};

export default CvEngine;

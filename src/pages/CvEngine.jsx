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
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import SecondaryButton from "../Components/SecondaryButton";
import SubmitBtn from "../Components/SubmitBtn";
import { FaRegEyeSlash } from "react-icons/fa";
import educationList from "../JSONData/education.json";
import ExperienceList from "../JSONData/experience.json";

const CvEngine = () => {
  const [tab, setTab] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Sylvester Asante",
    email: "sylvesterasante17@gmail.com",
    phoneNumber: "+233 24 681 5631",
    address: "Accra, Ghana",
  });
  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: "Kwame Nkrumah University Of Science And Technology",
    degree: "Bsc. Telecommunication Engineering",
    startDate: "01/23",
    finishDate: "01/26",
    location: "Kumasi, Ghana",
  });
  const [educationalInfoArray, setEducationalInfoArray] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "Michan Web Solutions",
    title: "Frontend Developer",
    startDate: "02/23",
    finishDate: "09/26",
    location: "Tema, Ghana",
    desc: "Experienced frontend developer with a strong proficiency in HTML, CSS, and JavaScript, and a passion for creating visually appealing and responsive web applications. Proven track record of translating design concepts into interactive user experiences, optimizing website performance, and collaborating effectively with cross-functional teams.",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [expTab, setExpTab] = useState(true);
  const [editForm, setEditForm] = useState(false);
  const [infoVisibility, setInfoVisibility] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const contentTab = document.getElementById("ContentDiv");
  const customizeTab = document.getElementById("CustomizeDiv");

  const handleInputChange = (e) => {
    setEducationalInfo({
      ...educationalInfo,
      [e.target.id]: e.target.value,
    });

    console.log(educationalInfo);
  };

  const handleFormSave = () => {
    setEducationalInfo({
      ...educationalInfo,
    });
    setEditForm(false);
  };

  return (
    <div className="main flex  justify-center  items-center bg-[#f3f4f6] h-screen  m-0 p-0">
      <div className="MainCvSectionDiv sm:flex-col lg:flex-row w-[1440px] p-10 flex gap-5 bg-[#f3f4f6] h-screen">
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
                contentTab.style.background = "#f3f4f6";
                customizeTab.style.background = "none";
              }}
              id="ContentDiv"
              className="ContentDiv flex flex-col justify-center items-center  w-24 p-2.5 cursor-pointer bg-[#f3f4f6] rounded-md  active:scale-90 transition"
            >
              <span>
                <CgFileDocument />
              </span>
              Content
            </button>
            <button
              onClick={() => {
                setTab(false);
                contentTab.style.background = "none";
                customizeTab.style.background = "#f3f4f6";
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
                <button className="loadExampleDiv  active:scale-90 transition flex gap-1 justify-center items-center px-20 rounded-lg bg-[#f3f4f6] font-semibold cursor-pointer text-sm">
                  <span>Load</span>Example
                </button>
              </div>
            </Card>
          </div>
          {tab ? (
          <>
            <div className="PersonalDetailFormDiv flex flex-col gap-5">
              <div className="bg-white  rounded-lg shadow flex  flex-col p-5  gap-2.5 ">
                <div className="PersonalDetailsForm">
                  <div className="FormTitle">
                    <h1 className="font-bold text-xl ">Personal Details</h1>
                  </div>
                  <FormInput
                    onChange={(e) => {
                      setPersonalInfo({
                        ...personalInfo,
                        fullName: e.target.value,
                      });
                      console.log(personalInfo);
                    }}
                    Label="Full Name"
                    placeholder="John Doe"
                    defaultValue={personalInfo.fullName}
                  />
                  <FormInput
                    onChange={(e) => {
                      setPersonalInfo({
                        ...personalInfo,
                        email: e.target.value,
                      });
                      console.log(personalInfo);
                    }}
                    Label="Email"
                    placeholder="johndoe@mail.com"
                    recommendation="recommended"
                    defaultValue={personalInfo.email}
                  />
                  <FormInput
                    type="text"
                    onChange={(e) => {
                      setPersonalInfo({
                        ...personalInfo,
                        phoneNumber: e.target.value,
                      });
                      console.log(personalInfo);
                    }}
                    Label="Phone Number"
                    placeholder="+233 12 3456 7890"
                    recommendation="recommended"
                    defaultValue={personalInfo.phoneNumber}
                  />
                  <FormInput
                    onChange={(e) => {
                      setPersonalInfo({
                        ...personalInfo,
                        address: e.target.value,
                      });
                      console.log(personalInfo);
                    }}
                    type="address"
                    Label="Address"
                    placeholder="city, country"
                    recommendation="recommended"
                    defaultValue={personalInfo.address}
                  />
                </div>
              </div>

              <div
                id="menuCard"
                className=" relative z-10 bg-white rounded-lg shadow flex flex-col p-5  gap-2.5 font-bold text-2xl justify-between "
              >
                <div
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <button>
                      <FaGraduationCap />
                    </button>
                    <span>Education</span>
                  </div>
                  {!isOpen ? (
                    <span>
                      <AiFillCaretDown className="text-lg text-gray-500" />
                    </span>
                  ) : (
                    <span>
                      <AiFillCaretUp className="text-lg text-gray-500" />
                    </span>
                  )}
                </div>

                {isOpen && (
                  // <>
                  <div className="bg-white absolute top-20 right-1 flex flex-col items-start rounded-lg p-2 w-full">
                    {educationList.map((schoolName, i) => (
                      <div
                        key={i}
                        className="flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent p-4 border-b-2 "
                      >
                        <h3 className="font-semibold text-sm">
                          {schoolName.school}
                        </h3>
                        <h3>{schoolName.visibility}</h3>
                      </div>
                    ))}
                  </div>

                  // </>
                )}
              </div>
              
            </div>
            <div
                id="menuCard"
                className=" relative bg-white rounded-lg shadow flex flex-col p-5  gap-2.5 font-bold text-2xl justify-between "
              >
                <div
                  onClick={() => {
                    setExpTab((prev) => !prev);
                  }}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <button>
                      <FaGraduationCap />
                    </button>
                    <span>Experience</span>
                  </div>
                  {!expTab ? (
                    <span>
                      <AiFillCaretDown className="text-lg text-gray-500" />
                    </span>
                  ) : (
                    <span>
                      <AiFillCaretUp className="text-lg text-gray-500" />
                    </span>
                  )}
                </div>

                {expTab && (
                  // <>
                  <div className="bg-white absolute top-20 right-1 flex flex-col items-start rounded-lg p-2 w-full">
                    {ExperienceList.map((experience, i) => (
                      <div
                        key={i}
                        className="flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent p-4 border-b-2 "
                      >
                        <h3 className="font-semibold text-sm">
                          {experience.company}
                        </h3>
                        <h3>{experience.visibility}</h3>
                      </div>
                    ))}
                  </div>

                  // </>
                )}
              </div>
              </>
          ) : (
            <>
              <div className="bg-white  rounded-lg shadow flex  items-center p-5  gap-2.5 font-bold text-2xl justify-between">
                <div className=" flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h1>Color</h1>
                  </div>
                  <div className="ColorDiv flex gap-5 items-center justify-center  ">
                    <span className="font-normal ">Accent Color</span>
                    <span>
                      <input
                        type="color"
                        name=""
                        id="colorInput"
                        className="rounded-full"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white  rounded-lg shadow flex  items-center p-5  gap-2.5 font-bold text-2xl justify-between">
                <div className=" flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h1>Fonts</h1>
                  </div>
                  <div className="ColorDiv flex gap-5 items-center justify-center  ">
                    <div className="border-black border p-10 flex flex-col justify-center items-center font-normal w-16 h-16 rounded-lg font-serif">
                      <div className="mainLetter">Aa</div>
                      <div className="FontName font-thin ">Serif</div>
                    </div>
                    <div className="border-black border bg-black text-white p-10 flex flex-col justify-center items-center font-normal w-16 h-16 rounded-md font-sans">
                      <div className="mainLetter">Aa</div>
                      <div className="FontName font-thin ">Sans</div>
                    </div>
                    <div className="border-black border p-10 flex flex-col justify-center items-center font-normal w-16 h-16 rounded-md font-mono">
                      <div className="mainLetter">Aa</div>
                      <div className="FontName font-thin ">Mono</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          className="MainResumeDiv border-8 w-screen h-[100vh] flex-nowrap bg-white shadow-xl"
          style={{ height: "100vh" }}
        >
          <div className="TopBanner border bg-[#0e374e] h-1/6  flex flex-col text-white justify-center items-center gap-5">
            <div className="workerNameDiv text-white font-bold text-4xl">
              <h1>{personalInfo.fullName}</h1>
            </div>
            <div className="WorkerDetails flex justify-center items-center gap-5">
              <div className="workerEmailDiv flex gap-1 justify-center items-center">
                <span>
                  <MdEmail />
                </span>
                {personalInfo.email}
              </div>
              <div className="phoneNumberDiv flex gap-1 justify-center items-center">
                <span>
                  <BsFillTelephoneFill />
                </span>
                {personalInfo.phoneNumber}
              </div>
              <div className="AddressDiv flex gap-1 justify-center items-center">
                <span>
                  <FaMapMarkerAlt />
                </span>
                {personalInfo.address}
              </div>
            </div>
          </div>

          <PersonalDetails
            title="Education"
            date={educationalInfo.startDate}
            endDate={educationalInfo.finishDate}
            address={educationalInfo.location}
            name={educationalInfo.schoolName}
            mainInfo={educationalInfo.degree}
          />
          <PersonalDetails
            title="Professional Experience"
            date={experienceInfo.startDate}
            endDate={experienceInfo.finishDate}
            address={experienceInfo.location}
            name={experienceInfo.companyName}
            mainInfo={experienceInfo.location}
            desc={experienceInfo.desc}
          />
        </div>
      </div>
    </div>
  );
};

export default CvEngine;

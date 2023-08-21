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

const CvEngine = () => {
  const [tab, setTab] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: "Kwame Nkrumah University Of Science And Technology",
    degree: "BSc. Telecommunications Engineering",
    startDate: "",
    finishDate: "01/2023",
    location: "Kumasi, Ghana",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [expTab, setExpTab] = useState(true);
  const [editForm, setEditForm] = useState(false);

  const contentTab = document.getElementById("ContentDiv");
  const customizeTab = document.getElementById("CustomizeDiv");
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
            <div className="PersonalDetailFormDiv flex flex-col gap-5">
              <div className="bg-white  rounded-lg shadow flex  flex-col p-5  gap-2.5 ">
                <div className="PersonalDetailsForm">
                  <div className="FormTitle">
                    <h1 className="font-bold text-xl ">Personal Details</h1>
                  </div>
                  <FormInput
                    onChange={(e) => {
                      setPersonalInfo({
                        fullName: e.target.value,
                      });
                      console.log(personalInfo);
                    }}
                    Label="Full Name"
                    placeholder="John Doe"
                  />
                  <FormInput
                    onChange={(e) => {
                      setPersonalInfo({
                        email: e.target.value,
                      });
                      console.log(personalInfo);
                    }}
                    Label="Email"
                    placeholder="johndoe@mail.com"
                    recommendation="recommended"
                  />
                  <FormInput
                    type="text"
                    onChange={(e) => {
                      setPersonalInfo({
                        phoneNumber: e.target.value,
                      });
                      console.log(personalInfo);
                    }}
                    Label="Phone Number"
                    placeholder="+233 12 3456 7890"
                    recommendation="recommended"
                  />
                  <FormInput
                    onChange={(e) => {
                      setPersonalInfo({
                        address: e.target.value,
                      });
                      console.log(personalInfo);
                    }}
                    Label="Address"
                    placeholder="city, country"
                    recommendation="recommended"
                  />
                </div>
              </div>

              <div
                id="menuCard"
                className="  bg-white rounded-lg shadow flex flex-col p-5  gap-2.5 font-bold text-2xl justify-between "
              >
                <button
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                  className="flex items-center justify-between"
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
                </button>

                <div className="">
                  {isOpen && (
                    <>
                      <div className="bg-white border-t-2   border-b-2 flex items-center p-5  gap-2.5 font-semibold justify-between">
                        {editForm ? (
                          <div className="PersonalDetailFormDiv border-transparent rounded-lg w-full flex flex-col gap-5">
                            <div className="bg-white  rounded-lg shadow flex  flex-col p-5  gap-2.5 ">
                              <div className="PersonalDetailsForm">
                                <FormInput
                                  onChange={(e) => {
                                    setEducationalInfo({
                                      schoolName: e.target.value,
                                    });
                                    console.log(educationalInfo);
                                  }}
                                  Label="School"
                                  placeholder="School Name"
                                />

                                <FormInput
                                  onChange={(e) => {
                                    setEducationalInfo({
                                      degree: e.target.value,
                                    });
                                    console.log(educationalInfo);
                                  }}
                                  Label="Degree"
                                  placeholder="eg. Bsc. Telecommunication Engineering"
                                />
                                <div className="flex gap-5">
                                  <FormInput
                                    type="text"
                                    onChange={(e) => {
                                      setEducationalInfo({
                                        startDate: e.target.value,
                                      });
                                      console.log(educationalInfo);
                                    }}
                                    Label="Start Date"
                                    placeholder="01/2023"
                                  />
                                  <FormInput
                                    type="text"
                                    onChange={(e) => {
                                      setEducationalInfo({
                                        finishDate: e.target.value,
                                      });
                                      console.log(educationalInfo);
                                    }}
                                    Label="Finish Date"
                                    placeholder="01/2026 or Present"
                                  />
                                </div>
                                <FormInput
                                  onChange={(e) => {
                                    setEducationalInfo({
                                      location: e.target.value,
                                    });
                                    console.log(educationalInfo);
                                  }}
                                  Label="Location"
                                  placeholder="city, country"
                                  recommendation="optional"
                                />
                                <div className="formActionsDiv flex justify-between ">
                                  <div className="deleteDiv">
                                    <SecondaryButton text="Delete" />
                                  </div>
                                  <div className="cancelAndSaveDiv flex gap-2">
                                    <SecondaryButton text="Cancel" />

                                    <SubmitBtn text="Save" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div
                              onClick={() => {
                                setEditForm(true);
                              }}
                              className=" bg-white border-t-2   border-b-2 flex items-center p-5  gap-2.5 font-semibold justify-between"
                            >
                              <div className="flex items-center cursor-pointer gap-3">
                                <span className="text-sm ">
                                  Kwame Nkrumah University Of Science and
                                  Technology
                                </span>
                              </div>
                              <button className="flex justify-center cursor-pointer items-center text-2xl">
                                <span>
                                  <FaRegEye className="text-xl " />
                                </span>
                              </button>
                            </div>
                            <div className="flex justify-center">
                              <div className="bg-white flex  items-center p-5  gap-2.5 font-semibold justify-between">
                                <button className="border-2 text-sm p-2 rounded-full hover:bg-[#f3f4f6] transition">
                                  + Education
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div
                id="menuCard"
                className="  bg-white rounded-lg shadow flex flex-col p-5  gap-2.5 font-bold text-2xl justify-between "
              >
                <button
                  onClick={() => {
                    setExpTab((prev) => !prev);
                  }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <button>
                      <BiSolidBriefcase />
                    </button>
                    <span>Experience</span>
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
                </button>

                <div className="">
                  {!expTab && (
                    <>
                      <div className="bg-white border-t-2   border-b-2 flex items-center p-5  gap-2.5 font-semibold justify-between">
                        <div className="flex items-center cursor-pointer gap-3">
                          <span className="text-sm">
                            Kwame Nkrumah University Of Science and Technology
                          </span>
                        </div>
                        <button className="flex justify-center cursor-pointer items-center text-2xl">
                          <span>
                            <FaRegEye className="text-xl " />
                          </span>
                        </button>
                      </div>
                      <div className="flex justify-center">
                        <div className="bg-white flex  items-center p-5  gap-2.5 font-semibold justify-between">
                          <button className="border-2 text-sm p-2 rounded-full hover:bg-[#f3f4f6] transition">
                            + Experience
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
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
        <div className="MainResumeDiv border-8 w-screen h-screen bg-white shadow-xl">
          <div className="TopBanner border bg-[#0e374e] h-1/6  flex flex-col text-white justify-center items-center gap-5">
            <div className="workerNameDiv text-white font-bold text-4xl">
              <h1>
                {!personalInfo.fullName
                  ? "Sylvester Asante"
                  : personalInfo.fullName}
              </h1>
            </div>
            <div className="WorkerDetails flex justify-center items-center gap-5">
              <div className="workerEmailDiv flex gap-1 justify-center items-center">
                <span>
                  <MdEmail />
                </span>
                {!personalInfo.email
                  ? "sylvesterasante17@gmail.com"
                  : personalInfo.email}
              </div>
              <div className="phoneNumberDiv flex gap-1 justify-center items-center">
                <span>
                  <BsFillTelephoneFill />
                </span>
                {!personalInfo.phoneNumber
                  ? "+233 24 681 5631"
                  : personalInfo.phoneNumber}
              </div>
              <div className="AddressDiv flex gap-1 justify-center items-center">
                <span>
                  <FaMapMarkerAlt />
                </span>
                {!personalInfo.address ? "Accra, Ghana" : personalInfo.address}
              </div>
            </div>
          </div>
          <PersonalDetails
            title="Education"
            date={
              !educationalInfo.startDate ? "01/26" : educationalInfo.startDate
            }
            address={
              !educationalInfo.location ? "Kumasi Ghana" : educationalInfo.location
            }
            name={
              !educationalInfo.schoolName ? "Kwame NKrumah University of Science and Technology" : educationalInfo.schoolName
            }
            mainInfo={
              !educationalInfo.degree ? "Bsc. Telecommunication Engineering" : educationalInfo.degree
            }
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

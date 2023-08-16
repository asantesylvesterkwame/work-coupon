import React from "react";
import Card from "../Components/Card";
import { CgFileDocument } from "react-icons/cg";
import { MdEditOff } from "react-icons/md";
import {ImBin2} from "react-icons/im"

const CvEngine = () => {
  return (
    <div className="main flex justify-center bg-slate-100 h-[100vh]">
      <div className="MainCvSectionDiv border-4 w-[1440px] py-10 flex ">
        <div className="layoutDiv  ">
          <Card
            shadoweffect={"shadow-lg"}
            // width={5}
            // height={10}
            padding={1}
          >
            <div className="ContentDiv flex flex-col justify-center items-center border w-24 p-2.5">
              <span>
                <CgFileDocument />
              </span>
              Content
            </div>
            <div className="CustomizeDiv flex flex-col justify-center items-center p-2.5 border w-24 rounded-sm">
              <span>
                <MdEditOff />
              </span>
              Customize
            </div>
          </Card>
        </div>
        <div className="DetailFormDiv">
          <div className="ResumePresenceDiv ">
            <Card padding={1} >
              <div className="ContainerDiv flex gap-10 px-10 justify-between">
                <div className="ClearResumeDiv flex justify-center items-center gap-2.5 text-red-700 font-semibold cursor-pointer">
                  {" "}
                  <span>
                    <ImBin2 />
                  </span>{" "}
                  Clear Resume
                </div>
                <div className="loadExampleDiv justify-center items-center border px-20 rounded-lg bg-slate-300 font-semibold cursor-pointer">
                  Load Example
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="MainResumeDiv border ">


        </div>
      </div>
    </div>
  );
};

export default CvEngine;

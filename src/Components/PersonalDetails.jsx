import React from "react";

const PersonalDetails = (props) => {
  return (
    <div>
      <div className="personalDetailsDiv flex flex-col justify-center items-center p-10">
        <div className="EducationSectionDiv w-full">
          <div className="TitleDiv bg-slate-200 w-full border  flex justify-center items-center text-slate-700 font-bold text-xl">
            <h1>{props.title}</h1>
          </div>
          <div className="EducationDetails flex gap-10 py-5">
            <div className="DateAndTimeDiv">
              <p>{props.date} - {props.endDate}</p>
              <p>{props.address}</p>
            </div>
            <div className="collegeAndDegreeDiv">
              <p className=" font-bold">{props.name} </p>
              <p>{props.mainInfo}</p>
              <p>{props.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

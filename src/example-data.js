import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: "Sylvester Asante",
    email: "sylvesterasante17@gmail.com",
    phoneNumber: "+233 24 681 5631",
    address: "Accra, Ghana",
  },

  sections: {
    educations: [
      {
        degree: "Bsc. Telecommunications Engineering",
        schoolName: "Kwame Nkrumah Univerisity Of Science and Technology",
        location: "Kumasi, Ghana",
        startDate: "01/2023",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        degree: "FullStack Web Development",
        schoolName: "The Odin Project Bootcamp",
        location: "Remote",
        startDate: "08/2022",
        endDate: "present",
        isCollapsed: true,
        isHidden: true,
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Michan Web Solutions",
        positionTitle: "FullStack Developer",
        location: "Tema, Ghana",
        description:
          "I developed both backend and frontend infrastructure for client web apps",
        startDate: "08/2020",
        endDate: "present",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
      {
        companyName: "Soluservant Digital Solutions",
        positionTitle: "Founder and CEO",
        location: "Remote",
        description:
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
        startDate: "04/2018",
        endDate: "02/2019",
        isCollapsed: true,
        isHidden: false,
        id: uniqid(),
      },
    ],
  },
};

export default exampleData;

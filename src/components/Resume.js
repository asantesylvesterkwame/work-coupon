import "../styles/Resume.css";
import PersonalInfoSection from "./personal-info/PersonalInfoSection";
import EducationInfoSection from "./education/EducationInfoSection";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ExperienceInfoSection from "./experience/ExperienceInfoSection";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Resume({ personalInfo, sections, layout }) {
  const handleDownload = () => {
    const input = document.getElementById("resume");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <div className="resume-container">
      <div
        className={`resume ${layout}`}
        id="resume"
      >
        <PersonalInfoSection
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
        <div>
          <EducationInfoSection educations={sections.educations} />
          <ExperienceInfoSection experiences={sections.experiences} />
        </div>
      </div>
      <div className="download-button">
        <button
          className="download"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default Resume;

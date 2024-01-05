import { render } from "react-dom";


function Resume({personalDetailsData, educationDataObjects, workObjectList, items}) {


  const renderEducation = () => {
    return educationDataObjects.map((educationObject, index) => (
      <div key={index} className="resume-education-object">
        <h3>{educationObject.courseName}</h3>
        <p>
          {educationObject.school}, {educationObject.city}
        </p>
        <p>
          {educationObject.startDate}
          {educationObject.endDate}
        </p>
      </div>
    ));
  };

  const renderWork = () => {
    return workObjectList.map((workObject, index) => (
      <div key={index} className="resume-work-object">
        <h3>{workObject.companyTitle}</h3>
        <p>{workObject.companyName}</p>
        <p>{workObject.companyAddress}</p>
        <p>
          {workObject.workStartDate}
          {workObject.workDate}
        </p>
        <p>{workObject.workDescription}</p>
      </div>
    ));
  };


  return (
    <div className="resumeContainer">
      <div className="header">
        <h1>{personalDetailsData.fullName}</h1>
        <div className="contact">
          <p>
            {personalDetailsData.street}, {personalDetailsData.suburb}
          </p>
          <p>
            {personalDetailsData.postcode}, {personalDetailsData.country}
            {personalDetailsData.state}
          </p>
          <p>{personalDetailsData.email}</p>
          <p>{personalDetailsData.phone}</p>
        </div>
      </div>
      <div className="resumeBody">
        <section>
          <div className="experienceContainer">
            <div className="educationContainer">
              <h2>Education</h2>
              <div>
                {renderEducation()}
              </div>
            </div>
            <div className="workExperienceContainer">
              <h2>Professional Experience</h2>
              <div>
                {renderWork()}
              </div>
            </div>
          </div>
        </section>
        <aside>
          <div className="skillsContainer">
            <h3>Skills</h3>
            {items.map((item, index) => (
              <div>
                <li key={index}>{item}</li>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );}

export default Resume;

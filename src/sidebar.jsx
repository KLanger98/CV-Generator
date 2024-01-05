import PersonalDetails from "./Personal/PersonalDetails";
import WorkExperience from "./Work/WorkExperience";
import Education from "./Education/Education";
import Skills from "./Skills"

function SideBar({
  onInputChange,
  personalDetailsData,
  educationData,
  workExperienceData,
  handleSkillsChange,
  skillsData,
  addItem,
  items,
  removeItem,
  addEducationObject,
  handleEducationObjectChange,
  educationDataObjects,
  removeObject,
  handleWorkObject,
  workObject,
  saveWorkObject,
  workObjectList

}) {
  return (
    <div className="sideBarContainer">
      <div className="personal-details inputBox">
        <PersonalDetails
          labelText="Personal Details"
          onInputChange={onInputChange}
          personalDetailsData={personalDetailsData}
        />
      </div>
      <div className="education-details inputBox">
        <Education
          labelText="Education"
          onInputChange={onInputChange}
          educationData={educationData}
          addEducationObject={addEducationObject}
          educationDataObjects={educationDataObjects}
          handleEducationObjectChange={handleEducationObjectChange}
          removeObject={removeObject}
        />
      </div>
      <div className="work-details inputBox">
        <WorkExperience
          labelText="Work Experience"
          onInputChange={onInputChange}
          workExperienceData={workExperienceData}
          handleWorkObject={handleWorkObject}
          workObject={workObject}
          saveWorkObject={saveWorkObject}
          workObjectList={workObjectList}
          removeObject={removeObject}
        />
      </div>
      <div className="skills-details inputBox">
        <Skills
          handleSkillsChange={handleSkillsChange}
          skillsData={skillsData}
          addItem={addItem}
          items={items}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
}


export default SideBar;
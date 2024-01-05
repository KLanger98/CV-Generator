import { render } from "react-dom";
import InputBox from "../InputBox";
import React, { useState } from "react";

function Education({ labelText, addEducationObject, handleEducationObjectChange,educationData, educationDataObjects, removeObject}) {
  

  const renderEducationObjects = () => {
    return educationDataObjects.map((educationObject, index) => (
      <div key={index} className="education-object">
        <div>
          <h3>{educationObject.courseName}</h3>
          <p>
            {educationObject.school}, {educationObject.city}
          </p>
          <p>
            {educationObject.startDate}
            {educationObject.endDate}
          </p>
        </div>
        <button onClick={() => removeObject(index, "education")}>Remove</button>
      </div>
    ));
  }


  return (
    <div className="Education">
      <h1>{labelText}</h1>
      <h3>Degree/ Course Title</h3>
      <InputBox
        type="text"
        id="courseName"
        labelText="Course Name"
        placeholder="Name of course"
        onInputChange={handleEducationObjectChange}
        value={educationData.courseName}
      />
      <h3>School</h3>
      <InputBox
        type="text"
        id="school"
        labelText="school"
        placeholder="Where did you complete this course"
        key="courseEducator"
        onInputChange={handleEducationObjectChange}
        value={educationData.school}
      />
      <h3>City</h3>
      <InputBox
        type="textarea"
        id="city"
        labelText="city"
        placeholder="i.e. Adelaide"
        key="educationCity"
        onInputChange={handleEducationObjectChange}
        value={educationData.city}
      />
      <h3>Country</h3>
      <InputBox
        type="textarea"
        id="educationCountry"
        labelText="Description"
        placeholder="Country"
        key="educationCountry"
        onInputChange={handleEducationObjectChange}
        value={educationData.educationCountry}
      />
      <h3>Start/End Date</h3>
      <div className="sideBySideInput">
        <InputBox
          type="date"
          id="startDate"
          labelText="Start Date"
          key="educationStartDate"
          onInputChange={handleEducationObjectChange}
          value={educationData.startDate}
        />
        <InputBox
          type="date"
          id="endDate"
          labelText="End-Date"
          key="educationEndDate"
          onInputChange={handleEducationObjectChange}
          value={educationData.endDate}
        />
      </div>
      <button className="formBtn" onClick={addEducationObject}>
        Save
      </button>
      <div>{renderEducationObjects()}</div>
    </div>
  );
}

export default Education;

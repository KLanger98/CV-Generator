import { render } from "react-dom";
import InputBox from "../InputBox";
import React, { useState } from "react";

function WorkExperience({
  labelText,
  onInputChange,
  handleWorkObject,
  workObject,
  saveWorkObject,
  workObjectList,
  removeObject
}) {

  const renderWorkObjects = () => {
    return workObjectList.map((workObject, index) => (
      <div key={index} className="work-object">
        <div>
          <h3>{workObject.companyTitle}</h3>
          <p>{workObject.companyName}</p>
          <p>{workObject.companyAddress}</p>
          <p>
            {workObject.workStartDate} -{workObject.workEndDate}
          </p>
          <p>{workObject.workDescription}</p>
        </div>
        <button onClick={() => removeObject(index, "work")}>Remove</button>
      </div>
    ));
  };

  return (
    <div className="WorkExperience">
      <h1>{labelText}</h1>
      <h3>Job Title</h3>
      <InputBox
        type="text"
        id="companyTitle"
        labelText="Your Title"
        placeholder="companyName"
        onInputChange={handleWorkObject}
        value={workObject.companyTitle}
      />
      <h3>Company Name</h3>
      <InputBox
        type="textarea"
        id="companyName"
        labelText="Name of the Company"
        placeholder="companyName"
        onInputChange={handleWorkObject}
        value={workObject.companyName}
      />
      <h3>Company Address</h3>
      <InputBox
        type="text"
        id="companyAddress"
        labelText="Address"
        placeholder="Your Company's Address"
        key="companyAddress"
        onInputChange={handleWorkObject}
        value={workObject.companyAddress}
      />
      <h3>Company Email</h3>
      <InputBox
        type="text"
        id="companyEmail"
        labelText="Address"
        placeholder="Your Company's Address"
        key="companyEmail"
        onInputChange={handleWorkObject}
        value={workObject.companyEmail}
      />
      <h3>Start/End Date</h3>
      <div className="sideBySideInput">
        <InputBox
          type="date"
          id="workStartDate"
          labelText="Start Date"
          placeholder="Start"
          key="company-email"
          onInputChange={handleWorkObject}
          value={workObject.workStartDate}
        />
        <InputBox
          type="date"
          id="workEndDate"
          labelText="End Date"
          placeholder="comapny-end-date"
          key="company-end-date"
          onInputChange={handleWorkObject}
          value={workObject.workEndDate}
        />
      </div>
      <h3>Job Description</h3>
      <InputBox
        type="textarea"
        id="workDescription"
        labelText="Description"
        placeholder="..."
        key="company-description"
        onInputChange={handleWorkObject}
        value={workObject.workDescription}
      />
      <button className="formBtn" onClick={saveWorkObject}>
        Save
      </button>
      <div>{renderWorkObjects()}</div>
    </div>
  );
}

export default WorkExperience;

import InputBox from '../InputBox'
import React,{useState} from 'react';

function PersonalDetails({labelText, onInputChange, personalDetailsData}){
    
    return (
      <form className="personalDetails">
        <h1>{labelText}</h1>
        <h3>Full Name</h3>
        <InputBox
          type="text"
          id="fullName"
          labelText="Full Name"
          placeholder="First and Last name"
          key="fullName"
          onInputChange={onInputChange}
          value={personalDetailsData.fullName}
        />
        <div className="addressInputs">
          <h3>Your Address</h3>
          <label>Street Address</label>
          <InputBox
            type="text"
            id="street"
            labelText="Street Address"
            placeholder="Your Street Number and Name"
            key="sStreet"
            onInputChange={onInputChange}
            value={personalDetailsData.street}
          />
          <label>Suburb</label>
          <InputBox
            type="text"
            id="suburb"
            labelText="Suburb"
            placeholder="Your Suburb"
            key="suburb"
            onInputChange={onInputChange}
            value={personalDetailsData.suburb}
          />
          <label>Post Code</label>
          <InputBox
            type="text"
            id="postcode"
            labelText="Postcode"
            placeholder="Your Postal-Code"
            key="postcode"
            onInputChange={onInputChange}
            value={personalDetailsData.postcode}
          />
          <label>State</label>
          <InputBox
            type="text"
            id="state"
            labelText="State"
            placeholder="Your State"
            key="state"
            onInputChange={onInputChange}
            value={personalDetailsData.state}
          />
          <label>Country</label>
          <InputBox
            type="text"
            id="country"
            labelText="Country"
            placeholder="Your Country"
            key="country"
            onInputChange={onInputChange}
            value={personalDetailsData.country}
          />
        </div>
        <h3>Phone Number</h3>
        <InputBox
          type="text"
          id="phone"
          placeholder="Phone Number"
          key="phone"
          onInputChange={onInputChange}
          value={personalDetailsData.phone}
        />
        <h3>Email</h3>
        <InputBox
          type="text"
          id="email"
          labelText="Email"
          placeholder="example@email.com"
          key="email"
          onInputChange={onInputChange}
          value={personalDetailsData.email}
        />
      </form>
    );
}

export default PersonalDetails;
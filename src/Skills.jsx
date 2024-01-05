import { useState } from "react";
import InputBox from "./InputBox";
import SubmitBtn from "./SubmitBtn";

  const Skills = ({labelText, addItem, items, removeItem}) => {

  return (
    <div>
      <h1>{labelText}</h1>
      <h3>Skills</h3>
      <SubmitBtn addItem={addItem} />

      <div className="addedSkillsContainer">
        {items.map((item, index) => (
          <div className="individualSkill">
            <li key={index}>{item}</li>
            <button onClick={() => removeItem(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

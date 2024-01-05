import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './sidebar'
import Resume from './resume'
import Header from './Header'

function App() {

  const[personalDetailsData, setPersonalDetailsData] = useState({
    fullName: '',
    street: '',
    email: '',
    phone: '',
    suburb: '',
    postcode: '',
    state: '',
    country: ''
  });


  //State management for work experience relatde objects 

  const [workObjectList, setWorkObjectList] = useState([]);

  const [workObject, setWorkObject] = useState({
    companyTitle: "",
    companyName: "",
    companyAddress: "",
    workStartDate: "",
    workEndDate: "",
    workDescription: "",
  });

  const handleWorkObject = (id, value) =>{
    setWorkObject((prevObject) => ({...prevObject, [id]: value }))
  }

  const saveWorkObject = () =>{
    setWorkObjectList((prevList) => ([...prevList, workObject]))
    setWorkObject({
      companyTitle: "",
      companyName: "",
      companyAddress: "",
      workStartDate: "",
      workEndDate: "",
      workDescription: ""
    });
  }

  //State management for Education related objects

  const [educationDataObjects, setEducationDataObjects] = useState([]);

  const [educationData, setEducationData] = useState({
    courseName: "",
    school: "",
    educationCountry: "",
    city: "",
    startDate: "",
    endDate: "",
  });

  const handleEducationObjectChange = (id, value) => {
    setEducationData((prevObject) => ({...prevObject, [id]: value }))
  }


  const addEducationObject = () =>{
    setEducationDataObjects((prevObjects) => [...prevObjects, educationData]);
    setEducationData({courseName: "", school: "", educationCountry: "", city: "", startDate: "", endDate: ""})
  }

  const removeObject = (index, type) =>{
    if(type == "education"){
      const updatedObjects = [...educationDataObjects];
      updatedObjects.splice(index, 1);
      setEducationDataObjects(updatedObjects);
    } else if (type == "work"){
      const updatedObjects = [...workObjectList];
      updatedObjects.splice(index, 1);
      setWorkObjectList(updatedObjects);
    }
    
  }

  //State management for skills 
  const [skillsData, setSkillsData] = useState([])

  const handleInputChange = (field, value) => {
    setPersonalDetailsData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSkillsAddition = (value) => {
    setSkillsData((prevData) => 
      [...prevData, value]
    )
  }

  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems)
  };


  return (
    <div>
      <Header />
      <div className="appContainer">
        <SideBar
          onInputChange={handleInputChange}
          personalDetailsData={personalDetailsData}
          skillsData={skillsData}
          onSkillsChange={handleSkillsAddition}
          addItem={addItem}
          removeItem={removeItem}
          items={items}
          addEducationObject={addEducationObject}
          handleEducationObjectChange={handleEducationObjectChange}
          educationData={educationData}
          educationDataObjects={educationDataObjects}
          removeObject={removeObject}
          //Work Experience props
          handleWorkObject={handleWorkObject}
          workObject={workObject}
          saveWorkObject={saveWorkObject}
          workObjectList={workObjectList}
        />
        <Resume
          personalDetailsData={personalDetailsData}
          educationData={educationData}
          items={items}
          workObject={workObject}
          workObjectList={workObjectList}
          educationDataObjects={educationDataObjects}
        />
      </div>
    </div>
  );
}

export default App;

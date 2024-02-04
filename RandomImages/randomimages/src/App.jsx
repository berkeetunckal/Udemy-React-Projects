import { useState } from "react";
import "./App.css";
import Course from "./Course";

function getRandomImage() {
  const images = ["Angular", "Bootstrap", "CcSharp", "KompleWeb"];
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    setCourses([...courses, getRandomImage()]);
  };
  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <>
      <div className="App">
        <button className="buttonApp" onClick={handleClick}>
          Add Course
        </button>
        <div className="courseList">{courseList}</div>
      </div>
    </>
  );
}

export default App;

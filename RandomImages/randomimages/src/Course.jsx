import Angular from "./images/angular.jpg";
import Bootsrap from "./images/bootstrap5.png";
import CcSharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";
import './Course.css';
const courseMap = {
    Angular,
    Bootsrap,
    CcSharp,
    KompleWeb,
}

function Course({ courseName }) {
    console.log(courseName)
    return (
        <div className="courseDiv">
            <img className="course" src={courseMap[courseName]} alt="" />
        </div>
    )
}

export default Course;
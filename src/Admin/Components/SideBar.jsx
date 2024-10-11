import React, { useState } from "react";
import logo from "../../Assets/Images/logo.png";
import home from "../../Assets/Images/home.png";
import project from "../../Assets/Images/project.png";
import task from "../../Assets/Images/task.png";
import client from "../../Assets/Images/client.png";
import report from "../../Assets/Images/report.png";
import staff from "../../Assets/Images/staff.png";
import setting from "../../Assets/Images/setting.png";
import { Link } from "react-router-dom";
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const SideBar = ({ toggleSideBar }) => {

  const [toggleStaff , setToggleStaff] = useState(false);

  const handleToggleStaff = () =>{
   setToggleStaff(!toggleStaff)
  }

  return (
    <div
      className={`md:flex md:flex-shrink-0 absolute md:relative mt-20 md:mt-0 h-[200vh] ${
        toggleSideBar ? "left-[0px]" : "left-[-260px] md:left-0"
      } z-50`}
    >
      <div className="bg-[#2B2A2D] flex flex-col">
        <img className="p-7" src={logo} alt="" />
        <div className="mt-5 cursor-pointer flex-grow">
          <ul className="ml-9 text-[#B1B1B1] space-y-7">
            <li className="flex gap-5 items-center">
              {" "}
              <img src={home} alt="" /> Dashboard
            </li>
            <li className="flex gap-5 items-center">
              {" "}
              <img src={project} alt="" /> <Link to="/projectsummary"> Project </Link>
            </li>
            <li className="flex gap-5 items-center">
              {" "}
              <img src={task} alt="" /> <Link to="/task">Task</Link>{" "}
            </li>
            <li className="flex gap-5 items-center">
              {" "}
              <img src={client} alt="" />
              <Link to="/clients">Client</Link>
            </li>
            <li className="flex gap-5 items-center">
              {" "}
              <img src={report} alt="" />
              <Link to="/report">Report</Link>{" "}
            </li>
            <li className="flex flex-col gap-5 items-center" onClick={handleToggleStaff}>
              {" "}
              <img src={staff} alt="" />
              <Link to="/">Staff</Link>{" "}
              {toggleStaff && 
              <ol className="text-purple-500 ml-3">
                <li><Link to = "/attendence_summary">Attendence</Link></li>
              </ol>
}
            </li>
            <li className="flex gap-5 items-center">
              {" "}
              <img src={client} alt="" />
              <Link to="/role">Role</Link>
            </li>
            <li className="flex gap-5 items-center">
              {" "}
              <img src={report} alt="" />
              <Link to="/department">Department</Link>{" "}
            </li>
            <li className="flex gap-5 items-center">
              {" "}
              <AssignmentIcon/>            
              <Link className="ml-[-3px]" to="/subscription-plan">Subscription Plan</Link>{" "}
            </li>
            <li className="flex gap-5 items-center">
              {" "}
              <img src={setting} alt="" /> Setting
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default SideBar;

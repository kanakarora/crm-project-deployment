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
<<<<<<< HEAD

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
=======
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 
   const [isMenuOpen1, setIsMenuOpen1] = useState(false);
   const toggleMenu1 = () => setIsMenuOpen1(!isMenuOpen1);
  
   const [isMenuOpen2, setIsMenuOpen2] = useState(false);
   const toggleMenu2 = () => setIsMenuOpen2(!isMenuOpen2);

   const [isMenuOpen3, setIsMenuOpen3] = useState(false);
   const toggleMenu3 = () => setIsMenuOpen3(!isMenuOpen3);

   const [isMenuOpen4, setIsMenuOpen4] = useState(false);
   const toggleMenu4 = () => setIsMenuOpen4(!isMenuOpen4);

   const [isMenuOpen5, setIsMenuOpen5] = useState(false);
   const toggleMenu5 = () => setIsMenuOpen5(!isMenuOpen5);

   const [isMenuOpen6, setIsMenuOpen6] = useState(false);
   const toggleMenu6 = () => setIsMenuOpen6(!isMenuOpen6);
   
   const [isMenuOpen7, setIsMenuOpen7] = useState(false);
   const toggleMenu7 = () => setIsMenuOpen7(!isMenuOpen7);
   
   const [isMenuOpen8, setIsMenuOpen8] = useState(false);
   const toggleMenu8 = () => setIsMenuOpen8(!isMenuOpen8);

   const [isMenuOpen9, setIsMenuOpen9] = useState(false);
   const toggleMenu9 = () => setIsMenuOpen9(!isMenuOpen9);

   

  return (
    <div className="sidebar w-[250px] xl:w-[200px] lg:w-[300px] md:w-[300px] bg-[#27004a] h-full p-[10px] ">

 
      <div className="flex xl:justify-center lg:justify-center  p-[20px]">
        <img src={logo} alt="" className="w-[120px]" />
>>>>>>> dac7b45bc5c2f7590ca831a66306446717531e04
      </div>
      <ul className="pl-[2px] pr-[2px] pt-[0px] pb-[20px]">
        <li className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
          <img src={home} />
          <Link to="/" className="">Dashboard</Link>
        </li>


        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={project} alt="" />
            <button
              onClick={toggleMenu}
              className=" "
            >
              Project
            </button>

          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="#"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Sub Menu
            </Link>



          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={task} alt="" />
            <button
              onClick={toggleMenu1}
              className=" "
            >
              Task
            </button>

          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen1 ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="#"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Sub Menu
            </Link>



          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={client} alt="" />
            <button
              onClick={toggleMenu2}
              className=" "
            >
              Client
            </button>

          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen2 ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="#"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Sub Menu
            </Link>



          </div>
        </div>
        
        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={report} alt="" />
            <button
              onClick={toggleMenu3}
              className=" "
            >
              Report
            </button>

          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen3 ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="#"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Sub Menu
            </Link>



          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={staff} alt="" />
            <button
              onClick={toggleMenu4}
              className=" "
            >
              Staff
            </button>

          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen4 ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="#"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Sub Menu
            </Link>



          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={staff} alt="" />
            <button
              onClick={toggleMenu5}
              className=" "
            >
              Role
            </button>

          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen5 ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="#"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Sub Menu
            </Link>



          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={staff} alt="" />
            <button
              onClick={toggleMenu6}
              className=" "
            >
              Department
            </button>

          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen6 ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="#"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Sub Menu
            </Link>



          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={staff} alt="" />
            <button
              onClick={toggleMenu7}
              className="whitespace-nowrap "
            >
              Subscription Plan
            </button>

          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen7 ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="#"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Sub Menu
            </Link>



          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={setting} alt="" />
            <button
              onClick={toggleMenu8}
              className=" "
            >
              Setting
            </button>

          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen8 ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="#"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Sub Menu
            </Link>



          </div>
        </div>

      </ul>
    </div>
  );
};

export default SideBar;

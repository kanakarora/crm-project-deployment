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
const NewSideBar = ({ toggleSideBar }) => {
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
      </div>
      <ul className="pl-[2px] pr-[2px] pt-[0px] pb-[20px]">
        <li className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
          <img src={home} />
          <Link to="#" className="">Dashboard</Link>
        </li>


        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={project} alt="" />
            <Link to = '/projectsummary'>
            <button
              onClick={toggleMenu}
              className=" "
            >
              Project
            </button>
            </Link>
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
            <Link to = '/taskview'>
            <button
              onClick={toggleMenu1}
              className=" "
            >
              Task
            </button>
            </Link>
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
            <Link to = "/clients">
            <img src={client} alt="" />
            <button
              onClick={toggleMenu2}
              className=" "
            >
              Client
            </button>
            </Link>
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
            <img src={client} alt="" />
            <Link to = '/attendence_summary'>
            <button
              onClick={toggleMenu2}
              className=" "
            >
              Attendence
            </button>
            </Link>
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
            <Link to = '/report'>
            <button
              onClick={toggleMenu3}
              className=" "
            >
              Report
            </button>
            </Link>
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
            <Link to = '/'>
            <button
              onClick={toggleMenu4}
              className=" "
            >
              Staff
            </button>
            </Link>
          </div>

          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out mt-[5px] ${isMenuOpen4 ? 'max-h-screen' : 'max-h-0'
              }`}
          >

            <Link to="/attendence_summary"
              className="w-full ml-[40px] text-left py-[10px] flex items-center gap-[10px] pl-[0px] whitespace-nowrap  text-white   transition-all	rounded-md"
            >
              <ArrowForwardIosIcon className="arrow-icon-sidebar"/>
              Attendence
            </Link>



          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            <img src={staff} alt="" />
            <Link to = '/role'><button
              onClick={toggleMenu5}
              className=" "
            >
              Role
            </button>
            </Link>
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
            <img src={client} alt="" />
            <Link to = '/department'>
            <button
              onClick={toggleMenu6}
              className=" "
            >
              Department
            </button>
            </Link>

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
            <Link to = '/subscription-plan'>
            <button
              onClick={toggleMenu7}
              className="whitespace-nowrap "
            >
              Subscription Plan
            </button>
            </Link>

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
            <Link to = '/settings'>
            <button
              onClick={toggleMenu8}
              className=" "
            >
              Setting
            </button>
            </Link>

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

export default NewSideBar;
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
import HomeIcon from '@mui/icons-material/Home';

const SideBar = ({ toggleSideBar }) => {
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
    <div className="sidebar w-[250px] xl:w-[244px] lg:w-[300px] md:w-[300px] bg-[#27004a] h-full p-[10px] ">

 
      <div className="flex xl:justify-center lg:justify-center  p-[20px]">
        <img src={logo} alt="" className="w-[120px]" />
      </div>
      <ul className="pl-[2px] pr-[2px] pt-[0px] pb-[20px]">
        <li className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
          {/* <img src={home} /> */}
            <HomeIcon/>

          <Link to="/" className="">Dashboard</Link>
        </li>


        <div className="">
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	w-full">
            {/* <img src={project} alt="" /> */}
            <Link to = "/projects" className="flex flex-row w-full justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folder-kanban mr-2"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/></svg>
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

        <div>
          <Link to = '/task'>
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            {/* <img src={task} alt="" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-check"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>
            <button
              onClick={toggleMenu1}
              className=" "
            >
              Task
            </button>

          </div>
          </Link>

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
            {/* <img src={client} alt="" /> */}
            <Link to = '/clients' className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user mr-2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
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
            {/* <img src={report} alt="" /> */}
            <Link to = '/report' className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard-minus mr-2"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/></svg>
            <button
              onClick={toggleMenu3}
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
            {/* <img src={staff} alt="" /> */}
            <Link to = "/" className="flex flex-row justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users mr-2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
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
          <Link to ='/role'>
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            {/* <img src={staff} alt="" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-cog"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
            <button
              onClick={toggleMenu5}
              className=" "
            >
              Role
            </button>

          </div>
          </Link>

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
        <Link to = '/task'>
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            {/* <img src={setting} alt="" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            <button
              onClick={toggleMenu8}
              className=" "
            >
              task
            </button>
           </div>
            </Link>
            </div>

        <div className="">
          <Link to = '/department'>
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            {/* <img src={staff} alt="" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-git-fork rotate-180	"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>
            <button
              onClick={toggleMenu6}
              className=""
            >
              Department
            </button>

          </div>
          </Link>

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
          <Link to = '/subscription-plan'>
          <div className="flex items-center gap-[10px] text-white p-[10px] hover:bg-[#fff] rounded-md hover:text-[#8a25b0] transition-all	">
            {/* <img src={staff} alt="" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
            <button
              onClick={toggleMenu7}
              className="whitespace-nowrap "
            >
              Subscriptions Plan
            </button>

          </div>
          </Link>
    
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
            {/* <img src={setting} alt="" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
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
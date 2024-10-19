import { useState } from "react";
import { MdGroups } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import Staff from "./ChatTabs/Staff";
import { IoCall } from "react-icons/io5";
import Groups from "./ChatTabs/Groups";
import Clients from "./ChatTabs/Clients";
import { FaUserGroup } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { BsSendFill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";



const ChatInterface = () => {
  const [ chatTab , setChatTab] = useState("staff");
  const [showChatSection , setShowChatSection] = useState(false);

  const handleShowChatSection = () =>{
     setShowChatSection(!showChatSection);
  }
  return (
    <div class="bg-gray-100 p-4 min-h-screen h-screen ">
      {/* <!-- Container for Chat Section --> */}
      <div class="flex space-x-6 bg-white shadow-lg rounded-lg p-6 h-full parent-container">
        {/* <!-- Left Section: Members List --> */}
        <div class = {`w-full ${showChatSection?"hidden" : "block"} md:w-1/3 flex flex-col border-r-2 pr-4 h-full`}>
        <div className="flex flex-row justify-start items-center space-x-3 border-b  pb-5 mb-5">
          <div className="border rounded-full border-green-500">
          <img src="./images/User_icon_2.png" alt="" className="w-9 h-9"/>
          </div>
           <p className="text-xl font-medium">Kanika Arora</p>
        </div>
          {/* <!-- Search Bar --> */}
          <div class="flex items-center bg-gray-200  rounded-lg mb-4 mt-5">
            <input
              type="text"
              placeholder="Search members..."
              class="bg-transparent outline-none w-full pl-2 py-2 text-xl font-normal "
            />
            <IoSearch className="text-[30px] pr-2 mt-1 text-gray-400"/>
          </div>

          {/* <!-- Member List --> */}
          <div className="flex flex-col h-full flex-grow overflow-y-auto">
          <div class="mb-4  w-full  grid grid-cols-3  divide-y-2 border-b">
           <div className="border border-gray-300 p-3 flex justify-start items-center hover:bg-slate-300" onClick={()=>{setChatTab("staff")}}><MdGroups className="text-[30px] mr-2 "/>staff</div>
           <div className="border border-gray-300 p-3 flex justify-start items-center hover:bg-slate-300" onClick={()=>{setChatTab("groups")}}><IoMdPerson className="text-[30px]  mr-2"/>Groups</div>
           <div className="border border-gray-300 p-3 flex justify-start items-center hover:bg-slate-300" onClick={()=>{setChatTab("clients")}}><BsFillPersonVcardFill className="text-[30px]  mr-2"/>Clients
           </div>
          </div>
          <div className="w-full h-full flex-grow flex flex-col justify-between">
           {chatTab === "staff" ? <Staff handleShowChatSection={handleShowChatSection}/> : chatTab === "clients" ? <Clients handleShowChatSection={handleShowChatSection}/> :  <Groups handleShowChatSection = {handleShowChatSection}/>}
           </div>
           
           
          {/* member column in ChatSection */}
           </div>
        </div>

        {/* <!-- Right Section: Chat Window --> */}
        <div class={`w-2/3 h-full ${showChatSection?"block":"hidden"} md:flex flex-col flex-grow chat-section`}>
          {/* <!-- Chat Header --> */}
          {
  chatTab === "staff" ? (
    <>
    <div className="float-left" onClick = {()=>{setShowChatSection(false)}}><GoArrowLeft /></div>
      <div className="flex items-center justify-between mt-5 md:mt-0 mb-4 border-b pb-6">
        <div className="flex flex-row justify-start items-center w-[70%] md:w-[50%] space-x-3 relative">
          <img src="./images/ProfileIcon.png" alt="profile Picture" className="w-[40px] h-[40px]" />
          <HiOutlineSpeakerWave className="absolute top-7 md:top-5 left-2 text-[30px]" />
          <div className="flex flex-col">
            <h2 className="text-lg font-normal mt-2">FlowChanger Agency</h2>
            <p>staff</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 bg-purple-500 rounded-full text-white">
            <IoCall />
          </button>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg flex-grow overflow-y-scroll">
      <div className="mb-4 relative">
          <div className="w-[50px] h-[50px] bg-purple-500 text-white rounded-full flex justify-center items-center">
            <img src="./images/ProfileIcon.png" alt="profile Picture" className="" />
          </div>
          <div className=" p-3 rounded-lg shadow top-10 w-[50px] left-11 absolute bg-white">
            <p className="text-gray-700">hiii</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-2 rounded-lg bg-gray-200">
      <div class="relative w-full">
  <input type="text" placeholder="Search members..." class="w-full border rounded-lg p-2 pr-10" />
  <div class="absolute inset-y-0 right-0 flex items-center pr-3">
  <IoSettingsOutline className="text-gray-500 text-2xl"/>
  </div>
</div>
 <button className="bg-blue-500 text-white p-2 rounded-lg"><BsSendFill /></button>
      </div>
    </>
  ) : chatTab === "clients" ? (
    <>
    <div className="float-left" onClick = {()=>{setShowChatSection(false)}}><GoArrowLeft /></div>
      <div className="flex items-center justify-between mb-4 mt-5 md:mt-0 border-b pb-6">
        <button className="bg-gray-300 p-2 rounded-md">contact: <span className="text-purple-700">tej partap</span></button>
        <div className="flex space-x-2 text-black justify-between items-center">
          <span className="font-semibold text-black text-md">Customer</span>
          <span className="bg-gray-300 p-2 rounded-md text-purple-700">tp</span>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg flex-grow overflow-y-scroll">
        <div className="mb-4 relative">
          <div className="w-[50px] h-[50px] bg-purple-500 text-white rounded-full flex justify-center items-center">
            <img src="./images/ProfileIcon.png" alt="profile Picture" className="" />
          </div>
          <div className=" p-3 rounded-lg shadow top-10 w-[50px] left-11 absolute bg-white">
            <p className="text-gray-700">hiii</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-2 rounded-lg bg-gray-200">
      <div class="relative w-full">
  <input type="text" placeholder="Search members..." class="w-full border rounded-lg p-2 pr-10" />
  <div class="absolute inset-y-0 right-0 flex items-center pr-3">
  <IoSettingsOutline className="text-gray-500 text-2xl"/>
  </div>
</div>
 <button className="bg-blue-500 text-white p-2 rounded-lg"><BsSendFill /></button>
      </div>
    </>
  ) : (
    <>
    <div className="float-left" onClick = {()=>{setShowChatSection(false)}}><GoArrowLeft /></div>
      <div className="flex items-center justify-between mt-5 md:mt-0 mb-4 border-b pb-6">
        <div className="flex flex-row justify-start items-center w-[50%] space-x-3 relative">
          <FaUserGroup className=" text-[40px]" />
        </div>
        <div className="flex space-x-2">
          <button className="p-2 bg-purple-500 rounded-full text-white">
          <IoSettingsOutline className="bg-purple-500"/>
          </button>
        </div>
      </div>
    </>
  )
}
</div>
</div>
</div>
  );
};

export default ChatInterface;


import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
// import DescriptionEditer from './DescriptionEditer';
import RemoveIcon from '@mui/icons-material/Remove';
import SellIcon from '@mui/icons-material/Sell';

const Task = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  //modal
  const [isOpen15, setIsOpen15] = useState(false);

  const toggleModal15 = () => {
      setIsOpen15(!isOpen15);
  };
  const addNewDiv = () => {
    setDivs([...divs, {}]); // Add a new empty object to the state array
    };

// Function to add a new div

    // State to store the list of file input divs
    const [divs, setDivs] = useState([{}]); // Start with one empty object


    // Function to remove a specific div
    const removeDiv = (indexToRemove) => {
        setDivs(divs.filter((_, index) => index !== indexToRemove)); // Filter out the div with the given index
    };

  function closeModal15() {
      setIsOpen15(false);
   }
    //modal7

  const accordionItems = [
    {
      title: (
        <div className="w-full bg-purple-100 rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="text-[12px] flex items-center gap-[10px] font-medium p-[10px] w-[116px]  whitespace-nowrap border-r">
                  <span className="bg-orange-200 text-orange-600 px-3 py-1 rounded-md text-xs font-medium">To Do</span>
                  <span className="bg-purple-500 text-white px-2 py-0.5 rounded-full text-xs">6</span>
                </th>
                <th className="p-3 text-xs font-medium text-gray-700 border-r text-center w-[80px]">#</th>
                <th className="p-3 text-xs font-medium text-gray-700 border-r min-w-[200px]">Task Name</th>
                <th className="p-3 text-xs font-medium text-gray-700 border-r text-center w-[120px]">Start Date</th>
                <th className="p-3 text-xs font-medium text-gray-700 border-r text-center w-[120px]">Due Date</th>
                <th className="p-3 text-xs font-medium text-gray-700 border-r text-center w-[120px]">End Date</th>
                <th className="p-3 text-xs font-medium text-gray-700 border-r w-[120px]">Assigned To</th>
                <th className="p-3 text-xs font-medium text-gray-700 border-r w-[100px]">Tags</th>
                <th className="p-3 text-xs font-medium text-gray-700 text-center w-[100px]">Priority</th>
              </tr>
            </thead>
          </table>
        </div>
      ),
      content: (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <tbody>
              <tr className="border-b border-gray-300 hover:bg-gray-50">
                <td className="p-3 w-[116px] ">
                  <span className="text-xs text-gray-600">complete</span>
                </td>
                <td className="p-3 text-center  w-[80px]">43</td>
                <td className="p-3  min-w-[200px]">
                  <Link to="/taskview" className="text-blue-500 hover:text-blue-700 text-sm">
                    Task View - Divine Healing
                  </Link>
                  <p className="text-xs text-gray-600">#12 - DIVINE HEALING-AUG-2024</p>
                </td>
                <td className="p-3 text-center  w-[120px]">13-08-2024</td>
                <td className="p-3 text-center  w-[120px]">19-08-2024</td>
                <td className="p-3 text-center  w-[120px]">19-08-2024</td>
                <td className="p-3  w-[120px]">
                  <span className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-lg">Ads</span>
                </td>
                <td className="p-3  w-[100px]">
                  <span className="text-xs text-gray-600">-</span>
                </td>
                <td className="p-3 text-center w-[100px]">
                  <span className="text-sm text-orange-500">High</span>
                </td>
              </tr>
              <tr className="border-b border-gray-300 hover:bg-gray-50">
                <td className="p-3 w-[116px] ">
                  <span className="text-xs text-gray-600">complete</span>
                </td>
                <td className="p-3 text-center  w-[80px]">143</td>
                <td className="p-3  min-w-[200px]">
                  <Link to="/taskview" className="text-blue-500 hover:text-blue-700 text-sm">
                    Task View - Urban Khalsa
                  </Link>
                  <p className="text-xs text-gray-600">#8 - URBAN KHALSA</p>
                </td>
                <td className="p-3 text-center  w-[120px]">16-08-2024</td>
                <td className="p-3 text-center  w-[120px]">18-08-2024</td>
                <td className="p-3 text-center  w-[120px]">20-08-2024</td>
                <td className="p-3  w-[120px]">
                  <span className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-lg">Ads</span>
                </td>
                <td className="p-3  w-[100px]">
                  <span className="text-xs text-gray-600">-</span>
                </td>
                <td className="p-3 text-center w-[100px]">
                  <span className="text-sm text-blue-500">Medium</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full px-4 py-6 overflow-x-auto">
     <div className=" h-[30px] mb-5">
                        {/* Button to open the modal */}
                        <button
                            className="bg-[#8a25b0] p-[8px] text-white focus-visible:outline-none  rounded-md "
                            onClick={toggleModal15}
                        >
                            <AddIcon className="newadd" /> New Task
                        </button>

                        {/* Modal */}
                        {isOpen15 && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
                                <div className="bg-white p-6 rounded shadow-lg w-[550px] relative h-[100%] overflow-scroll">
                                    <h2 className="text-lg font-semibold mb-[16px]">Add new Task</h2>
                                    <div className="w-[100%]">

                                        <div className="w-[100%]">

                                            <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Name</label><br />
                                            <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        <div className="flex gap-[8px]">

                                        <div className="w-[50%]" >
                                            <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Status</label>    <br />
                                            <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        <div className="w-[50%]">

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Type</label>    <br />
                                        <select className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                                            <option>Graphic</option>
                                            <option>Video</option>
                                        </select>
                                        </div>
                                        </div>
                                        <div className="flex gap-[8px]">
                                         <div className="w-[50%]">
                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Start Date</label>    <br />
                                        <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%]  mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        <div className="w-[50%]">
                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>End Date</label>    <br />
                                        <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]   focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        </div>
                                        <div className="flex gap-[8px]">
                                            <div className="w-[50%]">
                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Due Date</label>    <br />
                                        <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        <div className="w-[50%]">

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Select Project</label>    <br />
                                        <select className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                                            <option>Graphic</option>
                                            <option>Video</option>
                                        </select>
                                        </div>
                                        </div>

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Select Department</label>    <br />
                                        <select className='border border-1 rounded-md p-[5px] mt-1 mb-[10px] w-full  focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px]   hover:bg-[#fff]'>
                                            <option>Graphic</option>
                                            <option>Video</option>
                                        </select>
                                        <div className="flex gap-[8px]">
                                           <div className="w-[50%]">
                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Assignee</label><br />
                                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        <div className="w-[50%]">
                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Discription</label><br />
                                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        </div>

                                        <div className="flex gap-[8px]">
                                            <div className="w-[50%]">

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium mb-3'><SellIcon className='sell-icon' />Task Tag</label><br />
                                        <input type='text' className=' mb-[10px]  pr-2 focus:outline-none tag-input mt-2' placeholder='Tag' />    <br />
                                        </div>
                                        <div className="w-[50%]">

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Priority</label><br />
                                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                        </div>
                                        </div>

                                        <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Task Reminder</label><br />
                                        <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />

                                        <div>
                                            <label className='text-[13px] xl:text-[14px] text-[#000000ba] font-medium'>Attach File</label><br />
                                            <div className='relative'>
                                                <input type='file' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                                                <button onClick={addNewDiv} >
                                                    <AddIcon className='plus-icon' />
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            {/* Dynamically render each div */}
                                            {divs.map((_, index) => (
                                                <div key={index} className='mb-[10px]'>
                                                    <label className='text-[13px] xl:text-[14px] font-medium'>Attach File {index + 1}</label><br />
                                                    <div className='relative'>
                                                        <input
                                                            type='file'
                                                            className='border border-1 rounded-md p-[5px] mt-1 w-[100%] mb-[10px] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'
                                                        />

                                                        {/* Remove Button for every div */}
                                                        <button onClick={() => removeDiv(index)} className='  rounded plus-icon'>
                                                            <RemoveIcon />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}


                                        </div>
                                        {/* <div className='flex'>
                                    <input type='number' placeholder='22' className='border border-1 rounded-md p-[5px] mt-1 w-[100%]  focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />    <br />
                                    <select className='border border-1 rounded-md p-[5px] mt-1 w-[94%]   focus:outline-none text-[#000] placeholder:font-font-normal xl:text-[14px] text-[12px] mr-[0px] ml-[7px] hover:bg-[#fff]'>
                                        <option>Months</option>
                                        <option>Weekly</option>
                                        <option>Daily</option>
                                        <option>Hourly</option>
                                    </select>
                                </div> */}


                                        {/* <DescriptionEditer /> */}

                                        <div className='pr-[10px] pb-3 flex gap-[10px] justify-end border-t pt-3'>
                                            {/* Button to close the modal */}
                                            <button
                                                className="bg-red-500 text-white px-4 py-2 rounded"
                                                onClick={toggleModal15}
                                            >
                                                Close Modal
                                            </button>
                                            <button className='second-btn'>Save </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        )}
                    </div>

      {accordionItems.map((item, index) => (
        <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden whitespace-nowrap">
          <button
            className="w-full text-left bg-white whitespace-nowrap"
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </button>
          {openIndex === index && (
            <div className="transition-all duration-300 ease-in-out bg-white">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Task;



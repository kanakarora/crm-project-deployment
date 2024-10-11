
import AddIcon from '@mui/icons-material/Add';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Link } from "react-router-dom";
import BarChartIcon from '@mui/icons-material/BarChart';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
const ExpensePage = () => {

    // Step 1: Modal state to track visibility
    const [isOpen, setIsOpen] = useState(false);

    // Step 2: Function to open/close modal
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    // Step 3: Modal state to track visibility
    const [isOpen2, setIsOpen2] = useState(false);

    // Step 3: Function to open/close modal
    const toggleModal2 = () => {
        setIsOpen2(!isOpen2);
    };



    //salary dropdown
    const [isOpen1, setIsOpen1] = useState(false);



    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };
    return (
        <>
            <div className='flex items-center justify-between mb-[20px]'>
                <div className='flex items-center gap-[8px]'>
                    <div className="flex items-center justify-center h-[50px]">
                        {/* Button to trigger the modal */}
                        <button
                            onClick={toggleModal}
                            className="p-[7px] flex items-center gap-[3px] rounded-lg bg-[#8a25b0] text-[14px] text-white"
                        >
                            <AddIcon className='newadd' /> Record Expense
                        </button>

                        {/* Modal Component */}
                        {isOpen && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                {/* Modal Overlay */}
                                <div className="absolute inset-0 bg-gray-800 opacity-75"></div>

                                {/* Modal Content */}
                                <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 w-1/3">
                                    <h2 className='text-[16px] font-medium mb-[8px]'>Add new Expense</h2>
                                    <div className='w-[100%]'>
                                        <form className=' w-[96%]  shadow-md  xl:p-[20px] p-[10px] border rounded-md  border-1'>
                                            <div className='flex xl:flex-col flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>

                                                <div className='w-[100%] xl:[48%] '>

                                                    <input type='file' placeholder='Enter Address' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

                                                </div>
                                                <div className='w-[100%] xl:[48%] '>
                                                    <label className='text-[14px]'>*Name</label><br />
                                                    <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

                                                </div>

                                                <div className='w-[100%] xl:[48%] '>
                                                    <label className='text-[14px]'>*Note</label><br />
                                                    <textarea className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'></textarea>


                                                </div>



                                                <div className='w-[100%]  xl:[48%] relative'>
                                                    <label className='text-[14px]'>*Expense Category</label><br />
                                                    <select className='border border-1 rounded-md p-[5px] mt-1 w-[94%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'>
                                                        <option>Nothing Selected</option>
                                                    </select>

                                                    <div className=" h-[50px] absolute right-[-15px] bottom-[-20px]">
                                                        {/* Button to trigger the modal */}
                                                        <button
                                                        type='button'
                                                            onClick={toggleModal2}
                                                            className="p-[7px] flex items-center gap-[3px] rounded-lg bg-[#fff] error-data text-[14px] text-black"
                                                        >
                                                            <AddIcon className='newadd' />
                                                        </button>

                                                        {/* Modal Component */}
                                                        {isOpen2 && (
                                                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                                                {/* Modal Overlay */}
                                                                <div className="absolute inset-0 bg-gray-800 opacity-75"></div>

                                                                {/* Modal Content */}
                                                                <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 w-1/3">
                                                                    <h2 className='text-[16px] font-medium mb-[8px]'>New Category</h2>
                                                                    <div className='w-[100%]'>
                                                                        <form className=' w-[96%]  shadow-md  xl:p-[20px] p-[10px] border rounded-md  border-1'>
                                                                            <div className='flex xl:flex-col flex-col w-[100%] gap-[10px] justify-between mb-[10px] '>


                                                                                <div className='w-[100%] xl:[48%] '>
                                                                                    <label className='text-[14px]'>*Category Name</label><br />
                                                                                    <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

                                                                                </div>

                                                                                <div className='w-[100%] xl:[48%] '>
                                                                                    <label className='text-[14px]'>Category Description</label><br />
                                                                                    <textarea className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]'></textarea>


                                                                                </div>






                                                                            </div>
                                                                        </form>


                                                                    </div>
                                                                    <div className='flex items-center gap-[8px] justify-end mt-[10px]'>
                                                                        <button
                                                                            onClick={toggleModal2}
                                                                            className="p-[8px] w-[30%] flex items-center gap-[3px] justify-center rounded-lg bg-[red] text-[14px] text-white"
                                                                        >
                                                                            Close Modal
                                                                        </button>
                                                                        <button className='p-[8px] w-[100px] flex items-center gap-[3px] justify-center rounded-lg bg-[#8a25b0] text-[14px] text-white'>Save</button>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>

                                                <div className='w-[100%] xl:[48%] '>
                                                    <label className='text-[14px]'>*Expense Date</label><br />
                                                    <input type='date' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

                                                </div>

                                                <div className='w-[100%] xl:[48%] '>
                                                    <label className='text-[14px]'>*Amount</label><br />
                                                    <input type='text' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#F4F5F9] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />

                                                </div>


                                            </div>
                                        </form>


                                    </div>
                                    <div className='flex items-center gap-[8px] justify-end mt-[10px]'>
                                        <button
                                            onClick={toggleModal}
                                            className="p-[8px] w-[30%] flex items-center gap-[3px] justify-center rounded-lg bg-[red] text-[14px] text-white"
                                        >
                                            Close Modal
                                        </button>
                                        <button className='p-[8px] w-[100px] flex items-center gap-[3px] justify-center rounded-lg bg-[#8a25b0] text-[14px] text-white'>Save</button>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className='p-[7px] flex items-center gap-[3px] rounded-lg bg-[#8a25b0] text-[14px] text-white'><ImportExportIcon className='newadd' />import Expense</button>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <Link className='doublearrow rounded-md'><KeyboardDoubleArrowLeftIcon className='arrow-new3' /></Link>
                    <Link className='doublearrow rounded-md'><BarChartIcon className='arrow-new3' /></Link>
                    <Link className='doublearrow rounded-md'><FilterAltIcon className='arrow-new3' /></Link>

                </div>
            </div>
            <div className='bg-white p-[16px] summary-border rounded-md'>
                <div className="flex justify-between items-center">
                    <div className="flex gap-[10px]">
                        <div className="relative inline-block text-left">
                            {/* Button to open/close the dropdown */}
                            <button
                                className=" items-center p-[6px] text-left text-[12px] text-sm font-normal text-[black] select-pe  rounded-md  focus:outline-none"
                                onClick={toggleDropdown1}
                            >
                                25 <KeyboardArrowDownIcon className="newadd" />
                            </button>

                            {/* Dropdown menu */}
                            {isOpen1 && (
                                <div className="absolute right-0 w-[100%] z-10 mt-2  origin-top-right left-[0px] bg-white border border-gray-200 rounded-md shadow-lg">
                                    <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <a
                                            href="#"
                                            className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            30
                                        </a>
                                        <a
                                            href="#"
                                            className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            40
                                        </a>
                                        <a
                                            href="#"
                                            className="block p-[5px] text-center text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            50
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <p className="  p-[7px] text-[12px] w-[55px] font-medium summary-border rounded-md  "> Export </p>

                        <p className=" relative p-[7px] text-[12px] w-[116px] font-medium summary-border rounded-md  "> Bulk Actions <CachedIcon className="absolute cursor-pointer right-[5px] top-[9px] newadd2" /> </p>

                    </div>
                    <div className="relative">
                        <input className="p-[6px] rounded-2xl  summary-border text-[13px] " type="text" placeholder=" Search......." />
                        <SearchIcon className="absolute newadd2 right-[8px] top-[8px]" />
                    </div>
                </div>

                <div className='w-[100%] overflow-scroll'>
                    <table className='table-section mt-4'>
                        <thead className='border border-1 '>
                            <th><input className='checkbox-3' type="checkbox" /></th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Name</th>
                            <th>Reciept</th>
                            <th>Date</th>
                            <th>Project</th>
                            <th>Customer</th>
                            <th>Invoice</th>
                            <th>Refernce #</th>
                            <th>Payment Mode</th>


                        </thead>

                    </table>

                </div>
                <p className='text-[14px] mt-[14px]'>No entries found</p>

            </div>
        </>

    )
}

export default ExpensePage
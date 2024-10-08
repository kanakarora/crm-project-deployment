import React from 'react';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddNewRole = () => {

    const navigate = useNavigate();
    return (
        <div className='addnewrole  pl-[10px] w-[100%] pr-2 mb-3 pb-4'>
            <h2>Add New Role</h2>

            <div className='bg-[#f1f5f9] p-3 lg:w-[50%] w-[100%] mt-2 rounded-md'>
                <label>Role Name</label><br />
                <input type='text' className='mt-2 border border-1 pl-3 h-[43px] pr-7
] rounded-md focus:outline-none w-[100%] text-[15px] text-[#aeabab]'/>
                <table className='border mt-5 w-[100%] border-1'>
                    <thead className='border border-1 '>
                        <th className='p-2 text-left font-medium border-r-[1px]'>Features</th>
                        <th className='p-2 text-left  font-medium'>Capabilities</th>

                    </thead>
                    <tbody className='table-body-set'>
                        <tr className='border border-1'>
                            <td className='p-3 text-[14px] border-r-[1px] text-[#64748b] font-normal'>Clients</td>
                            <td className='p-3'>
                                <input type="checkbox" className='cursor-pointer' id="client" name="vehicle1" value="Bike" />
                                <label className='ml-3 text-[13px] cursor-pointer  text-[#64748b] ' for="client">View Global</label><br />
                                <input type="checkbox" className='cursor-pointer' id="client1" name="vehicle2" value="Car" />
                                <label className='ml-2 cursor-pointer text-[13px]  text-[#64748b] ' for="client1"> Create</label><br />
                                <input type="checkbox" className='cursor-pointer' id="client2" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="client2">Edit</label><br />
                                <input type="checkbox" className='cursor-pointer' id="client3" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="client3">Delete</label><br /><br />
                            </td>
                        </tr>

                        <tr className='border border-1'>
                            <td className='p-3 text-[14px] text-[#64748b] border-r-[1px] font-normal'>Projects</td>
                            <td className='p-3'>
                                <input type="checkbox" className='cursor-pointer' id="project" name="vehicle1" value="Bike" />
                                <label className='ml-3 text-[13px] cursor-pointer  text-[#64748b] ' for="project">View Global</label><br />
                                <input type="checkbox" className='cursor-pointer' id="project1" name="vehicle2" value="Car" />
                                <label className='ml-2 cursor-pointer text-[13px]  text-[#64748b] ' for="project1"> Create</label><br />
                                <input type="checkbox" className='cursor-pointer' id="project2" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="project2">Edit</label><br />
                                <input type="checkbox" className='cursor-pointer' id="project3" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="project3">Delete</label><br /><br />
                            </td>
                        </tr>


                        <tr className='border border-1'>
                            <td className='p-3 text-[14px] border-r-[1px] text-[#64748b] font-normal'>Report</td>
                            <td className='p-3'>
                                <input type="checkbox" className='cursor-pointer' id="report" name="vehicle1" value="Bike" />
                                <label className='ml-3 text-[13px] cursor-pointer  text-[#64748b] ' for="report">View Global</label><br />
                                <input type="checkbox" className='cursor-pointer' id="report1" name="vehicle2" value="Car" />
                                <label className='ml-2 cursor-pointer text-[13px]  text-[#64748b] ' for="report1"> View Timesheets Report</label><br />
                            </td>
                        </tr>

                        <tr className='border border-1'>
                            <td className='p-3 text-[14px] border-r-[1px] text-[#64748b] font-normal'>Staff Role</td>
                            <td className='p-3'>
                                <input type="checkbox" className='cursor-pointer' id="staffrole" name="vehicle1" value="Bike" />
                                <label className='ml-3 text-[13px] cursor-pointer  text-[#64748b] ' for="staffrole">View Global</label><br />
                                <input type="checkbox" className='cursor-pointer' id="staffrole1" name="vehicle2" value="Car" />
                                <label className='ml-2 cursor-pointer text-[13px]  text-[#64748b] ' for="staffrole1"> Create</label><br />
                                <input type="checkbox" className='cursor-pointer' id="staffrole2" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="staffrole2">Edit</label><br />
                                <input type="checkbox" className='cursor-pointer' id="staffrole3" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="staffrole3">Delete</label><br /><br />
                            </td>
                        </tr>

                        <tr className='border border-1'>
                            <td className='p-3 text-[14px] border-r-[1px] text-[#64748b] font-normal'>Setting</td>
                            <td className='p-3'>
                                <input type="checkbox" className='cursor-pointer' id="setting" name="vehicle1" value="Bike" />
                                <label className='ml-3 text-[13px] cursor-pointer  text-[#64748b] ' for="setting">View Global</label><br />
                                <input type="checkbox" className='cursor-pointer' id="setting1" name="vehicle2" value="Car" />
                                <label className='ml-2 cursor-pointer text-[13px]  text-[#64748b] ' for="setting1"> View Timesheets Report</label><br />
                            </td>
                        </tr>

                        <tr className='border border-1'>
                            <td className='p-3 text-[14px] border-r-[1px] text-[#64748b] font-normal'>Staff </td>
                            <td className='p-3'>
                                <input type="checkbox" className='cursor-pointer' id="staff" name="vehicle1" value="Bike" />
                                <label className='ml-3 text-[13px] cursor-pointer  text-[#64748b] ' for="staff">View Global</label><br />
                                <input type="checkbox" className='cursor-pointer' id="staff1" name="vehicle2" value="Car" />
                                <label className='ml-2 cursor-pointer text-[13px]  text-[#64748b] ' for="staff1"> Create</label><br />
                                <input type="checkbox" className='cursor-pointer' id="staff2" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="staff2">Edit</label><br />
                                <input type="checkbox" className='cursor-pointer' id="staff3" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="staff3">Delete</label><br /><br />
                            </td>
                        </tr>

                        <tr className='border border-1'>
                            <td className='p-3 text-[14px] border-r-[1px] text-[#64748b] font-normal'>Task </td>
                            <td className='p-3'>
                                <input type="checkbox" className='cursor-pointer' id="task" name="vehicle1" value="Bike" />
                                <label className='ml-3 text-[13px] cursor-pointer  text-[#64748b] ' for="task">View Global</label><br />
                                <input type="checkbox" className='cursor-pointer' id="task1" name="vehicle2" value="Car" />
                                <label className='ml-2 cursor-pointer text-[13px]  text-[#64748b] ' for="task1"> Create</label><br />
                                <input type="checkbox" className='cursor-pointer' id="task2" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="task2">Edit</label><br />
                                <input type="checkbox" className='cursor-pointer' id="task3" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="task3">Delete</label><br /><br />
                            </td>
                        </tr>

                        <tr className='border border-1'>
                            <td className='p-3 text-[14px] border-r-[1px] text-[#64748b] font-normal'>Sub Task </td>
                            <td className='p-3'>
                                <input type="checkbox" className='cursor-pointer' id="subtask" name="vehicle1" value="Bike" />
                                <label className='ml-3 text-[13px] cursor-pointer  text-[#64748b] ' for="subtask">View Global</label><br />
                                <input type="checkbox" className='cursor-pointer' id="subtask1" name="vehicle2" value="Car" />
                                <label className='ml-2 cursor-pointer text-[13px]  text-[#64748b] ' for="subtask1"> Create</label><br />
                                <input type="checkbox" className='cursor-pointer' id="subtask2" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="subtask2">Edit</label><br />
                                <input type="checkbox" className='cursor-pointer' id="subtask3" name="vehicle3" value="Boat" />
                                <label className='ml-3 cursor-pointer text-[13px]  text-[#64748b] ' for="subtask3">Delete</label><br /><br />
                            </td>
                        </tr>

                        <tr className='border border-1'>
                            <td className='p-3 text-[14px] border-r-[1px] whitespace-nowrap text-[#64748b] font-normal'>Chat Module </td>
                            <td className='p-3'>
                                <input type="checkbox" className='cursor-pointer' id="chat" name="vehicle1" value="Bike" />
                                <label className='ml-3 text-[13px] cursor-pointer  text-[#64748b] ' for="chat">Grant Access</label><br />
                            </td>
                        </tr>

                    </tbody>
                </table>


                <div className='text-end mt-3'>
                    <button className='bg-[#511992] pt-2 py-2 pl-5 pr-5 rounded-md text-white hover:bg-[#7526d1]' onClick={() => navigate('/role')}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewRole
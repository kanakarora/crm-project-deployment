import React, { useState } from "react";
import { motion } from "framer-motion";

const AddNewTask = ({ onClose, onSave }) => {
  const [closeBtn, setCloseBtn] = useState(false);
  const [formData, setFormData] = useState({
    taskName: "",
    taskStatus: "Pending",
    taskType: "Graphic",
    startDate: "",
    dueDate: "",
    endDate: "",
    project: "Graphic",
    assigned: "",
    taskTimer: "",
    taskActivity: "in Proceed",
    attachFile: null,
    taskTag: "",
    taskPriority: "High",
    taskReminder: "",
    taskDescription: "",
  });

  function handleClosebtn() {
    setCloseBtn(true);
    onClose(); // Call the onClose prop to notify parent component
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      attachFile: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Notify parent component with the form data
    handleClosebtn(); // Close the form after saving
  };

  return (
    <div>
      {!closeBtn && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="2xl:fixed xl:fixed lg:fixed md:fixed sm:fixed inset-0 z-50 flex justify-center items-center"
        >
          
          <div className="bg-white p-8 rounded-lg shadow-lg w-[65%] h-[70%] overflow-auto">
            <h1 className="text-[20px] font-semibold border-b border-[#B1B1B1] pb-8">
              Add New Task
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="font-normal grid grid-cols-3 gap-4 mt-5 text-[#2B2A2D] max-[900px]:block max-[900px]:space-y-3">
                <div className="flex flex-col">
                  <label htmlFor="text">Task Name</label>
                  <input
                    name="taskName"
                    value={formData.taskName}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] rounded-md h-[46px] border-[1px] border-[#DBDCDE]"
                    type="text"
                    required
                  />
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="text">Task Status</label>
                  <select
                    name="taskStatus"
                    value={formData.taskStatus}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] rounded-md h-[46px] p-2 border-[1px] border-[#DBDCDE]"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="taskType">Task Type</label>
                  <select
                    name="taskType"
                    value={formData.taskType}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] rounded-md h-[46px] p-2 border-[1px] border-[#DBDCDE]"
                  >
                    <option value="Graphic">Graphic</option>
                    <option value="Video">Video</option>
                  </select>
                </div>
              </div>

              <div className="font-normal grid grid-cols-3 gap-4 mt-5 text-[#2B2A2D] max-[900px]:block max-[900px]:space-y-3">
                <div className="flex flex-col">
                  <label htmlFor="text">Start Date</label>
                  <input
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] p-2 rounded-md h-[46px] border-[1px] border-[#DBDCDE]"
                    type="date"
                  />
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="text">Due Date</label>
                  <input
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] p-2 rounded-md h-[46px] border-[1px] border-[#DBDCDE]"
                    type="date"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="text">End Date</label>
                  <input
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] p-2 rounded-md h-[46px] border-[1px] border-[#DBDCDE]"
                    type="date"
                  />
                </div>
              </div>

              <div className="font-normal grid w-auto grid-cols-2 gap-4  mt-5 text-[#2B2A2D]">
                <div className="flex flex-col">
                  <label htmlFor="text">Select Project</label>
                  <select
                    name="selectProject"
                    value={formData.project}
                    onChange={handleChange}
                    className="bg-[#F4F5F9]  rounded-md h-[46px] p-2 border-[1px] border-[#DBDCDE]"
                  >
                    <option value="1">Graphic</option>
                    <option value="1">Video</option>
                  </select>
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="text">Assigned</label>
                  <input
                    name="assigned"
                    value={formData.assigned}
                    onChange={handleChange}
                    className="bg-[#F4F5F9]   rounded-md h-[46px] border-[1px] border-[#DBDCDE]"
                    type="text"
                  />
                </div>
              </div>

              <div className="font-normal grid grid-cols-3 gap-4 mt-5 text-[#2B2A2D] max-[900px]:block max-[900px]:space-y-3">
                <div className="flex flex-col">
                  <label htmlFor="text">Task Timer</label>
                  <input
                    name="taskTimer"
                    value={formData.taskTimer}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] p-2 rounded-md h-[46px] border-[1px] border-[#DBDCDE]"
                    type="date"
                  />
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="text">Task Activity</label>
                  <select
                    name="taskActivity"
                    value={formData.taskActivity}
                    onChange={handleChange}
                    className="bg-[#F4F5F9]  rounded-md h-[46px] p-2 border-[1px] border-[#DBDCDE]"
                  >
                    <option value="1">in Proceed</option>
                    <option value="1">Finished</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="text">Attach File</label>
                  <input
                    name="file"
                    value={formData.attachFile}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] p-2 rounded-md h-[46px] border-[1px] border-[#DBDCDE]"
                    type="file"
                  />
                </div>
              </div>

              <div className="font-normal grid grid-cols-3 gap-4 mt-5 text-[#2B2A2D] max-[900px]:block max-[900px]:space-y-3">
                <div className="flex flex-col">
                  <label htmlFor="text">Task Tag</label>
                  <input
                    name="taskTag"
                    value={formData.taskTag}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] p-2 rounded-md h-[46px] border-[1px] border-[#DBDCDE]"
                    type="text"
                  />
                </div>

                <div className="flex flex-col ">
                  <label htmlFor="text">Task Priority</label>
                  <select
                    name="priority"
                    value={formData.taskPriority}
                    onChange={handleChange}
                    className="bg-[#F4F5F9]  rounded-md h-[46px] p-2 border-[1px] border-[#DBDCDE]"
                  >
                    <option value="1">High</option>
                    <option value="1">Normal</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="text">Task Reminder</label>
                  <input
                    name="reminder"
                    value={formData.taskReminder}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] p-2 rounded-md h-[46px] border-[1px] border-[#DBDCDE]"
                    type="date"
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-col mt-5">
                  <label htmlFor="text">Task Description</label>
                  <textarea
                    name="description"
                    value={formData.taskDescription}
                    onChange={handleChange}
                    className="bg-[#F4F5F9] rounded-md h-[8rem] border-[1px] border-[#DBDCDE]"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex gap-6 justify-end border-t border-[#B1B1B1] mt-14">
                <div className="pt-5 space-x-8 flex justify-end">
                  <button
                    onClick={handleClosebtn}
                    type="button"
                    className="px-6 py-2 text-[#511992] border-[#511992] border rounded-lg"
                  >
                    Close
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#511992] border-[#511992] border text-white rounded-lg"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AddNewTask;
import React, { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
const Note = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color , setColor] = useState("green");

  const handleChange = (event) => {
    setColor(event.target.value);
  };
  const textColor = () => {
    switch (color) {
      case 'info':
        return {
            textColor: 'text-green-500',
            background: 'bg-green-50',
          }; 
      case 'warning':
        return {
            textColor: 'text-yellow-500',
            background: 'bg-yellow-50',
          };
      case 'danger':
        return {
            textColor: 'text-red-500',
            background: 'bg-red-100',
          };
      default:
        return {
            textColor: 'text-black',
            background: 'bg-white',
          };
    }
  };

  const colorStyles = textColor();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className='main-notes p-[20px]'>
      <div className='flex items-center'>
        <Link className='text-[#8a25b0] ' to="/">Home</Link>
        <div className='flex items-center gap-[8px] ml-[8px]'>
          <KeyboardArrowRightIcon />
          <p>Notes</p>
        </div>
        <div className="flex justify-end w-[100%]">
          <button
            className="px-4 py-2 bg-[#8a25b0] text-white rounded-md"
            onClick={handleOpen}
          >
            +
          </button>

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Create Note</h2>
                <div className="mb-[24px]">
                  <div className='w-[100%] xl:[48%] mb-[10px] '>

                    <label className='text-[14px]'>*Title</label><br />
                    <input type='text' placeholder='' className='border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]' />
                  </div>
                  <div className='w-[100%] xl:[48%] mb-[10px] '>

                    <label className='text-[14px]'>*Description</label><br />
                    <textarea placeholder="Please enter a description" className="border border-1 rounded-md p-[5px] mt-1 w-[100%] bg-[#fff] focus:outline-none text-[#000] placeholder:font-font-normal text-[14px]" >

                    </textarea>
                  </div>
                  <div className='w-[100%]  xl:[48%] mb-[26px]'>
                    <label className='text-[14px]'>*Color</label><br />
                    <select name="color" value={color}  onChange={handleChange} className={`border border-1 rounded-md p-[5px]  text-center mt-1 w-[100%] bg-[#F4F5F9] select-bg-label-success focus:outline-none text-[#000] placeholder:font-font-normal text-[14px] ${colorStyles.textColor} ${colorStyles.background}`}>
                      <option className="bg-label-success" value="info">Green</option>
                      <option className="bg-label-warning"  value="warning">Yellow</option>
                      <option className="bg-label-danger" value="danger">Red</option>
                    </select>
                  </div>

                </div>
                <div className="flex gap-[6px] items-center justify-end ">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                    onClick={handleClose}
                  >
                    Close Modal
                  </button>
                  <button className="second-btn">Create</button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      <div className="bg-white shadow-lg p-[26px] ">
        <div class="grid gap-x-8 gap-y-4 grid-cols-3">


          <div className="bg-[#ffffcc] p-[14px] rounded-lg interview-card">
            <div className="flex justify-end items-center gap-[5px]">
              <button className="bg-[#8a25b0] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><EditNoteIcon className="text-white edit-icon"/></button>
              <button className="bg-[red] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><DeleteIcon className="text-white edit-icon"/></button>
            </div>
            <h4 className="font-medium mb-[10px] text-[20px] text-[#8a25b0]">Interview</h4>
            <p className="mb-[10px]">wretwre</p>
          <div className="flex gap-[8px] items-center">
            <p className="text-[16px] text-[red]" >Created at :</p>
            <span className="text-[#8a25b0] text-[14px]">25-09-2024</span>
            </div>
          </div>

          <div className="bg-[#ffffcc] p-[14px] rounded-lg interview-card">
            <div className="flex justify-end items-center gap-[5px]">
              <button className="bg-[#8a25b0] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><EditNoteIcon className="text-white edit-icon"/></button>
              <button className="bg-[red] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><DeleteIcon className="text-white edit-icon"/></button>
            </div>
            <h4 className="font-medium mb-[10px] text-[20px] text-[#8a25b0]">Interview</h4>
            <p className="mb-[10px]">wretwre</p>
          <div className="flex gap-[8px] items-center">
            <p className="text-[16px] text-[red]" >Created at :</p>
            <span className="text-[#8a25b0] text-[14px]">25-09-2024</span>
            </div>
          </div>

          <div className="bg-[#ccffcc] p-[14px] rounded-lg interview-card">
            <div className="flex justify-end items-center gap-[5px]">
              <button className="bg-[#8a25b0] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><EditNoteIcon className="text-white edit-icon"/></button>
              <button className="bg-[red] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><DeleteIcon className="text-white edit-icon"/></button>
            </div>
            <h4 className="font-medium mb-[10px] text-[20px] text-[#8a25b0]">Interview</h4>
            <p className="mb-[10px]">wretwre</p>
          <div className="flex gap-[8px] items-center">
            <p className="text-[16px] text-[red]" >Created at :</p>
            <span className="text-[#8a25b0] text-[14px]">25-09-2024</span>
            </div>
          </div>

          <div className="bg-[#ccffcc] p-[14px] rounded-lg interview-card">
            <div className="flex justify-end items-center gap-[5px]">
              <button className="bg-[#8a25b0] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><EditNoteIcon className="text-white edit-icon"/></button>
              <button className="bg-[red] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><DeleteIcon className="text-white edit-icon"/></button>
            </div>
            <h4 className="font-medium mb-[10px] text-[20px] text-[#8a25b0]">Interview</h4>
            <p className="mb-[10px]">wretwre</p>
          <div className="flex gap-[8px] items-center">
            <p className="text-[16px] text-[red]" >Created at :</p>
            <span className="text-[#8a25b0] text-[14px]">25-09-2024</span>
            </div>
          </div>

          <div className="bg-[#9dffb4] p-[14px] rounded-lg interview-card">
            <div className="flex justify-end items-center gap-[5px]">
              <button className="bg-[#8a25b0] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><EditNoteIcon className="text-white edit-icon"/></button>
              <button className="bg-[red] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><DeleteIcon className="text-white edit-icon"/></button>
            </div>
            <h4 className="font-medium mb-[10px] text-[20px] text-[#8a25b0]">Interview</h4>
            <p className="mb-[10px]">wretwre</p>
          <div className="flex gap-[8px] items-center">
            <p className="text-[16px] text-[red]" >Created at :</p>
            <span className="text-[#8a25b0] text-[14px]">25-09-2024</span>
            </div>
          </div>

          <div className="bg-[#9dffb4] p-[14px] rounded-lg interview-card">
            <div className="flex justify-end items-center gap-[5px]">
              <button className="bg-[#8a25b0] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><EditNoteIcon className="text-white edit-icon"/></button>
              <button className="bg-[red] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><DeleteIcon className="text-white edit-icon"/></button>
            </div>
            <h4 className="font-medium mb-[10px] text-[20px] text-[#8a25b0]">Interview</h4>
            <p className="mb-[10px]">wretwre</p>
          <div className="flex gap-[8px] items-center">
            <p className="text-[16px] text-[red]" >Created at :</p>
            <span className="text-[#8a25b0] text-[14px]">25-09-2024</span>
            </div>
          </div>

          <div className="bg-[#9dffb4] p-[14px] rounded-lg interview-card">
            <div className="flex justify-end items-center gap-[5px]">
              <button className="bg-[#8a25b0] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><EditNoteIcon className="text-white edit-icon"/></button>
              <button className="bg-[red] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><DeleteIcon className="text-white edit-icon"/></button>
            </div>
            <h4 className="font-medium mb-[10px] text-[20px] text-[#8a25b0]">Interview</h4>
            <p className="mb-[10px]">wretwre</p>
          <div className="flex gap-[8px] items-center">
            <p className="text-[16px] text-[red]" >Created at :</p>
            <span className="text-[#8a25b0] text-[14px]">25-09-2024</span>
            </div>
          </div>

          <div className="bg-[#9dffb4] p-[14px] rounded-lg interview-card">
            <div className="flex justify-end items-center gap-[5px]">
              <button className="bg-[#8a25b0] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><EditNoteIcon className="text-white edit-icon"/></button>
              <button className="bg-[red] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><DeleteIcon className="text-white edit-icon"/></button>
            </div>
            <h4 className="font-medium mb-[10px] text-[20px] text-[#8a25b0]">Interview</h4>
            <p className="mb-[10px]">wretwre</p>
          <div className="flex gap-[8px] items-center">
            <p className="text-[16px] text-[red]" >Created at :</p>
            <span className="text-[#8a25b0] text-[14px]">25-09-2024</span>
            </div>
          </div>

          <div className="bg-[#ffffcc] p-[14px] rounded-lg interview-card">
            <div className="flex justify-end items-center gap-[5px]">
              <button className="bg-[#8a25b0] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><EditNoteIcon className="text-white edit-icon"/></button>
              <button className="bg-[red] h-[30px] flex items-center justify-center w-[30px] p-[4px] rounded-md"><DeleteIcon className="text-white edit-icon"/></button>
            </div>
            <h4 className="font-medium mb-[10px] text-[20px] text-[#8a25b0]">Interview</h4>
            <p className="mb-[10px]">wretwre</p>
          <div className="flex gap-[8px] items-center">
            <p className="text-[16px] text-[red]" >Created at :</p>
            <span className="text-[#8a25b0] text-[14px]">25-09-2024</span>
            </div>
          </div>
          
         
        </div>

      </div>
    </div>
  )
}


export default Note;
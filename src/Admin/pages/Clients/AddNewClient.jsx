import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import CustomDialog from "./DialougeBox";
import { MdOutlineDone } from "react-icons/md";
const AddNewClient = () =>{
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [defaultLanguages , setDefaultLanguages] = useState(["portuguese","German","indonesia","catlan" , "Spanish" , "Turkish" , "Slovak" , "Vitnamese" , "Swedish" , "Portguese_br"])
  
  const groups = [
    { id: 1, name: 'ASTROPITAH SMM PROJECT' },
    { id: 2, name: 'digital' },
    { id: 3, name: 'HONEY TOUR & TRAVELS' },
    { id: 4, name: 'vevge' },
    { id: 5, name: 'webs' }
  ];
  

  return(
<div class="bg-gray-100 flex justify-center items-center min-h-screen">

<div class="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
  <div class="mb-6">
    {/* <!-- Tabs for form sections --> */}
    <nav class="flex space-x-4 border-b">
      <a href="#" class=" py-2 hover:border-b-2 hover:border-blue-600 text-sm font-medium">Customer Details</a>
      <a href="#" class="text-gray-600 py-2 text-sm font-medium hover:border-b-2 hover:border-blue-600">Billing & Shipping</a>
    </nav>
  </div>

  {/* <!-- Form starts --> */}
  <form>
    <div class="grid grid-cols-1 gap-6">
      {/* <!-- Company --> */}
      <div>
        <label for="company" class="block text-sm font-medium text-gray-700">Company *</label>
        <input type="text" id="company" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>

      {/* <!-- VAT Number --> */}
      <div>
        <label for="vat" class="block text-sm font-medium text-gray-700">VAT Number</label>
        <input type="text" id="vat" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>

      {/* <!-- Phone --> */}
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
        <input type="tel" id="phone" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>

      {/* <!-- Website --> */}
      <div>
        <label for="website" class="block text-sm font-medium text-gray-700">Website</label>
        <input type="url" id="website" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>

      {/* <!-- Groups --> */}
      <div className="relative">
        <label for="groups" class="block text-sm font-medium text-gray-700">Groups</label>
        <div className="relative">
                <input 
                  type="text" 
                  id="groups" 
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 pr-16 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                  placeholder="Nothing selected" 
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 mt-1">
                  <IoIosArrowDown  className="h-4 w-4 text-gray-400 mr-2" onClick={() => setIsOpen(!isOpen)}/>
                  <FiPlus  className="h-4 w-4 text-gray-400"  onClick={() => setIsDialogOpen(true)}/>
                </div>
              </div>
              <CustomDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
        {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="border-b border-gray-200">
            <div className="flex justify-between px-4 py-2 text-sm text-black-600">
              <button className="hover:underline border border-gray-200 w-1/2 py-2">Select All</button>
              <button className="hover:underline border border-gray-200 w-1/2 py-2">Deselect All</button>
            </div>
          </div>
          <ul className="max-h-60 overflow-auto">
            {groups.map(group => (
              <li 
                key={group.id}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <span className="text-sm">{group.name}</span>
                {group.selected && <MdOutlineDone className="h-4 w-4 text-blue-600" />}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>

      {/* <!-- Currency and Default Language in one row --> */}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* <!-- Currency --> */}
        <div>
          <label for="currency" class="block text-sm font-medium text-gray-700">Currency</label>
          <select id="currency" class="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="default">System Default</option>
            <option value="usd">USD $</option>
            <option value="inr">INR ₹</option>
          </select>
        </div>

        {/* <!-- Default Language --> */}
        <div>
          <label for="language" class="block text-sm font-medium text-gray-700">Default Language</label>
          <select id="language" class="mt-1 block w-full border border-gray-300 bg-white rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          {defaultLanguages.map(option=>{
              return <>
               <option>{option}</option>
              </>
            })}
          </select>
        </div>
      </div>

      {/* <!-- Address --> */}
      <div>
        <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
        <input type="text" id="address" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>

      {/* <!-- City --> */}
      <div>
        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
        <input type="text" id="city" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>

      {/* <!-- State --> */}
      <div>
        <label for="state" class="block text-sm font-medium text-gray-700">State</label>
        <input type="text" id="state" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>

      {/* <!-- Zip Code --> */}
      <div>
        <label for="zip" class="block text-sm font-medium text-gray-700">Zip Code</label>
        <input type="text" id="zip" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>

      {/* <!-- Country --> */}
      <div>
        <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
        <input type="text" id="country" class="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>
    </div>

    {/* <!-- Submit Button --> */}
    <div class="mt-6  w-full md:w-[40%] flex p-2 justify-around  md:float-right">
      <button type="submit" class="   p-2 text-gray-400 border border-gray-400 rounded-md shadow-sm h focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 ">save and create contact</button>
      <button type="submit" class=" bg-blue-600 text-white p-2 px-3 rounded-md shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">save</button>
    </div>
  </form>
  {/* <!-- Form ends --> */}
</div>

</div>
  );
}

export default AddNewClient;



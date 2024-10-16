import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import group from "../../../Assets/Images/Group.svg";
import attendance from "../../../Assets/Images/attendance.svg";
import bank from "../../../Assets/Images/bank.svg";
import salary from "../../../Assets/Images/salary.svg";
import leave from "../../../Assets/Images/leave.svg";
import penalty from "../../../Assets/Images/penalty.svg";
import permission from "../../../Assets/Images/permission.svg";
import StaffTab from "./StaffTab";
import AttendanceTab from "./AttendanceTab";
import Penalty_Overtime from "./Penalty & Overtime/Penalty_Overtime";
import BankDetails from "./BankDetails";
import SalaryDetails from "./SalaryDetails";
import LeaveBalance from "../StaffSection/LeaveBalance";
import Permission from "./Permisson";

const StaffMenu = () => {
  return (
    <div className="staff-menu mx-4 my-3">
      <h3 className="text-[20px]  font-[Nunito]">My Staff</h3>

      <div className="tab-section overflow-x-auto mt-[30px] w-[100%]">
        <Tabs>
          <TabList className="flex gap-[22px] bg-[#FFFFFF] overflow-x-auto rounded-[12px]  p-[14px] pb-[4px]  set-shadow ">
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <img src={group} />
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">Staff</h2>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <img src={attendance} />
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Attendance{" "}
                </h2>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <img src={bank} />
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Bank Details
                </h2>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <img src={salary} />
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Salary Details
                </h2>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center whitespace-nowrap mr-[20px]">
                <img src={leave} />
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Leave Balances & Policy
                </h2>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <img src={penalty} />
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Penalty & Overtime{" "}
                </h2>
              </div>
            </Tab>
            <Tab>
              <div className="flex items-center  whitespace-nowrap mr-[20px]">
                <img src={permission} />
                <h2 className="text-sm text-[#B1B1B1]  ml-[15px]">
                  Permissions
                </h2>
              </div>
            </Tab>
          </TabList>

          <TabPanel>
            <StaffTab />
          </TabPanel>

          <TabPanel>
            <AttendanceTab />
          </TabPanel>
          <TabPanel>
            <BankDetails/>
          </TabPanel>
          <TabPanel>
            <SalaryDetails/>
          </TabPanel>
          <TabPanel>
            <LeaveBalance/>
          </TabPanel>

          <TabPanel>
            <Penalty_Overtime />
          </TabPanel>
        
          
          <TabPanel>
            <Permission />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default StaffMenu;

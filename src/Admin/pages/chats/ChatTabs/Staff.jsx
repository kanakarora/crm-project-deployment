

const Staff = ({handleShowChatSection}) =>{

  const staffMembers = [
    { id: 1, name: "Flowchanger Agency", message: "hii", imgSrc: "./images/User_icon_2.png" },
    { id: 2, name: "Flowchanger Agency", message: "hii", imgSrc: "./images/User_icon_2.png" },
    { id: 3, name: "Flowchanger Agency", message: "hii", imgSrc: "./images/User_icon_2.png" },
    { id: 4, name: "Flowchanger Agency", message: "hii", imgSrc: "./images/User_icon_2.png" },
    { id: 5, name: "Flowchanger Agency", message: "hii", imgSrc: "./images/User_icon_2.png" }
  ];

return (<>
<div className="flex flex-col h-full justify-between">
{
  staffMembers.map(staff=>{
    return (
      <div className="flex justify-start space-x-5 ml-5 hover:bg-slate-300 p-2" onClick = {handleShowChatSection}>
            <div className="flex justify-center items-center rounded-full border border-gray-400 p-2">
              <img src={staff.imgSrc} className="w-10 h-10" alt={staff.name} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-normal text-black">{staff.name}</p>
              <p className="float-left  w-full text-gray-400" >{staff.message}</p>
            </div>
    </div>
    )
  })
}
<div className="flex flex-row justify-between  mt-15 p-2 rounded bg-gray-300">
<div className="float-left text-left">Theme</div>
<div className="float-left text-left">Settings</div>
</div>
</div>
</>
)

}

export default Staff;
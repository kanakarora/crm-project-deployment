import { FaAnglesUp } from "react-icons/fa6";

const Clients = ({handleShowChatSection}) =>{

  const ClientMembers = [
    { id: 1, name: "Flowchanger Agency", message: "hii", imgSrc: "./images/User_icon_2.png" },
    { id: 2, name: "Flowchanger Agency", message: "hii", imgSrc: "./images/User_icon_2.png" },
    { id: 3, name: "Flowchanger Agency", message: "hii", imgSrc: "./images/User_icon_2.png" },
    { id: 4, name: "Flowchanger Agency", message: "hii", imgSrc: "./images/User_icon_2.png" },
    { id: 5, name: "Flowchanger Agency", message: "hii", imgSrc: "./images/User_icon_2.png" }
  ];

return (<>
<div className="flex flex-col h-full justify-between">
{
  ClientMembers.map(client=>{
    return (
      <div className="flex justify-start space-x-5 ml-5 hover:bg-slate-300 p-2" onClick = {handleShowChatSection}>
            <div className="flex justify-center items-center rounded-full border border-gray-400 p-2">
              <img src={client.imgSrc} className="w-10 h-10" alt={client.name} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-normal text-black">{client.name}</p>
              <p className="float-left  w-full text-gray-400" >{client.message}</p>
            </div>
    </div>
    )
  })
}
<div className="flex flex-row justify-between  mt-15 p-2 rounded bg-gray-300">
<div className="float-left text-left">Toogle</div>
<div className="float-left text-left"><FaAnglesUp /></div>
</div>
</div>
</>
)

}

export default Clients;
import React from 'react';

const ChatInterface = () => {
  const users = [
    {
      name: "FlowChanger Agency",
      status: "Staff",
      isOnline: true,
      lastSeen: "6 hrs ago",
      message: "hiii"
    },
    {
      name: "Abhishek Verma",
      isOnline: true,
      status: "Active on Chat",
    },
    {
      name: "Aman Verma",
      isOnline: true,
      message: "Say hi to Aman Verma"
    },
    {
      name: "Jasmine Kaur",
      isOnline: true,
      message: "Say hi to Jasmine Kaur"
    },
    {
      name: "Akash Chahal",
      isOnline: false,
      message: "Say hi to Akash Chahal"
    },
    {
      name: "Ravi Verma",
      isOnline: false,
      message: "Say hi to Ravi Verma"
    }
  ];

  return (
    <div className='flex flex-row items-center justify-center'>
    <div className="max-w-3xl mx-auto bg-white">
      {/* Top search bar */}
      <div className="p-4 border-b">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2 bg-gray-50 rounded-lg focus:outline-none"
          />
          {/* <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" /> */}
        </div>
      </div>

      {/* User header */}
      <div className="flex items-center p-4 border-b">
        <div className="flex-1 flex items-center gap-4">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600">K</span>
          </div>
          <div>
            <h2 className="font-medium">Kanika arora</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600">FA</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        <button className="flex-1 px-4 py-2 text-blue-600 border-b-2 border-blue-600">
          Staff
        </button>
        <button className="flex-1 px-4 py-2 text-gray-600">
          Groups
        </button>
        <button className="flex-1 px-4 py-2 text-gray-600">
          Clients
        </button>
      </div>

      {/* Search members */}
      <div className="p-4 border-b">
        <input
          type="text"
          placeholder="Search members..."
          className="w-full px-4 py-2 bg-gray-50 rounded-lg focus:outline-none"
        />
      </div>

      {/* Users list */}
      <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
        {users.map((user, index) => (
          <div key={index} className="flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-gray-600">{user.name[0]}</span>
              </div>
              {user.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{user.name}</h3>
              {user.message && (
                <p className="text-sm text-gray-500">{user.message}</p>
              )}
            </div>
            {user.lastSeen && (
              <span className="text-xs text-gray-500">{user.lastSeen}</span>
            )}
            {user.status === "Staff" && (
              <span className="text-xs text-gray-500">Staff</span>
            )}
            {user.status === "Active on Chat" && (
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                Active on Chat
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className='flex flex-col justify-start'>
        <div>
          <p>flowchanger agency</p>
          <span>hii</span>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

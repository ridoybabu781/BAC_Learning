import React from "react";

const userData = {
  user: {
    name: "Dianne Russell",
    role: "Customer",
    profileImage:
      "https://images.unsplash.com/photo-1534528736611-30d8d067c87c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  billingAddress: {
    name: "Dainne Russell",
    street: "4140 Parker Rd. Allentown, New Mexico",
    zipCode: "31134",
    email: "dainne.ressell@gmail.com",
    phone: "(671) 555-0110",
  },
  orders: [
    {
      orderId: "#738",
      date: "8 Sep, 2020",
      total: 135.0,
      itemCount: 5,
      status: "Processing",
    },
    {
      orderId: "#703",
      date: "24 May, 2020",
      total: 25.0,
      itemCount: 1,
      status: "on the way",
    },
    {
      orderId: "#130",
      date: "22 Oct, 2020",
      total: 250.0,
      itemCount: 4,
      status: "Completed",
    },
    {
      orderId: "#561",
      date: "1 Feb, 2020",
      total: 35.0,
      itemCount: 1,
      status: "Completed",
    },
    {
      orderId: "#536",
      date: "21 Sep, 2020",
      total: 578.0,
      itemCount: 13,
      status: "Completed",
    },
    {
      orderId: "#492",
      date: "22 Oct, 2020",
      total: 345.0,
      itemCount: 7,
      status: "Completed",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <img
              src={userData.user.profileImage}
              alt={userData.user.name}
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800">
              {userData.user.name}
            </h3>
            <p className="text-gray-500 mb-4">{userData.user.role}</p>
            <button className="text-green-500 font-semibold hover:text-green-600 transition-colors">
              Edit Profile
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              BILLING ADDRESS
            </h4>
            <div className="space-y-1 text-gray-700">
              <p className="font-semibold text-gray-900">
                {userData.billingAddress.name}
              </p>
              <p>{userData.billingAddress.street}</p>
              <p>{userData.billingAddress.zipCode}</p>
              <p>{userData.billingAddress.email}</p>
              <p>{userData.billingAddress.phone}</p>
            </div>
            <button className="mt-4 text-green-500 font-semibold hover:text-green-600 transition-colors">
              Edit Address
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-semibold text-gray-800">
              Recent Order History
            </h4>
            <a
              href="#"
              className="text-green-500 font-semibold hover:text-green-600 transition-colors"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 font-semibold text-gray-500 border-b pb-4">
            <div className="hidden lg:block">ORDER ID</div>
            <div>DATE</div>
            <div>TOTAL</div>
            <div className="hidden sm:block">STATUS</div>
            <div></div>
          </div>

          {userData.orders.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 items-center py-4 border-b last:border-b-0"
            >
              <div className="hidden lg:block text-gray-700 font-medium">
                {order.orderId}
              </div>
              <div className="text-gray-700">{order.date}</div>
              <div className="text-gray-700">
                <span className="font-semibold">${order.total.toFixed(2)}</span>
                <span className="ml-1 text-sm text-gray-500">
                  ({order.itemCount} Products)
                </span>
              </div>
              <div className="hidden sm:block text-gray-700">
                {order.status}
              </div>
              <div className="text-right">
                <a
                  href="#"
                  className="text-green-500 font-semibold hover:text-green-600 transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

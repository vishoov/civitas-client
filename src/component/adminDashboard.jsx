import  { useState } from 'react';

const AdminDashboard = ()=>{
    
    const [activeTab, setActiveTab] = useState('pending');

    const reports = [
  {
    _id: "65f4c81a1b2c3d4e5f678901",
    title: "Illegal Dumping Near Industrial Highway 4",
    description: "Large amounts of construction debris and plastic waste dumped near the drainage canal.",
    userId: "65f4981a1b2c3d4e5f678888",
    userName: "Ankit Sharma",
    stateCode: "DL",
    districtCode: "DL-ND",
    subdistrictCode: null,
    stateName: "Delhi",
    districtName: "New Delhi",
    categoryIds: ["65f4a81a1b2c3d4e5f677771", "65f4a81a1b2c3d4e5f677772"],
    photoUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c1c",
    status: "pending",
    verifiedBy: null,
    verifiedAt: null,
    resolvedAt: null,
    schemaVersion: 1,
    createdAt: "2026-04-08T08:30:00.000Z",
    updatedAt: "2026-04-08T08:30:00.000Z"
  },
  {
    _id: "65f4c81a1b2c3d4e5f678902",
    title: "Broken Streetlight Grid B Pole #14",
    description: "Exposed wires creating severe hazard during evening hours near residential walkway.",
    userId: "65f4981a1b2c3d4e5f678889",
    userName: "Priya Verma",
    stateCode: "UP",
    districtCode: "UP-GBN",
    subdistrictCode: "UP-GBN-01",
    stateName: "Uttar Pradesh",
    districtName: "Gautam Buddh Nagar",
    categoryIds: ["65f4a81a1b2c3d4e5f677773"],
    photoUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18f17e2",
    status: "pending",
    verifiedBy: null,
    verifiedAt: null,
    resolvedAt: null,
    schemaVersion: 1,
    createdAt: "2026-04-09T09:15:00.000Z",
    updatedAt: "2026-04-09T09:15:00.000Z"
  },
  {
    _id: "65f4c81a1b2c3d4e5f678903",
    title: "Main Water Pipeline Leakage - Sector 62",
    description: "Continuous freshwater wastage and road erosion due to underground joint failure.",
    userId: "65f4981a1b2c3d4e5f678890",
    userName: "Rahul Singh",
    stateCode: "UP",
    districtCode: "UP-GBN",
    subdistrictCode: null,
    stateName: "Uttar Pradesh",
    districtName: "Gautam Buddh Nagar",
    categoryIds: ["65f4a81a1b2c3d4e5f677774"],
    photoUrl: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50",
    status: "verified",
    verifiedBy: "65f4bbbb1b2c3d4e5f675555",
    verifiedAt: "2026-04-10T10:00:00.000Z",
    resolvedAt: null,
    schemaVersion: 1,
    createdAt: "2026-04-10T04:20:00.000Z",
    updatedAt: "2026-04-10T10:00:00.000Z"
  },
  {
    _id: "65f4c81a1b2c3d4e5f678904",
    title: "Overflowing Public Garbage Bin in Market",
    description: "Waste uncollected for 4 days spreading foul odor near community shops.",
    userId: "65f4981a1b2c3d4e5f678891",
    userName: "Amit Kumar",
    stateCode: "DL",
    districtCode: "DL-ND",
    subdistrictCode: null,
    stateName: "Delhi",
    districtName: "New Delhi",
    categoryIds: ["65f4a81a1b2c3d4e5f677771"],
    photoUrl: "https://images.unsplash.com/photo-1532996122724-e3c3d9a0f58b",
    status: "resolved",
    verifiedBy: "65f4bbbb1b2c3d4e5f675555",
    verifiedAt: "2026-04-07T16:00:00.000Z",
    resolvedAt: "2026-04-08T09:30:00.000Z",
    schemaVersion: 1,
    createdAt: "2026-04-07T14:50:00.000Z",
    updatedAt: "2026-04-08T09:30:00.000Z"
  },
  {
    _id: "65f4c81a1b2c3d4e5f678905",
    title: "Fake / Duplicate Report Test Case",
    description: "Submitting random blur image test.",
    userId: "65f4981a1b2c3d4e5f678892",
    userName: "Neha Gupta",
    stateCode: "DL",
    districtCode: "DL-ND",
    subdistrictCode: null,
    stateName: "Delhi",
    districtName: "New Delhi",
    categoryIds: ["65f4a81a1b2c3d4e5f677775"],
    photoUrl: null,
    status: "rejected",
    verifiedBy: null,
    verifiedAt: null,
    resolvedAt: null,
    schemaVersion: 1,
    createdAt: "2026-04-06T11:00:00.000Z",
    updatedAt: "2026-04-06T12:00:00.000Z"
  }
];

    const filteredReports = reports.filter(report => report.status === activeTab);

    return(
        <div className="p-20 bg-black min-h-screen ">
            <div className="text-white ">
                <h1 className="text-2xl font-bold">Verification Queue</h1>
                <p className="text-gray-500">Manage,verify,and resolve user-submitted reports</p>
                <p className="text-white font-bold">Queue : <span className="text-white font-medium capitalize">{activeTab} reports</span></p>
            </div>

            <div className="mt-5 w-80 items-center justify-center h-8 rounded-lg  flex gap-1 bg-white/50 backdrop-blur-xl border-white/5 shadow-lg  ">
                <button onClick={() => setActiveTab('pending')} className={`text-white hover:bg-white w-21 p-1 rounded-sm hover:text-black ml-1 text-xs ${activeTab === 'pending' ? 'bg-black text-white font-bold' : ''}`}>Pending</button>
                <button onClick={() => setActiveTab('verified')} className={`text-white hover:bg-white w-21 p-1 rounded-sm hover:text-black text-xs ${activeTab === 'verified' ? 'bg-black text-white font-bold' : ''}`}>verified</button>
                <button onClick={() => setActiveTab('resolved')} className={`text-white hover:bg-white w-21  p-1 rounded-sm hover:text-black text-xs ${activeTab === 'resolved' ? 'bg-black text-white font-bold' : ''}`}>Resolved</button>
                <button onClick={() => setActiveTab('rejected')} className={`text-white hover:bg-white w-21 p-1 rounded-sm hover:text-black mr-1 text-xs ${activeTab === 'rejected' ? 'bg-black text-white font-bold' : ''}`}>Rejected</button>
            </div>

            <div className="w-270 h-150 bg-white mt-8 rounded-lg p-6 overflow-y-auto text-black">
                <div className="space-y-4">
                    { filteredReports.map((report) => (
                    <div key={report._id} className="border-b border-gray-200 pb-3">
                        <h3 className="font-bold text-base">{report.title}</h3>
                        <p className="text-xs text-gray-600">{report.description}</p>
                        <p className="text-[11px] text-gray-400 mt-1">By {report.userName} • {report.districtName}</p>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
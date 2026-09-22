

const ReportPage = ()=>{

const report = {
  _id: "66f1234abc567de89012345a",
  title: "Severe Pothole Cluster on Main Road",
  description:
    "Multiple deep potholes have formed over a 30-meter stretch after recent monsoon rains. Vehicles are swerving into oncoming traffic to avoid them, causing significant traffic bottlenecks and two minor two-wheeler accidents this week. Immediate asphalt patching or resurfacing is required.",

  // Author details
  userId: "66e8901abc234de56789012b",
  userName: "Sameer Sharma",

  // Location hierarchy (LGD codes & names)
  stateCode: "09",
  districtCode: "142",
  subdistrictCode: "00754",
  stateName: "Uttar Pradesh",
  districtName: "Gautam Buddha Nagar",

  // Populated category references
  categoryIds: [
    {
      _id: "66a0123abc456de78901234c",
      name: "Road & Infrastructure",
      slug: "road-infrastructure"
    },
    {
      _id: "66a0123abc456de78901234d",
      name: "Public Safety",
      slug: "public-safety"
    },
    {
      _id: "66a0123abc456de78901234e",
      name: "Traffic Hazard",
      slug: "traffic-hazard"
    }
  ],

  photoUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=1200&q=80",

  // Trust pipeline
  status: "verified",
  verifiedBy: {
    _id: "66d9876abc543de21098765f",
    name: "Rajesh Verma",
    role: "District Nodal Officer"
  },
  verifiedAt: "2026-09-09T10:15:00.000Z",
  resolvedAt: null,

  schemaVersion: 1,
  createdAt: "2026-09-08T06:30:00.000Z",
  updatedAt: "2026-09-09T10:15:00.000Z"
};

    return(
        <div className="mt-40">

            <div className="bg-black w-100 ml-10 p-10 gap-5 rounded-2xl ">
                <h1 className="text-white text-lg p-2 ">Report Overview</h1>

                <p className="text-white text-lg font-bold mt-2">{report.title}</p>
                <p className="text-white mt-2">{report.description}</p>
                <img src={report.photoUrl}
                className="w-40 rounded-2xl mt-10"/>

                
            </div>


        </div>


    )
}

export default ReportPage
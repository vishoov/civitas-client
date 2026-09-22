import { useEffect, useState } from "react"
import { ReportCard } from "../Components/ReportCard";

export const AllReports = () => {

const [reports, setReports] = useState([]);

  async function fetchReports(){
    const response = await fetch("http://localhost:8000/api/report-api/all", {
        method:"GET"
    });


    if(!response){
        console.log("Some error ")
    }

    const data = await response.json();
    setReports(data.reports);
    console.log(reports)
  }


    useEffect(()=>{
        
        fetchReports();


    }, [])



  return (
    <div className="grid min-h-screen grid-cols-1 gap-6 bg-slate-950 p-10 sm:grid-cols-2 lg:grid-cols-3">

    {reports.map((report)=>{
        return <ReportCard report={report} key={report.id} />
    })}


    </div>
  )
}



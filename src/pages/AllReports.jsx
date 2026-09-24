import { useEffect, useState } from "react"
import { ReportCard } from "../Components/ReportCard";
import Filters from "../Components/Filters";

export const AllReports = () => {

const [reports, setReports] = useState([]);
const [status, setStatus]= useState("");

  async function fetchReports(){
    
    if(status && status!= "Select"){
      console.log("Condition True")
      try{
        const response= await fetch("http://localhost:8000/api/report-api/reports/0",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(
              {
                pincode: "",
                district: "",
                state: "",
                status: status
              }
            )
          }
        )

        let data= await response.json();
        console.log(data)
        if(!response.ok)
          console.log(data);
        setReports(data.filtered_report);


      }
      catch(err){
        console.log(err.message);
      }

      return
    }
    try{
      const response = await fetch("http://localhost:8000/api/report-api/all", {
          method:"GET"
      });
  
  
      if(!response){
          console.log("Some error ")
      }
  
      const data = await response.json();
      setReports(data.reports);

    }
    catch(err){
      console.log(err.message);
    }
  }


    useEffect(()=>{
        
        fetchReports();


    }, [status])



  return (
    <>
    <Filters status={status} setStatus={setStatus} />
    <div className="grid min-h-screen grid-cols-1 gap-6 bg-slate-950 p-10 sm:grid-cols-2 lg:grid-cols-3">

    {reports?.map((report)=>{
        return <ReportCard report={report} key={report.id} />
    })}


    </div>
    </>
  )
}



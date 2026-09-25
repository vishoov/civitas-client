import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleReport= ()=>{
    let {id}= useParams("_id");
    const [reportData, setReportData]= useState({});

    useEffect(()=>{

        async function SoloReportFetch(){
            try{
                const response= await fetch(`http://localhost:8000/api/report-api/reports/${id}`);
                let data= await response.json();
                console.log(data);

                setReportData(data.report);
            }
            catch(err){
                console.log(err.message);  
        }
    }
    SoloReportFetch();
    }, [])


    return (
        <>
        <div className="flex justify-center bg-[#0b0d19]">
            {
                reportData? <div className="w-[60%] flex flex-col justify-center items-center gap-4 p-4 m-6 hover:bg-[#0b0d45] border-2 rounded-3xl bg-[#0b0d31] text-white">
                    <h1 className="text-2xl">{reportData.title}</h1>
                    <div className="flex justify-around gap-4">
                    <p>{reportData.state}</p>
                    <p>{reportData.district}</p>
                    <p>{reportData.pincode}</p>
                    </div>
                    <p>Descirption: {reportData.description}</p>
                    <h3 className="bg-amber-300 border-2 text-xl rounded-2xl p-1.5">{reportData.status}</h3>

                </div>
                : <h1>Loading..</h1>
            }
        </div>

        </>
    )
}

export default SingleReport;
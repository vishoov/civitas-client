import { useEffect, useState } from "react"
import { ReportCard } from "../Components/ReportCard";
import Filters from "../Components/Filters";

export const AllReports = () => {

const [reports, setReports] = useState([]);
const [status, setStatus]= useState("");
const [state, setState] = useState("");
const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchReports() {
      try {
        let response;
        const isFiltered = status !== "" || state !== "";

        if (isFiltered) {
          response = await fetch("http://localhost:8000/api/report-api/reports/filter/1", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              pincode: "",
              district: "",
              state: state || "",
              status: status || ""
            })
          });
        } else {
          response = await fetch("http://localhost:8000/api/report-api/all", {
            method: "GET"
          });
        }

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message ?? data?.error ?? `Request failed with status ${response.status}`);
        }

        if (cancelled) return;

        const list = isFiltered ? data.filtered_report : data.reports;
        setReports(Array.isArray(list) ? list : []);
        setError(null);
        console.log(reports)
      } catch (err) {
        if (cancelled) return;
        console.error("Failed to fetch reports", err);
        setError(err.message);
        setReports([]);
      }
    }

    fetchReports();

    return () => {
      cancelled = true;
    };
  }, [status, state])



  return (
    <>
    <Filters 
    status={status} 
    setStatus={setStatus}
    state={state}
    setState={setState}
    />
    <div className="grid min-h-screen grid-cols-1 gap-6 bg-slate-950 p-10 sm:grid-cols-2 lg:grid-cols-3">

    {error && (
      <p className="col-span-full text-sm text-rose-400">{error}</p>
    )}

    {reports?.map((report)=>{
        return <ReportCard report={report} key={report._id ?? report.id} />
    })}

        </div>



    </>
  )
}

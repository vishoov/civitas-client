import { useEffect, useState } from "react"
import { ReportCard } from "../Components/ReportCard";

export const AllReports = () => {

const [reports, setReports] = useState([]);
const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchReports() {
      try {
        const response = await fetch("http://localhost:8000/api/report-api/all", {
          method: "GET"
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        if (cancelled) return;
        setReports(Array.isArray(data?.reports) ? data.reports : []);
        setError(null);
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
  }, [])



  return (
    <div className="grid min-h-screen grid-cols-1 gap-6 bg-slate-950 p-10 sm:grid-cols-2 lg:grid-cols-3">

    {error && (
      <p className="col-span-full text-sm text-rose-400">{error}</p>
    )}

    {reports.map((report)=>{
        return <ReportCard report={report} key={report._id ?? report.id} />
    })}


    </div>
  )
}

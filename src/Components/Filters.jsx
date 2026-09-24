import { ActiveStates } from "./indianStates";

const Filters = ({ status, setStatus, state, setState }) => {
    return (
        <div className="flex justify-around gap-1.5 p-1.5 bg-[#020617] text-white p-5">
            <h2 className="text-l">Filters</h2>
            
            <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className=" border-blue-300 border rounded-2xl p-2"
            >
                <option value="">--Select-an-option--</option>
                <option value="pending">Pending</option>
                <option value="verified">Verified</option>
                <option value="rejected">Rejected</option>
                <option value="resolved">Resolved</option>
            </select>
            <select
                name="state"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className=" border-blue-300 border rounded-2xl p-2"
            >
                <option value="">--Select-an-option--</option>
                
                {ActiveStates.map((state)=>{
                    return <option key={state} value={state}>{state}</option>
                })}

                
            </select>
        </div>
    )
}

export default Filters;

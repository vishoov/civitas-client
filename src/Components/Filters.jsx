const Filters = ({ status, setStatus }) => {
    return (
        <div className="flex justify-around gap-1.5 p-1.5">
            <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="">--Select-an-option--</option>
                <option value="pending">Pending</option>
                <option value="verified">Verified</option>
                <option value="rejected">Rejected</option>
                <option value="resolved">Resolved</option>
            </select>
        </div>
    )
}

export default Filters;

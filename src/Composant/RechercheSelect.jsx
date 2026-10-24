
function Select(){
    const[type,setType]=useState("");
    return(
        <div>
            <select onChange={e=>setType(e.target.value)}>
                <option value={type}>Fruits</option>
                <option value={type}>Legume</option>
            </select>
        </div>
    )
}
export default Select;
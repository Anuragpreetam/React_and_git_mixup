import Body from "./Body";
const Search = (props)=>{
    
    return(
        <div className="my-4">
            <input type="input" value={props.value} onChange={props.onChange} className="border-2 border-gray-400 rounded-lg"  placeholder="Search Restaurants"></input>
            <button onClick={props.onClick} className="mx-3 bg-gray-200 rounded-lg px-1">Search</button>
        </div>
    )
}

export default Search;
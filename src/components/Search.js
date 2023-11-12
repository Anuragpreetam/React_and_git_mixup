import Body from "./Body";
const Search = (props)=>{
    
    return(
        <div>
            <label>Search Restaurants</label>
            <input type="input" value={props.value} onChange={props.onChange}></input>
            <button onClick={props.onClick}>Search</button>
        </div>
    )
}

export default Search;
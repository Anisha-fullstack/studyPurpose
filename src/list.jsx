import TableContent from "./tableContent";

const List=({items,setItems})=>{
    const changeCheckbox=(e)=>{
        const itemss= items.map((d)=> d.id===e ? {...d,checked:!d.checked} : d);
        console.log(itemss)
        setItems(itemss);
        
    }
    return(
        <>
       
        <input type="text" placeholder="Add Items"></input>
    <button>Add Items</button>
        {items.length ? (
            <ul>
            {items.map((item)=>(
                <li key={item.id}>
                <label htmlFor="itemDis">{item.name}</label>
                <input type="checkbox" value={item.checked} onChange={()=>changeCheckbox(item.id)}></input>
                </li>
            ))}
            </ul>
        ):(<p>Empty List</p>)}
         <TableContent content={items.filter((item)=>item.checked===true )}/>
    </>)
}
export default List;
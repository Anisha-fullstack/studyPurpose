const TableContent=({content})=>{
return(
    content.length ?(<table>
       <thead>
        <tr>
            <th>Name</th>
            
        </tr>
       </thead>
            {content.map((d)=>(
                 <tr>
                <td key={d.id}>{d.name}</td>
                </tr>
            ))}

        
    </table>):(<p>no selected items found</p>)
)
}
export default TableContent;
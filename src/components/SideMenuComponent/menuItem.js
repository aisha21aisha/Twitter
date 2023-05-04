export default function MenuItem({item}) {
    return (
        <div className ='d-flex flex-row '>
                <div className='mx-3 my-3 d-flex' style={{height: 20}}>
                    {item.icon}   
                </div> 
                    <p className='mx-3 my-3 ' style={{fontSize: 15, color: "black"}}>{item.name}</p>
        </div>
       
    )
}
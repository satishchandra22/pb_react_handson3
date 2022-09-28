import './comp1.css';
function DisplayComp(prop){
    let arr;
    if(prop.prop1.ar) {
    arr = prop.prop1.ar.map((item)=>{
        return(
        <div key={item.key} >
        <div id='c_div'>
        <span className="text">Name : {item.name} | </span>
        <span className="text">Department : {item.dept} | </span>
        <span className="text">Rating : {item.rating}</span>
        </div>
        </div>)
    })}else{
    arr=[]
    }
    
    return (
        <div id='d_div'>
        {arr}

        </div>
    )
}
export default DisplayComp;
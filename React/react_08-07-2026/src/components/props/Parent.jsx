//  import { useState } from "react";
// import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";


function Parent(){
    //  let  [mssg,setMsg]=useState("");

    // const getData=(data)=>{
    //     setMsg(data);
    // }

    const dataRece=(data)=>{
        console.log("Recevied from child:2", data)
    }
    let message=""
    const receiveData=(data)=>{
    message=data
    console.log("Parent received:", message);
    }

    return(
        <div>
            {/* <p>parent element{msg}</p> */}
           {/* <Child1 hi={getData}/>*/}

            {/* <Child2 h={dataRece}/>
            <Child3/> */}
            <Child2 send={receiveData} />
            <Child3 msg={message} />

        </div>

    )
}
export default Parent;

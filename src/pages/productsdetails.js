import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Productdetails(){
    const [prodd,setprodd]=useState();
    const { productID } = useParams();
    useEffect(()=>{
        fetch(`http://localhost:8000/products/${productID}`).then((res)=>res.json()).then((prodd)=>{setprodd(prodd)});
    },[])
    return(<><h1>{prodd.title}</h1></>);

}

export default Productdetails;
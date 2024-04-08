import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './product.css'
function Products(){
    const[productss,setproductss]=useState([]);
    useEffect(()=>{

        fetch('http://localhost:8000/products').then((res)=>res.json()).then((data)=>{
            console.log(data);
            setproductss(data);
        })
    },[])
    return(<>
        
    <h1>Products page</h1>

            <Link to={"/pro/add"} className="btn btn-success mt-5">Add Product</Link>
            <table className="table table-striped mt-5 products-table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>title</th>
                    {/* <th>Description</th> */}
                    <th>price</th>
                    <th>operations</th>
                    </tr>



                </thead>
                <tbody>
                    {productss.map((produc)=>{
                        return(
                            <tr key={produc.id}>
                            <td>{produc.id}</td>
                            <td>{produc.title}</td>
                            {/* <td>{produc.description.slice(0,50)}...</td> */}
                            <td>{produc.price}</td>
                            <td>
                                <button className="btn btn-danger btn-sm">Delete</button>
                                <Link to={`/pro/ ${produc.id}`} className="btn btn-info btn-sm">View</Link>
                                <button className="btn btn-primary btn-sm">Edit</button>
                            </td>
                            </tr>        

                        )
                    })}
                             

                </tbody>
            </table>
    </>);

}
export default Products;
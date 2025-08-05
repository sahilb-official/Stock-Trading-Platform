import React ,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {

  const [allOrder,setAllOrder]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allOrder").then((res)=>{
      setAllOrder(res.data);
    });
  } ,[]);


  return (
    allOrder.length === 0 ? (
       <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
        </div>
       </div>
     ) : (
        
         <div className="orders">
         <div className="order-table">
          <table>
            <tr>
               <th>name</th>
               <th>qty</th>
               <th>price</th>
               <th>mode</th>
            </tr>
           
            {allOrder.map((stock,index) =>{

              return(
                <tr key={index}>
                 <td>{stock.name}</td>
                 <td>{stock.qty}</td>
                 <td>{stock.price}</td>
                 <td>{stock.mode}</td>
                </tr>
              )
            })}



          </table>
         
         </div>
         </div>

     )

  );
};

export default Orders;

import axios from "axios";
import React, { useEffect, useState } from 'react'

const Request = () => {
    const [User, setUser] = useState({});
    useEffect(() => {
        axios.get("/reg/auth", {
          headers: {
            userToken : localStorage.getItem("userToken")
          },
        }).then((response) => {
          setUser(response.data);
        });
    }, []);

    const [itemName, setItemName] = useState('');
    const [number, setNumber] = useState('');
    const [msg, setMsg] = useState('');
    

    const Request = () =>{
        axios.post('/dash', {
            userEmail : User.mail,
            newRequest : itemName+","+number
        }).then((response) => {
            setMsg(response.data.message);
        })
        document.getElementById("msg").innerHTML = msg;
        setTimeout(() => {
        document.getElementById("msg").innerHTML = "";
        }, 2000);
    }
  return (
    <div style={{padding:'10px 300px 300px'}}>
    <form style = {{padding :'10px 250px 250px', background:'yellow', borderRadius:'20px'}}>
        <h3>Make Request</h3>
        <div className="form-group">
          <label>Item Name</label>
          <input onChange={(e) => {setItemName(e.target.value)}} type= "text" className="form-control" />
        </div>
        <div className="form-group">
          <label>No of Items</label>
          <select value={1} onChange={(e) => {setNumber(e.target.value)}} className="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button onClick={Request} style={{marginTop : '50px'}} type="button" class="btn btn-dark">Add</button>
        <p id="msg"></p>
    </form>
  </div>
  );
};

export default Request;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {
  let { id }= useParams();
  const [details, setDetails] = useState({});
    useEffect(() => {
        axios.get(`/reg/byId/${id}`).then((response) => {
          setDetails(response.data[0]);
        });
      }, []);
  
      
  return (
    <>
    <div>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /></div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">User Profile</h4>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12"><label className="labels">Your Name : {details.userName}</label></div>
                  <div className="col-md-12"><label className="labels">Your Email : {details.userEmail}</label></div>
                  <div className="col-md-12"><label className="labels">Your Mobile no : {details.userPhone}</label></div>
                  <div className="col-md-12"><label className="labels">Your password : {details.userPassword}</label></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Edit Profile</button></div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Details

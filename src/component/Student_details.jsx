import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../component/Data'
function Student_details() {
    var {stdID} = useParams()
    var stdDetails = Data.find((std)=>std.id==stdID)
   
  return (
    <>
        <h1 className='bg-primary text-warning'>Student Details</h1>
        <div className="container">
            <div className="row bg-white mb-3   ">
                <div className="col-3">
                    <img src={stdDetails.image} alt="" className='my-3' />
                </div>
                <div className="col-6 text-secondary mt-3">
                    <h3 className='text-danger'> ID : {stdDetails.id}</h3>
                    <h6> Name: {stdDetails.names} </h6>
                    <h6> Facutly : {stdDetails.Faculty}</h6>
                    <h6> Address : {stdDetails.Address} </h6>
                    <h6> Moible :  {stdDetails.Mobile_no}</h6>
                </div>
            </div>
            <div className="row bg-white mb-3   ">
                <h4>Fee Details</h4>
            </div>
        </div>
    </>
  )
}

export default Student_details
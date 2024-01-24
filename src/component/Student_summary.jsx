import React from 'react'
import Data from '../component/Data'
import { Link } from 'react-router-dom'
function Student_summary() {
    return (
        <>
            <div className="container-fluid bg-white py-3 d-flex align-items-center justify-content-between">
                <h2 className='m-4'>Studnet Summary</h2>
                <h5 className='me-5'> <Link to="/std_card"> Student Card </Link></h5>

            </div>
            <div className="container py-3">
                <div className="row bg-primary text-white py-1">
                    <div className="col-1">ID</div>
                    <div className="col-4">Name of Student</div>
                    <div className="col-3">Mobile No</div>
                    <div className="col-3">Address</div>
                    <div className="col-1">Action</div>
                </div>

                {Data.map((std) =>
                    <div className="row bg-white text-secondary py-2 border-bottom">
                        <div className="col-1">{std.id} </div>
                        <div className="col-4">{std.names}</div>
                        <div className="col-3">{std.Mobile_no}</div>
                        <div className="col-3">{std.Address}</div>
                        <div className="col-1"><Link to={`/stddetails/${std.id}`}> <i class="fa-solid fa-eye"></i></Link></div>
                    </div>
                )}

            </div>
        </>
    )
}

export default Student_summary
import React from 'react'

export default function AddSubAdmin() {
    return (
        <>
        <div className="container-fluid">
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
       <h1 className="h3 mb-0 text-gray-800">Add Sub Admin</h1>
   </div>


<form id="addusers" method="post" enctype="multipart/form-data" action="dashboard.php?p=super_admin&subadminadd=ok">
   <div className="form-group row">
       <label htmlFor="email" className="col-sm-2 control-label">Email: </label>
       <div className="col-sm-6">
           <input type="email" name="email" id="user_email" required className="form-control"/>
       </div>
   </div>
   <div className="form-group row">
       <label htmlFor="lname" className="col-sm-2 control-label">Password: </label>
       <div className="col-sm-6">
           <input type="password" name="pass" required id="user_pass" className="form-control"/>
       </div>
   </div>

   <div className="form-group row">
       <div className="col-sm-4"></div>
       <div className="col-sm-4"> <button type="submit" className=" btn btn-success">Register</button></div>
       <div className="col-sm-4"></div>
   </div>
</form>

</div>
   </>
    )
}

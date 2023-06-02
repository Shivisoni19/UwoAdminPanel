import React from 'react'

export default function ProfileVerification() {
    return (
        <>
            <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">All Verification Request</h1>
    </div>
</div>
{/* <!-- Begin Page Content --> */}
<div className="container-fluid">

    {/* <!-- DataTales Example --> */}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
		<input type="text" id="search_criteria" className="form-control" onkeyup="requestsearch_criteria(this.value)"
                placeholder="Search for users.."/>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            {/* <!-- <th>ID</th> --> */}
                            <th>Name</th>
                            <th>Attachment</th>
                            <th>Username</th>
							<th>Status</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Sr</th>
                            {/* <!-- <th>ID</th> --> */}
                            <th>Name</th>
                            <th>Attachment</th>
                            <th>Username</th>
							<th>Attachment</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody id="myTable_row">
                                                <tr>
                            <td>1</td>
                            {/* <!-- <td></td> --> */}
                            <td>Anil chauhan</td>
                            <td> <img src="" style={{width: "100px"}}/></td>
                            <td>@</td>
							<td>pending</td>
                            <td>16-Dec-2021</td>
                            <td>
                                <a href="?p=profileVerification&action=approve&fb_id="
                                    className="btn btn-success">
                                    <i className="fas fa-check"></i>
                                </a>

                                <a href="?p=profileVerification&action=decline&fb_id="
                                    className="btn btn-danger" onclick="alert('Are you sure to Decline');">
                                    <i className="fas fa-ban"></i>
                                </a>
                            </td>
                        </tr>
                                            </tbody>
                </table>
                <nav aria-label="...">
                    <ul className="pagination justify-content-end">
                                                <li className="page-item active"><a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=1">
                                1</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=2">
                                2</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=3">
                                3</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=4">
                                4</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=5">
                                5</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=6">
                                6</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=7">
                                7</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=8">
                                8</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=9">
                                9</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=10">
                                10</a></li>

                                                <li className="page-item">
                            <a className="page-link"
                                href="dashboard.php?p=profileVerification&curr_page=2">Next</a>
                        </li>
                                            </ul>
                </nav>
            </div>
        </div>
    </div>

</div>
        </>
    )
}

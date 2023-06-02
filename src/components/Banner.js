import React from 'react'

export default function Banner() {
    return (
        <>
           <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">All Banners</h1>
        {/* <!-- <a href="dashboard.php?p=banner&page=add_banner"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-plus fa-sm text-white-50"></i> Add Banners</a> --> */}
    </div>
</div>
    <div className="container-fluid">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
				<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="pills-clickable-tab" data-toggle="pill" href="#pills-clickable" role="tab" aria-controls="pills-clickable" aria-selected="true">Clickable</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="pills-non-clickable-tab" data-toggle="pill" href="#pills-non-clickable" role="tab" aria-controls="pills-non-clickable" aria-selected="false">Non-clickable</a>
					</li>
				</ul>
				{/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="videosearch_criteria(this.value)"
					placeholder="Search for videos.."> --> */}
			</div>
            <div className="card-body">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-clickable" role="tabpanel" aria-labelledby="pills-home-tab">
                                                            {/* <!-- Begin Page Content --> */}
                                    <div className="container-fluid">

                                    {/* <!-- DataTales Example --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Our Banner</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                    <thead>
                                                        <tr>
                                                            <th>Sr</th>
                                                            <th>Banner</th>
                                                            <th>Click_url</th>
                                                            <th>Clickable</th>
                                                            <th>Active</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Sr</th>
                                                            <th>Banner</th>
                                                            <th>Click_url</th>
                                                            <th>Clickable</th>
                                                            <th>Active</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </tfoot>
                                                    <tbody id="myTable_row">
                                                                                                                <tr>
                                                            <td>1</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1637833546_647512652.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td><a href="aa" target="_blank">Go To</a> </td>
                                                            <td> YES</td>
                                                            <td>YES</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editBanner('9');">
                                                                    <i className="fas fa-edit"></i>
                                                            </button>

                                                            {/* <!-- <a href="?p=banner&page=allBanners&current_page=&action=deleteBanner&id=&banner_url=" className="btn btn-danger" onClick="alert('Are you sure to delete');"><i className="fas fa-minus-circle"></i></a> --> */}
                                                            </td>
                                                            
                                                        </tr>
                                                                                                            </tbody>
                                                </table>
                                                <nav aria-label="...">
                                                    <ul className="pagination justify-content-end">
                                                                                                                <li className="page-item active"><a className="page-link"
                                                                href="dashboard.php?p=banner&page=allBanners&current_page=1">
                                                                1</a></li>
                                                                                                            </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                    {/* <!-- /.container-fluid --> */}
                                                
                    </div>
                    <div className="tab-pane fade show " id="pills-non-clickable" role="tabpanel" aria-labelledby="pills-home-tab">
                                                        {/* <!-- Begin Page Content --> */}
                                    <div className="container-fluid">

                                    {/* <!-- DataTales Example --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Our Banner</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                    <thead>
                                                        <tr>
                                                            <th>Sr</th>
                                                            <th>Banner</th>
                                                            {/* <!-- <th>Click_url</th> --> */}
                                                            <th>Clickable</th>
                                                            <th>Active</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Sr</th>
                                                            <th>Banner</th>
                                                            {/* <!-- <th>Click_url</th> --> */}
                                                            <th>Clickable</th>
                                                            <th>Active</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </tfoot>
                                                    <tbody id="myTable_row">
                                                                                                                <tr>
                                                            <td>1</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1640414654_1826994385.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            {/* <!-- <td><a href="<? // echo $val['click_url'];?>" target="_blank">Go To</a> </td> --> */}
                                                            <td> NO</td>
                                                            <td>NO</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editBanner('8');">
                                                                    <i className="fas fa-edit"></i>
                                                            </button>

                                                            {/* <!-- <a href="?p=banner&page=allBanners&current_page=&action=deleteBanner&id=&banner_url=" className="btn btn-danger" onClick="alert('Are you sure to delete');"><i className="fas fa-minus-circle"></i></a> --> */}
                                                            </td>
                                                            
                                                        </tr>
                                                                                                                <tr>
                                                            <td>2</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1630309406_650043576.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            {/* <!-- <td><a href="<? // echo $val['click_url'];?>" target="_blank">Go To</a> </td> --> */}
                                                            <td> NO</td>
                                                            <td>NO</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editBanner('7');">
                                                                    <i className="fas fa-edit"></i>
                                                            </button>

                                                            {/* <!-- <a href="?p=banner&page=allBanners&current_page=&action=deleteBanner&id=&banner_url=" className="btn btn-danger" onClick="alert('Are you sure to delete');"><i className="fas fa-minus-circle"></i></a> --> */}
                                                            </td>
                                                            
                                                        </tr>
                                                                                                                <tr>
                                                            <td>3</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1617875825_380702774.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            {/* <!-- <td><a href="<? // echo $val['click_url'];?>" target="_blank">Go To</a> </td> --> */}
                                                            <td> NO</td>
                                                            <td>NO</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editBanner('6');">
                                                                    <i className="fas fa-edit"></i>
                                                            </button>

                                                            {/* <!-- <a href="?p=banner&page=allBanners&current_page=&action=deleteBanner&id=&banner_url=" className="btn btn-danger" onClick="alert('Are you sure to delete');"><i className="fas fa-minus-circle"></i></a> --> */}
                                                            </td>
                                                            
                                                        </tr>
                                                                                                                <tr>
                                                            <td>4</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1626774637_860570589.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            {/* <!-- <td><a href="<? // echo $val['click_url'];?>" target="_blank">Go To</a> </td> --> */}
                                                            <td> NO</td>
                                                            <td>NO</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editBanner('5');">
                                                                    <i className="fas fa-edit"></i>
                                                            </button>

                                                            {/* <!-- <a href="?p=banner&page=allBanners&current_page=&action=deleteBanner&id=&banner_url=" className="btn btn-danger" onClick="alert('Are you sure to delete');"><i className="fas fa-minus-circle"></i></a> --> */}
                                                            </td>
                                                            
                                                        </tr>
                                                                                                                <tr>
                                                            <td>5</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1625849897_781423715.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            {/* <!-- <td><a href="<? // echo $val['click_url'];?>" target="_blank">Go To</a> </td> --> */}
                                                            <td> NO</td>
                                                            <td>NO</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editBanner('4');">
                                                                    <i className="fas fa-edit"></i>
                                                            </button>

                                                            {/* <!-- <a href="?p=banner&page=allBanners&current_page=&action=deleteBanner&id=&banner_url=" className="btn btn-danger" onClick="alert('Are you sure to delete');"><i className="fas fa-minus-circle"></i></a> --> */}
                                                            </td>
                                                            
                                                        </tr>
                                                                                                                <tr>
                                                            <td>6</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1629119392_1442076540.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            {/* <!-- <td><a href="<? // echo $val['click_url'];?>" target="_blank">Go To</a> </td> --> */}
                                                            <td> NO</td>
                                                            <td>NO</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editBanner('3');">
                                                                    <i className="fas fa-edit"></i>
                                                            </button>

                                                            {/* <!-- <a href="?p=banner&page=allBanners&current_page=&action=deleteBanner&id=&banner_url=" className="btn btn-danger" onClick="alert('Are you sure to delete');"><i className="fas fa-minus-circle"></i></a> --> */}
                                                            </td>
                                                            
                                                        </tr>
                                                                                                                <tr>
                                                            <td>7</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1633685764_706332103.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            {/* <!-- <td><a href="<? // echo $val['click_url'];?>" target="_blank">Go To</a> </td> --> */}
                                                            <td> NO</td>
                                                            <td>NO</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editBanner('2');">
                                                                    <i className="fas fa-edit"></i>
                                                            </button>

                                                            {/* <!-- <a href="?p=banner&page=allBanners&current_page=&action=deleteBanner&id=&banner_url=" className="btn btn-danger" onClick="alert('Are you sure to delete');"><i className="fas fa-minus-circle"></i></a> --> */}
                                                            </td>
                                                            
                                                        </tr>
                                                                                                                <tr>
                                                            <td>8</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1636002691_1880708883.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            {/* <!-- <td><a href="<? // echo $val['click_url'];?>" target="_blank">Go To</a> </td> --> */}
                                                            <td> NO</td>
                                                            <td>NO</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editBanner('1');">
                                                                    <i className="fas fa-edit"></i>
                                                            </button>

                                                            {/* <!-- <a href="?p=banner&page=allBanners&current_page=&action=deleteBanner&id=&banner_url=" className="btn btn-danger" onClick="alert('Are you sure to delete');"><i className="fas fa-minus-circle"></i></a> --> */}
                                                            </td>
                                                            
                                                        </tr>
                                                                                                            </tbody>
                                                </table>
                                                <nav aria-label="...">
                                                    <ul className="pagination justify-content-end">
                                                                                                                <li className="page-item active"><a className="page-link"
                                                                href="dashboard.php?p=banner&page=allBanners&current_page=1">
                                                                1</a></li>
                                                                                                            </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                    {/* <!-- /.container-fluid --> */}
                                    
                            

                    </div>
                </div>
            </div>
        
        
        </div>

    </div>
        </>
    )
}

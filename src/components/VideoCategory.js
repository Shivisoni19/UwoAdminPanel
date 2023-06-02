import React from 'react'

export default function VideoCategory() {
    return (
        <div>
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">All Video Category
                <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onclick="addvideoCategory('1');">
                    <i className="fas fa-plus fa-sm text-white-50"></i>Add New</button>
                </h1>
                <div>
                {/* <!-- <a href="?p=reports&page=reportVideo&curr_page=1" className="links_sublinks    "
                        style="margin-left: 22px;">
                        <span>Report Video</span>
                </a> --> */}
                {/* <!-- <a href="?p=reports&page=reportUser&curr_page=1" className="links_sublinks   " style="margin-left: 22px;">
                        <span>Report User</span>
                </a> --> */}
                </div>
            </div>
        </div>
        <div className="container-fluid">
            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="pills-pending-tab" data-toggle="pill" href="#pills-pending" role="tab" aria-controls="pills-pending" aria-selected="true">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-completed-tab" data-toggle="pill" href="#pills-completed" role="tab" aria-controls="pills-completed" aria-selected="false">Non Active</a>
                            </li>
                        </ul>
                        {/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="videosearch_criteria(this.value)"
                            placeholder="Search for videos.."> --> */}
                    </div>
                    <div className="card-body">
			            <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-pending" role="tabpanel" aria-labelledby="pills-home-tab">
                                                                   {/* <!-- Begin Page Content --> */}
                                    <div className="container-fluid">
                                    {/* <!-- DataTales Example --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            {/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="reoprtedvideosearch_criteria(this.value)"
                                                placeholder="Search for videos.."> --> */}
                                                <h6 className="m-0 font-weight-bold text-primary">Video Category</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                    <thead>
                                                        <tr>
                                                            <th>Sr</th>
                                                            <th>Category</th>
                                                            <th>Picture</th>
                                                            <th>Active</th>
                                                            <th>Priority</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Sr</th>
                                                            <th>Category</th>
                                                            <th>Picture</th>
                                                            <th>Active</th>
                                                            <th>Priority</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </tfoot>
                                                    <tbody id="myTable_row">
                                                                                                                <tr>
                                                            <td>1</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>UWO Influencers</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1637587663_819218250.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>1</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('65')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>2</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>laughterchallengewithuwo</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1629200178_15410454.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>2</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('58')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>3</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>UwoAdvertisemnet</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1616579497_695548167.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>3</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('51')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>4</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Romantic</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045148_1797866242.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>4</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('25')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>5</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Dance</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613044198_1941695586.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>5</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('5')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>6</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Trending</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045183_858806038.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>6</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('28')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>7</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>UnlimitedU</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045198_981185530.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>7</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('1')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>8</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Music</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613044245_58828883.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>8</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('7')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>9</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Funny</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613044158_1752823655.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>9</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('4')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>10</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Sports</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613044847_1243825292.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>10</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('10')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>11</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Food</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1610535611_688548015.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>11</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('11')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>12</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>AnimalLover</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613044987_1690445434.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>12</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('12')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>13</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Travel & Nature</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045012_581265976.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>13</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('13')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>14</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Motivational</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045075_636705063.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>14</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('16')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>15</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Health&Fitness</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613044263_860836665.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>15</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('8')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>16</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Gaming</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045095_608608804.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>16</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('19')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>17</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>WebSeries</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045117_1474392418.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>17</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('20')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>18</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Bike Life</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045128_959300223.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>18</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('21')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>19</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Cricket For Life</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045139_764929143.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>19</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('23')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>20</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>ShayariKiDiary</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045173_1903532106.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                YES                                                            </td>
                                                            <td>20</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('27')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                            </tbody>
                                                </table>
                                                <nav aria-label="...">
                                                    <ul className="pagination justify-content-end">
                                                                                                                <li className="page-item active"><a className="page-link"
                                                                href="dashboard.php?p=videoCategory&page=allvideoCategory&curr_page=1">
                                                                1</a></li>
                                                                                                                <li className="page-item "><a className="page-link"
                                                                href="dashboard.php?p=videoCategory&page=allvideoCategory&curr_page=2">
                                                                2</a></li>
                                                                                                                <li className="page-item "><a className="page-link"
                                                                href="dashboard.php?p=videoCategory&page=allvideoCategory&curr_page=3">
                                                                3</a></li>
                                                                                                                <li className="page-item">
                                                            <a className="page-link"
                                                                href="dashboard.php?p=videoCategory&page=allvideoCategory&curr_page=2">Next</a>
                                                        </li>
                                                                                                            </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <!-- /.container-fluid --> */}
                                                               </div>
                            <div className="tab-pane fade show" id="pills-completed" role="tabpanel" aria-labelledby="pills-home-tab">
                                                               {/* <!-- Begin Page Content --> */}
                                    <div className="container-fluid">
                                    {/* <!-- DataTales Example --> */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            {/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="reoprtedvideosearch_criteria(this.value)"
                                                placeholder="Search for videos.."> --> */}
                                                <h6 className="m-0 font-weight-bold text-primary">Video Category</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                                    <thead>
                                                        <tr>
                                                            <th>Sr</th>
                                                            <th>Category</th>
                                                            <th>Picture</th>
                                                            <th>Active</th>
                                                            <th>Priority</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tfoot>
                                                        <tr>
                                                            <th>Sr</th>
                                                            <th>Category</th>
                                                            <th>Picture</th>
                                                            <th>Active</th>
                                                            <th>Priority</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </tfoot>
                                                    <tbody id="myTable_row">
                                                                                                                <tr>
                                                            <td>1</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Apna man pasand</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1630499343_2060043612.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                NO                                                            </td>
                                                            <td>0</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('59')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>2</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Lifestyle</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613044207_692455994.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                NO                                                            </td>
                                                            <td>34</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('6')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>3</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>Education</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613045066_1897188842.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                NO                                                            </td>
                                                            <td>37</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('14')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>4</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>IndianArmy</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610690751_944053774.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                NO                                                            </td>
                                                            <td>40</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('31')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>5</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>ValentinesWeek</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613044104_252276496.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                NO                                                            </td>
                                                            <td>45</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('50')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                                <tr>
                                                            <td>6</td>
                                                            {/* <!-- <td></td> --> */}
                                                            <td>111</td>
                                                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1628493144_639464693.jpg" style={{width:'100px'}} className="img-thumbnail"/> </td>
                                                            <td>
                                                                NO                                                            </td>
                                                            <td>55</td>
                                                            <td>
                                                            <button type="button" className="btn btn-info" onclick="editVCategory('56')"><i className="fas fa-edit"></i></button>
                                                            </td>
                                                        </tr>
                                                                                                            </tbody>
                                                </table>
                                                <nav aria-label="...">
                                                    <ul className="pagination justify-content-end">
                                                                                                                <li className="page-item active"><a className="page-link"
                                                                href="dashboard.php?p=videoCategory&page=allvideoCategory&curr_page=1">
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
        </div>
    )
}

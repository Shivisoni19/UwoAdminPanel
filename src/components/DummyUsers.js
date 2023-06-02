import React from 'react'

export default function DummyUsers() {
    return (
        <div>
            <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dummy Users</h1>
        <a href="dashboard.php?p=add_users" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-plus fa-sm text-white-50"></i> Add Users</a>
    </div>
</div>

{/* <!-- Begin Page Content --> */}
<div className="container-fluid">

    {/* <!-- DataTales Example --> */}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            {/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="usersearch_criteria(this.value)"
                placeholder="Search for names.."> --> */}
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Created By</th>
                            <th>Name</th>
                            <th>Username</th>
                             <th>Pic</th>
                            {/* <!-- <th>Device</th> --> */}
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Sr</th>
                            <th>Created By</th>
                            <th>Name</th>
                            <th>Username</th>
                             <th>Pic</th>
                            {/* <!-- <th>Device</th> --> */}
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody id="myTable_row">
                                                <tr>
                            <td>181</td>
                            <td>self</td>
                            <td>DEVRAT  DUBEY</td>
                            <td> @DEVRAT 1542633040</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16123697751725543594_470104673.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>03-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=16123697751725543594&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=16123697751725543594"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>182</td>
                            <td>self</td>
                            <td>ASIF  KHAN</td>
                            <td> @ASIF1664338602</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1612369682540612307_414150022.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>16-Aug-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=1612369682540612307&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=1612369682540612307"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>183</td>
                            <td>self</td>
                            <td>YOGESH  RAJAK</td>
                            <td> @YOGESH 779876506</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1612369651829321418_95682127.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>03-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=1612369651829321418&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=1612369651829321418"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>184</td>
                            <td>self</td>
                            <td>RAHUL  MARAVI</td>
                            <td> @RAHUL 2116431363</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/161236959554452352_1916773381.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>03-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=161236959554452352&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=161236959554452352"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>185</td>
                            <td>self</td>
                            <td>PRIYANSHU  YADAV</td>
                            <td> @PRIYANSHU1216225633</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1612369556666501608_393501865.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>17-Aug-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=1612369556666501608&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=1612369556666501608"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>186</td>
                            <td>self</td>
                            <td>NISHANT  SHARMA</td>
                            <td> @NISHANT480684081</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1612368903277389248_897878702.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>13-Aug-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=1612368903277389248&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=1612368903277389248"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>187</td>
                            <td>self</td>
                            <td>SOURABH  BISWAS</td>
                            <td> @SOURABH459723217</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16123688731021068874_2098167157.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>03-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=16123688731021068874&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=16123688731021068874"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>188</td>
                            <td>self</td>
                            <td>Vishal  Tiwari </td>
                            <td> @Vishal118327</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16123688291385590402_1359882370.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>11-Aug-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=16123688291385590402&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=16123688291385590402"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>189</td>
                            <td>self</td>
                            <td>yashi pandey</td>
                            <td> @yashi1206624639</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1612356028255844594_1844983607.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>03-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=1612356028255844594&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=1612356028255844594"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>190</td>
                            <td>self</td>
                            <td>febtest3 testfeb</td>
                            <td> @febtest31308685984</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16123559871879441431_1944868901.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>03-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=16123559871879441431&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=16123559871879441431"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>191</td>
                            <td>self</td>
                            <td>AshishChanchlaniFanPage FanPage</td>
                            <td> @Ashish704553700</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16118331731351416104_213854130.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>28-Jan-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=16118331731351416104&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=16118331731351416104"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>192</td>
                            <td>self</td>
                            <td>Emily Emily</td>
                            <td> @Emily843330120</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/161183234394633814_2088333238.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>02-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=161183234394633814&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=161183234394633814"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>193</td>
                            <td>self</td>
                            <td>CarryMinatiFanPage FanPage</td>
                            <td> @CarryMinatiFanPage1395060</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16118280581652408658_1276820164.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>02-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=16118280581652408658&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=16118280581652408658"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>194</td>
                            <td>self</td>
                            <td>ShehnazGillFanPage FanPage</td>
                            <td> @ShehnazGill1073435512</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16117344711812725978_1140967364.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>27-Jan-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=16117344711812725978&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=16117344711812725978"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>195</td>
                            <td>self</td>
                            <td>moosa bhai</td>
                            <td> @moosa1661299315</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16113964941522066254_1563550525.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>02-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=16113964941522066254&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=16113964941522066254"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>196</td>
                            <td>self</td>
                            <td>goldy Sharma</td>
                            <td> @goldy1557032662</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16113924591903101403_1221432769.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>02-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=16113924591903101403&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=16113924591903101403"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>197</td>
                            <td>self</td>
                            <td>sumit badshah</td>
                            <td> @sumit1144704603</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610708879413041192_386443805.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>02-Feb-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=1610708879413041192&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=1610708879413041192"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>198</td>
                            <td>self</td>
                            <td>mohit pandit</td>
                            <td> @mohit483617197</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/161062307186048126_2016529277.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>14-Jan-2021</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=161062307186048126&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=161062307186048126"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>199</td>
                            <td>self</td>
                            <td>Suresh </td>
                            <td> @1267400953</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16087969071696637650_266970223.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>24-Dec-2020</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=16087969071696637650&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=16087969071696637650"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                                <tr>
                            <td>200</td>
                            <td>self</td>
                            <td>Bhavesh </td>
                            <td> @1069917495</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1608796852564077492_1215307363.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            {/* <!-- <td></td> --> */}
                            <td>24-Dec-2020</td>
                            <td>
                                                                                            <a href="?p=users&action=blockUser&user_id=1608796852564077492&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=1608796852564077492"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                            </td>
                        </tr>
                                            </tbody>
                </table>
                <nav aria-label="...">
                    <ul className="pagination justify-content-end">
                                                <li className="page-item disabled">
                            <a href='dashboard.php?p=dummy&page=dummyUsers&current_page=9'>
                                <span className="page-link">Previous</span>
                            </a>
                        </li>
                                                <li className="page-item active"><a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=10">
                                10</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=11">
                                11</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=12">
                                12</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=13">
                                13</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=14">
                                14</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=15">
                                15</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=16">
                                16</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=17">
                                17</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=18">
                                18</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=19">
                                19</a></li>

                                                <li className="page-item">
                            <a className="page-link"
                                href="dashboard.php?p=dummy&page=dummyUsers&current_page=11">Next</a>
                        </li>
                                            </ul>
                </nav>
            </div>
        </div>
    </div>

</div>
        </div>
    )
}

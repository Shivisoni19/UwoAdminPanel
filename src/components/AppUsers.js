import React from 'react'

export default function AppUsers() {
    return (
        <div>
            <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Users</h1>
                {/* <!-- <a href="dashboard.php?p=add_users" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-plus fa-sm text-white-50"></i> Add Users</a> --> */}
            </div>
        </div>
    {/* <!-- Begin Page Content --> */}
<div className="container-fluid">

    {/* <!-- DataTales Example --> */}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <input type="text" id="search_criteria" className="form-control" onkeyup="usersearch_criteria(this.value)"
                placeholder="Search for names.."/>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                             <th>Pic</th>
                            <th>Device</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                             <th>Pic</th>
                            <th>Device</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody id="myTable_row">
                                                <tr>
                            <td>1</td>
                            <td>116411343711502769356</td>
                            <td>SAAMI User</td>
                            <td> @SAAMI1499151293</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/116411343711502769356_1172797437.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>29-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=116411343711502769356&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=116411343711502769356"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('116411343711502769356')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>2</td>
                            <td>984mVMDGmAbYFTVETu1pcH4yCIl2</td>
                            <td> </td>
                            <td> @1640762846</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/984mVMDGmAbYFTVETu1pcH4yCIl2_1386221952.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>29-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=984mVMDGmAbYFTVETu1pcH4yCIl2&current_page=1&block=1"
                                    style={{color:'red',Decoration:'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=984mVMDGmAbYFTVETu1pcH4yCIl2"
                                    style={{textDecoration:'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('984mVMDGmAbYFTVETu1pcH4yCIl2')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>3</td>
                            <td>7695012</td>
                            <td> </td>
                            <td> @2120001708</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/7695012_1825605184.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>29-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=7695012&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=7695012"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('7695012')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>4</td>
                            <td>0uSGy8SsBBM7V4zsvBybh0J96B93</td>
                            <td>benny paswan</td>
                            <td> @benny11</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/0uSGy8SsBBM7V4zsvBybh0J96B93_996509298.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>29-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=0uSGy8SsBBM7V4zsvBybh0J96B93&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=0uSGy8SsBBM7V4zsvBybh0J96B93"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('0uSGy8SsBBM7V4zsvBybh0J96B93')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>5</td>
                            <td>107549416326023096194</td>
                            <td>Abhinohit Pabhakar</td>
                            <td> @iamabhinohit</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/107549416326023096194_1902744687.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>29-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=107549416326023096194&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=107549416326023096194"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('107549416326023096194')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>6</td>
                            <td>100704142519824006705</td>
                            <td>Jamshaid Feroz</td>
                            <td> @Jamshaid1135894271</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/100704142519824006705_303590235.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>29-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=100704142519824006705&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=100704142519824006705"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('100704142519824006705')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>7</td>
                            <td>108238989095470565282</td>
                            <td>Jamshaid Jimmy</td>
                            <td> @Jamshaid455786132</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/108238989095470565282_327429084.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>29-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=108238989095470565282&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=108238989095470565282"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('108238989095470565282')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>8</td>
                            <td>ccoIFvmZsgeJaRX3yZ8DmRTdzGV2</td>
                            <td>Vikas  Srivastav</td>
                            <td> @1640718340</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/ccoIFvmZsgeJaRX3yZ8DmRTdzGV2_836069110.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>29-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=ccoIFvmZsgeJaRX3yZ8DmRTdzGV2&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=ccoIFvmZsgeJaRX3yZ8DmRTdzGV2"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('ccoIFvmZsgeJaRX3yZ8DmRTdzGV2')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>9</td>
                            <td>103010215472863939170</td>
                            <td>Vilas Nair</td>
                            <td> @Vilas732353752</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/103010215472863939170_644754828.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>28-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=103010215472863939170&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=103010215472863939170"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('103010215472863939170')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>10</td>
                            <td>105358323641228622345</td>
                            <td>Salman Godikat</td>
                            <td> @Salman1256807234</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/105358323641228622345_1405292466.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>28-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=105358323641228622345&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=105358323641228622345"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('105358323641228622345')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>11</td>
                            <td>104510266798106341097</td>
                            <td>Shreshtha Banerjee</td>
                            <td> @Shreshtha927882140</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/104510266798106341097_748322789.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>28-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=104510266798106341097&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=104510266798106341097"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('104510266798106341097')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>12</td>
                            <td>D4EOjGGLnZS7jeno4uWrDSJvYHf2</td>
                            <td> </td>
                            <td> @1640670993</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/D4EOjGGLnZS7jeno4uWrDSJvYHf2_729875794.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>28-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=D4EOjGGLnZS7jeno4uWrDSJvYHf2&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=D4EOjGGLnZS7jeno4uWrDSJvYHf2"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('D4EOjGGLnZS7jeno4uWrDSJvYHf2')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>13</td>
                            <td>115112754676592074261</td>
                            <td>Pardeep Kumar</td>
                            <td> @Pardeep1559346641</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/115112754676592074261_717031607.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>28-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=115112754676592074261&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=115112754676592074261"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('115112754676592074261')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>14</td>
                            <td>FyOLXOIDN8bIY7HgcmfPpvnElH53</td>
                            <td> </td>
                            <td> @1640616759</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/FyOLXOIDN8bIY7HgcmfPpvnElH53_760803558.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>27-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=FyOLXOIDN8bIY7HgcmfPpvnElH53&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=FyOLXOIDN8bIY7HgcmfPpvnElH53"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('FyOLXOIDN8bIY7HgcmfPpvnElH53')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>15</td>
                            <td>112223804536891287555</td>
                            <td>Hafiz Manzoor ahmad</td>
                            <td> @Hafiz788585290</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/112223804536891287555_1046712345.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>27-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=112223804536891287555&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=112223804536891287555"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('112223804536891287555')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>16</td>
                            <td>107984140957071061506</td>
                            <td>Prince Mandal</td>
                            <td> @Prince737427643</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/107984140957071061506_1461864086.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>27-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=107984140957071061506&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=107984140957071061506"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('107984140957071061506')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>17</td>
                            <td>101602966993155948318</td>
                            <td>Muhammad Imran Sayeed</td>
                            <td> @mr_imran_sayeed</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/101602966993155948318_780725652.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>27-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=101602966993155948318&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=101602966993155948318"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('101602966993155948318')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>18</td>
                            <td>OuYL5fia3ugKapVttmik41BgM803</td>
                            <td>RX HUnter</td>
                            <td> @rxhunterrr77</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/OuYL5fia3ugKapVttmik41BgM803_665389374.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>27-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=OuYL5fia3ugKapVttmik41BgM803&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=OuYL5fia3ugKapVttmik41BgM803"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('OuYL5fia3ugKapVttmik41BgM803')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>19</td>
                            <td>106979196575587987359</td>
                            <td>Mohanlal Jain</td>
                            <td> @Mohanlal8603795</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/106979196575587987359_1476671663.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>29-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=106979196575587987359&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=106979196575587987359"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('106979196575587987359')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                                <tr>
                            <td>20</td>
                            <td>117619214702523388531</td>
                            <td>Masood Ansari</td>
                            <td> @Masood230284300</td>
                            <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/117619214702523388531_1122566522.jpg" style={{width:'100px'}} className="img-thumbnail" onerror="this.onerror=null;this.src='https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg';"/> </td>
                            <td>android</td>
                            <td>27-Dec-2021</td>
                            <td>
                                                                                           
                                <a href="?p=users&page=allUsers&action=blockUser&user_id=117619214702523388531&current_page=1&block=1"
                                    style={{color: 'red', textDecoration: 'none'}}><i className="fas fa-ban"></i>
                                </a>
                                                                <a href="?p=users&page=viewProfile&user_id=117619214702523388531"
                                    style={{textDecoration: 'none'}}><i className="fas fa-user"></i>
                                </a>
                                <button type="button" className="btn btn-info my-1" onclick="increase_followers('117619214702523388531')"> <i className="fas fa-plus"></i> </button>
                            </td>
                        </tr>
                                            </tbody>
                </table>
                <nav aria-label="...">
                    <ul className="pagination justify-content-end">
                                                <li className="page-item active"><a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=1">
                                1</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=2">
                                2</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=3">
                                3</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=4">
                                4</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=5">
                                5</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=6">
                                6</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=7">
                                7</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=8">
                                8</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=9">
                                9</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=10">
                                10</a></li>

                                                <li className="page-item">
                            <a className="page-link"
                                href="dashboard.php?p=users&page=allUsers&current_page=2">Next</a>
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

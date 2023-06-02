import { Table } from '@material-ui/core'
import React from 'react'

export default function PopularCreator() {
    return (
        <div>
           <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <div>
                        <h1 className="h3 mb-0 text-gray-800">All Popular Creator
                        <a href="dashboard.php?p=creator&page=addCreator" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-plus fa-sm text-white-50"></i>Add</a>
                        </h1>
                        </div>
                        {/* <!-- <a href="?p=creator&page=allVideo&curr_page=1"
                                className=" links_sublinks    "
                                style={{marginLeft: '22px'}}>
                                <span>Users Videos</span>
                        </a> --> */}
                    </div>
                </div>  
                             
                
                	{/* <!-- Begin Page Content --> */}
        <div className="container-fluid">

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                {/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="usersearch_criteria(this.value)"
                    placeholder="Search for videos.."> --> */}
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Sr</th>
                                {/* <!-- <th>Video ID</th> --> */}
                                <th>Full Name</th>
                                <th>Profile</th>
                                <th>Username</th>
                                <th>Rank</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Sr</th>
                                {/* <!-- <th>Video ID</th> --> */}
                                <th>Full Name</th>
                                <th>Profile</th>
                                <th>Username</th>
                                <th>Rank</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                        <tbody id="myTable_row">           
                           <tr>
                                <td>1</td>
                                {/* <!-- <td></td> --> */}
                                <td> Poonam Ojha</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/pZLxsXIvaDdEMTPcQhzJZclfIkj1_1351272392.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @poo09</td>
                                <td> 1</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('64',1)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=64" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                          <tr>
                                <td>2</td>
                                {/* <!-- <td></td> --> */}
                                <td> Faiz Alam</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/GoiGgCSX69PQn0KuTsGdGPR1l1o1_1576702921.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @faizalam1234</td>
                                <td> 2</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('54',2)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=54" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>3</td>
                                {/* <!-- <td></td> --> */}
                                <td> Karan Singh</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/110083382029207969990_910291478.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @karan1234735304</td>
                                <td> 3</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('61',3)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=61" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>4</td>
                                {/* <!-- <td></td> --> */}
                                <td> rain kurmi</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/111381505214977668049_1299567376.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @rain24</td>
                                <td> 4</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('60',4)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=60" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>5</td>
                                {/* <!-- <td></td> --> */}
                                <td> Madhu Singh</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/116937783735473087346_1229512277.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @madhusingh</td>
                                <td> 5</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('58',5)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=58" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>6</td>
                                {/* <!-- <td></td> --> */}
                                <td> Nisha sharma G</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/108444414383701741730_102411408.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @nisha1017970123</td>
                                <td> 7</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('36',7)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=36" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                           <tr>
                                <td>7</td>
                                {/* <!-- <td></td> --> */}
                                <td> Yasha Sharma</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/5FsEko77CzXaqyF73L636mDem5C3_1067921628.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @yashasharma</td>
                                <td> 8</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('50',8)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=50" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>8</td>
                                {/* <!-- <td></td> --> */}
                                <td> Crazyminati Ki Duniya</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/107516290890175119593_2071662742.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @crazyminati1739957767</td>
                                <td> 9</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('63',9)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=63" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>9</td>
                                {/* <!-- <td></td> --> */}
                                <td> Nisha Singh</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/112880191318585256855_1059272571.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @nishasingh</td>
                                <td> 9</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('55',9)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=55" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>10</td>
                                {/* <!-- <td></td> --> */}
                                <td> Dilshad  Shooter</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/J7ptsOLx74STy8tJGyFkLkNRmbq2_649530343.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @dilshadshooter</td>
                                <td> 12</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('65',12)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=65" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>11</td>
                                {/* <!-- <td></td> --> */}
                                <td> Heena Jain</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/d9DOUNVpIDTCv9wh84JXqxWBWoh2_432700964.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @heenyjeeny</td>
                                <td> 13</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('26',13)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=26" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>12</td>
                                {/* <!-- <td></td> --> */}
                                <td> md badshah</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/DHI2KbeQPLf3d1ikAYD1s4hK4Jr1_1057173118.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @md_badshah.21</td>
                                <td> 14</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('66',14)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=66" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>13</td>
                                {/* <!-- <td></td> --> */}
                                <td> Shivani Rajput</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/jm6GdFlxBeWgblDNdKIdp3UljBg1_2141917959.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @shivanirajput</td>
                                <td> 15</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('43',15)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=43" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>14</td>
                                {/* <!-- <td></td> --> */}
                                <td> Myself _sutapa</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/RLnonISM30fvfJ9DRBbFh3jeiys2_1975707038.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @myself_sutapa08</td>
                                <td> 16</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('40',16)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=40" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>15</td>
                                {/* <!-- <td></td> --> */}
                                <td> Akshay Parihar</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/4aCXQ1UXt4g0u9TpHa5ek62LBz12_1331887021.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @akshay_parihar</td>
                                <td> 17</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('47',17)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=47" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>16</td>
                                {/* <!-- <td></td> --> */}
                                <td> Amreen Zabeen</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/108040450593622616248_1382879398.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @_i_am_rain_</td>
                                <td> 19</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('39',19)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=39" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                                                        <tr>
                                <td>17</td>
                                {/* <!-- <td></td> --> */}
                                <td> Mahira Prajapati</td>
                                <td><img src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/n1HJmiPJ3WX6iiFlgqsCLNgevHC3_879210933.jpg" style={{maxWidth:'100px'}} className="img-responsive"/> </td>
                                <td> @mahira190</td>
                                <td> 20</td>
                                <td>                                                                
                                <button type="button" className="btn btn-info my-1" onclick="editpopularRank('62',20)">
                                <i className="fas fa-edit"></i>
                                </button>
                                <a type="button" className="btn btn-danger my-1" href="?p=creator&page=allPopular&curr_page=1&action=unsetPopular&id=62" onclick="alert('Are You Sure to delete');"><i className="fas fa-minus-circle"></i></a>
                               
                                </td>
                            </tr>
                          </tbody>
                    </table>
                    <nav aria-label="...">
                        <ul className="pagination justify-content-end">
                                                        <li className="page-item active"><a className="page-link"
                                    href="dashboard.php?p=creator&page=allPopular&curr_page=1">
                                    1</a></li>
                                                    </ul>
                    </nav>
                </div>
            </div>
        </div>

        </div>
        </div>
    )
}

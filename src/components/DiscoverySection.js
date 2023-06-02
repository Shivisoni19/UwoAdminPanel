import React from "react";

export default function DiscoverySection() {
  return (
    <div>
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="pill"
                  href="#pills-active_section"
                  role="tab"
                  aria-controls="pills-active_section"
                  aria-selected="true"
                >
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#pills-inactive_section"
                  role="tab"
                  aria-controls="pills-inactive_section"
                  aria-selected="false"
                >
                  In-Active
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-active_section"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="table-responsive" id="active_section">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        <th>Pic</th>
                        <th>Rank</th>
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        <th>Pic</th>
                        <th>Rank</th>
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                    <tbody id="myTable_row">
                      <tr>
                        <td>1</td>
                        <td>uwoinfluencers </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1637588044-1582686803.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 1 </td>
                        <td> 22-Nov-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>tiptipbarsapani </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1637399626-1478241284.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 2 </td>
                        <td> 20-Nov-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>uwokiyaari </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1629200209_2085979786.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 3 </td>
                        <td> 20-Nov-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>bijleebijlee </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1637138450-451646589.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 4 </td>
                        <td> 22-Nov-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>UWOTrending </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1614248744_1742428841.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 5 </td>
                        <td> 08-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>UnlimitedU </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1608454944_1900780318.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 6 </td>
                        <td> 08-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>UwoVideoAds </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1616410170-1540710996.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 8 </td>
                        <td> 08-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>RabbaMeharKari </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1613813406-243804995.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 9 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>CoupleGoals </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1614248402_2079529219.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 10 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button
                            type="button"
                            className="btn btn-info"
                            onclick="editDiscovery('63')"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>UWOQoutes </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1627038743_2095836911.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 11 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>DontRushChallenge </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1613651861-267042125.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 12 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>SugarCrush </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1618674325-1839100547.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 13 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Comedy </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1613463113_609684239.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 16 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Webseries </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611573505_1728638031.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 17 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>AnimalLover </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610795136-285140248.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 18 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>PawriHoRahiHai </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1614248369_2075895423.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 19 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>Motivational </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1614248665_1846818323.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 20 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>Sports </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1614248428_1760233416.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 21 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>Superheroes </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1611567062-1537533838.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 22 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>PunjabiTadka </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1614248686_783726896.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 23 </td>
                        <td> 07-Oct-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav aria-label="...">
                    <ul className="pagination justify-content-end">
                      <li className="page-item active">
                        <a className="page-link">1</a>
                      </li>
                      <li className="page-item ">
                        <a className="page-link">2</a>
                      </li>
                      <li className="page-item ">
                        <a className="page-link">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-inactive_section"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="table-responsive" id="active_section">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        <th>Pic</th>
                        <th>Rank</th>
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        <th>Pic</th>
                        <th>Rank</th>
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                    <tbody id="myTable_row">
                      <tr>
                        <td>1</td>
                        <td>LILCHAMPS </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1607681277-1480451875.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> not set </td>
                        <td> 18-Dec-2020</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>tiptipbarsapani </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1637397046-404282147.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> not set </td>
                        <td> 20-Nov-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>UwoDaTashan </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1608457670_1873658189.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 31 </td>
                        <td> 17-Feb-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Chicken Wing </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1609328975-1931468777.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 32 </td>
                        <td> 28-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>SorryDarling </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1608793163-919433367.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 36 </td>
                        <td> 06-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>RasodeMeinKaunTha </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1608455065_518754364.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 40 </td>
                        <td> 23-Dec-2020</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Legends </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1611389350-773880382.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 43 </td>
                        <td> 01-Feb-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>PunjabiBeats </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610621845-495162243.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 44 </td>
                        <td> 14-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>TasveerKeSahare </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1608547085-2095524627.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 47 </td>
                        <td> 28-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>PulwamaAttack </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1613285323-459141276.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 48 </td>
                        <td> 15-Feb-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>TuadaKuttaKutta </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1609326833_1563422218.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 51 </td>
                        <td> 22-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Nayan </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1609323070-220774940.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 52 </td>
                        <td> 22-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>CareNiKarda </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1608455023_1473769222.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 53 </td>
                        <td> 22-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Anime </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610795314-91078407.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 54 </td>
                        <td> 16-Feb-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>Vardaan </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1611302768-840836663.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 55 </td>
                        <td> 26-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>IndianArmy </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610690595-751211795.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 60 </td>
                        <td> 16-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>NehuDaVyah </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1608455098_897032030.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 61 </td>
                        <td> 04-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>MerryChristmas </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1608800868_2119922021.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 62 </td>
                        <td> 04-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>ByeBye2020 </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1608287733-1430197144.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 63 </td>
                        <td> 04-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>NEW YEAR NEW U </td>
                        <td>
                          <img
                            src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1609928381_2111390865.jpg"
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td> 64 </td>
                        <td> 12-Jan-2021</td>
                        <td>
                          {/* <!-- <a type="button" className="btn btn-danger" href="?p=discovery&page=allsection&curr_page=&action=delete_Discovery_section&id="><i className="fas fa-minus-circle"></i></a> --> */}
                          <button type="button" className="btn btn-info">
                            <i className="fas fa-edit"></i>
                          </button>
                          <a type="button" className="btn btn-primary ml-2">
                            <i className="fas fa-eye"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <nav aria-label="...">
                    <ul className="pagination justify-content-end">
                      <li className="page-item active">
                        <a className="page-link">1</a>
                      </li>
                      <li className="page-item ">
                        <a className="page-link">2</a>
                      </li>
                      <li className="page-item ">
                        <a className="page-link">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link">Next</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

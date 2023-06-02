import React from "react";

export default function Language() {
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">
            All Language
            <button
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              onclick="Addlanguage('1');"
            >
              <i className="fas fa-plus fa-sm text-white-50"></i>Language
            </button>
          </h1>
          <div></div>
        </div>
      </div>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Languages</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Sr</th>
                    <th>Language</th>
                    <th>Pics</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sr</th>
                    <th>Language</th>
                    <th>Pics</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody id="myTable_row">
                  <tr>
                    <td>1</td>
                    <td>Other</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817668_1229330441.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('13','Other','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817668_1229330441.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Malayalam</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817581_1780271625.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('12','Malayalam','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817581_1780271625.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Assamese</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817573_1459689609.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('11','Assamese','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817573_1459689609.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Telugu</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817566_197015156.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('10','Telugu','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817566_197015156.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Tamil</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817557_1191931686.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('9','Tamil','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817557_1191931686.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Bengali</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817543_60910108.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('8','Bengali','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817543_60910108.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Marathi</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817659_1772358236.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />{" "}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('7','Marathi','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817659_1772358236.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Punjabi</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817534_1814199160.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />{" "}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('6','Punjabi','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817534_1814199160.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Gujrati</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817526_208943794.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />{" "}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('5','Gujrati','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817526_208943794.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Odia</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817519_1203903247.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />{" "}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('4','Odia','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817519_1203903247.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>kannada</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817501_80269948.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />{" "}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('3','kannada','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817501_80269948.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>english</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817492_405065444.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />{" "}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('2','english','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817492_405065444.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>hindi</td>
                    <td>
                      <img
                        src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817484_384921894.jpg"
                        style={{ width: "100px" }}
                        className="img-thumbnail"
                      />{" "}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        onclick="editlanguage('1','hindi','https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/upload/images/1611817484_384921894.jpg')"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav aria-label="...">
                <ul className="pagination justify-content-end">
                  <li className="page-item active">
                    <a
                      className="page-link"
                      href="dashboard.php?p=language&page=alllanguage&curr_page=1"
                    >
                      1
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'

export default function Report() {
    return (
        <>
            <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">All Reasons
        <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onclick="Addreason('1');">
			<i className="fas fa-plus fa-sm text-white-50"></i>Reason</button>
        </h1>
        <div>
        <a href="?p=reports&page=reportVideo&curr_page=1" className="links_sublinks    "
                style={{marginLeft: '22px'}}>
                <span>Report Video</span>
        </a>
        {/* <!-- <a href="?p=reports&page=reportUser&curr_page=1" className="links_sublinks   " style="margin-left: 22px;">
                <span>Report User</span>
        </a> --> */}
        </div>
    </div>
</div>
{/* <!-- Begin Page Content --> */}
<div className="container-fluid">

    {/* <!-- DataTales Example --> */}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            {/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="reoprtedvideosearch_criteria(this.value)"
                placeholder="Search for videos.."> --> */}
                <h6 className="m-0 font-weight-bold text-primary">Reasons</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Reason</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Sr</th>
                            <th>Reason</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody id="myTable_row">
                                                <tr>
                            <td>1</td>
                            {/* <!-- <td></td> --> */}
                            <td>test</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('21','test')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>2</td>
                            {/* <!-- <td></td> --> */}
                            <td>promote smoking </td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('20','promote smoking ')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>3</td>
                            {/* <!-- <td></td> --> */}
                            <td>smoking harmful</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('19','smoking harmful')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>4</td>
                            {/* <!-- <td></td> --> */}
                            <td>fake profile</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('18','fake profile')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>5</td>
                            {/* <!-- <td></td> --> */}
                            <td>jsn x
</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('17','jsn x
')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>6</td>
                            {/* <!-- <td></td> --> */}
                            <td>fajke video
</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('16','fajke video
')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>7</td>
                            {/* <!-- <td></td> --> */}
                            <td>ଅଂଛଃଛଂଠଂଜୃଜୃଜୃଠୃଡଂଜୃଠୃଠୃଫଂଛୂଛୂଖୂଜବଫଲଜଲଲଡଲଜଲଡଧଜଧଡଲଗଧଡଧଜଦଡଦଜଲଡଲଜଧଜଧଡଦଜଧଡଧଗଂଠୃଗଧଠଧଡଲବଲଜନବଧଜଦଜରଜରଜଲଜଶଜଷଜଷଜଲଜଳଜଦଜଂଡଂଡଂଡଂଜୃଗୃଡୃଠୃଜାଠୃଜୃଜୃଡଧଜଲଜଲଜଲଜଜଲଜଶଜଶଜପପଝପଝଟଭଟଭପଝଷଝଷଜଜପଝପବପଡडनढजशनडडनजनठनजॅबनजशछनजनबनडनजठपनजडॅबॅडनजनजनजशखपखॅजनबनडनडनजनजनजनजॅडबॅबोसोठॅऋजधडशशडडशडश शडशडनडृजबृडनडशफृडनशठजृनफजनडनघपझॅढनजॅझॅझभोढनॅजडैढनजनडॅजॅडनॅट
न




ऑ
ऑ
ऑ


ऑ
ऑ
ऑ
ऑ
ऑ
ऑ
ऑ


ऑ
ऑ
ऑ
ऑ
ऑ
ऑ


ऑ
ऐ
ए
ए
ध
व
व

न
न
न
न
न
न
ठ
ठ
ठ
ट
ट
ट
टट</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('15','ଅଂଛଃଛଂଠଂଜୃଜୃଜୃଠୃଡଂଜୃଠୃଠୃଫଂଛୂଛୂଖୂଜବଫଲଜଲଲଡଲଜଲଡଧଜଧଡଲଗଧଡଧଜଦଡଦଜଲଡଲଜଧଜଧଡଦଜଧଡଧଗଂଠୃଗଧଠଧଡଲବଲଜନବଧଜଦଜରଜରଜଲଜଶଜଷଜଷଜଲଜଳଜଦଜଂଡଂଡଂଡଂଜୃଗୃଡୃଠୃଜାଠୃଜୃଜୃଡଧଜଲଜଲଜଲଜଜଲଜଶଜଶଜପପଝପଝଟଭଟଭପଝଷଝଷଜଜପଝପବପଡडनढजशनडडनजनठनजॅबनजशछनजनबनडनजठपनजडॅबॅडनजनजनजशखपखॅजनबनडनडनजनजनजनजॅडबॅबोसोठॅऋजधडशशडडशडश शडशडनडृजबृडनडशफृडनशठजृनफजनडनघपझॅढनजॅझॅझभोढनॅजडैढनजनडॅजॅडनॅट
न




ऑ
ऑ
ऑ


ऑ
ऑ
ऑ
ऑ
ऑ
ऑ
ऑ


ऑ
ऑ
ऑ
ऑ
ऑ
ऑ


ऑ
ऐ
ए
ए
ध
व
व

न
न
न
न
न
न
ठ
ठ
ठ
ट
ट
ट
टट')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>8</td>
                            {/* <!-- <td></td> --> */}
                            <td>😡</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('14','😡')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>9</td>
                            {/* <!-- <td></td> --> */}
                            <td>




</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('13','




')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>10</td>
                            {/* <!-- <td></td> --> */}
                            <td>@#$$%^&&?????




</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('12','@#$$%^&&?????




')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>11</td>
                            {/* <!-- <td></td> --> */}
                            <td>videos ar not downloadable
</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('11','videos ar not downloadable
')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>12</td>
                            {/* <!-- <td></td> --> */}
                            <td>not good</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('10','not good')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>13</td>
                            {/* <!-- <td></td> --> */}
                            <td>child abuse</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('9','child abuse')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>14</td>
                            {/* <!-- <td></td> --> */}
                            <td>others</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('8','others')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>15</td>
                            {/* <!-- <td></td> --> */}
                            <td>Hateful or abusive</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('7','Hateful or abusive')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>16</td>
                            {/* <!-- <td></td> --> */}
                            <td>caption issue</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('6','caption issue')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>17</td>
                            {/* <!-- <td></td> --> */}
                            <td>violent and impulsive content</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('5','violent and impulsive content')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>18</td>
                            {/* <!-- <td></td> --> */}
                            <td>promote terrorism</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('4','promote terrorism')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>19</td>
                            {/* <!-- <td></td> --> */}
                            <td>disturbing content</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('3','disturbing content')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                                <tr>
                            <td>20</td>
                            {/* <!-- <td></td> --> */}
                            <td>infringes my rights</td>
                            <td>
                            <button type="button" className="btn btn-info" onclick="editreason('2','infringes my rights')"><i className="fas fa-edit"></i></button>
                            </td>
                        </tr>
                                            </tbody>
                </table>
                <nav aria-label="...">
                    <ul className="pagination justify-content-end">
                                                <li className="page-item active"><a className="page-link"
                                href="dashboard.php?p=reports&page=report_reason&current_page=1">
                                1</a></li>
                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=reports&page=report_reason&current_page=2">
                                2</a></li>
                                                <li className="page-item">
                            <a className="page-link"
                                href="dashboard.php?p=reports&page=report_reason&current_page=2">Next</a>
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

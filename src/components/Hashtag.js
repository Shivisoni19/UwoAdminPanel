import React from 'react'

export default function Hashtag() {
    return (
        <>
           <div className="container-fluid">
		<div className="d-sm-flex align-items-center justify-content-between mb-4">
			<h1 className="h3 mb-0 text-gray-800">Hashtag suggestion</h1>
			<button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onclick="Addhashtag('1');">
			<i className="fas fa-plus fa-sm text-white-50"></i>Add hashtag</button>
		</div>
		</div>
			{/* <!-- Begin Page Content --> */}
<div className="container-fluid">

{/* <!-- DataTales Example --> */}
<div className="card shadow mb-4">
	<div className="card-header py-3">
			<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li className="nav-item">
					<a className="nav-link active" id="pills-active_hashtag-tab" data-toggle="pill" href="#pills-active_hashtag" role="tab" aria-controls="pills-active_hashtag" aria-selected="true">Active</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="pills-inactive_hashtag-tab" data-toggle="pill" href="#pills-inactive_hashtag" role="tab" aria-controls="pills-inactive_hashtag" aria-selected="false">In-Active</a>
				</li>
			</ul>
		{/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="hashtagsearch_criteria(this.value)"
			placeholder="Search for hashtag.."> --> */}
	</div>
	<div className="card-body">
	<div className="tab-content" id="pills-tabContent">
		<div className="tab-pane fade show active" id="pills-active_hashtag" role="tabpanel" aria-labelledby="pills-home-tab">
				
		<div className="table-responsive" id="active_hashtag">
			<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
				<thead>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>ID</th> --> */}
						<th>Name</th>
						{/* <!-- <th>Status</th> --> */}
						<th>Rank</th>
						{/* <!-- <th>Created</th> --> */}
						<th>Action</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>ID</th> --> */}
						<th>Name</th>
						{/* <!-- <th>Status</th> --> */}
						<th>Rank</th>
						{/* <!-- <th>Created</th> --> */}
						<th>Action</th>
					</tr>
				</tfoot>
				<tbody id="myTable_row">
										<tr>
						<td>1</td>						
						<td>tiptipbarsapani	</td>
						<td> 1 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('38')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>2</td>						
						<td>bijleebijlee	</td>
						<td> 2 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('37')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>3</td>						
						<td>UwoVideoAds	</td>
						<td> 4 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('26')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>4</td>						
						<td>UnlimitedU	</td>
						<td> 5 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('9')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>5</td>						
						<td>UWOTrending	</td>
						<td> 7 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('11')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>6</td>						
						<td>BollywoodMasala	</td>
						<td> 8 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('12')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>7</td>						
						<td>PunjabiTadka	</td>
						<td> 9 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('13')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>8</td>						
						<td>Anime	</td>
						<td> 13 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('19')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>9</td>						
						<td>AnimalLover	</td>
						<td> 14 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('21')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>10</td>						
						<td>Superheroes	</td>
						<td> 21 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('25')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>11</td>						
						<td>VintageChallange	</td>
						<td> 42 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('27')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>12</td>						
						<td>humhindustani	</td>
						<td> 50 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('33')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>13</td>						
						<td>thirakteykadam	</td>
						<td> 51 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('30')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
									</tbody>
			</table>
			<nav aria-label="...">
				<ul className="pagination justify-content-end">
										<li className="page-item active"><a className="page-link"
							href="dashboard.php?p=hashtag&page=allhashtag&curr_page=1">
							1</a></li>
									</ul>
			</nav>
		</div>	
			
		</div>
		<div className="tab-pane fade" id="pills-inactive_hashtag" role="tabpanel" aria-labelledby="pills-profile-tab"> 
				
		<div className="table-responsive" id="active_hashtag">
			<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
				<thead>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>ID</th> --> */}
						<th>Name</th>
						{/* <!-- <th>Pic</th> --> */}
						<th>Rank</th>
						{/* <!-- <th>Created</th> --> */}
						<th>Action</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>ID</th> --> */}
						<th>Name</th>
						{/* <!-- <th>Pic</th> --> */}
						<th>Rank</th>
						{/* <!-- <th>Created</th> --> */}
						<th>Action</th>
					</tr>
				</tfoot>
				<tbody id="myTable_row">
										<tr>
						<td>1</td>						
						<td>uwochallange	</td>						
						<td> 0 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('36')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>2</td>						
						<td>uwoinfluencers	</td>						
						<td> 10 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('42')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>3</td>						
						<td>youngistan	</td>						
						<td> 12 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('2')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>4</td>						
						<td>Anime	</td>						
						<td> 15 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('22')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>5</td>						
						<td>Vardaan	</td>						
						<td> 20 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('24')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>6</td>						
						<td>UWOAdvertisement	</td>						
						<td> 40 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('7')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>7</td>						
						<td>KhayalRakhyaKar	</td>						
						<td> 41 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('8')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>8</td>						
						<td>laughterchallangewithuwo	</td>						
						<td> 59 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('35')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>9</td>						
						<td>Sports	</td>						
						<td> 62 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('16')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>10</td>						
						<td>mondaywork	</td>						
						<td> 69 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('1')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>11</td>						
						<td>63	</td>						
						<td> 86 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('34')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>12</td>						
						<td>mirchilagitoh	</td>						
						<td> 87 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('10')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>13</td>						
						<td>UWOCreatorsMeet	</td>						
						<td> 88 </td>						
						<td>
						{/* <!-- <a type="button" className="btn btn-danger" href="?p=hashtag&page=allhashtag&curr_page=&action=delete_hashtag_hashtag&id="><i className="fas fa-minus-circle"></i></a> --> */}
						<button type="button" className="btn btn-info" onclick="edithashtag('14')"><i className="fas fa-edit"></i></button>
						</td>
					</tr>
									</tbody>
			</table>
			<nav aria-label="...">
				<ul className="pagination justify-content-end">
										<li className="page-item active"><a className="page-link"
							href="dashboard.php?p=hashtag&page=allhashtag&curr_page=1">
							1</a></li>
									</ul>
			</nav>
		</div>
				
		</div>
	</div>
	
	</div>
</div>

</div>
        </>
    )
}

import React from 'react'

export default function Question() {
    return (
        <div>
           <div class="container-fluid">
		<div class="d-sm-flex align-items-center justify-content-between mb-4">
			<h1 class="h3 mb-0 text-gray-800">All Questions
			<button class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onclick="AddQuestions('1');">
			<i class="fas fa-plus fa-sm text-white-50"></i>Add New</button>
			</h1>
			<div>
			<a href="?p=questions&page=earning_creator&curr_page=1"
                class=" links_sublinks    "
                style={{marginLeft:'22px'}}>
                <span>Earning Creator</span>
			</a>
			<a href="?p=questions&page=business_vendor&curr_page=1"
					class=" links_sublinks    "
					style={{marginLeft:'22px'}}>
					<span>Business Vendor</span>
			</a>
			</div>
		</div>
		</div>
	
						{/* <!-- Begin Page Content --> */}
<div class="container-fluid">

{/* <!-- DataTales Example --> */}
<div class="card shadow mb-4">
	<div class="card-header py-3">
			<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li class="nav-item">
					<a class="nav-link active" id="pills-active_hashtag-tab" data-toggle="pill" href="#pills-active_hashtag" role="tab" aria-controls="pills-active_hashtag" aria-selected="true">Creator</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="pills-inactive_hashtag-tab" data-toggle="pill" href="#pills-inactive_hashtag" role="tab" aria-controls="pills-inactive_hashtag" aria-selected="false">Vendor</a>
				</li>
			</ul>
		{/* <!-- <input type="text" id="search_criteria" class="form-control" onkeyup="hashtagsearch_criteria(this.value)"
			placeholder="Search for hashtag.."> --> */}
	</div>
	<div class="card-body">
	<div class="tab-content" id="pills-tabContent">
		<div class="tab-pane fade show active" id="pills-active_hashtag" role="tabpanel" aria-labelledby="pills-home-tab">
		<div class="table-responsive" id="active_hashtag">
			<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
				<thead>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>ID</th> --> */}
						<th>Question</th>
						{/* <!-- <th>Status</th> -->
						<!-- <th>Rank</th> -->
						<!-- <th>Created</th> --> */}
						<th>Action</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>ID</th> --> */}
						<th>Question</th>
						{/* <!-- <th>Status</th> -->
						<!-- <th>Rank</th> -->
						<!-- <th>Created</th> --> */}
						<th>Action</th>
					</tr>
				</tfoot>
				<tbody id="myTable_row">
										<tr>
						<td>1</td>						
						<td>Upload your document	</td>					
						<td>
						{/* <!-- <a type="button" class="btn btn-danger" href="?p=questions&page=allquestions&curr_page=&action=delete_hashtag_hashtag&id="><i class="fas fa-minus-circle"></i></a> --> */}
						<button type="button" class="btn btn-info" onclick="edit_question('4','Upload your document','creator')"><i class="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>2</td>						
						<td>How many videos you have created till now ?	</td>					
						<td>
						{/* <!-- <a type="button" class="btn btn-danger" href="?p=questions&page=allquestions&curr_page=&action=delete_hashtag_hashtag&id="><i class="fas fa-minus-circle"></i></a> --> */}
						<button type="button" class="btn btn-info" onclick="edit_question('3','How many videos you have created till now ?','creator')"><i class="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>3</td>						
						<td>How much money your are earning right now through social platforms ?	</td>					
						<td>
						{/* <!-- <a type="button" class="btn btn-danger" href="?p=questions&page=allquestions&curr_page=&action=delete_hashtag_hashtag&id="><i class="fas fa-minus-circle"></i></a> --> */}
						<button type="button" class="btn btn-info" onclick="edit_question('2','How much money your are earning right now through social platforms ?','creator')"><i class="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>4</td>						
						<td>Enter your social media details.	</td>					
						<td>
						{/* <!-- <a type="button" class="btn btn-danger" href="?p=questions&page=allquestions&curr_page=&action=delete_hashtag_hashtag&id="><i class="fas fa-minus-circle"></i></a> --> */}
						<button type="button" class="btn btn-info" onclick="edit_question('1','Enter your social media details.','creator')"><i class="fas fa-edit"></i></button>
						</td>
					</tr>
									</tbody>
			</table>
			<nav aria-label="...">
				<ul class="pagination justify-content-end">
										<li class="page-item active"><a class="page-link"
							href="dashboard.php?p=questions&page=allquestions&curr_page=1">
							1</a></li>
									</ul>
			</nav>
		</div>		
		</div>
		<div class="tab-pane fade" id="pills-inactive_hashtag" role="tabpanel" aria-labelledby="pills-profile-tab"> 
		<div class="table-responsive" id="active_hashtag">
			<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
				<thead>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>ID</th> --> */}
						<th>Question</th>
						{/* <!-- <th>Pic</th> -->
						<!-- <th>Rank</th> -->
						<!-- <th>Created</th> --> */}
						<th>Action</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>ID</th> --> */}
						<th>Question</th>
						{/* <!-- <th>Pic</th> -->
						<!-- <th>Rank</th> -->
						<!-- <th>Created</th> --> */}
						<th>Action</th>
					</tr>
				</tfoot>
				<tbody id="myTable_row">
										<tr>
						<td>1</td>						
						<td>What is your marketing budget this year ?	</td>						
						{/* <!-- <td>  </td>						 --> */}
						<td>
						{/* <!-- <a type="button" class="btn btn-danger" href="?p=questions&page=allquestions&curr_page=&action=delete_hashtag_hashtag&id="><i class="fas fa-minus-circle"></i></a> --> */}
						<button type="button" class="btn btn-info" onclick="edit_question('9','What is your marketing budget this year ?','vendor')"><i class="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>2</td>						
						<td>Select your current marketing strategy.	</td>						
						{/* <!-- <td>  </td>						 --> */}
						<td>
						{/* <!-- <a type="button" class="btn btn-danger" href="?p=questions&page=allquestions&curr_page=&action=delete_hashtag_hashtag&id="><i class="fas fa-minus-circle"></i></a> --> */}
						<button type="button" class="btn btn-info" onclick="edit_question('8','Select your current marketing strategy.','vendor')"><i class="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>3</td>						
						<td>Enter your social media details.	</td>						
						{/* <!-- <td>  </td>						 --> */}
						<td>
						{/* <!-- <a type="button" class="btn btn-danger" href="?p=questions&page=allquestions&curr_page=&action=delete_hashtag_hashtag&id="><i class="fas fa-minus-circle"></i></a> --> */}
						<button type="button" class="btn btn-info" onclick="edit_question('7','Enter your social media details.','vendor')"><i class="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>4</td>						
						<td>Select your business details.
	</td>						
						{/* <!-- <td>  </td>						 --> */}
						<td>
						{/* <!-- <a type="button" class="btn btn-danger" href="?p=questions&page=allquestions&curr_page=&action=delete_hashtag_hashtag&id="><i class="fas fa-minus-circle"></i></a> --> */}
						<button type="button" class="btn btn-info" onclick="edit_question('6','Select your business details.
','vendor')"><i class="fas fa-edit"></i></button>
						</td>
					</tr>
										<tr>
						<td>5</td>						
						<td>Firm name / Business name.	</td>						
						{/* <!-- <td>  </td>						 --> */}
						<td>
						{/* <!-- <a type="button" class="btn btn-danger" href="?p=questions&page=allquestions&curr_page=&action=delete_hashtag_hashtag&id="><i class="fas fa-minus-circle"></i></a> --> */}
						<button type="button" class="btn btn-info" onclick="edit_question('5','Firm name / Business name.','vendor')"><i class="fas fa-edit"></i></button>
						</td>
					</tr>
									</tbody>
			</table>
			<nav aria-label="...">
				<ul class="pagination justify-content-end">
										<li class="page-item active"><a class="page-link"
							href="dashboard.php?p=questions&page=allquestions&curr_page=1">
							1</a></li>
									</ul>
			</nav>
		</div>
		
		
		</div>
	</div>
	
	</div>
</div>

</div>
        </div>
    )
}

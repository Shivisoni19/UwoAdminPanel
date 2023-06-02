import React from 'react'

export default function AllSounds() {
    return (
        <div>
           <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">All Sounds
                        <a href="dashboard.php?p=add_sounds" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-plus fa-sm text-white mb-0"></i> Sound </a>
                    </h1>
        <div>
            <a href="?p=sounds&page=adminsoundGallery&curr_page=1"
                className=" links_sublinks  links_sublinks_active  "
                style={{marginLeft:' 22px'}}>
                <span>Admin Sounds</span>

            </a>
            {/* <!-- <a href="?p=sounds&page=sound&curr_page=1"
                className="links_sublinks   "
                style={{marginLeft:' 22px'}}>
                <span>User Sounds</span>
            </a> --> */}

            <a href="?p=sounds&page=sections"
                className="ml-3 links_sublinks    "
                style={{marginLeft:' 22px'}}>
                <span>All Sections</span>

            </a>
        </div>

        {/* <!-- <a href="?p=sounds&page=soundGallary" className="links_sublinks    " style={{marginLeft:' 22px'}}>
            <span>Sound Gallary</span>
            
        </a> --> */}


    </div>
</div>



{/* <!-- <div className="row">
		<div className="col-sm-12">
		<h2 className="title">All Sounds</h2>
		</div>
	</div>	 --> */}

{/* <!-- <div className="left">
		<a href="?p=sounds&page=adminsoundGallery&curr_page=1" className=" links_sublinks    " style={{marginLeft:' 22px'}}>
            <span>Admin Sounds</span>
            
        </a>
        <a href="?p=sounds&page=sound&curr_page=1" className="links_sublinks   " style={{marginLeft:' 22px'}}>
    		<span>User Sounds</span>
    	</a>
        
        <a href="?p=sounds&page=sections" className="ml-3 links_sublinks    " style={{marginLeft:' 22px'}}>
            <span>All Sections</span>
            
        </a>
        
         <a href="?p=sounds&page=soundGallary" className="links_sublinks    " style={{marginLeft:' 22px'}}>
            <span>Sound Gallary</span>
            
        </a> 
    
    </div> --> */}
{/* <!-- Begin Page Content --> */}
<div className="container-fluid">

    {/* <!-- DataTales Example --> */}
    <div className="card shadow mb-4">
        <div className="card-header py-3">
        <input type="text" id="search_criteria" className="form-control" onKeyUp="songsearch_criteria(this.value)"
                placeholder="Search for song.."/>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>Play Preview</th>
                            <th>Sound Name</th>
                            <th>Discription</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>Play Preview</th>
                            <th>Sound Name</th>
                            <th>Discription</th>
                            <th>Created</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                    <tbody id="myTable_row">
                                                <tr>
                            <td>1</td>
                            <td>11477</td>
                            <td>
                                <div
                                    style={{background:'url(https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610011295_1164694804.jpg)', height: '60px',width: '60px',backgroundSize: 'cover'}}>
                                    <span id="playPauseBtn_11477"
                                        style={{position: 'absolute',width: '60px',height: '60px',background: '#03030380'}}>
                                        <img src="img/play.png"
                                            onclick="playsound('11477' ,'https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/audios/1610011295_1164694804.aac')"
                                            style={{width:'30px',marginTop:'15px',marginLeft: '15px'}}/>
                                    </span>
                                    <span id='preview_play_11477' style={{display:'none'}}></span>
                                </div>
                            </td>
                            <td> Chennai Express </td>
                            <td>Deepika &amp; SRK....</td>
                            <td>08-Jan-2021</td>
                            <td>
                            <button type="button" className="btn btn-info" onClick="editsounddetails('11477')"><i className="fas fa-edit"></i></button>
                                                            <a href="?p=sounds&page=sound&curr_page=1&action=deleteSound&id=11477"
                                    className="btn btn-danger" onClick="alert('Are yo sure to delete');">
                                    <i className="fas fa-minus-circle"></i>
                                </a>
                                                        </td>
                        </tr>
                                                <tr>
                            <td>2</td>
                            <td>11464</td>
                            <td>
                                <div
                                   style={{background:'url(https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610008653_1286218694.jpg)', height: '60px',width: '60px',backgroundSize: 'cover'}}>
                                    <span id="playPauseBtn_11464"
                                        style={{position: 'absolute',width: '60px',height: '60px',background: '#03030380'}}>
                                        <img src="img/play.png"
                                            onClick="playsound('11464' ,'https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/audios/1610008653_1286218694.aac')"
                                            style={{width:'30px',marginTop:'15px',marginLeft: '15px'}}/>
                                    </span>
                                    <span id='preview_play_11464' style={{display:'none'}}></span>
                                </div>
                            </td>
                            <td> गुलाब जैसी हो गुलाब लगती हो </td>
                            <td>गुलाब जैस....</td>
                            <td>08-Jan-2021</td>
                            <td>
                            <button type="button" className="btn btn-info" onClick="editsounddetails('11464')"><i className="fas fa-edit"></i></button>
                                                            <a href="?p=sounds&page=sound&curr_page=1&action=deleteSound&id=11464"
                                    className="btn btn-danger" onClick="alert('Are yo sure to delete');">
                                    <i className="fas fa-minus-circle"></i>
                                </a>
                                                        </td>
                        </tr>
                                                <tr>
                            <td>3</td>
                            <td>11463</td>
                            <td>
                                <div
                                   style={{background:'url(https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610008451_1924807982.jpg)', height: '60px',width: '60px',backgroundSize: 'cover'}}>
                                    <span id="playPauseBtn_11463"
                                        style={{position: 'absolute',width: '60px',height: '60px',background: '#03030380'}}>
                                        <img src="img/play.png"
                                            onClick="playsound('11463' ,'https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/audios/1610008451_1924807982.aac')"
                                            style={{width:'30px',marginTop:'15px',marginLeft: '15px'}}/>
                                    </span>
                                    <span id='preview_play_11463' style={{display:'none'}}></span>
                                </div>
                            </td>
                            <td> Zakham Mera Hai Dard Mujko Hota Hai </td>
                            <td>Zakham Mera Hai Dard Mujk....</td>
                            <td>08-Jan-2021</td>
                            <td>
                            <button type="button" className="btn btn-info" onClick="editsounddetails('11463')"><i className="fas fa-edit"></i></button>
                                                            <a href="?p=sounds&page=sound&curr_page=1&action=deleteSound&id=11463"
                                    className="btn btn-danger" onClick="alert('Are yo sure to delete');">
                                    <i className="fas fa-minus-circle"></i>
                                </a>
                                                        </td>
                        </tr>
                                                <tr>
                            <td>4</td>
                            <td>11449</td>
                            <td>
                                <div
                                   style={{background:'url(https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610008024_1643830649.jpg)', height: '60px',width: '60px',backgroundSize: 'cover'}}>
                                    <span id="playPauseBtn_11449"
                                        style={{position: 'absolute',width: '60px',height: '60px',background: '#03030380'}}>
                                        <img src="img/play.png"
                                            onClick="playsound('11449' ,'https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/audios/1610008024_1643830649.aac')"
                                            style={{width:'30px',marginTop:'15px',marginLeft: '15px'}}/>
                                    </span>
                                    <span id='preview_play_11449' style={{display:'none'}}></span>
                                </div>
                            </td>
                            <td> Tera sheher nahi lagta </td>
                            <td>Tera sheher nahi lagta - ....</td>
                            <td>08-Jan-2021</td>
                            <td>
                            <button type="button" className="btn btn-info" onClick="editsounddetails('11449')"><i className="fas fa-edit"></i></button>
                                                            <a href="?p=sounds&page=sound&curr_page=1&action=deleteSound&id=11449"
                                    className="btn btn-danger" onClick="alert('Are yo sure to delete');">
                                    <i className="fas fa-minus-circle"></i>
                                </a>
                                                        </td>
                        </tr>
                                                <tr>
                            <td>5</td>
                            <td>11417</td>
                            <td>
                                <div
                                   style={{background:'url(https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610007587_850228189.jpg)', height: '60px',width: '60px',backgroundSize: 'cover'}}>
                                    <span id="playPauseBtn_11417"
                                        style={{position: 'absolute',width: '60px',height: '60px',background: '#03030380'}}>
                                        <img src="img/play.png"
                                            onClick="playsound('11417' ,'https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/audios/1610007587_850228189.aac')"
                                            style={{width:'30px',marginTop:'15px',marginLeft: '15px'}}/>
                                    </span>
                                    <span id='preview_play_11417' style={{display:'none'}}></span>
                                </div>
                            </td>
                            <td> Dialogues </td>
                            <td>Best Dialogue of TAMASHA....</td>
                            <td>08-Jan-2021</td>
                            <td>
                            <button type="button" className="btn btn-info" onClick="editsounddetails('11417')"><i className="fas fa-edit"></i></button>
                                                            <a href="?p=sounds&page=sound&curr_page=1&action=deleteSound&id=11417"
                                    className="btn btn-danger" onClick="alert('Are yo sure to delete');">
                                    <i className="fas fa-minus-circle"></i>
                                </a>
                                                        </td>
                        </tr>
                                                <tr>
                            <td>6</td>
                            <td>11416</td>
                            <td>
                                <div
                                   style={{background:'url(https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610007548_1399572620.jpg)', height: '60px',width: '60px',backgroundSize: 'cover'}}>
                                    <span id="playPauseBtn_11416"
                                        style={{position: 'absolute',width: '60px',height: '60px',background: '#03030380'}}>
                                        <img src="img/play.png"
                                            onClick="playsound('11416' ,'https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/audios/1610007548_1399572620.aac')"
                                            style={{width:'30px',marginTop:'15px',marginLeft: '15px'}}/>
                                    </span>
                                    <span id='preview_play_11416' style={{display:'none'}}></span>
                                </div>
                            </td>
                            <td> Titliaan Warga Male Version </td>
                            <td>Part-2....</td>
                            <td>08-Jan-2021</td>
                            <td>
                            <button type="button" className="btn btn-info" onClick="editsounddetails('11416')"><i className="fas fa-edit"></i></button>
                                                            <a href="?p=sounds&page=sound&curr_page=1&action=deleteSound&id=11416"
                                    className="btn btn-danger" onClick="alert('Are yo sure to delete');">
                                    <i className="fas fa-minus-circle"></i>
                                </a>
                                                        </td>
                        </tr>
                                                <tr>
                            <td>7</td>
                            <td>11415</td>
                            <td>
                                <div
                                   style={{background:'url(https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610007488_321732632.jpg)', height: '60px',width: '60px',backgroundSize: 'cover'}}>
                                    <span id="playPauseBtn_11415"
                                        style={{position: 'absolute',width: '60px',height: '60px',background: '#03030380'}}>
                                        <img src="img/play.png"
                                            onClick="playsound('11415' ,'https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/audios/1610007488_321732632.aac')"
                                            style={{width:'30px',marginTop:'15px',marginLeft: '15px'}}/>
                                    </span>
                                    <span id='preview_play_11415' style={{display:'none'}}></span>
                                </div>
                            </td>
                            <td> Titliaan Warga Male Version </td>
                            <td>Harrdy Sandhu ft Jaani....</td>
                            <td>08-Jan-2021</td>
                            <td>
                            <button type="button" className="btn btn-info" onClick="editsounddetails('11415')"><i className="fas fa-edit"></i></button>
                                                            <a href="?p=sounds&page=sound&curr_page=1&action=deleteSound&id=11415"
                                    className="btn btn-danger" onClick="alert('Are yo sure to delete');">
                                    <i className="fas fa-minus-circle"></i>
                                </a>
                                                        </td>
                        </tr>
                                                <tr>
                            <td>8</td>
                            <td>11414</td>
                            <td>
                                <div
                                   style={{background:'url(https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610007262_133265413.jpg)', height: '60px',width: '60px',backgroundSize: 'cover'}}>
                                    <span id="playPauseBtn_11414"
                                        style={{position: 'absolute',width: '60px',height: '60px',background: '#03030380'}}>
                                        <img src="img/play.png"
                                            onClick="playsound('11414' ,'https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/audios/1610007262_133265413.aac')"
                                            style={{width:'30px',marginTop:'15px',marginLeft: '15px'}}/>
                                    </span>
                                    <span id='preview_play_11414' style={{display:'none'}}></span>
                                </div>
                            </td>
                            <td> Motivational Dialogues </td>
                            <td>ख़ुद को क�....</td>
                            <td>08-Jan-2021</td>
                            <td>
                            <button type="button" className="btn btn-info" onClick="editsounddetails('11414')"><i className="fas fa-edit"></i></button>
                                                            <a href="?p=sounds&page=sound&curr_page=1&action=deleteSound&id=11414"
                                    className="btn btn-danger" onClick="alert('Are yo sure to delete');">
                                    <i className="fas fa-minus-circle"></i>
                                </a>
                                                        </td>
                        </tr>
                                                <tr>
                            <td>9</td>
                            <td>11412</td>
                            <td>
                                <div
                                   style={{background:'url(https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610007121_442269547.jpg)', height: '60px',width: '60px',backgroundSize: 'cover'}}>
                                    <span id="playPauseBtn_11412"
                                        style={{position: 'absolute',width: '60px',height: '60px',background: '#03030380'}}>
                                        <img src="img/play.png"
                                            onClick="playsound('11412' ,'https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/audios/1610007121_442269547.aac')"
                                            style={{width:'30px',marginTop:'15px',marginLeft: '15px'}}/>
                                    </span>
                                    <span id='preview_play_11412' style={{display:'none'}}></span>
                                </div>
                            </td>
                            <td> Motivational Hindi </td>
                            <td>जब तक जिं�....</td>
                            <td>08-Jan-2021</td>
                            <td>
                            <button type="button" className="btn btn-info" onClick="editsounddetails('11412')"><i className="fas fa-edit"></i></button>
                                                            <a href="?p=sounds&page=sound&curr_page=1&action=deleteSound&id=11412"
                                    className="btn btn-danger" onClick="alert('Are yo sure to delete');">
                                    <i className="fas fa-minus-circle"></i>
                                </a>
                                                        </td>
                        </tr>
                                                <tr>
                            <td>10</td>
                            <td>11411</td>
                            <td>
                                <div
                                   style={{background:'url(https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1610007047_1396821101.jpg)', height: '60px',width: '60px',backgroundSize: 'cover'}}>
                                    <span id="playPauseBtn_11411"
                                        style={{position: 'absolute',width: '60px',height: '60px',background: '#03030380'}}>
                                        <img src="img/play.png"
                                            onClick="playsound('11411' ,'https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/audios/1610007047_1396821101.aac')"
                                            style={{width:'30px',marginTop:'15px',marginLeft: '15px'}}/>
                                    </span>
                                    <span id='preview_play_11411' style={{display:'none'}}></span>
                                </div>
                            </td>
                            <td> Motivational Hindi </td>
                            <td>Sonu Sharma....</td>
                            <td>08-Jan-2021</td>
                            <td>
                            <button type="button" className="btn btn-info" onClick="editsounddetails('11411')"><i className="fas fa-edit"></i></button>
                                                            <a href="?p=sounds&page=sound&curr_page=1&action=deleteSound&id=11411"
                                    className="btn btn-danger" onClick="alert('Are yo sure to delete');">
                                    <i className="fas fa-minus-circle"></i>
                                </a>
                                                        </td>
                        </tr>
                                            </tbody>
                </table>
                <nav aria-label="...">
                    <ul className="pagination justify-content-end">
                                                <li className="page-item active"><a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=1">
                                1</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=2">
                                2</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=3">
                                3</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=4">
                                4</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=5">
                                5</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=6">
                                6</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=7">
                                7</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=8">
                                8</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=9">
                                9</a></li>

                                                <li className="page-item "><a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=10">
                                10</a></li>

                                                <li className="page-item">
                            <a className="page-link"
                                href="dashboard.php?p=sounds&page=adminsoundGallery&curr_page=2">Next</a>
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

import React, {Component} from 'react';

class Movie extends Component {

	constructor(props) {
		super(props);
		this.state = {	
			movies: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/movies')
		.then(response => response.json())
		.then(data => {
			console.log(data.data);
			setTimeout(() => {
			this.setState({movies: data.data})
			}, 5000);
		})
		.catch(error => console.log(error));
		
	}

	render() {
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
                                           
										</tr>
									</thead>
			
									<tbody>
										{
											this.state.movies.length === 0 ? <tr><td>Loading...</td></tr> :
											this.state.movies.map((movie,index)=>{
												return  <tr key={index}>
													<td>{movie.id}</td>
													<td>{movie.title}</td>
													<td>{movie.rating}</td>
													<td>{movie.awards}</td>
													<td>{movie.length}</td>
												</tr>
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
	}
}
export default Movie;
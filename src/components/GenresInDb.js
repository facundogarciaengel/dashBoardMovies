import React, {Component} from 'react';
import Genre  from './Genre';


// let genres = [
//     {genre: 'Acción'},
//     {genre: 'Animación'},
//     {genre: 'Aventura'},
//     {genre: 'Ciencia Ficción'},
//     {genre: 'Comedia'},
//     {genre: 'Documental'},
//     {genre: 'Drama'},
//     {genre: 'Fantasia'},
//     {genre: 'Infantiles'},
//     {genre: 'Musical'}
// ]

class GenresInDb extends Component {

    constructor(){
        super()
        this.state = {
            genres: [],
            ishovered : false 
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/api/genres')
        .then(response => response.json())
        .then(genres => {
            this.setState({genres: genres.data})
        })
        .catch(error => console.log(error))
    }

    handleMouseEnter = () => {
        this.setState({ishovered: true})
    }
    handleMouseLeave = () => {
        this.setState({ishovered: false})
    }

    render() {
        const {ishovered} = this.state;
        const cardBodyClass = ishovered ? 'card-body bg-secondary' : 'card-body';
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800" 
                            onMouseEnter={this.handleMouseEnter}
                            onMouseLeave={this.handleMouseLeave}
                            >
                                Genres in Data Base</h6>
                        </div>
                        <div className={cardBodyClass}>
                            <div className="row">
                                {
                                   this.state.genres.length === 0 ? <h1>Loading...</h1> :
                                    this.state.genres.map((genre,index)=>{
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }   
}
export default GenresInDb;
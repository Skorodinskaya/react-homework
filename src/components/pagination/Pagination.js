// export default function App() {
//   return (
//     <div>
//     <MoviesPage/>
//
//     </div>
//   );
// }
import './pagination.css'
import React, {Component} from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import MoviesPage from "../../containers/moviesPage/MoviesPage";
import {discoverMovie} from "../../services/mobile.service";

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    receivedDate() {
        // axios
        //     .get(`https://api.themoviedb.org/4/discover/movie`)
        //     .then(res => {
        //         const data = res.data;
        //         const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        //         const postData = slice.map(<React.Fragment>
        //             <MoviesPage/>
        //         </React.Fragment>)
        //
        //         this.setState({
        //             pageCount: Math.ceil(data.length / this.state.perPage),
        //             postData
        //         })
        //     })

        <MoviesPage/>
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedDate()
        })
    }

    componentDidMount() {
        this.receivedDate()
    }

    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    }
}

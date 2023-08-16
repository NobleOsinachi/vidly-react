import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";


class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies });
    };

    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies: movies });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };



    render() {


        /** Number of movies in db */
        const { length: count } = this.state.movies;
        const { pageSize, currentPage } = this.state;


        if (count === 0)
            return <p><br />There are no movies in the database</p>;

        const movies = paginate(this.state.movies, currentPage, pageSize);


        return (
            <div>
                <p>Showing {count} movies in the database</p>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                {/* <td>{movie.numberInStock}</td> */}
                                <td><Like
                                    onClick={() => this.handleLike(movie)}

                                    liked={movie.liked} /></td>
                                <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">
                                    Delete</button></td>
                            </tr>)

                        )}
                    </tbody>
                </table>

                <Pagination

                    itemsCount={count}
                    pageSize={this.state.pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={this.state.currentPage}
                />
            </div>
        );
    }
}

export default Movies;

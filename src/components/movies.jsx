import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        selectedGenre: null,
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: "title", order: "asc" }
    };

    componentDidMount() {
        this.setState({
            movies: getMovies(),
            genres: [{ _id: "", name: "All Genres" }, ...getGenres()],
        });
    }

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies });
    };

    handleSort = (path) => {
        const sortColumn = { ...this.state.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
        else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.setState({ sortColumn });
        console.log(path, "sorted");
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
        const { pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn } = this.state;

        if (count === 0)
            return <p><br />There are no movies in the database</p>;

        const filtered = selectedGenre && selectedGenre._id
            ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return (
            <div className="row">

                <div className="col-3">
                    <ListGroup items={this.state.genres}
                        textProperty="name"
                        valueProperty="_id"
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect} />
                </div>

                <div className="col">

                    <p>Showing {filtered.length} movies in the database</p>

                    <MoviesTable movies={movies} onLike={this.handleLike}
                        onDelete={this.handleDelete} onSort={this.handleSort} />

                    <Pagination
                        itemsCount={filtered.length}
                        pageSize={this.state.pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;

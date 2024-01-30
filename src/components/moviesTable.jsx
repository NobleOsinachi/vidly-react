import Like from "./common/like";
import React, { Component } from 'react';
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {

    columns = [
        { path: "title", label: "Title" },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        {
            key: "like",
            content: movie => <Like onClick={() => this.props.onLike(movie)} liked={movie.liked} />
        },
        {
            key: "delete",
            content: movie => <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm"> Delete</button>
        },
    ];

    render() {

        const { movies, sortColumn, onLike, onDelete, onSort, } = this.props;

        return (
            <table className="table">

                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                ></TableHeader>

                <TableBody data={movies} columns={this.columns}></TableBody>

            </table >
        );

    }
}

export default MoviesTable;

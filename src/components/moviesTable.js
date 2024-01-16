import Like from "./common/like";
import React, { Component } from 'react';
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {

    columns = [
        { path: "title", label: "Title" },
        { path: "genre.name", label: "Genre" },
        { path: "numberInStock", label: "Stock" },
        { path: "dailyRentalRate", label: "Rate" },
        { key: "like" },
        { key: "delete" },
    ];

    render() {

        const { movies, sortColumn, onLike, onDelete, onSort, } = this.props;

        return (
            <table className="table">
                {/*                 <thead>
                    <tr>
                        <th onClick={() => { this.raiseSort("title"); }}>Title</th>
                        <th onClick={() => { this.raiseSort("genre.name"); }}>Genre</th>
                        <th onClick={() => { this.raiseSort("numberInStock"); }}>Stock</th>
                        <th onClick={() => { this.raiseSort("dailyRentalRate"); }}>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
 */}
                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                ></TableHeader>



                <tbody>

                    {movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            {/* <td>{movie.numberInStock}</td> */}
                            <td><Like onClick={() => onLike(movie)} liked={movie.liked} /></td>
                            <td><button onClick={() => onDelete(movie)}
                                className="btn btn-danger btn-sm">
                                Delete</button></td>
                        </tr >)
                    )}
                </tbody>
            </table >
        );

    }
}

export default MoviesTable;

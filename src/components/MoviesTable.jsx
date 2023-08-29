import Like from "./common/like";
import React from 'react';

const MoviesTable = ({ movies, onLike, onDelete, onSort }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => { onSort("title"); }}>Title</th>
                    <th onClick={() => { onSort("genre.name"); }}>Genre</th>
                    <th onClick={() => { onSort("numberInStock"); }}>Stock</th>
                    <th onClick={() => { onSort("dailyRentalRate"); }}>Rate</th>
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
                        <td><Like onClick={() => onLike(movie)} liked={movie.liked} /></td>
                        <td><button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">
                            Delete</button></td>
                    </tr>)
                )}
            </tbody>
        </table>
    );
};

export default MoviesTable;

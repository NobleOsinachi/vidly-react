import React, { Component } from 'react';

class Like extends Component {
    state = {
        unlike: "♡",
        like: "❤️",
        black_like: "♥"
    };

    render() {
        return (
            // <i className="fa fa-heart-o" aria-hidden="true"></i>
            <span style={{ cursor: 'pointer' }} onClick={this.props.onClick}>{(!this.props.liked) ? this.state.unlike : this.state.like}</span>
        );
    }
}

export default Like;

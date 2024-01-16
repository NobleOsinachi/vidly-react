import React from 'react';

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) => {
    return <ul className="list-group">
        {items.map(item => <li key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
            // data-className={(item === selectedItem) ? "list-group-item active" : "list-group-item"}
            className={"list-group-item " + (item === selectedItem ? "active" : "")}
        >{item[textProperty]}

        </li>)}
    </ul>;
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id",
};

export default ListGroup;

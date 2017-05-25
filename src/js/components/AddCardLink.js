import React from "react";
import { Link } from "react-router-dom";


const AddCardLink = () => {
    return (
        <Link to="/new"><div className="floating-btn"><i className="fa fa-lg fa-plus"></i></div></Link>
    );
};

export default AddCardLink;

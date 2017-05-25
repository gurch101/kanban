import React from "react";


const Header = ({ title }) => (
    <nav className="navbar navbar-primary navbar-fixed-top mb0">
        <div className="container-fluid">
            <a className="navbar-brand">{title}</a>
        </div>
    </nav>
);

export default Header;

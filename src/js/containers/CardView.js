import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Board from "../components/Board";
import AddCardLink from "../components/AddCardLink";


class CardView extends Component {
    render() {
        return (
            <div>
                <Header title="My Board" />
                <Filters />
                <div className="navbar-spacer">
                    <Board />
                    <AddCardLink />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cards: state.cards,
    groupBy: state.preferences.groupBy,
    sortBy: state.preferences.sortBy
});

const mapDispatchToProps = (dispatch) => ({
    onGroupByChange: (key) => {
        dispatch(setGroupBy(key));
    },
    onSortByChange: (key) => {
        dispatch(setSortBy(key));
    }
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CardView));

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { addCard, addTag } from "../actions";


class CardEditor extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.save = this.save.bind(this);
        this.state = { text: "" };
    }

    onChange(event) {
        this.setState({ text: event.target.value });
    }

    save() {
        const tags = {};
        const description = [];
        this.state.text.split("\n").forEach((val) => {
            const kvpair = val.split(":");
            if(kvpair.length === 2) {
                tags[kvpair[0].trim()] = kvpair[1].trim();
            } else {
                description.push(val);
            }
        });

        this.props.onSaveClick(tags, description.join("\n"));
        this.props.history.replace("/");
    }

    render() {
        return (
            <div className="container">
                <h1>New Card</h1>
                <textarea
                  rows="10"
                  placeholder="Set the description here. If you want to add fields, start the description with key:value pairs"
                  className="form-control input-lg mb1"
                  value={this.state.text}
                  onChange={this.onChange}
                />
                <button
                  className="btn btn-lg btn-success pull-right"
                  onClick={this.save}
                >
                    Save
                </button>
            </div>
        );
    }
}

CardEditor.propTypes = {
    onSaveClick: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = () => ({
    text: ""
});

const mapDispatchToProps = dispatch => ({
    onSaveClick: (tags, text) => {
        dispatch(addCard(tags, text));
        Object.keys(tags).forEach(key => dispatch(addTag(key, tags[key])));
    }
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps

)(CardEditor));

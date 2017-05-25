const ADD_CARD = "ADD_CARD";
const UPDATE_CARD = "UPDATE_CARD";
const DELETE_CARD = "DELETE_CARD";

const ADD_TAG = "ADD_TAG";
const DELETE_TAG = "DELETE_TAG";

const SET_GROUP_BY = "SET_GROUP_BY";
const SET_SORT_BY = "SET_SORT_BY";
const SET_GROUP_VALUE_ORDER_PRECEDENCE = "SET_GROUP_VALUE_ORDER_PRECEDENCE";


function addCard(tags = {}, text = "") {
    return {
        type: ADD_CARD,
        tags,
        text
    };
}

function addTag(name, value) {
    return {
        type: ADD_TAG,
        name,
        value
    };
}

export {
    ADD_CARD,
    UPDATE_CARD,
    DELETE_CARD,
    ADD_TAG,
    DELETE_TAG,
    SET_GROUP_BY,
    SET_SORT_BY,
    SET_GROUP_VALUE_ORDER_PRECEDENCE,
    addCard,
    addTag
};

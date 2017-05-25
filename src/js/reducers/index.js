import { combineReducers } from "redux";
import {
    ADD_CARD,
    UPDATE_CARD,
    DELETE_CARD,
    ADD_TAG,
    REMOVE_TAG,
    SET_GROUP_BY,
    SET_SORT_BY,
    SET_GROUP_VALUE_PRECEDENCE
} from "../actions";


function cards(state = [], action) {
    switch (action.type) {
        case ADD_CARD:
            return [
                ...state,
                {
                    tags: action.tags,
                    text: action.text
                }
            ];
        case UPDATE_CARD:
            return state.map((card, index) => {
                if(index === action.index) {
                    return Object.assign({}, {
                        tags: action.tags,
                        text: action.text
                    });
                }
                return card;
            });
        case DELETE_CARD:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

function tagCount(state = 0, action) {
    switch (action.type) {
        case ADD_TAG:
            return state + 1;
        case REMOVE_TAG:
            return state - 1;
        default:
            return state;
    }
}
function tagValueCount(state = {}, action) {
    switch (action.type) {
        case ADD_TAG:
            return Object.assign({}, state, { [action.value]: tagCount(state[action.value], action) });
        default:
            return state;
    }
}

function tags(state = {}, action) {
    switch (action.type) {
        case ADD_TAG:
            return Object.assign({}, state, { [action.name]: tagValueCount(state[action.name], action) });
        default:
            return state;
    }
}

function preferences(state = {}, action) {
    switch (action.type) {
        case SET_GROUP_BY:
            return Object.assign({}, state, { group_by: action.group_by });
        case SET_SORT_BY:
            return Object.assign({}, state, { sort_by: action.sort_by });
        case SET_GROUP_VALUE_PRECEDENCE:
            return Object.assign({}, state, { [`${action.group}_precedence`]: action.order });
        default:
            return state;
    }
}

const app = combineReducers({
    cards,
    tags,
    preferences
});

export default app;

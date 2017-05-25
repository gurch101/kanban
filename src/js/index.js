import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import cardApp from "./reducers";
import CardView from "./containers/CardView";
import CardEditor from "./containers/CardEditor";
import logger from "redux-logger";
import { BrowserRouter as Router, Route } from "react-router-dom";

let store = createStore(
    cardApp,
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={CardView} />
                <Route path="/new" component={CardEditor} />
            </div>
        </Router>
    </Provider>,
    document.getElementById("root")
);

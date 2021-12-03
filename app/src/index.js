import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import reducers from "./reducers";
import { getData, newFilm } from "./actions";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);

const mapStateToProps = (state) => {
    return { ...state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData()),
        newFilm: (new_film) => dispatch(newFilm({ data: new_film })),
    };
};

const Cinema = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Cinema />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

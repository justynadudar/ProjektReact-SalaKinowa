import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import reducers from "./reducers";
import { getData, addFilm, deleteFilm, newShowing } from "./actions";
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
        addFilm: (newFilm) => dispatch(addFilm({ newFilm })),
        deleteFilm: (id) => dispatch(deleteFilm({ id })),
        newShowing: (data, id) => dispatch(newShowing({ data: data, id: id })),
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

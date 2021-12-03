import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
);



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

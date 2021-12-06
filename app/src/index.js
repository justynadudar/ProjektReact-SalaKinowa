import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import reducers from "./reducers";
import {
  getData,
  addFilm,
  editFilm,
  deleteFilm,
  addShowing,
  editShowing,
  showShowingsOfThatDay,
} from "./actions";
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
    editFilm: (editedFilm, id) => dispatch(editFilm({ editedFilm, id })),
    deleteFilm: (id) => dispatch(deleteFilm({ id })),
    addShowing: (newShowing, id) => dispatch(addShowing({ newShowing, id })),
    editShowing: (updatedFilm, filmId) =>
      dispatch(editShowing({ updatedFilm, filmId })),
    showShowingsOfThatDay: () => dispatch(showShowingsOfThatDay()),
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

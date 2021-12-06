import React from "react";
import "./style/ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <p>
                404 - strona nie istnieje.{" "}
                {
                    <Link exact to="/">
                        Bezpieczny Powrót!
                    </Link>
                }
            </p>
        </div>
    );
};

export default ErrorPage;

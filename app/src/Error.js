import React from "react";

const Error = (props) => {
    return (
        <div>
            {props.error ? (
                <div className="Error">
                    <p style={{ color: "red" }}>{props.info}</p>
                </div>
            ) : null}
        </div>
    );
};

export default Error;

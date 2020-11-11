import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="error">
      <h1>{error} data</h1>
      <p>
        There seems to be a mistake on our front department. Try to{" "}
        <b> reload</b> the page and hope for the best
      </p>
    </div>
  );
};

export default ErrorMessage;

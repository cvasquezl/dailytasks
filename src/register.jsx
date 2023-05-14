import React from "react";
import "./index.css";

const Register = () => {
  return (
    <div className="div row justify-content-center text-white mt-5">
      <div className="div col-4 bg-black bg-opacity-50 p-5 rounded">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <label for="inputPassword5" class="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpInline"
        />
        <div id="passwordHelpBlock" class="form-text text-white">
          Must be 8-20 characters long.
        </div>
      </div>
    </div>
  );
};

export default Register;

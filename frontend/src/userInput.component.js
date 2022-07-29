// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserInputForm from "./userInputForm";

const CreateUserInput = () => {
  const [formValues, setFormValues] = useState({
    userInput: "",
  });
  // onSubmit handler
  const onSubmit = (userInputObject) => {
    axios
      .post("http://localhost:8080/api/v1/home", userInputObject)
      .then((res) => {
        if (res.status === 200) alert("User input sent to backend");
        else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Return userInput form
  return (
    <UserInputForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create User Input
    </UserInputForm>
  );
};

// Export  Component
export default CreateUserInput;

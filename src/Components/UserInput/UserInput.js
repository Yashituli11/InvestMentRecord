import React, { useState } from "react";
import classes from "./UserInput.module.css";
const InitialState = {
  "current-savings": 1000,
  "yearly-contribution": 4,
  "expected-return": 4,
  duration: 4,
};
const UserInput = (props) => {
  const [userInput, setUserInput] = useState(InitialState);

  const submithandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
    console.log("submit");
  };
  const resethandler = () => {
    setUserInput(InitialState);
  };
  const inputChangehandler = (identifier, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: +value,
      };
    });
  };
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            onChange={(event) =>
              inputChangehandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangehandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              inputChangehandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) =>
              inputChangehandler("duration", event.target.value)
            }
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          onClick={resethandler}
          className={classes.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;

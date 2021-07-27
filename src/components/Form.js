import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({ zipCode: "" });

  const handleChange = (event) => {
    //copy the state
    const newState = { ...formData };
    //update the property of the input being updated
    newState[event.target.name] = event.target.value;
    setFormData(newState);
  };
  const handleSubmit = (event) => {
    //prevent refresh
    event.preventDefault();
    //update forecast
    props.getForecast(formData.zipCode);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Zipcode"
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
        <input type="submit" value="Find Forecast" />
      </form>
    </div>
  );
};
export default Form;

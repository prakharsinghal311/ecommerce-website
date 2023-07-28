import { useState } from "react";

const ContactUs = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmailId, setEnteredEmailId] = useState("");
  const [enteredNumber, setEnteredNumber] = useState();

  const changedNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const changedEmailIdHandler = (event) => {
    setEnteredEmailId(event.target.value);
  };

  const changedNumberHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredData = {
      name: enteredName,
      emailId: enteredEmailId,
      phoneNumber: enteredNumber,
    };

    try {
      const response = await fetch(
        "https://ecommerce-website-82e85-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          body: JSON.stringify(enteredData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong, Data not stored");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Name:</label>
      <input type="text" onChange={changedNameHandler}></input>
      <label>Email Id:</label>
      <input type="email" onChange={changedEmailIdHandler}></input>
      <label>Phone Number:</label>
      <input type="number" onChange={changedNumberHandler}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUs;

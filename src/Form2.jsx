import React, { useState } from "react";

export default function Form2() {
  const style = "border-4 border-black p-3 rounded text-xl";
  const [userName, setuserName] = useState("Mr. ");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleNameField = (e) => {
    console.log(e.target.value);
    setuserName(e.target.value);
  };
  const handleEmailField = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordField = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    password.length < 6
      ? setError("Password Must Be Greater than 6 character ...!")
      : "";
    console.log(userName, email, password);
  };

  return (
    <div className="flex rounded justify-center items-center mt-20 border-4 border-black w-[40%] m-auto">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 p-10"
      >
        <input
          type="text"
          name="username"
          value={userName}
          placeholder="User Name"
          className={style}
          onChange={handleNameField}
        />
        <input
          type="email"
          name="email"
          placeholder="User Email"
          className={style}
          onChange={handleEmailField}
        />
        <input
          type="password"
          name="password"
          placeholder="User Password"
          className={style}
          onChange={handlePasswordField}
        />

        <input
          type="submit"
          value="Submit ⬇️"
          className="border-4 border-black p-2 rounded font-bold"
        />
        {<h1 className="text-red-700 font-bold">{error}</h1>}
      </form>
    </div>
  );
}

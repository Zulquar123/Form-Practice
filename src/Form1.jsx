import React from "react";

export default function Form1() {
  const style = "border-4 border-black p-3 rounded text-xl";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log("Form Submitted");
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
          placeholder="User Name"
          className={style}
          required="true"
        />
        <input
          type="email"
          name="email"
          placeholder="User Email"
          className={style}
          required="true"
        />
        <input
          type="password"
          name="password"
          placeholder="User Password"
          className={style}
          required="true"
        />
        <input
          type="submit"
          value="Submit ⬇️"
          className="border-4 border-black p-2 rounded font-bold"
        />
      </form>
    </div>
  );
}

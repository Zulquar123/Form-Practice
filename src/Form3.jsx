import React, { useEffect, useRef } from "react";

export default function Form3() {
  const style = "border-4 border-black p-3 rounded text-xl";
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div className="flex rounded justify-center items-center mt-20 border-4 border-black w-[40%] m-auto">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 p-10"
      >
        <input
          defaultValue={"Mr. "}
          ref={nameRef}
          type="text"
          name="username"
          placeholder="User Name"
          className={style}
        />
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="User Email"
          className={style}
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="User Password"
          className={style}
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

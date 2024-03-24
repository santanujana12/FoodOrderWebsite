import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-3xl p-2 m-2 font-bold">Contact us</h1>
      <form className="m-1" action="">
        <input
          type="text"
          className="border border-black m-2 p-2"
          placeholder="Name"
        />
        <input type="text" className="border border-black m-2 p-2" placeholder="Message" />
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;

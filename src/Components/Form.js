import React from "react";

function Form({ isOpen, togglePopup }) {
  console.log(togglePopup);
  console.log(isOpen);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-20 bg-gray-900 bg-opacity-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <button
        className="absolute m-4 bg-red-500 text-gray-600"
        onClick={togglePopup}
      >
        Close
      </button>
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Popup Form</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;

import React from "react";
import { useState, useEffect } from "react";
import check from "../Images/check.png";
const SuccessMessage = () => {
  return (
    <div className="flex content-center items-center p-2">
      <img src={check} className="w-6 h-6"></img>
      <p className="pl-1 text-xl font-bold text-green-700 ">
        Form submitted successfully!
      </p>
    </div>
  );
};
function Form({ isOpen, togglePopup }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    //  form submission logic
    setFormData(initialFormData); // Reset the form data after submission
    // Close the popup after submission
    setShowSuccessMessage(true); // Show the success message
    setTimeout(() => {
      setShowSuccessMessage(false); // Hide the success message after 2 seconds
      togglePopup();
    }, 1000);
  };
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-20 bg-gray-900 bg-opacity-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-6 rounded-lg w-10/12 md:w-6/12">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-4">Suggestion Form</h2>
          <button
            className="border hover:bg-red-200 rounded-full p-3 font-semibold text-red-500"
            onClick={togglePopup}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-200 focus:border-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {showSuccessMessage && <SuccessMessage />}
      </div>
    </div>
  );
}

export default Form;

import React from "react";

const page = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Feedback Form</h1>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="feedback" className="block mb-2 font-medium">
            Feedback
          </label>
          <textarea
            id="feedback"
            rows={4}
            className="w-full p-2 border rounded-md"
            placeholder="Please share your feedback"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default page;

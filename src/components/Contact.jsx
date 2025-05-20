import React, { useEffect } from "react";

const Contact = ({ onClose }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg max-w-2xl w-full relative transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <div className="bg-black">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-3xl text-white font-bold hover:text-gray-600"
          >
            ×
          </button>

          <h1 className="text-3xl py-4 px-8 font-bold text-white">
            Contact
          </h1>
        </div>

        <form className="space-y-4 p-8">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

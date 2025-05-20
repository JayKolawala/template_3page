import React, { useEffect } from "react";
import avatar from "../assets/nobody-avatar.jpg";

const AboutMe = ({ onClose }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg max-w-2xl w-full relative transform transition-all duration-300 my-8 mx-auto ${
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

          <h1 className="text-3xl py-4 px-8 font-bold text-white">About Me</h1>
        </div>

        <div className="p-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                src={avatar}
                alt="avatar"
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="mt-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo, eum! Sit quae maiores, consequatur omnis iste quod
                optio odit veritatis corrupti harum similique autem ratione
                beatae laudantium. Voluptatibus ducimus distinctio numquam
                voluptates corrupti reprehenderit. Fugit eveniet voluptas
                veritatis consequuntur nesciunt fugiat! Enim minima nihil
                laborum sit reiciendis officiis porro distinctio. Voluptatibus
                ducimus distinctio numquam voluptates corrupti reprehenderit.
                Fugit eveniet voluptas veritatis consequuntur nesciunt fugiat!
                Enim minima nihil laborum sit reiciendis officiis porro
                distinctio.
              </p>
            </div>
          </div>
          <div className="mt-4 pl-[calc(32px+1rem)] md:pl-[calc(48px+1rem)]">
            <p>You can add your bio, skills, experience, etc.</p>
          </div>
        </div>

        <div className="px-8 pb-8">
          <h1 className="text-3xl font-bold text-black">Get in Touch</h1>
          <div className="space-y-4 pt-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo, eum! Sit quae maiores, consequatur omnis iste quod
              optio odit veritatis corrupti harum similique autem ratione beatae
              laudantium. Voluptatibus ducimus distinctio numquam voluptates
              corrupti reprehenderit. Fugit eveniet voluptas veritatis
              consequuntur nesciunt fugiat! Enim minima nihil laborum sit
              reiciendis officiis porro distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

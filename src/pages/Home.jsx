import React, { useEffect, useState } from "react";
import { menuItems } from "../constant/constant";
import "./Home.css";

const GptHome = () => {
  const [showTypingAnimation, setShowTypingAnimation] = useState(false);

  useEffect(() => {
    // Delay showing the typing animation for a better visual effect
    const animationTimeout = setTimeout(() => {
      setShowTypingAnimation(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(animationTimeout);
  }, []);

  const overlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%", // Adjust the width as needed
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "red",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: showTypingAnimation ? "none" : "0.15em solid white",
    animation: showTypingAnimation
      ? "typing 1s steps(10, end), blink-caret 0.75s step-end infinite"
      : "none",
  };
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const textArray = [
    "Hello coder..",
    "Welcome to my website!",
    "Type animation example.",
  ];
  const typingDelay = 100; // Delay between typing each character in milliseconds

  useEffect(() => {
    const currentText = textArray[textIndex];

    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setTypedText(currentText.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === currentText.length) {
        clearInterval(typingInterval);

        // Move to the next text in the array
        setTimeout(() => {
          const nextIndex = (textIndex + 1) % textArray.length;
          setTextIndex(nextIndex);
        }, 5500); // Delay before moving to the next text
      }
    }, typingDelay);

    return () => {
      clearInterval(typingInterval);
    };
  }, [textArray, textIndex]);
  return (
    <div>
      <nav>
        {menuItems?.map((item, index) => (
          <a href={item.link} key={index}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="overlay">
        <div className="typing-text">{typedText}</div>
      </div>
    </div>
  );
};

export default GptHome;

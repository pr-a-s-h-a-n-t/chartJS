import React, { useState, useEffect } from "react";
import { menuItems } from "../constant/constant";
import "./Home.css";

const GptHome = () => {
  const [typedText, setTypedText] = useState("");
  const textArray = [
    "Chat GPT",
    "Let's Explore",
    "Let's Discover",
    "Let's Learn",
    "Let's Build",
    "Let's Grow",
  ];
  const typingDelay = 100; // Adjust typing speed as needed
  const delayBetweenTexts = 1000; // Adjust delay before moving to the next text

  useEffect(() => {
    let currentIndex = 0;
    let currentText = textArray[0]; // Start with the first text

    const typingInterval = setInterval(() => {
      setTypedText(
        (prevTypedText) => prevTypedText + currentText[currentIndex]
      );
      currentIndex++;

      if (currentIndex === currentText.length) {
        clearInterval(typingInterval);

        // Move to the next text in the array
        setTimeout(() => {
          const nextIndex =
            (textArray.indexOf(currentText) + 1) % textArray.length;
          currentText = textArray[nextIndex];
          currentIndex = 0;
          setTypedText(""); // Reset typedText for the next animation
        }, delayBetweenTexts);
      }
    }, typingDelay);

    return () => {
      clearInterval(typingInterval);
    };
  }, [textArray]);

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
      <div
        style={{
          position: "fixed",
          bottom: "10%",
          left: "2%",
          // transform: "translate(-50%, -50%)",
          // width: "100vw",
          // height: "100vh",
        }}
      >
        <h3>
          ChatGPT: get instant answers, find creative inspiration, and learn
          something <br />
          new. Use ChatGPT for free today.
        </h3>
      </div>
    </div>
  );
};

export default GptHome;

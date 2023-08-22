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
          <div>
            <a href={item.link} key={index}>
              {item.label}
            </a>
            {item.sub && (
              <div className="sub-menu">
                {item.sub.map((subItem, index) => (
                  <a href={subItem.link} key={index}>
                    {subItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
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

        <div>
          <div>
            <a href="https://apps.apple.com/app/openai-chatgpt/id6448311069">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="119.66"
                height="40"
                viewBox="0 0 119.66 40"
                style={{ width: "119.66px", height: "40px" }}
              >
                <path
                  d="M96.24,19.19a1,1,0,0,0-1,1v17.5a1,1,0,0,0,1,1,1,1,0,0,0,.59-0.19,1,1,0,0,0,.41-0.81V20.2A1,1,0,0,0,96.24,19.19Z"
                  fill="#fff"
                />
                <path
                  d="M95.6,15.83a4.47,4.47,0,0,0-2.57.8,4.64,4.64,0,0,0-1.7,1.46,4.86,4.86,0,0,0-.86,2.66,5.12,5.12,0,0,0,.23,1.55,5.59,5.59,0,0,0,.81,1.57,4.51,4.51,0,0,0,1.44,1.13,3.64,3.64,0,0,0,1.89.47,4.5,4.5,0,0,0,2.51-0.74,4.91,4.91,0,0,0,1.67-1.77,5.47,5.47,0,0,0,.86-3.05,5.51,5.51,0,0,0-.47-2.15,4.28,4.28,0,0,0-1.25-1.62,4.72,4.72,0,0,0-1.71-1,5.44,5.44,0,0,0-1.91-0.33A5.2,5.2,0,0,0,95.6,15.83Zm0,2.74a2.47,2.47,0,0,1,1.12.23,1.4,1.4,0,0,1,.75,1.19,1.39,1.39,0,0,1-.39,1,2.32,2.32,0,0,1-1,.64,3,3,0,0,1-1.14,0.21,2.29,2.29,0,0,1-1-.26,1.46,1.46,0,0,1-.64-1.18,1.48,1.48,0,0,1,.38-1.07A2.23,2.23,0,0,1,95.6,18.57Zm-3.53-4.52h3.12a1,1,0,0,0,.71-0.3,1,1,0,0,0,.3-0.71V7.86a1,1,0,0,0-0.3-0.71,1,1,0,0,0-1.42,0,1,1,0,0,0-0.29.71V12.6H91.07V7.86a1,1,0,0,0-0.3-0.71,1,1,0,0,0-1.42,0,1,1,0,0,0-0.29.71V12.6H86.15a1,1,0,0,0-1,1v3.12a1,1,0,0,0,.3.71,1,1,0,0,0,.71,0.3H89v4.73a1,1,0,0,0,.3.71,1,1,0,0,0,1.42,0,1,1,0,0,0,.29-0.71V17.64h3.29a1,1,0,0,0,.71-0.3,1,1,0,0,0,.3-0.71V14.62a1,1,0,0,0-1-1H91.1V10.05A1,1,0,0,0,91.4,9.34Z"
                  fill="#fff"
                />
                <path
                  d="M58.49,21.58a1,1,0,0,0-.72.29,1,1,0,0,0-.29.71v17.5a1,1,0,0,0,.3.71,1,1,0,0,0,.71,0.3,1,1,0,0,0,.72-0.3,1,1,0,0,0,.29-0.71V22.58A1,1,0,0,0,58.49,21.58Z"
                  fill="#fff"
                />
                <path
                  d="M57.85,18.22a4.48,4.48,0,0,0-2.57.8,4.64,4.64,0,0,0-1.7,1.46,4.86,4.86,0,0,0-.86,2.66,5.13,5.13,0,0,0,.23,1.55,5.59,5.59,0,0,0,.81,1.57,4.5,4.5,0,0,0,1.44,1.13,3.65,3.65,0,0,0,1.89.47,4.5,4.5,0,0,0,2.51-0.74,4.9,4.9,0,0,0,1.67-1.77,5.46,5.46,0,0,0,.86-3.05,5.5,5.5,0,0,0-.47-2.15,4.29,4.29,0,0,0-1.25-1.62,4.73,4.73,0,0,0-1.71-1,5.44,5.44,0,0,0-1.91-0.33A5.2,5.2,0,0,0,57.85,18.22Zm0,2.74a2.45,2.45,0,0,1,1.12.23,1.4,1.4,0,0,1,.75,1.19,1.39,1.39,0,0,1-.39,1,2.32,2.32,0,0,1-1,.64,3,3,0,0,1-1.14,0.21,2.29,2.29,0,0,1-1-.26,1.46,1.46,0,0,1-.64-1.18,1.48,1.48,0,0,1,.38-1.07A2.23,2.23,0,0,1,57.85,20.96Zm-3.54-4.52h3.13a1,1,0,0,0,.71-0.3,1,1,0,0,0,.3-0.71V7.86a1,1,0,0,0-0.3-0.71,1,1,0,0,0-1.42,0,1,1,0,0,0-0.29.71V12.6H53.34V7.86a1,1,0,0,0-0.3-0.71,1,1,0,0,0-1.42,0,1,1,0,0,0-0.29.71V12.6H48.43a1,1,0,0,0-1,1v3.12a1,1,0,0,0,.3.71,1,1,0,0,0,.71,0.3H51.8v4.73a1,1,0,0,0,.3.71,1,1,0,0,0,1.42,0,1,1,0,0,0,.29-0.71V17.64H56.4a1,1,0,0,0,.71-0.3,1,1,0,0,0,.3-0.71V14.62a1,1,0,0,0-1-1H54.32V10.05A1,1,0,0,0,54.62,9.34Z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.openai.chatgpt"
              className="mb-16 md:mb-0 md:mr-16"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="53.333"
                viewBox="0 0 180 53.333"
                style={{ width: "135px", height: "40px" }}
              >
                <path
                  d="M9.5,13.8A2.8,2.8,0,0,0,6.7,16.6v18.8a2.8,2.8,0,0,0,5.6,0V16.6A2.8,2.8,0,0,0,9.5,13.8Z"
                  fill="#fff"
                />
                <path
                  d="M42.6,31.3,27.9,20.5a2.8,2.8,0,0,0-3.6,0L6.7,31.3a2.8,2.8,0,0,0,0,4.5L21.3,46.1a2.8,2.8,0,0,0,3.6,0l18.6-10.8a2.8,2.8,0,0,0,0-4.5Z"
                  fill="#fff"
                />
                <path
                  d="M51.3,21.7a2.8,2.8,0,0,0-4.5,0L28.2,44.5a2.8,2.8,0,0,0,0,4.5L42.9,59.3a2.8,2.8,0,0,0,4.5,0l18.6-22.8a2.8,2.8,0,0,0,0-4.5Z"
                  fill="#fff"
                />
                <path
                  d="M85.4,31.3,70.7,20.5a2.8,2.8,0,0,0-3.6,0L49.5,31.3a2.8,2.8,0,0,0,0,4.5L64.2,46.1a2.8,2.8,0,0,0,3.6,0L85.4,35.8a2.8,2.8,0,0,0,0-4.5Z"
                  fill="#fff"
                />
                <path
                  d="M94.1,28.9a2.8,2.8,0,0,0-4.5,0L71,51.7a2.8,2.8,0,0,0,0,4.5L85.7,66.5a2.8,2.8,0,0,0,4.5,0l18.6-22.8a2.8,2.8,0,0,0,0-4.5Z"
                  fill="#fff"
                />
                <path
                  d="M120.6,31.3,105.9,20.5a2.8,2.8,0,0,0-3.6,0L84.7,31.3a2.8,2.8,0,0,0,0,4.5L99.4,46.1a2.8,2.8,0,0,0,3.6,0l18.6-10.8a2.8,2.8,0,0,0,0-4.5Z"
                  fill="#fff"
                />
                <path
                  d="M131.5,13.8a2.8,2.8,0,0,0-2.8,2.8v18.8a2.8,2.8,0,0,0,5.6,0V16.6A2.8,2.8,0,0,0,131.5,13.8Z"
                  fill="#fff"
                />
                <path
                  d="M153.5,24.4a2.8,2.8,0,0,0-4.5,0l-13.9,16a2.8,2.8,0,0,0,0,4.5l13.9,16a2.8,2.8,0,0,0,4.5,0l13.9-16a2.8,2.8,0,0,0,0-4.5Z"
                  fill="#fff"
                />
                <path
                  d="M174.6,13.8a2.8,2.8,0,0,0-2.8,2.8v18.8a2.8,2.8,0,0,0,5.6,0V16.6A2.8,2.8,0,0,0,174.6,13.8Z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptHome;

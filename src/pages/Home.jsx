import React, { useState, useEffect } from "react";
import { menuItems } from "../constant/constant";
import "./Home.css";

const GptHome = () => {
  const [typedText, setTypedText] = useState("");
  const [color, setColor] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const textArray = [
    "Chat GPT",
    "Let's Explore",
    "Let's Discover",
    "Let's Learn",
    "Let's Build",
    "Let's Grow",
  ];
  const typingDelay = 100;
  const delayBetweenTexts = 5000;

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      setTypedText(
        (prevTypedText) => prevTypedText + textArray[textIndex][charIndex]
      );
      charIndex++;

      if (charIndex === textArray[textIndex].length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          textIndex = (textIndex + 1) % textArray.length;
          charIndex = 0;
          setTypedText("");
        }, delayBetweenTexts);
      }
    }, typingDelay);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
      setColor({
        color: `#${randomColor}`,
        backgroundColor: `#${randomColor2}`,
      });
    }, delayBetweenTexts);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: color.backgroundColor,
        color: color.color,
      }}
    >
      <nav>
        {menuItems?.map((item) => (
          <div key={item.link}>
            <a href={item.link}>{item.label}</a>
            {item.sub && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                }}
                className="sub-menu"
              >
                {item.sub.map((subItem) => (
                  <a href={subItem.link} key={subItem.link}>
                    {subItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* <div className="overlay">
        <div className="typing-text">{typedText}</div>
      </div> */}
      <div
        style={{
          position: "fixed",
          bottom: "10%",
          left: "2%",
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
              {/* Insert your SVG here */}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.openai.chatgpt"
              className="mb-16 md:mb-0 md:mr-16"
            >
              {/* Insert your SVG here */}
            </a>
            <a href="">Try on web 🚀</a>
          </div>
        </div>
        <div>
          ChatGPT for iOS and Android is available in these countries & regions.
        </div>
      </div>
    </div>
  );
};

export default GptHome;

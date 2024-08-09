import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React js Developer",
          "Responsive Web Design",
          "Figma Design",
          "Freelancing Websites Work",
          "Shopify Developer Front-side",
          "Wordpress Developer",
          "WIX Web Development Company",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

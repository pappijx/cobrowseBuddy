import React from "react";

const App = () => {
  const startTogetherJS = () => {
    // Initialize TogetherJS
    if (typeof window.TogetherJS === "undefined") {
      // Load TogetherJS script if not loaded
      const script = document.createElement("script");
      script.src = "https://togetherjs.com/togetherjs-min.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        window.TogetherJS(this);
      };
    } else {
      window.TogetherJS(this);
    }
  };
  return (
    <div>
      <h1>Client</h1>
      <button onClick={startTogetherJS}>Start TogetherJS</button>
    </div>
  );
};

export default App;

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((e) => e + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
      <div className="max-w-md p-8 bg-gradient-to-br from-purple-400 to-blue-400 shadow-lg rounded-md text-white">
        <h1 className="text-3xl font-bold mb-6">{advice}</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out glow-button"
          onClick={getAdvice}
        >
          Get New Advice
        </button>
        <Message count={count} />
      </div>
    </div>
  );
}

function Message(props) {
  return (
    <p className="mt-6 text-gray-200">
      You've read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}

export default App;

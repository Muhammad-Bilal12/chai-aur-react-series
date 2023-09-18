import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (isNumberAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isCharAllowed, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isCharAllowed, generatePassword]);

  return (
    <>
      <div className="main">
        <div className="w-full max-w-lg mx-auto shadow-md px-4 py-3 text-orange-500 bg-black rounded-lg">
          <h1 className="text-white text-center my-3 text-2xl">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              ref={passwordRef}
              type="text"
              defaultValue={password}
              className="outline-none w-full py-1 px-3"
            />
            <button
              onClick={copyToClipboard}
              className="outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500"
            >
              Copy
            </button>
          </div>
          <div className="flex justify-center text-sm gap-x-2">
            <div className="flex  items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                value={isNumberAllowed}
                onChange={() => setIsNumberAllowed(!isNumberAllowed)}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="charInput"
                value={isCharAllowed}
                onChange={() => setIsCharAllowed(!isCharAllowed)}
              />
              <label htmlFor="charInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

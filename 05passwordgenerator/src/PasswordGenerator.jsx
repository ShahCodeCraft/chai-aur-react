// import React, { useState, useEffect, useRef } from "react";

// function PasswordGenerator() {
//   const [length, setLength] = useState(8);
//   const [includeNumbers, setIncludeNumbers] = useState(false);
//   const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordRef = useRef(null);

//   useEffect(() => {
//     generatePassword();
//   }, [length, includeNumbers, includeSpecialChars]);

//   const generatePassword = () => {
//     let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (includeNumbers) charset += "0123456789";
//     if (includeSpecialChars) charset += "!@#$%^&*_+=[]{}~`";

//     let generatedPassword = "";
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * charset.length);
//       generatedPassword += charset[randomIndex];
//     }

//     setPassword(generatedPassword);
//   };

//   const copyPassword = () => {
//     passwordRef.current.select();
//     document.execCommand("copy");
//   };

//   return (
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
//       <h1 className="text-white text-center my-3"> New Password Generator</h1>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4 py-4">
//         <input
//           type="text"
//           value={password}
//           readOnly
//           className="outline-none w-full py-1 px-3"
//           ref={passwordRef}
//         />
//         <button
//           className="outline-none bg-blue-700 text-white px-3 py-0.5"
//           onClick={copyPassword}
//         >
//           Copy
//         </button>
//       </div>
//       <div className="flex w-screen text-sm gap-x-2">
//         <div className="flex items-center gap-x-1 mb-2">
//           <input
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             className="cursor-pointer"
//             onChange={(e) => setLength(e.target.value)}
//           />
//           <label>Length: {length} </label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             checked={includeNumbers}
//             id="numberInput"
//             onChange={() => setIncludeNumbers((prev) => !prev)}
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             checked={includeSpecialChars}
//             id="charInput"
//             onChange={() => setIncludeSpecialChars((prev) => !prev)}
//           />
//           <label htmlFor="charInput">Special Characters</label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PasswordGenerator;

import React, { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGFIabcdefghi";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "@#$^%&*{}~`";

    for (let i = 1; i <= length; i++) {
      let randomPass = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomPass);
    }
    setPassword(pass);
    console.log("Pass", pass);
  }, [length, numberAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);
  return (
    <div className="text-2xl text-center p-3 bg-black h-screen text-white">
      <h1 className="p-3">Password Generator</h1>

      <div className="">
        <input
          className="px-2 py-1 text-black"
          type="text"
          placeholder="Password"
          readOnly
          value={password}
          ref={passwordGenerator}
        />
        <button className="bg-green-600 px-2 py-1">COPY</button>
      </div>

      <div className="flex p-3">
        <div className="px-3">
          <input
            type="range"
            value={length}
            min={6}
            max={20}
            onChange={(e) => setLength(e.target.value)}
          />{" "}
          <label>Length :{length}</label>
        </div>

        <div className="px-3">
          <input
            type="checkbox"
            defaultChecked={numberAllow}
            onChange={() => setNumberAllow((pre) => !pre)}
          />{" "}
          <label>Numbers</label>
        </div>

        <div className="px-3">
          <input
            type="checkbox"
            defaultChecked={charAllow}
            onChange={() => setCharAllow((prev) => !prev)}
          />{" "}
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;

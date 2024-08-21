// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// const RouteLink = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul className="flex gap-1 my-2">
//             <li className=" bg-gray-300 px-4 py-3">
//               <Link to="/">Home</Link>
//             </li>
//             <li className=" bg-gray-300 px-4 py-3">
//               <Link to="/about">About</Link>
//             </li>
//             <li className=" bg-gray-300 px-4 py-3">
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default RouteLink;

import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route, Link } from "react-router-dom";

const RouteLink = () => {
  return (
    <>
      <div>
        <nav>
          <ul className="flex py-2 gap-2">
            <li className="bg-gray-300 px-4 py-3 rounded-lg">
              <Link to="/home">Home</Link>
            </li>
            <li className="bg-gray-300 px-4 py-3 rounded-lg">
              <Link to="/about">About</Link>
            </li>
            <li className="bg-gray-300 px-4 py-3 rounded-lg">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/home" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
      </Routes>
    </>
  );
};
export default RouteLink;

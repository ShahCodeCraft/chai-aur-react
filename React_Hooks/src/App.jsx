import Recat from "react";
import Counter from "./useState/Counter";
import TextChange from "./useState/TextChange";
import Toggle from "./useState/ToggleComponent";
import FetchApi from "./useEffect/FetchApi";
import Stopwatch from "./useState/StopWatch";
import PropsData from "./State_Props/Props";
import PropsCom from "./State_Props/Props";
import StudentProps from "./State_Props/StudentProps";

import { Students, Students2 } from "./Store/store";
import RouteLink from "./Routing/RouteLink";
import { BrowserRouter } from "react-router-dom";
import ArrowFunctions from "./Best_Practices/ArrowFunctions";
import PracticeIndex from "./Best_Practices/PracticeIndex";
function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Toggle /> */}
      <TextChange />
      {/* <FetchApi /> */}
      {/* <Stopwatch /> */}

      {/* <PropsCom name="Shah" age="25" />
      <PropsCom name="Nawaz" age="27" />
      <PropsCom name="Alam" age="29" /> */}

      {/* <StudentProps data={Students} />
      <StudentProps data={Students2} /> */}

      {/* <BrowserRouter>
        <RouteLink />
      </BrowserRouter> */}

      {/* <PracticeIndex /> */}
    </>
  );
}

export default App;

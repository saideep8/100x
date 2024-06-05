import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Landing } from "./components/Landing";
import { Dashboard } from "./components/Dashboard";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("count render...");
  return (
    <div>
      <CountRenderer></CountRenderer>
      <Buttons></Buttons>
      <CheckCount></CheckCount>
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("abc..");
  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((c) => c - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function CheckCount() {
  const count = useRecoilValue(countAtom);
  if (count % 2 == 0) {
    return <div>It is even</div>;
  } else {
    return <></>;
  }
}

export default App;

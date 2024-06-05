import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  RecoilLoadable,
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalCount,
} from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Topbar></Topbar>
    </RecoilRoot>
  );
}

function Topbar() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);
  const total = useRecoilValue(totalCount);

  return (
    <div>
      <button>Home</button>
      <button>My network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging {messagingCount}</button>
      <button>Notifications {notificationsCount}</button>
      <button>Me {total}</button>
    </div>
  );
}
export default App;

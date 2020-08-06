import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faAddressbook,
} from "@fortawesome/free-brands-svg-icons";

import logo from "./logo.svg";
import "./App.css";

library.add(faHome, faUser, faAddressbook);

function App() {
  return <div></div>;
}

export default App;

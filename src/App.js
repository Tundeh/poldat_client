import React from "react";
import Layout from "./components/Layout/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faDatabase,
  faPlusSquare,
  faHome,
  faUsers,
  faAddressBook,
  faUserPlus,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import "./App.scss";

library.add(
  faUser,
  faDatabase,
  faPlusSquare,
  faHome,
  faUsers,
  faAddressBook,
  faUserPlus,
  faShare
);
function App() {
  return <Layout></Layout>;
}

export default App;

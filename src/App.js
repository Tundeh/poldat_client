import React from "react";
import Layout from "./components/Layout/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";

import "./App.scss";

library.add();

function App() {
  return (
    <div>
      <Layout></Layout>
    </div>
  );
}

export default App;

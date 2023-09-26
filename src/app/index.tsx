import React from "react";
// import "./App.css";
import Layout from "../layout";
import Navigation from "./Navigation";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout style={{ minHeight: "100vh" }}></Layout>
      <Navigation />
    </Layout>
  );
}

export default App;

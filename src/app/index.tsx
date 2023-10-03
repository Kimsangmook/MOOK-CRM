import React,{useState} from "react";
// import "./App.css";
import Layout from "../layout";
import Navigation from "./Navigation";
import MainPage from "../pages/mainPage";
import {PronmptContextProvider} from "../context/promptContext"

function App() {
  const [promptIsSelected,setMainPageShown] = useState(false);

  const showMainPageHandler = () =>{
    setMainPageShown(true);
  };

  const hideMainPageHandler = () =>{
    setMainPageShown(false);
  }

  return (
    <PronmptContextProvider>
    <Layout style={{ minHeight: "100vh" }}>
      <Layout style={{ minHeight: "100vh" }}>
      <MainPage/>
      </Layout>
      <Navigation />
    </Layout>
    </PronmptContextProvider>
  );
}

export default App;

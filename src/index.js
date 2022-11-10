import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import "./indexReview.css"
// import "./indexAccordion.css"
// import "./indexMenu.css"
// import "./indexTabs.css"
// import "./indexSlider.css"
// import "./indexLorem.css"
// import "./indexColor.css"
// import "./indexGrocery.css"
// import "./indexNavbar.css"
// import "./indexSidebar.css"
// import "./indexStripe.css"
import "./indexCart.css"
import { AppProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

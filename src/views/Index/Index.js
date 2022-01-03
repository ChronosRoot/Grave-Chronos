import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexHeader from "@src/components/Headers/IndexHeader.js";
import Lifetime from "@view-Index/Components-Index/Lifetime";

// sections for this page

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Lifetime />
        </div>
      </div>
    </>
  );
}

export default Index;

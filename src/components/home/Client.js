import React from "react";

const Client = () => {
  return (
    <div className="container-box mx-auto text-center text-white ">
      <h6>We’ve worked with some great startups</h6>

      <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 pb-20 pt-7 lg:px-0 px-5">
        <img alt="client-1" src="../images/client-1.svg"/>
        <img alt="client-2" src="../images/client-2.svg"/>
        <img alt="client-3" src="../images/client-3.svg"/>
        <img alt="client-5" src="../images/client-5.svg"/>
        <img alt="client-4" src="../images/client-4.svg"/>
      </div>
    </div>
  );
};

export default Client;

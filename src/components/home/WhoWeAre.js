import React from "react";

const WhoWeAre = () => {
  return (
    <div className="container-box mx-auto py-12 lg:px-0 px-5">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h6 className="text-secondary font-semibold">Who we are</h6>
          <h4 className="text-2xl py-2 font-semibold">
            Commercial interior designers
          </h4>
          <p className="text-font">
            Untitled are a commercial interior design studio. We specialise in
            customised office design, restaurant design, shop design, and studio
            design.{" "}
          </p>
        </div>
        <div>
          <div className="flex items-start gap-5">
            <img alt="icon-1" src="../images/icon-1.svg" />
            <div>
              <h5 className="text-lg font-semibold">Share team inboxes</h5>
              <p>
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 pt-7">
            <img alt="icon-2" src="../images/icon-2.svg" />
            <div>
              <h5 className="text-lg font-semibold">Deliver instant answers</h5>
              <p>
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <img alt="who-we-are" src="../images/footer-image.png" className="pt-10 pb-5 w-full h-fit"/>
    </div>
  );
};

export default WhoWeAre;

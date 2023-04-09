import React from "react";

const Footer = () => {
  return (
    <div className="container-box mx-auto text-font px-5">
      <div className="lg:flex justify-between">
        <div>
          <img alt="footer-logo" src="../images/footer-logo.svg" />

          <ul className="md:flex md:gap-10 py-5 grid grid-cols-2 gap-5">
            <li className="font-semibold">Overview</li>
            <li className="font-semibold">Features</li>
            <li className="font-semibold">Pricing</li>
            <li className="font-semibold">Careers</li>
            <li className="font-semibold">Help</li>
            <li className="font-semibold">Privacy</li>
          </ul>
        </div>
        <div className="lg:pt-0 pt-5">
          <h6 className="font-semibold text-black">Stay up to date</h6>
          <div className="grid lg:grid-cols-12 gap-2 py-5">
            {" "}
            <div className="col-span-8">
              <input
                className="border-font border rounded-md px-3 py-2 w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="lg:col-span-4 col-span-8">
              <button className="px-5 bg-secondary py-2 rounded-md text-white w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full h-[0.5px] lg:mt-10 mt-5 mb-7" />

      <div className="text-[#98A2B3] lg:flex justify-between pb-6 lg:flex-row  flex-col-reverse">
        <h6>© 2077 Fake Company. All rights reserved.</h6>

        <ul className="flex gap-10 ">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

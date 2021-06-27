import * as React from "react";
import EthLogo from "../../assets/ethereum-logo-2014-5.svg";
import Timeline from "./timeline";

const BeforeGenesis: React.FC<{ Data?: Data }> = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full md:w-6/12 md:m-auto">
        <img
          className="text-center mx-auto mb-8"
          width="30"
          height="48"
          src={EthLogo}
          alt="ultra sound money"
        />
        <h1 className="text-white font-light text-base md:text-3xl leading-normal text-center mb-6 leading-title">
          Before we get into Ultra Sound Money, let’s talk about how we got here
        </h1>
        <p className="text-blue-shipcove font-light text-sm text-center mb-10">
          Section for brief historical events and and current ETH state to set
          the scene for Ultrasound money. Graphics, Light data and simple carts
        </p>
      </div>
      <Timeline />
    </>
  );
};

export default BeforeGenesis;

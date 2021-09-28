import React from "react";
import Container from "./container";
import Lottie from "react-lottie";
import NotFoundAnimation from "../assets/lottie/notfound";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container
      styles={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie options={defaultOptions} height={400} width={400} />
    </Container>
  );
};

export default NotFound;

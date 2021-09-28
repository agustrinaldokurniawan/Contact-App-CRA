import Lottie from "react-lottie";
import SuccessAnimation from "../assets/lottie/success.json";

export default function ModalUpdate(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SuccessAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        height: "100vh",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 30,
          borderRadius: 20,
          position: "relative",
        }}
      >
        <button
          style={{ position: "absolute", top: -10, right: -10 }}
          onClick={props.toggle}
        >
          <img
            src="assets/icons/ant-design_close-circle-filled.png"
            alt="Close"
          />
        </button>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
          }}
        >
          <h1 className="text-lg font-bold">Update success</h1>

          <Lottie options={defaultOptions} height={"30%"} width={"30%"} />

          <small>Contact already updated</small>
        </div>
      </div>
    </div>
  );
}

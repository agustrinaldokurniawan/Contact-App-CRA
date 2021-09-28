import Lottie from "react-lottie";
import RemoveAnimation from "../assets/lottie/remove.json";

export default function ModalDelete(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: RemoveAnimation,
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
          <h1 className="text-lg font-bold">Removed!</h1>

          <Lottie options={defaultOptions} height={"30%"} width={"30%"} />

          <small>Success delete contact</small>
        </div>
      </div>
    </div>
  );
}

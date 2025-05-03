import Animation from "./Animation";
import GestureAnimation from "./GeastureAnimation";
import AnimationHook from "./hooks/AnimationHook";
import KeyFrame from "./KeyFrame";

function App() {
  return (
    <div className="flex justify-center items-center h-[100vh] ">
      {/* //! Animation */}
      {/* <Animation /> */}
      {/* //! GestureAnimation */}
      {/* <GestureAnimation /> */}
      {/* //! KeyFrame */}
      {/* <KeyFrame /> */}

      {/* //! Use animation hooks */}
      <AnimationHook />
    </div>
  );
}

export default App;

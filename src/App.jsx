import Animation from "./Animation";
import GestureAnimation from "./GeastureAnimation";
import AnimationHook from "./hooks/AnimationHook";
import CycleHook from "./hooks/CycleHook";
import UseInViewHook from "./hooks/UseInViewHook";
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
      {/* <AnimationHook /> */}

      {/* //! Use Cycle Hook */}
      {/* <CycleHook /> */}

      {/* //! Use in View Hook */}
      <UseInViewHook />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Button } from "@patchable-ui/base";
import { CustomButton, patchUi } from "./patcher";
import { BootstrapButton, patchWithBootstrap } from "@patchable-ui/bootstrap";

function App() {
  const [count, setCount] = useState(0);
  const [, setUi] = useState("default");

  const useCustomUi = () => {
    patchUi();
    setUi("custom");
  };

  const useBootstrap = () => {
    patchWithBootstrap();
    setUi("bootstrap");
  };

  return (
    <div className="App">
      <CustomButton label="use custom button" onClick={useCustomUi} />
      <BootstrapButton label="use bootstrap ui" onClick={useBootstrap} />
      <Button
        label={`count is ${count}`}
        onClick={() => setCount((count) => count + 1)}
      />
    </div>
  );
}

export default App;

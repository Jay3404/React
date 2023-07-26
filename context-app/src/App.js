import ColorBox from "./components/ColorBox";
import SelectColor from "./components/SelectColor";
import {ColorProvider} from "./contexts/color";

function App() {
  return (
    // <ColorContext.Provider value={값}>과 동일
    <ColorProvider>
      <div>
        <SelectColor></SelectColor>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
  );
}

export default App;

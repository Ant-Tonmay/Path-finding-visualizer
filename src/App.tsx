import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./conext/PathfindingContext";
import { SpeedProvider } from "./conext/speedContext";
import { TileProvider } from "./conext/TileContext";
import "./index.css";

function App() {
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <h1 className="h-screen w-screen flex flex-col bg-blue-200">
             Path Finding
          </h1>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;

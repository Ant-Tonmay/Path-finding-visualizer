import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./conext/PathfindingContext";
import { SpeedProvider } from "./conext/speedContext";
import { TileProvider } from "./conext/TileContext";

import "./index.css";
import { Nav } from "./components/nav";

function App() {
  const isVisualizationRunningRef = useRef(false)
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Nav isVisualizationRunningRef ={isVisualizationRunningRef}/>
              <Grid isVisualizationRunningRef ={isVisualizationRunningRef}/>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;

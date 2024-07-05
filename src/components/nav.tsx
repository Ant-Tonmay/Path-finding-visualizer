import { EXTENDED_SLEEP_TIME, MAZES, PATHFINDING_ALOGRITHMS, SLEEP_TIME, SPEEDS } from "../utils/constanst";
import { Select } from "./select";
import { usePathfinding } from "../hooks/usePathfinding";
import {AlgorithmType, MazeType, SpeedType } from "../utils/types";
import { resetGrid } from "../utils/resetGrid";
import { useTile } from "../hooks/useTIle";
import { MutableRefObject, useState } from "react";
import { runMazeAlgorithm } from "../utils/runMazeAlgo";
import { useSpeed } from "../hooks/useSpeed";
import { PlayButton } from "./PlayButton";
import { runPathFindingAlgo } from "../utils/runPathFindingAlgorithm";
import { animatePath } from "../utils/animatePath";

export function Nav({isVisualizationRunningRef}:{isVisualizationRunningRef : MutableRefObject<boolean>}){
    const[isDisabled,setIsDisabled] = useState(false);
    const {maze,setMaze,grid,setGrid,setIsGraphVisualized,algorithm , setAlgorithm,isGraphVisualized} = usePathfinding();
    const {startTile , endTile} = useTile();
    const {speed,setSpeed} = useSpeed();
    const handleGenerateMaze = (maze:MazeType)=>{
        setMaze(maze);
        if( maze == 'NONE'){        
            resetGrid({grid,startTile,endTile})
            return;
        }
        setIsDisabled(true);
        runMazeAlgorithm({maze,grid,startTile,endTile,setIsDisabled,speed});
        const newGrid = grid.slice();
        setGrid(newGrid);
        setIsGraphVisualized(false);
    

    }

    const handleRunVisualizer = () =>{
        if(isGraphVisualized){
            setIsGraphVisualized(false);
            resetGrid({grid : grid.slice(),startTile,endTile})
            return
        }
        const {traversedTiles,path} =runPathFindingAlgo({
            algorithm,
            grid,
            startTile,
            endTile,
        })
        console.log(traversedTiles)
        console.log(path);
        
       animatePath(traversedTiles,path,startTile,endTile,speed)

       setIsDisabled(true);
       isVisualizationRunningRef.current=true;
       setTimeout(() =>{
            const newGrid = grid.slice()
            setGrid(newGrid);
            setIsGraphVisualized(true)
            setIsDisabled(false);
            isVisualizationRunningRef.current=true;
       },(SLEEP_TIME*(traversedTiles.length+SLEEP_TIME * 2)+EXTENDED_SLEEP_TIME*(path.length+60)*SPEEDS.find((s)=>s.value ===speed)!.value))
    }

    return (
        <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
                <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
                    <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
                        Pathfinding Visualizer
                    </h1>

                    <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">

                        <Select
                            label="Maze"
                            value={maze}
                            options={MAZES}
                            onChange={(e)=>{
                                handleGenerateMaze(e.target.value as MazeType)
                            }}
                        />
                        <Select
                            label="Graph Algorithm"
                            value={algorithm}
                            options={PATHFINDING_ALOGRITHMS}
                            onChange={(e)=>{
                                setAlgorithm(e.target.value as AlgorithmType)
                            }}
                        />

                        <Select
                                 label="Speed"
                                 value={speed}
                                 options={SPEEDS}
                                 onChange={(e)=>{
                                     setSpeed(parseInt(e.target.value) as SpeedType)
                                 }}
                        />

                        <PlayButton
                        isDisabled={isDisabled}
                        isGraphVisualized={isGraphVisualized}
                        handleRunVisualizer={handleRunVisualizer}

                        
                        
                        />

                    </div>
                </div>


        </div>
    )
}
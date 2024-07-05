import { Children, createContext, ReactNode, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
import { createGrid } from "../utils/helper";
import { END_TILE_CONF, START_TILE_CONF } from "../utils/constanst";

interface PathfindingContextInterface{
    algorithm : AlgorithmType;
    setAlgorithm:(algorithm: AlgorithmType) => void;
    maze : MazeType;
    setMaze:(maze:MazeType) => void;
    grid : GridType;
    setGrid:(grid:GridType) => void;
    isGraphVisualized:boolean;
    setIsGraphVisualized:(isGraphVisualized:boolean) => void;
}

export const PathfindingContext = createContext<
PathfindingContextInterface | undefined >(undefined);

export const PathfindingProvider = ({children}:{children:ReactNode})=>{
    const [algorithm,setAlgorithm] = useState<AlgorithmType>("BFS");
    const [maze,setMaze]=useState<MazeType>("NONE");
    const [grid,setGrid] = useState<GridType>(createGrid(START_TILE_CONF,END_TILE_CONF));
    const [isGraphVisualized,setIsGraphVisualized] = useState<boolean>(false);
    return (
        <PathfindingContext.Provider value={{
            algorithm,
            setAlgorithm,
            maze,
            setMaze,
            grid,
            setGrid,
            isGraphVisualized,
            setIsGraphVisualized,
        }}>
            {children}
        </PathfindingContext.Provider>
    )
}
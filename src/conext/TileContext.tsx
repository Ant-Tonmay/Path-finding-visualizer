import { Children, createContext, useState } from "react";
import { TileType } from "../utils/types";
import { END_TILE_CONF, MAX_ROWS, START_TILE_CONF } from "../utils/constanst";

interface TileContextInterface {
    startTile: TileType;
    setStartTile:(startTile:TileType)=>void;
    endTile: TileType;
    setEndTile:(endTile:TileType)=>void;
}
export const TileContext = createContext<TileContextInterface | undefined>(
    undefined
);
export const TileProvider = ({children}:{children:React.ReactNode})=>{
    const [startTile,setStartTile] = useState<TileType>(START_TILE_CONF);
    const [endTile,setEndTile] = useState<TileType>(END_TILE_CONF);
    return (
        <TileContext.Provider value={{
            startTile,
            setStartTile,
            endTile,
            setEndTile,
        }}>
            {children}
        </TileContext.Provider>
    )
}
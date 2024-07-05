import { GridType, TileType} from "./types";
import { MAX_COLS, MAX_ROWS } from "./constanst";

const getHueristec = (currtentTile:TileType,endTile:TileType)=>{
    const manhattan = 1;

    const row = Math.abs(currtentTile.row - endTile.row);
    const col = Math.abs(currtentTile.col - endTile.col);

    return manhattan * (row + col);
}


export const initHeuristics = (grid:GridType , endTile:TileType) =>{

    const hr = []
    for(let i = 0 ; i <MAX_ROWS; i++){
        const row = []
        for(let j = 0 ; j < MAX_COLS; j++){

            row.push(getHueristec(grid[i][j],endTile));
        }
        hr.push(row)
    }

    return hr;
}

export const initFuntionCost =() =>{
    const fhr =[];

    for(let i=0;i<MAX_ROWS;i++){
        const row = []
        for(let j=0;j<MAX_COLS;j++){
          row.push(Infinity);
        }
        fhr.push(row);
    }
    return fhr;
}
import { GridType, SpeedType, TileType } from "../../../utils/types";
import { horizontalDiv } from "./horizontalDiv";
import { verticalDiv } from "./verticalDiv";

export default async function recDiv({

    grid,
    startTile,
    endTile,
    row,
    col,
    height,
    width,
    setIsDisabled,
    speed,
}:{
    grid: GridType,
    startTile:TileType,
    endTile:TileType,
    row:number,
    col:number,
    height:number,
    width:number,
    setIsDisabled:(isDisabled:boolean) =>void,
    speed:SpeedType,
}){
    if(height <=1 || width <=1){
        return
    }

    if(height > width){
        await horizontalDiv({
            grid,
            startTile,
            endTile,
            row,
            col,
            height,
            width,
            setIsDisabled,
            speed,
        })
    }else{
        await verticalDiv({
            grid,
            startTile,
            endTile,
            row,
            col,
            height,
            width,
            setIsDisabled,
            speed,
        })
    }

}
import { isEqual } from "./helper";
import { TileType } from "./types";

export function isInStack (tile:TileType , stack:TileType[]){
    for(let i = 0 ; i < stack.length ; i++){
        if(isEqual(tile,stack[i])){
            return true;
        }
    }
 return false;
}
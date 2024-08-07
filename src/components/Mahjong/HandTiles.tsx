import React from "react";
import Tile from "./Tile.tsx";
import {parseTiles} from "../../utils";

interface HandTilesProps {
  tiles: string  // patterns like: 19p19m19s12345677z
}

const HandTiles: React.FC<HandTilesProps> = ({tiles}) => {

  const parsedTiles = parseTiles(tiles);

  return (
    <div className="flex">
      {parsedTiles.map(tile => (
        <Tile key={tile} name={tile} />
      ))}
    </div>
  );
}

export default HandTiles;

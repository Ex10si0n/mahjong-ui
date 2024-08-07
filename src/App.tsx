import React from "react";
import HandTiles from "./components/Mahjong/HandTiles.tsx";
import {requestPlayerHandTiles} from "./utils/requests.ts";

const App: React.FC = () => {
  const playerHandTiles = requestPlayerHandTiles();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <HandTiles tiles={playerHandTiles}/>
    </div>
  );
};

export default App;

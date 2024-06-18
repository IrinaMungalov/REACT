import './Scene.css';

import {Flake} from '../flake/Flake'
import { randomCoordinate } from "../utils/coords"
import { randomDelay } from "../utils/time"
import { randomSize } from "../utils/size"

const maxFlakes = 100

function Scene() {
  return (
    <div className="scene">

      {new Array(maxFlakes).fill().map(_=> {
        return <Flake left={randomCoordinate()} initialDelay={randomDelay()} size={randomSize()} />

      })}

      
    </div>
  );
}

export default Scene;

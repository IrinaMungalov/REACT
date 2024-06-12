import './Scene.css';

import {Flake} from '../flake/Flake'
import { randomCoordinate } from "../utils/coords"

function Scene() {
  return (
    <div className="scene">
      <Flake left={randomCoordinate()}/>
      
    </div>
  );
}

export default Scene;

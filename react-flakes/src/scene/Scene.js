import './Scene.css';

import {Flake} from '../flake/Flake'
import { randomCoordinate } from "../utils/coords"
import { randomDelay } from "../utils/time"
import { randomSize } from "../utils/size"

import { useState, useEffect } from 'react';

const maxFlakes = 100
const delay = 20
const overallSpeed = 0.15
const startTop = -15

function Scene() {

      //HW1: using maxFlakes and loops or Array methods - fill this array
      
      let initFlakes = []

      for (let i = 0; i < maxFlakes; i++) {
        initFlakes.push({ top: startTop, left: randomCoordinate(), initialDelay: randomDelay(), size: randomSize() })
      }

      let [flakeData, setFlakeData] = useState(initFlakes)

      //HW2: add new flakes if there are less than maxFlakes

      useEffect(() => {
        const updateInterval = setInterval(() => {
          setFlakeData(flakeData => {
            let newFlakes = flakeData.map(flake => ({...flake, top: flake.top + overallSpeed * flake.size}))
                                     .filter(flake => flake.top < 100)

            if (newFlakes.length < maxFlakes) {
              newFlakes.push({ top: startTop, left: randomCoordinate(), initialDelay: randomDelay(), size: randomSize() })
            }

            return newFlakes
          })
        }, delay)

        return () => clearInterval(updateInterval)
      }, [])


      return (
        <div className="scene">

          {flakeData.map( flake => <Flake {...flake}/> )}
          
        </div>
      );
}

export default Scene;

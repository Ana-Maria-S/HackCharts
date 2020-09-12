import React from 'react';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, MarkSeries, CustomSVGSeries} from 'react-vis';

const myData = [
    {x: 6, y: 14, customComponent: (row, positionInPixels) => {
        return (
          <g className="inner-inner-component">
             <image xlinkHref="https://m.media-amazon.com/images/I/41ghg8I9DVL._SL160_.jpg" x={10} y={10} width="50"
                  height="50" fontSize={10}>
              </image>
            <text x={0} y={0}>
              <tspan x="0" y="0">{`x: ${positionInPixels.x}`}</tspan>
              <tspan x="0" y="1em">{`y: ${positionInPixels.y}`}</tspan>
            </text>
          </g>
        );
      }},
    {x: 10, y: 7, customComponent: (row, positionInPixels) => {
        return (
          <g className="inner-inner-component">
             <image xlinkHref="https://m.media-amazon.com/images/I/41ghg8I9DVL._SL160_.jpg" x={10} y={10} width="50"
                  height="50" fontSize={10}>
              </image>
            <text x={0} y={0}>
              <tspan x="0" y="0">{`x: ${positionInPixels.x}`}</tspan>
              <tspan x="0" y="1em">{`y: ${positionInPixels.y}`}</tspan>
            </text>
          </g>
        );
      }},
    {x: 2.5, y: 7, customComponent: (row, positionInPixels) => {
      return (
        <g className="inner-inner-component">
           <image xlinkHref="https://m.media-amazon.com/images/I/41ghg8I9DVL._SL160_.jpg" x={5} y={5} width="50"
                height="50" fontSize={10}>
            </image>
          <text x={0} y={0}>
            <tspan x="0" y="0">{`x: ${positionInPixels.x}`}</tspan>
            <tspan x="0" y="1em">{`y: ${positionInPixels.y}`}</tspan>
          </text>
        </g>
      );
    }}
  ]

export const ReactVisComponent = () =>
<XYPlot
  width={700}
  height={700}
  xDomain={[0,20]} 
  yDomain={[0,20]}>
  <HorizontalGridLines />
  <XAxis />
  <YAxis />
  <CustomSVGSeries
            animation
            style={{stroke: 'red', fill: 'orange'}}
            data={myData}
          />
</XYPlot>

    
  
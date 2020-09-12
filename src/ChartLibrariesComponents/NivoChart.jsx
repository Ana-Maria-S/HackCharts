import React from 'react';
import { ScatterPlot } from '@nivo/scatterplot'

const sampleData = [
    {
        id: 'girls low',
        data: [
            { id: 0, x: 0, y: 2.0, z: 1 },
            { id: 1, x: 1, y: 2.1, z: 2 },
            { id: 2, x: 2, y: 2.3, z: 4 },
            { id: 3, x: 3, y: 2.5, z: 1 },
            { id: 4, x: 4, y: 2.7, z: 3 },
            { id: 5, x: 5, y: 2.9, z: 0 },
            { id: 6, x: 6, y: 3.0, z: 1 },
            { id: 7, x: 7, y: 3.2, z: 3 },
            { id: 8, x: 8, y: 3.3, z: 2 },
            { id: 9, x: 9, y: 3.5, z: 3 },
            { id: 10, x: 10, y: 3.6, z: 0 },
            { id: 11, x: 11, y: 3.8, z: 0 },
            { id: 12, x: 12, y: 3.9, z: 4 },
            { id: 13, x: 13, y: 4.0, z: 1 },
        ],
    },
    {
        id: 'girls med',
        data: [
            { id: 0, x: 0, y: 3.2, z: 1 },
            { id: 1, x: 1, y: 3.3, z: 3 },
            { id: 2, x: 2, y: 3.6, z: 4 },
            { id: 3, x: 3, y: 3.8, z: 0 },
            { id: 4, x: 4, y: 4.1, z: 1 },
            { id: 5, x: 5, y: 4.3, z: 1 },
            { id: 6, x: 6, y: 4.6, z: 2 },
            { id: 7, x: 7, y: 4.8, z: 2 },
            { id: 8, x: 8, y: 5.0, z: 3 },
            { id: 9, x: 9, y: 5.2, z: 0 },
            { id: 10, x: 10, y: 5.4, z: 1 },
            { id: 11, x: 11, y: 5.5, z: 1 },
            { id: 12, x: 12, y: 5.7, z: 2 },
            { id: 13, x: 13, y: 5.8, z: 4 },
        ],
    },
    {
        id: 'girls high',
        data: [
            { id: 0, x: 0, y: 4.8, z: 4 },
            { id: 1, x: 1, y: 5.1, z: 3 },
            { id: 2, x: 2, y: 5.4, z: 4 },
            { id: 3, x: 3, y: 5.7, z: 1 },
            { id: 4, x: 4, y: 6.1, z: 0 },
            { id: 5, x: 5, y: 6.5, z: 1 },
            { id: 6, x: 6, y: 6.8, z: 2 },
            { id: 7, x: 7, y: 7.1, z: 3 },
            { id: 8, x: 8, y: 7.3, z: 3 },
            { id: 9, x: 9, y: 7.6, z: 1 },
            { id: 10, x: 10, y: 7.8, z: 1 },
            { id: 11, x: 11, y: 8.1, z: 0 },
            { id: 12, x: 12, y: 8.3, z: 4 },
            { id: 13, x: 13, y: 8.5, z: 1 },
        ],
    },
    {
        id: 'boys low',
        data: [
            { id: 0, x: 0, y: 2.5, z: 3 },
            { id: 1, x: 1, y: 2.6, z: 2 },
            { id: 2, x: 2, y: 2.8, z: 0 },
            { id: 3, x: 3, y: 3.1, z: 0 },
            { id: 4, x: 4, y: 3.3, z: 1 },
            { id: 5, x: 5, y: 3.5, z: 4 },
            { id: 6, x: 6, y: 3.8, z: 4 },
            { id: 7, x: 7, y: 4.0, z: 4 },
            { id: 8, x: 8, y: 4.2, z: 3 },
            { id: 9, x: 9, y: 4.4, z: 2 },
            { id: 10, x: 10, y: 4.5, z: 1 },
            { id: 11, x: 11, y: 4.7, z: 0 },
            { id: 12, x: 12, y: 4.9, z: 0 },
            { id: 13, x: 13, y: 5.0, z: 3 },
        ],
    },
    {
        id: 'boys med',
        data: [
            { id: 0, x: 0, y: 3.3, z: 0 },
            { id: 1, x: 1, y: 3.5, z: 4 },
            { id: 2, x: 2, y: 3.8, z: 3 },
            { id: 3, x: 3, y: 4.1, z: 3 },
            { id: 4, x: 4, y: 4.4, z: 2 },
            { id: 5, x: 5, y: 4.7, z: 2 },
            { id: 6, x: 6, y: 4.9, z: 2 },
            { id: 7, x: 7, y: 5.2, z: 1 },
            { id: 8, x: 8, y: 5.4, z: 1 },
            { id: 9, x: 9, y: 5.6, z: 0 },
            { id: 10, x: 10, y: 5.8, z: 3 },
            { id: 11, x: 11, y: 6.0, z: 4 },
            { id: 12, x: 12, y: 6.2, z: 2 },
            { id: 13, x: 13, y: 6.4, z: 1 },
        ],
    },
    {
        id: 'boys high',
        data: [
            { id: 0, x: 0, y: 5.0, z: 4 },
            { id: 1, x: 1, y: 5.3, z: 3 },
            { id: 2, x: 2, y: 5.6, z: 2 },
            { id: 3, x: 3, y: 6.0, z: 2 },
            { id: 4, x: 4, y: 6.4, z: 1 },
            { id: 5, x: 5, y: 6.8, z: 2 },
            { id: 6, x: 6, y: 7.2, z: 1 },
            { id: 7, x: 7, y: 7.5, z: 3 },
            { id: 8, x: 8, y: 7.8, z: 4 },
            { id: 9, x: 9, y: 8.0, z: 1 },
            { id: 10, x: 10, y: 8.3, z: 0 },
            { id: 11, x: 11, y: 8.5, z: 2 },
            { id: 12, x: 12, y: 8.8, z: 1 },
            { id: 13, x: 13, y: 9.0, z: 4 },
        ],
    },
]

class CatPoint extends React.Component {
    render() {
      const {cx, cy, datum} = this.props; // VictoryScatter supplies x, y and datum
      const cat = "😻"
      return (
        <image xlinkHref="https://m.media-amazon.com/images/I/516zqqZ70qL._SL160_.jpg" x={x} y={y} width="30"
        height="30" fontSize={10}>
        </image>
      );
    }
  }


const commonProps = {
    width: 900,
    height: 500,
    margin: { top: 24, right: 24, bottom: 80, left: 80 },
    nodeSize: 10,
    blendMode: 'multiply',
    xFormat: d => `week ${d}`,
    yFormat: d => `${d} kg`,
    axisBottom: {
        format: d => `week ${d}`,
    },
    axisLeft: {
        format: d => `${d} kg`,
    },
    data: sampleData,
    legends: [
        {
            anchor: 'bottom-left',
            direction: 'row',
            translateY: 60,
            itemWidth: 130,
            itemHeight: 12,
            symbolSize: 12,
            symbolShape: 'circle',
        },
    ],
}



export const ScatterPlotNivo = () =>

    (<ScatterPlot
        {...commonProps}
       // colors={{ scheme: 'set2' }}
        //nodeSize={32}
        data={[
            {
                id: 'A',
                data: [
                    { x: 0, y: 2 },
                    { x: 1, y: 4 },
                    { x: 2, y: 9 },
                    { x: 3, y: 7 },
                    { x: 4, y: 15 },
                    { x: 5, y: 12 },
                    { x: 6, y: 9 },
                ],
            },
            {
                id: 'B',
                data: [
                    { x: 0, y: 1 },
                    { x: 1, y: 5 },
                    { x: 2, y: 7 },
                    { x: 3, y: 3 },
                    { x: 4, y: 9 },
                    { x: 5, y: 17 },
                    { x: 6, y: 5 },
                ],
            },
            {
                id: 'C',
                data: [
                    { x: 0, y: 0 },
                    { x: 1, y: 7 },
                    { x: 2, y: 8 },
                    { x: 3, y: 11 },
                    { x: 4, y: 8 },
                    { x: 5, y: 3 },
                    { x: 6, y: 1 },
                ],
            },
        ]}
        renderNode={<CatPoint></CatPoint>}
    />
    )


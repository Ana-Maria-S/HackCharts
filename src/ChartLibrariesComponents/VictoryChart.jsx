import React from 'react';
import { VictoryTheme, VictoryChart, VictoryScatter, VictoryZoomContainer } from 'victory';

class ImagePoint extends React.Component {
    render() {
        const { x, y, datum } = this.props; // VictoryScatter supplies x, y and datum
        return (
            <image xlinkHref="https://m.media-amazon.com/images/I/41ghg8I9DVL._SL160_.jpg" x={x} y={y} width="30"
                height="30" fontSize={10}>
            </image>
        );
    }
}


export const VictoryChartComponent = () =>
     // ZOOM: 
    // <VictoryChart
    //     domain={{ x: [0, 5], y: [0, 7] }}
    //   containerComponent={<VictoryZoomContainer zoomDomain={{ x: [0, 10], y: [0, 50] }} />}>
    <VictoryChart
        domain={{ x: [0, 5], y: [0, 7] }}>
        <VictoryScatter
            style={{ data: { fill: "#c43a31" } }}
            size={5}
            data={[
                { x: 1, y: 2 },
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
            ]}
            dataComponent={<ImagePoint />}
        />
    </VictoryChart>
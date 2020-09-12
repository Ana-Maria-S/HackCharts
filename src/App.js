import React from 'react';
import logo from './logo.svg';
//import {ScatterPlotNivo} from './NivoChart';
import { VictoryChartComponent } from './ChartLibrariesComponents/VictoryChart';
import { VictoryTheme, VictoryChart, VictoryScatter } from 'victory';

import './App.css';
import { ReactVisComponent } from './ChartLibrariesComponents/ReactVisChart';

function App() {
    return (
        <div className="col-s">
            <h1>Victory chart</h1>
            <VictoryChartComponent />
            <h1>ReactVis chart</h1>
            <ReactVisComponent />
        </div>
        //<ScatterPlotNivo></ScatterPlotNivo>
    );
}

export default App;

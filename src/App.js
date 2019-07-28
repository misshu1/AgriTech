import React from "react";
import { GlobalStyles } from "./components/style";
import TodayChartsApp from "./components/charts/todayCharts/TodayChartsApp";

function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <TodayChartsApp />
        </React.Fragment>
    );
}

export default App;

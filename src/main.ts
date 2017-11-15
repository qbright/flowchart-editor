import Core from './core';
import FlowType from './common/flowType';

let chart = new Core("#container", {});


chart.insertFlow(FlowType.START);
chart.insertFlow(FlowType.PROCESS);

chart.insertFlow(FlowType.FORK);
chart.insertFlow(FlowType.JOIN);


export default Core;

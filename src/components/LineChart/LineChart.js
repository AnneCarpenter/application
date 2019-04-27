import * as React from 'react';
import * as tfvis from '@tensorflow/tfjs-vis/dist/index';

export const LineChart = props => {
  const containerRef = React.useRef();

  React.useEffect(() => {
    tfvis.render.linechart(containerRef.current, props.data, {});
  }, [props.data]);

  return <div className="line-chart-root" ref={containerRef} />;
};
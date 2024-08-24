console.clear();
import * as d3 from "d3"


/* ----------------------- React ------------------------- */

import { useState, useEffect, useRef }  from 'react'

function App() {
  const [data, setData] = useState(viewModel)
  
  return (
  <>      
      <CandlestickChart data={data} />
  </>
  ) 
}


export default function CandlestickChart({data}) {    
  const width = 500;
  const height = 500;
  const margin = {top: 30, bottom: 30, left: 30, right: 65}
  
  const yScale = d3.scaleLinear()
    .domain([data.yMin, data.yMax])
    .range([height - margin.bottom, margin.top])
    
  const xScale = d3.scaleTime()
    .domain([data.xMin, data.xMax])
    .range([margin.left, width - margin.left - margin.right])
    .nice(30)
  
  
  const xAxisRef = useRef("xAxis")
  const yAxisRef = useRef("yAxis")   
  const xAxis = d3.axisBottom().scale(xScale)
  const yAxis = d3.axisRight().scale(yScale)  
  useEffect(() => {
    d3.select(xAxisRef.current).call(xAxis);
    d3.select(yAxisRef.current).call(yAxis);
  }, [])
  
  return (
    <svg width={width} height={height}>
      <g className="candles">
      {data.dataPoints.map(d => (       
        <g>
          <line 
            y1={yScale(d.low)} 
            y2={yScale(d.high)} 
            x1={xScale(d.period)}
            x2={xScale(d.period)}
            stroke="black"
          />
            <line 
            y1={yScale(d.open)} 
            y2={yScale(d.close)} 
            x1={xScale(d.period)}
            x2={xScale(d.period)}
            stroke={d.close > d.open ? "green" : "red"}
            stroke-width={3}
          />
        </g>       
      ))}
      </g>
      <g>
        <g ref={xAxisRef} transform={`translate(0, ${height - margin.bottom})`} />
        <g ref={yAxisRef} transform={`translate(${width - margin.right - margin.left}, 0)`} />
      </g>
    </svg>
  )
}


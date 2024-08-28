// src/components/ForceDirectedGraph.tsx

import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import * as d3Drag from "d3-drag";
import { ArrayLike, select, Selection } from "d3-selection";
import { Node, Link, GraphData, NewLink, NewNode, NewGraphData } from '../utils/types';

const SkillSet: React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const [data, setData] = useState<NewGraphData>({ nodes: [], links: [] })
    const [adjacentNodes, setAdjacentNodes] = useState<string[]>()

    useEffect(() => {
    // Initial data
    var nodes: NewNode[] = [
        { name: "Skills"},
        { name: "HTML5", target: [0], value: 58 },
        { name: "CSS3", target: [0, 1], value: 65 },  
        { name: "Scss", target: [0, 1, 2], value: 52 },
        { name: "Compass", target: [0, 3], value: 48 }, 
        { name: "Susy", target: [0,3,4], value: 40 }, 
        { name: "Breakpoints", target: [0,3,4,5], value: 36 },
        { name: "jQuery", target: [0, 1, 2], value: 52 },
        { name: "Javascript", target: [0, 1, 2, 8], value: 42 },
        { name: "PHP", target: [0,1,2], value: 35 },
        { name: "Wordpress", target: [0,1,2,3,9], value: 67 },
        { name: "Git", target: [0,1,2,3,4,5,6,7,8,10], value: 68 },
        { name: "Snap.svg", target: [0,1,2,7,8 ], value: 16 },
        { name: "d3", target: [0,1,2,7,8], value: 25 },
        { name: "Gulp", target: [0,1,2,3,4,5,6,7,8,9,10,11,12], value: 45 },
        { name: "AngularJS", target: [0,1,2,7,8], value: 27 },
        { name: "Adobe CS", target: [0,1,2,12], value: 57 },
        { name: "mySql", target: [0,9,10], value: 20 },
        { name: "Grunt", target: [0,9,10], value: 37 },
    ];
    var links: NewLink[] = [];

    for (var i = 0; i < nodes.length; i++){
        if (nodes[i].target && nodes[i].target !== undefined) { 
                for ( var x = 0; x < nodes[i].target!.length; x++ ) 
                links.push({
                    source: nodes[i],
                    target: nodes[nodes[i].target![x]]  
                });
        };
    };

        setData({ nodes: nodes, links: links });
    }, []);
    var palette = {
        "lightgray": "#E5E8E8",
        "gray": "#708284",
        "mediumgray": "#536870",
        "blue": "#3B757F"
    }
  
    var colors = d3.scaleOrdinal(d3.schemeAccent);

    const svg = d3.select(svgRef.current);
    const width = 1200;
    const height = 1200;
    const circleWidth = 5;
    svg.attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 1000 800")
    .classed("svg-content-responsive", true)

    // @ts-ignore
    var force = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink<NewNode, NewLink>(data.links).id(d => d.name)
        .strength(1))
    .force("charge", d3.forceManyBody().strength(-100))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .alphaTarget(0);

    var link = svg.selectAll('line') 
        .data(data.links).enter().append('line')
        .attr('stroke', palette.lightgray)
        .attr('strokewidth', '1');

    var node =  svg.selectAll('circle')  
        .data(data.nodes).enter() 
        .append('g'); 

    
        node.append('circle')
        // @ts-ignore
        .attr('cx', function(d){return d.x; })
        // @ts-ignore
        .attr('cy', function(d){return d.y; })
        .attr('r', function(d,i){
              console.log("circle ",d.value,d);
              if ( i > 0 ) {
                    // @ts-ignore
                    return circleWidth + d.value; 
              } else {
                    return circleWidth + 35; 
              }
        })
        .attr('fill', function(d,i){
              if ( i > 0 ) {
                    // @ts-ignore
                    return colors(i);
              } else {
                    return '#fff';
              }
        })
        .attr('strokewidth', function(d,i){
              if ( i > 0 ) {
                    return '0';
              } else {
                    return '2';
              }
        })
        .attr('stroke', function(d,i){
              if ( i > 0 ) {
                    return '';
              } else {
                    return 'black';
              }
        });

    // @ts-ignore
    force.on('tick', function(e){ 
            node.attr('transform', function(d, i){
            return 'translate(' + d.x + ','+ d.y + ')'
            })

        link 
            // @ts-ignore
            .attr('x1', function(d){ return d.source.x; }) 
            // @ts-ignore
            .attr('y1', function(d){ return d.source.y; })
            // @ts-ignore
            .attr('x2', function(d){ return d.target.x; })
            // @ts-ignore
            .attr('y2', function(d){ return d.target.y; })
    });


    node.append('text')
        .text(function(d){ return d.name; })
        // @ts-ignore
        .attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
        .attr('fill', function(d, i){
        console.log(d.value);
            // @ts-ignore
            if ( i > 0 && d.value < 10 ) {
                return palette.mediumgray;
            // @ts-ignore
            } else if ( i > 0 && d.value >10 ) {
                return palette.lightgray;
            } else {
                return palette.blue;
            }
        })
        .attr('text-anchor', function(d, i) {
            return 'middle';
        })
        .attr('font-size', function(d, i){
            if (i > 0) {
                    return '.8em';
            } else {
                    return '.9em';    
            }
        }) 

    useEffect(() => {
        if (!svgRef.current || data.nodes.length === 0) return;


    }, [data]);
    


    return (
        <div>
        <svg ref={svgRef} width="1200" height="1200" />
        </div>
    );
};

export default SkillSet;
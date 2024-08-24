// src/components/ForceDirectedGraph.tsx

import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Node, Link, GraphData } from '../utils/types';

const Skills: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [data, setData] = useState<GraphData>({ nodes: [], links: [] });

  useEffect(() => {
    // Initial data
    const initialNodes: Node[] = [
      {"id": "node1", "group": 15},
      {"id": "node2", "group": 2},
      {"id": "node3", "group": 2},
      {"id": "node4", "group": 3},
      {"id": "node5", "group": 3},
    ];

    const initialLinks: Link[] = [
      {"source": "node1", "target": "node3", "value": 1},
      {"source": "node2", "target": "node1", "value": 2},
      {"source": "node1", "target": "node4", "value": 1},
      {"source": "node2", "target": "node5", "value": 1},
      {"source": "node3", "target": "node5", "value": 1},
    ];

    setData({ nodes: initialNodes, links: initialLinks });
  }, []);

  useEffect(() => {
    if (!svgRef.current || data.nodes.length === 0) return;

    const svg = d3.select(svgRef.current);
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    // Clear svg content
    svg.selectAll("*").remove();

    const simulation = d3.forceSimulation(data.nodes)
      .force("link", d3.forceLink<Node, Link>(data.links).id(d => d.id).distance(60))
      .force("charge", d3.forceManyBody().strength(-20).distanceMax(100))
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
      .selectAll("line")
      .data(data.links)
      .enter().append("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", d => Math.sqrt(d.value));

    const node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(data.nodes)
      .enter()
      .append("g");


      node.append("circle")
      .attr("r", function(d){
        return 10 + d.group;
      })
      .attr("fill", function(d) { return d3.schemeCategory10[d.group]; });


    node.append("text")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function(d) { return d.id; })
    .style("font-size", "10px")
    .style("fill", "black");

    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as Node).x!)
        .attr("y1", d => (d.source as Node).y!)
        .attr("x2", d => (d.target as Node).x!)
        .attr("y2", d => (d.target as Node).y!);

      node
        .attr("cx", d => d.x!)
        .attr("cy", d => d.y!);
    });

  }, [data]);



  return (
    <div>
      <svg ref={svgRef} width="800" height="600" />
    </div>
  );
};

export default Skills;
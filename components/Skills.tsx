// src/components/ForceDirectedGraph.tsx

import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import * as d3Drag from "d3-drag";
import { ArrayLike, select, Selection } from "d3-selection";
import { Node, Link, GraphData } from '../utils/types';

const Skills: React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [data, setData] = useState<GraphData>({ nodes: [], links: [] });

    useEffect(() => {
    // Initial data
        const initialNodes: Node[] = [
        {"id": "Frontend", "group": 25},
        {"id": "HTML", "group": 20},
        {"id": "CSS", "group": 20},
        {"id": "HTML5", "group": 15},
        {"id": "CSS3", "group": 15},
        {"id": "Bootstrap", "group": 10},
        {"id": "Tailwind", "group": 10},
        {"id": "PHP", "group": 5},
        {"id": "JS", "group": 5},
        ];

        const initialLinks: Link[] = [
        {"source": "Frontend", "target": "HTML", "value": 1},
        {"source": "Frontend", "target": "CSS", "value": 2},
        {"source": "Frontend", "target": "PHP", "value": 1},
        {"source": "Frontend", "target": "JS", "value": 1},
        {"source": "CSS", "target": "CSS3", "value": 1},
        {"source": "CSS", "target": "Bootstrap", "value": 1},
        {"source": "CSS", "target": "Tailwind", "value": 1},
        {"source": "HTML", "target": "HTML5", "value": 1},
        ];

        setData({ nodes: initialNodes, links: initialLinks });
    }, []);

    let circleDrag = d3Drag.drag<SVGGElement, Node>();

    function dragstarted(this: SVGGElement, event: any, d: Node) {
        // cast d3 event to drag event. Otherwise, d3 event is currently defined as type 'any'
        const e = event as d3Drag.D3DragEvent<SVGGElement, Node, Node | d3Drag.SubjectPosition>;
        e.sourceEvent.stopPropagation();
        select(this).classed("dragging", true);
    }

    function dragged(this: SVGGElement, event: any, d: Node) {
        // cast d3 event to drag event. Otherwise, d3 event is currently defined as type 'any'
        const e = event as d3Drag.D3DragEvent<SVGGElement, Node, Node | d3Drag.SubjectPosition>;
        select(this).attr("cx", d.x = e.x).attr("cy", d.y = e.y);
    }

    function dragended(this: SVGGElement, event: any, d: Node) {
        select(this).classed("dragging", false);
    }


    useEffect(() => {
        if (!svgRef.current || data.nodes.length === 0) return;

        const svg = d3.select(svgRef.current);
        const width = +svg.attr('width');
        const height = +svg.attr('height');

        // Clear svg content
        svg.selectAll("*").remove();

        const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink<Node, Link>(data.links).id(d => d.id).distance(200))
        .force("charge", d3.forceManyBody().strength(-20).distanceMax(100))
        .force("center", d3.forceCenter(width / 2, height / 2));

        const link = svg.append("g")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", d => Math.sqrt(d.value));

        const nodeGroup = svg.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(data.nodes)

        
        
        var nodeEnter = nodeGroup
            .enter()
            .append("g")
            .call(circleDrag
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));


        nodeEnter.append("circle")
            .attr("r", d => 10 + d.group)
            .attr("fill", d => d3.schemeCategory10[d.group % 10])

        nodeEnter.append("text")
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text(d => d.id)
            .style("font-size", "10px")
            .style("fill", "black");

        simulation.on("tick", () => {
        link
            .attr("x1", d => (d.source as Node).x!)
            .attr("y1", d => (d.source as Node).y!)
            .attr("x2", d => (d.target as Node).x!)
            .attr("y2", d => (d.target as Node).y!);

        nodeEnter
        .attr("transform", (d:any) => `translate(${d.x},${d.y})`);
        });

    }, [data]);



    return (
        <div>
        <svg ref={svgRef} width="800" height="600" />
        </div>
    );
};

export default Skills;
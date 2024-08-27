// src/components/ForceDirectedGraph.tsx

import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import * as d3Drag from "d3-drag";
import { ArrayLike, select, Selection } from "d3-selection";
import { Node, Link, GraphData } from '../utils/types';

const Skills: React.FC = () => {
    const svgRef = useRef<SVGSVGElement | null>(null)
    const [data, setData] = useState<GraphData>({ nodes: [], links: [] })
    const [adjacentNodes, setAdjacentNodes] = useState<string[]>()

    useEffect(() => {
    // Initial data
        const initialNodes: Node[] = [
        {"id": "Frontend", "group": 25, "isMain": true},
        {"id": "Backend", "group": 25, "isMain": true},
        {"id": "Fullstack", "group": 25, "isMain": true},
        {"id": "Wordpress", "group": 25, "isMain": true},
        {"id": "Mobile", "group": 25, "isMain": true},

        //Frontend
        {"id": "HTML", "group": 10, "isMain": false},
        {"id": "CSS", "group": 10, "isMain": false},
        {"id": "JavaScript", "group": 5, "isMain": false},
        {"id": "Git", "group": 5, "isMain": false},
        {"id": "Node.js", "group": 5, "isMain": false},
        {"id": "API", "group": 5, "isMain": false},

        //Backend
        {"id": "PHP", "group": 10, "isMain": false},
        {"id": "Python", "group": 10, "isMain": false},
        {"id": "Database", "group": 10, "isMain": false},
        {"id": "Docker", "group": 10, "isMain": false},
        {"id": "Server", "group": 10, "isMain": false},


        //HTML
        {"id": "HTML5", "group": 10, "isMain": false},
        
        //CSS
        {"id": "Responsive", "group": 10, "isMain": false},
        {"id": "CSS3", "group": 10, "isMain": false},
        {"id": "Sass", "group": 10, "isMain": false},
        {"id": "PostCSS", "group": 10, "isMain": false},
        {"id": "Bootstrap", "group": 10, "isMain": false},
        {"id": "Tailwind CSS", "group": 10, "isMain": false},
        {"id": "MaterialUI", "group": 10, "isMain": false},

        //JavaScript
        {"id": "DOM", "group": 10, "isMain": false},
        {"id": "Ajax", "group": 10, "isMain": false},
        {"id": "JQuery", "group": 10, "isMain": false},
        {"id": "React", "group": 10, "isMain": false},
        {"id": "Next.js", "group": 10, "isMain": false},
        {"id": "TypeScript", "group": 10, "isMain": false},


        //Git
        {"id": "Github", "group": 10, "isMain": false},
        {"id": "Gitlab", "group": 10, "isMain": false},

        //Node.js
        

        //API
        {"id": "JWT", "group": 10, "isMain": false},
        {"id": "OAuth", "group": 10, "isMain": false},
        {"id": "RESTFul", "group": 10, "isMain": false},
        {"id": "JSON", "group": 10, "isMain": false},
        {"id": "GraphQL", "group": 10, "isMain": false},


        //Database
        {"id": "MySQL", "group": 10, "isMain": false},
        {"id": "PostgreSQL", "group": 10, "isMain": false},
        {"id": "MongoDB", "group": 10, "isMain": false},


        //Docker
        //{"id": "Github", "group": 10, "isMain": false},


        //Server
        {"id": "Nginx", "group": 10, "isMain": false},
        {"id": "Apache", "group": 10, "isMain": false},

        
        ];

        const initialLinks: Link[] = [
        //{"source": "Frontend", "target": "Backend", "value": 1},
        {"source": "Frontend", "target": "Fullstack", "value": 1},
        {"source": "Frontend", "target": "Wordpress", "value": 1},
        //{"source": "Frontend", "target": "Mobile", "value": 1},

        //{"source": "Backend", "target": "Fullstack", "value": 1},
        {"source": "Backend", "target": "Wordpress", "value": 1},
        //{"source": "Backend", "target": "Mobile", "value": 1},

        {"source": "Fullstack", "target": "Wordpress", "value": 1},
        {"source": "Fullstack", "target": "Mobile", "value": 1},
        
        //Frontend
        {"source": "Frontend", "target": "HTML", "value": 1},
        {"source": "Frontend", "target": "CSS", "value": 1},
        {"source": "Frontend", "target": "JavaScript", "value": 1},
        {"source": "Frontend", "target": "Git", "value": 1},
        {"source": "Frontend", "target": "Node.js", "value": 1},
        {"source": "Frontend", "target": "API", "value": 1},

        //Backend
        {"source": "Backend", "target": "PHP", "value": 1},
        {"source": "Frontend", "target": "Python", "value": 1},
        {"source": "Frontend", "target": "JavaScript", "value": 1},
        {"source": "Frontend", "target": "Git", "value": 1},
        {"source": "Frontend", "target": "Database", "value": 1},
        {"source": "Frontend", "target": "API", "value": 1},
        {"source": "Frontend", "target": "Docker", "value": 1},
        {"source": "Frontend", "target": "Server", "value": 1},

        //HTML
        {"source": "HTML", "target": "HTML5", "value": 1},
        {"source": "HTML", "target": "CSS", "value": 1},

        //CSS
        {"source": "CSS", "target": "Responsive", "value": 1},
        {"source": "CSS", "target": "CSS3", "value": 1},
        {"source": "CSS", "target": "Sass", "value": 1},
        {"source": "CSS", "target": "PostCSS", "value": 1},
        {"source": "CSS", "target": "Bootstrap", "value": 1},
        {"source": "CSS", "target": "Tailwind CSS", "value": 1},
        {"source": "CSS", "target": "MaterialUI", "value": 1},

        //Javascript
        {"source": "JavaScript", "target": "DOM", "value": 1},
        {"source": "JavaScript", "target": "Ajax", "value": 1},
        {"source": "JavaScript", "target": "JQuery", "value": 1},
        {"source": "JavaScript", "target": "React", "value": 1},
        {"source": "JavaScript", "target": "Bootstrap", "value": 1},
        {"source": "JavaScript", "target": "Tailwind CSS", "value": 1},
        {"source": "JavaScript", "target": "MaterialUI", "value": 1},

        //React
        {"source": "React", "target": "Next.js", "value": 1},
        {"source": "React", "target": "TypeScript", "value": 1},

        //Git
        {"source": "Git", "target": "Github", "value": 1},
        {"source": "Git", "target": "Gitlab", "value": 1},

        //Node.js
        //{"source": "Node.js", "target": "TypeScript", "value": 1},

        //API
        {"source": "API", "target": "JWT", "value": 1},
        {"source": "API", "target": "OAuth", "value": 1},
        {"source": "API", "target": "RESTFul", "value": 1},
        {"source": "API", "target": "JSON", "value": 1},
        {"source": "API", "target": "GraphQL", "value": 1},

        //Database
        {"source": "Database", "target": "MySQL", "value": 1},
        {"source": "Database", "target": "PostgreSQL", "value": 1},
        {"source": "Database", "target": "MongoDB", "value": 1},

        //Docker
        //{"source": "Database", "target": "MySQL", "value": 1},
        {"source": "Database", "target": "PostgreSQL", "value": 1},
        {"source": "Database", "target": "MongoDB", "value": 1},

        //Server
        {"source": "Server", "target": "Nginx", "value": 1},
        {"source": "Database", "target": "Apache", "value": 1},

        ];

        let adjlist:string[] = []
   
        initialLinks.forEach(function(d) {
            console.log(d)
            adjlist.push(`${d.source}-${d.target}`)
            adjlist.push(`${d.target}-${d.source}`)
        });

        setData({ nodes: initialNodes, links: initialLinks });
        setAdjacentNodes(adjlist)
    }, []);

    const svg = d3.select(svgRef.current);
        const width = 800;
        const height = 600;
    const getNodeRadius = (d: Node) => 10 + d.group;
    let circleDrag = d3Drag.drag<SVGGElement, Node>();
    let simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink<Node, Link>(data.links).id(d => d.id)
        .distance(d => getNodeRadius(d.source as Node) + getNodeRadius(d.target as Node) + 60))
        .force("charge", d3.forceManyBody().strength(-30).distanceMax(300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .alphaTarget(1);

    function dragstarted(this: SVGGElement, event: any, d: Node) {
        // cast d3 event to drag event. Otherwise, d3 event is currently defined as type 'any'
        const e = event as d3Drag.D3DragEvent<SVGGElement, Node, Node | d3Drag.SubjectPosition>;
        e.sourceEvent.stopPropagation();
        if (!e.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
        select(this).classed("dragging", true);
    }

    function dragged(this: SVGGElement, event: any, d: Node) {
        // cast d3 event to drag event. Otherwise, d3 event is currently defined as type 'any'
        const e = event as d3Drag.D3DragEvent<SVGGElement, Node, Node | d3Drag.SubjectPosition>;
        d.fx = e.x;
        d.fy = e.y;
    }

    function dragended(this: SVGGElement, event: any, d: Node) {
        select(this).classed("dragging", false);
        const e = event as d3Drag.D3DragEvent<SVGGElement, Node, Node | d3Drag.SubjectPosition>;
        if (!e.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    function isAdjacent(a: string, b: string): boolean {
        return a == b || adjacentNodes!.includes(`${a}-${b}`) || adjacentNodes!.includes(`${b}-${a}`);
    }


    useEffect(() => {
        if (!svgRef.current || data.nodes.length === 0) return;
        // Clear svg content
        svg.selectAll("*").remove();

        

        const link = svg.append("g")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", link => (link.source as Node).isMain && (link.target as Node).isMain ? 1 : 0.5)
        .attr("stroke-width", d => Math.sqrt(d.value));

        const nodeGroup = svg.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(data.nodes)

        
        
        var nodeEnter = nodeGroup
            .enter()
            .append("g")
            .style("opacity", (d) => d.isMain ? 1 : 0.5) 
            .call(circleDrag
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));


        let circleNode = nodeEnter.append("circle")
            .attr("r", d => 10 + d.group)
            .attr("fill", d => d3.schemeCategory10[d.group % 10])
            

        

        nodeEnter.append("text")
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text(d => d.id)
            .style("font-size", "10px")
            .style("fill", "black")

        simulation.on("tick", () => {
        link
            .attr("x1", d => (d.source as Node).x!)
            .attr("y1", d => (d.source as Node).y!)
            .attr("x2", d => (d.target as Node).x!)
            .attr("y2", d => (d.target as Node).y!);

        nodeEnter
        .attr("transform", (d:any) => `translate(${d.x},${d.y})`);
        });

        nodeEnter
            .on('mouseover', event => {
                
                //console.log(d3.select(event.target).datum().id)
                const target = event.target
                // @ts-ignore
                var name = d3.select(target).datum().id
                d3.select(target).style("opacity", 1);
                nodeEnter.style("opacity", node => isAdjacent(name, node.id) ? 1 : 0.5);
                
                link.attr("stroke-opacity", node => (node.source as Node).id == name || (node.target as Node).id == name ? 1 : 0.5);
            })
            .on('mouseout', event => {
                nodeEnter.style("opacity", (d) => d.isMain ? 1 : 0.5) ;
                link.attr("stroke-opacity", link => (link.source as Node).isMain && (link.target as Node).isMain ? 1 : 0.5)
            })

    }, [data]);



    return (
        <div>
        <svg ref={svgRef} width="800" height="600" />
        </div>
    );
};

export default Skills;
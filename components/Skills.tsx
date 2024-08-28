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
        {"id": "Frontend", "group": 25, "isMain": true, "color": 11},
        {"id": "Backend", "group": 25, "isMain": true, "color": 11},
        {"id": "Fullstack", "group": 25, "isMain": true, "color": 11},
        {"id": "Wordpress", "group": 25, "isMain": true, "color": 11},
        {"id": "Mobile", "group": 25, "isMain": true, "color": 11},

        //Frontend
        {"id": "HTML", "group": 10, "isMain": false, "color": 9},
        {"id": "CSS", "group": 10, "isMain": false, "color": 9},
        {"id": "JavaScript", "group": 15, "isMain": false, "color": 9},
        {"id": "Git", "group": 15, "isMain": false, "color": 9},
        {"id": "Node.js", "group": 15, "isMain": false, "color": 9},
        {"id": "API", "group": 15, "isMain": false, "color": 9},

        //Backend
        {"id": "PHP", "group": 10, "isMain": false, "color": 8},
        {"id": "Python", "group": 10, "isMain": false, "color": 8},
        {"id": "Database", "group": 10, "isMain": false, "color": 8},
        {"id": "Docker", "group": 10, "isMain": false, "color": 8},
        {"id": "Server", "group": 10, "isMain": false, "color": 8},

        //Wordpress
        {"id": "WP Core", "group": 10, "isMain": false, "color": 7},
        {"id": "Plugin", "group": 10, "isMain": false, "color": 7},
        {"id": "Theme", "group": 10, "isMain": false, "color": 7},

        //iOS
        {"id": "iOS", "group": 10, "isMain": false, "color": 6},
        {"id": "Swift", "group": 10, "isMain": false, "color": 6},
        {"id": "SwiftUI", "group": 10, "isMain": false, "color": 6},
        {"id": "ARKit", "group": 10, "isMain": false, "color": 6},
        {"id": "RealityKit", "group": 10, "isMain": false, "color": 6},
        {"id": "Roomplan", "group": 10, "isMain": false, "color": 6},


        //HTML
        {"id": "HTML5", "group": 10, "isMain": false, "color": 1},
        
        //CSS
        {"id": "Responsive", "group": 10, "isMain": false, "color": 2},
        {"id": "CSS3", "group": 10, "isMain": false, "color": 2},
        {"id": "Sass", "group": 10, "isMain": false, "color": 2},
        {"id": "PostCSS", "group": 10, "isMain": false, "color": 2},
        {"id": "Bootstrap", "group": 10, "isMain": false, "color": 2},
        {"id": "Tailwind CSS", "group": 10, "isMain": false, "color": 2},
        {"id": "MaterialUI", "group": 10, "isMain": false, "color": 2},

        //JavaScript
        {"id": "DOM", "group": 10, "isMain": false, "color": 3},
        {"id": "Ajax", "group": 10, "isMain": false, "color": 3},
        {"id": "JQuery", "group": 10, "isMain": false, "color": 3},
        {"id": "React", "group": 10, "isMain": false, "color": 3},
        {"id": "Next.js", "group": 10, "isMain": false, "color": 3},
        {"id": "TypeScript", "group": 10, "isMain": false, "color": 3},


        //Git
        {"id": "Github", "group": 10, "isMain": false, "color": 4},
        {"id": "Gitlab", "group": 10, "isMain": false, "color": 4},

        //Node.js
        

        //API
        {"id": "JWT", "group": 10, "isMain": false, "color": 5},
        {"id": "OAuth", "group": 10, "isMain": false, "color": 5},
        {"id": "RESTFul", "group": 10, "isMain": false, "color": 5},
        {"id": "JSON", "group": 10, "isMain": false, "color": 5},
        {"id": "GraphQL", "group": 10, "isMain": false, "color": 5},


        //Database
        {"id": "MySQL", "group": 10, "isMain": false, "color": 11},
        {"id": "PostgreSQL", "group": 10, "isMain": false, "color": 11},
        {"id": "MongoDB", "group": 10, "isMain": false, "color": 11},


        //Docker
        //{"id": "Github", "group": 10, "isMain": false},


        //Server
        {"id": "Nginx", "group": 10, "isMain": false, "color": 10},
        {"id": "Apache", "group": 10, "isMain": false, "color": 10},

        
        ];

        const initialLinks: Link[] = [
        /* //{"source": "Frontend", "target": "Backend", "value": 1},
        {"source": "Frontend", "target": "Fullstack", "value": 1, "length": 100},
        {"source": "Frontend", "target": "Wordpress", "value": 1, "length": 100},
        //{"source": "Frontend", "target": "Mobile", "value": 1},

        //{"source": "Backend", "target": "Fullstack", "value": 1},
        {"source": "Backend", "target": "Wordpress", "value": 1, "length": 100},
        //{"source": "Backend", "target": "Mobile", "value": 1},

        {"source": "Fullstack", "target": "Wordpress", "value": 1, "length": 100},
        {"source": "Fullstack", "target": "Mobile", "value": 1, "length": 100}, */
        
        //Frontend
        {"source": "Frontend", "target": "HTML", "value": 1, "length": 50},
        {"source": "Frontend", "target": "CSS", "value": 1, "length": 50},
        {"source": "Frontend", "target": "JavaScript", "value": 1, "length": 50},
        {"source": "Frontend", "target": "Git", "value": 1, "length": 50},
        {"source": "Frontend", "target": "Node.js", "value": 1, "length": 50},
        {"source": "Frontend", "target": "API", "value": 1, "length": 50},

        //Backend
        {"source": "Backend", "target": "PHP", "value": 1, "length": 50},
        {"source": "Backend", "target": "Python", "value": 1, "length": 50},
        {"source": "Backend", "target": "JavaScript", "value": 1, "length": 50},
        {"source": "Backend", "target": "Git", "value": 1, "length": 50},
        {"source": "Backend", "target": "Database", "value": 1, "length": 50},
        {"source": "Backend", "target": "API", "value": 1, "length": 50},
        {"source": "Backend", "target": "Docker", "value": 1, "length": 50},
        {"source": "Backend", "target": "Server", "value": 1, "length": 50},

        //Wordpress
        {"source": "Wordpress", "target": "HTML", "value": 1, "length": 50},
        {"source": "Wordpress", "target": "CSS", "value": 1, "length": 50},
        {"source": "Wordpress", "target": "JavaScript", "value": 1, "length": 50},
        {"source": "Wordpress", "target": "Git", "value": 1, "length": 50},
        {"source": "Wordpress", "target": "API", "value": 1, "length": 50},
        {"source": "Wordpress", "target": "Plugin", "value": 1, "length": 50},
        {"source": "Wordpress", "target": "Theme", "value": 1, "length": 50},
        {"source": "Wordpress", "target": "WP Core", "value": 1, "length": 50},

        //Mobile
        {"source": "Mobile", "target": "iOS", "value": 1, "length": 50},
        {"source": "iOS", "target": "Swift", "value": 1, "length": 50},
        {"source": "Swift", "target": "SwiftUI", "value": 1, "length": 50},
        {"source": "Swift", "target": "ARKit", "value": 1, "length": 50},
        {"source": "Swift", "target": "RealityKit", "value": 1, "length": 50},
        {"source": "Swift", "target": "Roomplan", "value": 1, "length": 50},
        {"source": "Mobile", "target": "Git", "value": 1, "length": 50},
        {"source": "Swift", "target": "API", "value": 1, "length": 50},

        //HTML
        {"source": "HTML", "target": "HTML5", "value": 1, "length": 50},
        {"source": "HTML", "target": "CSS", "value": 1, "length": 50},

        //CSS
        {"source": "CSS", "target": "Responsive", "value": 1, "length": 50},
        {"source": "CSS", "target": "CSS3", "value": 1, "length": 50},
        {"source": "CSS", "target": "Sass", "value": 1, "length": 50},
        {"source": "CSS", "target": "PostCSS", "value": 1, "length": 50},
        {"source": "CSS", "target": "Bootstrap", "value": 1, "length": 50},
        {"source": "CSS", "target": "Tailwind CSS", "value": 1, "length": 50},
        {"source": "CSS", "target": "MaterialUI", "value": 1, "length": 50},

        //Javascript
        {"source": "JavaScript", "target": "DOM", "value": 1, "length": 50},
        {"source": "JavaScript", "target": "Ajax", "value": 1, "length": 50},
        {"source": "JavaScript", "target": "JQuery", "value": 1, "length": 50},
        {"source": "JavaScript", "target": "React", "value": 1, "length": 50},
        {"source": "JavaScript", "target": "Bootstrap", "value": 1, "length": 50},
        {"source": "JavaScript", "target": "Tailwind CSS", "value": 1, "length": 50},
        {"source": "JavaScript", "target": "MaterialUI", "value": 1, "length": 50},

        //React
        {"source": "React", "target": "Next.js", "value": 1, "length": 50},
        {"source": "React", "target": "TypeScript", "value": 1, "length": 50},

        //Git
        {"source": "Git", "target": "Github", "value": 1, "length": 50},
        {"source": "Git", "target": "Gitlab", "value": 1, "length": 50},

        //Node.js
        //{"source": "Node.js", "target": "TypeScript", "value": 1},

        //API
        {"source": "API", "target": "JWT", "value": 1, "length": 50},
        {"source": "API", "target": "OAuth", "value": 1, "length": 50},
        {"source": "API", "target": "RESTFul", "value": 1, "length": 50},
        {"source": "API", "target": "JSON", "value": 1, "length": 50},
        {"source": "API", "target": "GraphQL", "value": 1, "length": 50},

        //Database
        {"source": "Database", "target": "MySQL", "value": 1, "length": 50},
        {"source": "Database", "target": "PostgreSQL", "value": 1, "length": 50},
        {"source": "Database", "target": "MongoDB", "value": 1, "length": 50},

        //Docker
        //{"source": "Database", "target": "MySQL", "value": 1},
        {"source": "Database", "target": "PostgreSQL", "value": 1, "length": 50},
        {"source": "Database", "target": "MongoDB", "value": 1, "length": 50},

        //Server
        {"source": "Server", "target": "Nginx", "value": 1, "length": 50},
        {"source": "Database", "target": "Apache", "value": 1, "length": 50},

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
    const width = 1200;
    const height = 400;
    const getNodeRadius = (d: Node) => 20 + d.group;
    let circleDrag = d3Drag.drag<SVGGElement, Node>();
    let simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links) // @ts-ignore
            .id(d => d.id)
            .distance(d => {
            if ((d.source as Node).isMain && (d.target as Node).isMain) {
                return 100; // Increase distance between main nodes
            }
            return 80;
            })
            .strength(d => {
            if ((d.source as Node).isMain && (d.target as Node).isMain) {
                return 0.1; // Reduce strength for main node links
            }
            return 1;
            }).iterations(1)) // @ts-ignore
        .force("charge", d3.forceManyBody().strength(d => d.isMain ? -1000 : -10).theta(0))
        .force("center", d3.forceCenter(width / 2, height / 2)) // @ts-ignore
        .force("collide", d3.forceCollide().radius(d => getNodeRadius(d) + 10))
        .alphaTarget(0);

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
        .attr("stroke-opacity", link => (link.source as Node).isMain && (link.target as Node).isMain ? 1 : 1)
        .attr("stroke-width", d => Math.sqrt(d.value));

        const nodeGroup = svg.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(data.nodes)

        
        
        var nodeEnter = nodeGroup
            .enter()
            .append("g")
            .style("opacity", (d) => d.isMain ? 1 : 1) 
            .call(circleDrag
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));


        let circleNode = nodeEnter.append("circle")
            .attr("r", d => 30 + d.group)
            .attr("fill", d => d3.schemeSet3[d.color])
            

        

        nodeEnter.append("text")
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")
            .text(d => d.id)
            .style("font-size", "10px")
            .style("fill", "black")

        simulation.on("tick", () => {
            link// @ts-ignore
                .attr("x1", d => Math.max(getNodeRadius(d.source as Node), Math.min(width - getNodeRadius(d.source as Node), d.source.x)))// @ts-ignore
                .attr("y1", d => Math.max(getNodeRadius(d.source as Node), Math.min(height - getNodeRadius(d.source as Node), d.source.y)))// @ts-ignore
                .attr("x2", d => Math.max(getNodeRadius(d.target as Node), Math.min(width - getNodeRadius(d.target as Node), d.target.x)))// @ts-ignore
                .attr("y2", d => Math.max(getNodeRadius(d.target as Node), Math.min(height - getNodeRadius(d.target as Node), d.target.y)));
            
            nodeEnter // @ts-ignore
                .attr("transform", d => `translate(${Math.max(getNodeRadius(d), Math.min(width - getNodeRadius(d), d.x))},${Math.max(getNodeRadius(d), Math.min(height - getNodeRadius(d), d.y))})`);
        });

        nodeEnter
            .on('mouseover', event => {
                
                //console.log(d3.select(event.target).datum().id)
                const target = event.target
                // @ts-ignore
                var name = d3.select(target).datum().id
                d3.select(target).style("opacity", 1);
                nodeEnter.style("opacity", node => isAdjacent(name, node.id) ? 1 : 0.1);
                
                link.attr("stroke-opacity", node => (node.source as Node).id == name || (node.target as Node).id == name ? 1 : 0.1);
            })
            .on('mouseout', event => {
                nodeEnter.style("opacity", (d) => d.isMain ? 1 : 1) ;
                link.attr("stroke-opacity", link => (link.source as Node).isMain && (link.target as Node).isMain ? 1 : 0.1)
            })

    }, [data]);
    


    return (
        <div>
        <svg ref={svgRef} width="1200" height="400" />
        </div>
    );
};

export default Skills;
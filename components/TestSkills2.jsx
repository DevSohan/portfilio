import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { GraphData } from '@/utils/types';


/* Component */
export const TestSkills2 = (props) => {
    /* The useRef Hook creates a variable that "holds on" to a value across rendering
       passes. In this case it will hold our component's SVG DOM element. It's
       initialized null and React will assign it later (see the return statement) */
    const d3Container = useRef(null);
    const data = {
        "nodes":[
            {"id":"node1","group":15},
            {"id":"node2","group":2},
            {"id":"node3","group":2},
            {"id":"node4","group":3},
            {"id":"node5","group":3},
            {"id":"b1","group":3},
            {"id":"b2","group":3},
        
            ],
        "links":[
            {"source":"node1","target":"node3","value":1},
            {"source":"node2","target":"node1","value":2},
            {"source":"node1","target":"node4","value":1},
            {"source":"node2","target":"node5","value":1},
            {"source":"node3","target":"node5","value":1},
            {"source":"b1","target":"node1","value":1},
            {"source":"b1","target":"b2","value":1}
        
        ]
    }

    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
    useEffect(
        () => {
            if (data && d3Container.current) {
                const svg = d3.select(d3Container.current);

                var simulation = d3.forceSimulation(data.nodes)
                .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(60))
                .force("charge", d3.forceManyBody().strength(-20).distanceMax(100))
                .force("center", d3.forceCenter(width / 2, height / 2))
                .alphaTarget(1)
            
                var link = svg.append("g")
                    .attr("class", "links")
                    .selectAll("line")
            
                var node = svg.append("g")
                    .attr("class", "nodes")
                    .selectAll("circle")
                // Enter new D3 elements
                update.enter()
                    .append('text')
                    .attr('x', (d, i) => i * 25)
                    .attr('y', 40)
                    .style('font-size', 24)
                    .text((d) => d);

                // Update existing D3 elements
                update
                    .attr('x', (d, i) => i * 40)
                    .text((d) => d);

                // Remove old D3 elements
                update.exit()
                    .remove();
            }
        },

        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
        [props.data, d3Container.current])

        function restart() {
            node = node.data(data.nodes, function(d) { return d.id;});
            node.exit().remove();
            node = node.enter().append("circle")
                .attr("r", function(d){
                  return 10 + d.group;
                })
                .attr("fill", function(d) { return color(d.group); })
                .merge(node)
                .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended));
          
            link = link.data(data.links, function(d) { return d.source.id + "-" + d.target.id; });
            link.exit().remove();
            link = link.enter()
                      .append("line")
                      .attr('stroke', color("darkgray"))
                      .attr("stroke-width", function(d) { return Math.sqrt(d.value); })
                      .merge(link)
          
            console.log(data.nodes);
          
            simulation
                .nodes(data.nodes)
                .on("tick", ticked);
          
            simulation.force("link")
                .links(data.links);
          
            simulation.on()
          
            simulation.alpha(1).restart();
          
            function ticked() {
              link
                  .transition() // slows down the animation
                  .duration(80)
                  .attr("x1", function(d) { return d.source.x; })
                  .attr("y1", function(d) { return d.source.y; })
                  .attr("x2", function(d) { return d.target.x; })
                  .attr("y2", function(d) { return d.target.y; });
          
              node
                  .transition()
                  .duration(80)
                  .attr("cx", function(d) { return d.x; })
                  .attr("cy", function(d) { return d.y; });
            }
          };
          
          // boiler plate d3 click and drag functions
          function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          }
          
          function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }
          
          function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }

    return (
        <svg
            className="d3-component"
            width={400}
            height={200}
            ref={d3Container}
        />
    );
}
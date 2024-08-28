let graph =[
    {
     "nodes": [
      {
       "id": 1,
       "depth": 0,
       "profileUrl": "https://twitter.com/elonmusk",
       "name": "Elon Musk",
       "followers": "28975364",
       "followings": null,
       "level": 27
      },
      {
       "id": 2,
       "depth": 1,
       "profileUrl": "https://twitter.com/JimBridenstine",
       "name": "Jim Bridenstine",
       "followers": "78258",
       "followings": null,
       "level": 37
      }
     ],
     "links": [
      {
       "source": 1,
       "target": 23
      },
      {
       "source": 1,
       "target": 28
      },
      {
       "source": 1,
       "target": 49
      },
      {
       "source": 1,
       "target": 80
      }
     ]
    }
   ]
   var width = 1000;
   var height = 1000;
   var color = d3.scaleOrdinal(d3.schemeCategory10);
   graph = graph[0];
   var label = {
       'nodes': [],
       'links': []
   };
   
   graph.nodes.forEach(function(d, i) {
       label.nodes.push({node: d});
       label.nodes.push({node: d});
       label.links.push({
           source: i * 2,
           target: i * 2 + 1
       });
   });
   
   var labelLayout = d3.forceSimulation(label.nodes)
       .force("charge", d3.forceManyBody().strength(-50))
       .force("link", d3.forceLink(label.links).distance(0).strength(2));
   
   var graphLayout = d3.forceSimulation(graph.nodes)
       .force("charge", d3.forceManyBody().strength(-3000))
       .force("center", d3.forceCenter(width / 2, height / 2))
       .force("x", d3.forceX(width / 2).strength(1))
       .force("y", d3.forceY(height / 2).strength(1))
       .force("link", d3.forceLink(graph.links).id(function(d) {return d.id; }).distance(50).strength(1))
       .on("tick", ticked);
   
   var adjlist = [];
   
   graph.links.forEach(function(d) {
       adjlist[d.source.index + "-" + d.target.index] = true;
       adjlist[d.target.index + "-" + d.source.index] = true;
   });
   
   function neigh(a, b) {
       return a == b || adjlist[a + "-" + b];
   }
   
   
   var svg = d3.select("#viz").attr("width", width).attr("height", height);
   var container = svg.append("g");
   
   svg.call(
       d3.zoom()
           .scaleExtent([.1, 4])
           .on("zoom", function() { container.attr("transform", d3.event.transform); })
   );
   
   var link = container.append("g").attr("class", "links")
       .selectAll("line")
       .data(graph.links)
       .enter()
       .append("line")
       .attr("stroke", "#aaa")
       .attr("stroke-width", "1px");
   
   var node = container.append("g").attr("class", "nodes")
       .selectAll("g")
       .data(graph.nodes)
       .enter()
       .append("circle")
       .attr("r", function(d){
           let radius = d.level * 1;
           if(radius > 5){
               return radius;
           }
           return 5;
       })
       .attr("fill", function(d) { return color(d.level); })
   
   node.on("mouseover", focus).on("mouseout", unfocus);
   
   node.call(
       d3.drag()
           .on("start", dragstarted)
           .on("drag", dragged)
           .on("end", dragended)
   );
   
   var labelNode = container.append("g").attr("class", "labelNodes")
       .selectAll("text")
       .data(label.nodes)
       .enter()
       .append("text")
       .text(function(d, i) { 
               return i % 2 == 0 ? "" : d.node.name;
               //return d.node.name
           
            })
       .style("fill", "#555")
       .style("font-family", "Arial")
       .style("font-size", 12)
       .style("pointer-events", "none"); // to prevent mouseover/drag capture
   
   node.on("mouseover", focus).on("mouseout", unfocus);
   
   function ticked() {
   
       node.call(updateNode);
       link.call(updateLink);
   
       labelLayout.alphaTarget(0.3).restart();
       labelNode.each(function(d, i) {
           if(i % 2 == 0) {
               d.x = d.node.x;
               d.y = d.node.y;
           } else {
               var b = this.getBBox();
   
               var diffX = d.x - d.node.x;
               var diffY = d.y - d.node.y;
   
               var dist = Math.sqrt(diffX * diffX + diffY * diffY);
   
               var shiftX = b.width * (diffX - dist) / (dist * 2);
               shiftX = Math.max(-b.width, Math.min(0, shiftX));
               var shiftY = 16;
               this.setAttribute("transform", "translate(" + shiftX + "," + shiftY + ")");
           }
       });
       labelNode.call(updateNode);
   
   }
   
   function fixna(x) {
       if (isFinite(x)) return x;
       return 0;
   }
   
   function focus(d) {
       var index = d3.select(d3.event.target).datum().index;
       node.style("opacity", function(o) {
           return neigh(index, o.index) ? 1 : 0.1;
       });
       labelNode.attr("display", function(o) {
         return neigh(index, o.node.index) ? "block": "none";
       });
       link.style("opacity", function(o) {
           return o.source.index == index || o.target.index == index ? 1 : 0.1;
       });
   }
   
   function unfocus() {
      labelNode.attr("display", "block");
      node.style("opacity", 1);
      link.style("opacity", 1);
   }
   
   function updateLink(link) {
       link.attr("x1", function(d) { return fixna(d.source.x); })
           .attr("y1", function(d) { return fixna(d.source.y); })
           .attr("x2", function(d) { return fixna(d.target.x); })
           .attr("y2", function(d) { return fixna(d.target.y); });
   }
   
   function updateNode(node) {
       node.attr("transform", function(d) {
           return "translate(" + fixna(d.x) + "," + fixna(d.y) + ")";
       });
   }
   
   function dragstarted(d) {
       d3.event.sourceEvent.stopPropagation();
       if (!d3.event.active) graphLayout.alphaTarget(0.3).restart();
       d.fx = d.x;
       d.fy = d.y;
   }
   
   function dragged(d) {
       d.fx = d3.event.x;
       d.fy = d3.event.y;
   }
   
   function dragended(d) {
       if (!d3.event.active) graphLayout.alphaTarget(0);
       d.fx = null;
       d.fy = null;
   }




   Frontend

HTML - HTML5
CSS - CSS3 - Responsive
JavaScript 
DOM
JSON
AJAX
React.js
PostgresSQL
MySQL
RESTful APIs
JWT Auth
Node.js
Next.js
Bootstrap
Tailwind CSS
Material
Nom
Git
GitHub
Linux



HTML - HTML5
CSS
	Responsive
	CSS3
	Sass
	PostCSS
		Bootstrap
		Tailwind CSS
		MaterialUI

JavaScript
	DOM
	Ajax
		React
		Next.js
		TypeScript

Git
	Github
	Gitlab

Server
	Linux
	Nginx
	Apache

Node.js

API
	JWT
	OAuth
	RESTFul
	JSON
	GraphQL



Backend

PHP
Python
Javascript

Git
	GitHub
	Gitlab
Database
	MySQL
	PostgreSQL
	MongoDB
	
API
	JWT
	OAuth
	RESTFul
	JSON
	GraphQL

Docker
Server
	Nginx
	Apache


Wordpress Developer

HTML
CSS
	SASS
	PostCSS

JavaScript
	JQuery
	Redux
	Ajax
	React
	Restful

PHP
WP Core
	Plugin
	Theme
MySQL



iOS Development

Swift
	SwiftUI
	ARKit
	RealityKit
	Roomplan
React Native

Git
	GitHub
	Gitlab

REST
JSON







var   w = 1000,
      h =  800,
      circleWidth = 5; 
 

var palette = {
      "lightgray": "#E5E8E8",
      "gray": "#708284",
      "mediumgray": "#536870",
      "blue": "#3B757F"
  }

var colors = d3.scale.category20();

var nodes = [
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

var links = [];

for (var i = 0; i < nodes.length; i++){
      if (nodes[i].target !== undefined) { 
            for ( var x = 0; x < nodes[i].target.length; x++ ) 
              links.push({
                  source: nodes[i],
                  target: nodes[nodes[i].target[x]]  
              });
      };
};


var myChart = d3.select('body')
      .append("div")
        .classed("svg-container", true)
      
      .append('svg')
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 1000 800")
        .classed("svg-content-responsive", true)


    var force = d3.layout.force()
        .nodes(nodes)
        .links([])
        .gravity(0.1)
        .charge(-1000)
        .size([w,h]); 

    var link = myChart.selectAll('line') 
        .data(links).enter().append('line')
        .attr('stroke', palette.lightgray)
        .attr('strokewidth', '1');

    var node =  myChart.selectAll('circle')  
        .data(nodes).enter() 
        .append('g') 
        .call(force.drag); 

     
     node.append('circle')
            .attr('cx', function(d){return d.x; })
            .attr('cy', function(d){return d.y; })
            .attr('r', function(d,i){
                  console.log("circle ",d.value,d);
                  if ( i > 0 ) {
                        return circleWidth + d.value; 
                  } else {
                        return circleWidth + 35; 
                  }
            })
            .attr('fill', function(d,i){
                  if ( i > 0 ) {
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


      force.on('tick', function(e){ 
            node.attr('transform', function(d, i){
              return 'translate(' + d.x + ','+ d.y + ')'
            })

          link 
              .attr('x1', function(d){ return d.source.x; }) 
              .attr('y1', function(d){ return d.source.y; })
              .attr('x2', function(d){ return d.target.x; })
              .attr('y2', function(d){ return d.target.y; })
      });


      node.append('text')
            .text(function(d){ return d.name; })
            .attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
            .attr('fill', function(d, i){
              console.log(d.value);
                  if ( i > 0 && d.value < 10 ) {
                        return palette.mediumgray;
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

force.start();



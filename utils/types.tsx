export interface Node extends d3.SimulationNodeDatum {
    id: string;
    group: number;
    isMain: boolean
}

export interface Link extends d3.SimulationLinkDatum<Node> {
    value: number;
}

export type GraphData = {
    nodes: Node[];
    links: Link[];
}

import {
    SimulationNodeDatum,
    SimulationLinkDatum,
  } from "d3-force";
  
interface CustomNode extends SimulationNodeDatum {
    id: string;
    name: string;
}

interface CustomLink extends SimulationLinkDatum<CustomNode> {
    strength: number;
}
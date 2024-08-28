export interface Node extends d3.SimulationNodeDatum {
    id: string
    group: number
    isMain: boolean
    color: number
}

export interface Link extends d3.SimulationLinkDatum<Node> {
    value: number;
    length: number;

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

export interface NewNode extends d3.SimulationNodeDatum {
    name: string,
    target?: Array<number>,
    value?: number
}

export interface NewLink {
    source: NewNode;
    target: NewNode;

}

export type NewGraphData = {
    nodes: NewNode[];
    links: NewLink[];
}
import { Node } from '../models/Node'

export const parser = data => {
    let id = 0;   
    return data.split(',').map(node => new Node( id++, node[0], node[1], node.substring(2)));
}
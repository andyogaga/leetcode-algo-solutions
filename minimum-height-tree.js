/**
 * @param n number of vertices
 * @param edges edges of tree
 */

const findMinimumHeightTree = (n, edges) => {
  let leaves = [];
  let vertices = n;

  let neighbors = {};
  for (const [node1, node2] of edges) {
    neighbors[node1] = neighbors[node1] || [];
    neighbors[node2] = neighbors[node2] || [];

    neighbors[node1].push(node2);
    neighbors[node2].push(node1);
  }
  Object.keys(neighbors).map((node) => {
    if (neighbors[node].length === 1) {
      leaves.push(node);
    }
  });

  while (vertices > 2) {
    vertices -= leaves.length;
    let newLeaves = [];
    for (let i = 0; i < leaves.length; i++) {
      const directNeighbor = neighbors[leaves[i]].pop();
      neighbors[directNeighbor] = neighbors[directNeighbor].filter(
        (node) => node != leaves[i]
      );
      if (neighbors[directNeighbor].length === 1)
        newLeaves.push(directNeighbor);
    }
    leaves = newLeaves;
  }

  return leaves;
};

// console.log(
//   findMinimumHeightTree(5, [
//     [0, 1],
//     [1, 2],
//     [1, 3],
//     [3, 4],
//   ])
// );

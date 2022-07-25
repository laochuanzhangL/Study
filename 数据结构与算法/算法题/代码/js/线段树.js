function buildTree(tree, arr, treeNode, start, end) {
  if (start == end) {
    tree[treeNode] = arr[start]
    return
  } else {
    let mid = (start + end) / 2
    let left_node = treeNode * 2 + 1
    let right_node = treeNode * 2 + 2
    buildTree(tree, arr, left_node, start, mid)
    buildTree(tree, arr, right_node, mid + 1, end)
    tree[treeNode] = tree[left_node] + tree[right_node]
  }
}
function int(){
    
}
let arr = [1, 3, 5, 7, 9, 11]
let tree = [0]
tree.length=1000
buildTree(tree, arr, 0, 0, arr.length - 1)
console.log(tree)

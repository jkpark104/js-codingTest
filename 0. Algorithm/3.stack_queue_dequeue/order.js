function DFS(v) {
  if (v > 7) return
  else {
    DFS(v * 2)
    console.log(v)
    DFS(v * 2 + 1)
  }
}

DFS(1)

// preorder
// inorder
// postorder

function backTracking(res, arr) {
  if (res === 0) {
    console.log(arr)
    return
  }
  
}
function DFS(v) {
  if (!v) return
  DFS(v - 1)
  console.log(v)
}

// 함수 호출 시 STACK FRAME의 정보
// 매개변수, 지역변수, 복귀주소
DFS(3)
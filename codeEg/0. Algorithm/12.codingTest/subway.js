function solution(subway, start, end){
  let answer=0;
  let m=0, n=0;
  for(let e of subway){
      m+=e.length;
      for(let x of e){
          n=Math.max(n, x);
      }
  }
  // console.log(m, n
    // )
  n++;
  let edge=Array.from(Array(m+n), ()=>Array());
  let cost=Array.from(Array(m+n), ()=>Array());
  let baseM = 0;
  for(let e of subway){
      let en=e.length;
      for(let i=0; i+1<en; i++){
          edge[baseM+i].push(baseM+i+1);
          cost[baseM+i].push(0);
          edge[baseM+i+1].push(baseM+i);
          cost[baseM+i+1].push(0);
      }
      for(let i=0; i<en; i++){
          let x=e[i];
          edge[baseM+i].push(m+x);
          cost[baseM+i].push(1);
          edge[m+x].push(baseM+i);
          cost[m+x].push(1);
      }
      baseM+=en;
  }
  console.log(edge)
  console.log(cost)
  let dis=Array.from(Array(m+n), ()=>1000000000);
  let ch=Array.from(Array(m+n), ()=>0);
  let q=[];
  dis[m+start]=0;
  q.push(m+start);
  while(q.length){
      let v=q.shift();
      if(ch[v]===1) continue;
      ch[v]=1;
      for(let i=0; i<edge[v].length; i++){
          let w=edge[v][i];
          let c=cost[v][i];
          if(ch[w]===1) continue;
          if(dis[w]>dis[v]+c){
              dis[w]=dis[v]+c;
              if(c===0) q.unshift(w);
              else q.push(w);
          }
      }
  }
  return (dis[m+end]-2)/2;;
}
console.log(solution([[1,2,3], [2,5]], 1, 5))
// console.log(solution([[1, 2, 3, 4, 5, 6, 7, 8], [0, 11, 10], [3, 17, 19, 12, 13, 9, 14, 15, 10], [20, 2, 21]], 1, 9));
// console.log(solution([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 8]], 1, 10));
// console.log(solution([[0, 1, 2, 3, 4], [1, 12, 13, 14]], 2, 12));
// console.log(solution([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]], 0, 6));
// console.log(solution([[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [1, 6]], 0, 6));
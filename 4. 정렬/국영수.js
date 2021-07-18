const input = `
Junkyu 50 60 100
Sangkeun 80 60 50
Sunyoung 80 70 100
Soong 50 60 90
Haebin 50 60 100
Kangsoo 60 80 100
Donghyuk 80 60 100
Sei 70 70 70
Wonseob 70 70 90
Sanghyun 70 70 80
nsj 80 80 80
Taewhan 50 60 90
`.trim().split('\n')

const n = 12
const data = []

for (i of input) {
  let [a,b,c,d] = i.split(' ')
  data.push([a, parseInt(b), parseInt(c), parseInt(d)])
}

data.sort((a,b) => (b[1]-a[1]||a[2]-b[2]||b[3]-a[3]||a[0]-b[0]))

for (i of data) {
  console.log(i[0])
}
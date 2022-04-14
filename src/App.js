function directions(...args){
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();
  console.log(`${args.length}개의 도시를 운행합니다.`);
  console.log(`${start}에서 출발합니다.`);
  console.log(`${finish}입니다.`);
  console.log(`중간에 ${stops.length} 군데를 들립니다.`);
}
directions(
  "서울",
  "수원",
  "천안",
  "대전",
  "대구",
  "부산"
)
function App() {
  
}
export default App;

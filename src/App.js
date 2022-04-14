// const logCompliment = function(firstName,message){
//   return `${firstName}: ${message}`;
// };

// console.log(logCompliment("펭귄토끼", "아주 멋져요"));
// function logActivity(name="팽귄토끼", activity="힙합"){
//   console.log(`${name}은 ${activity}를 좋아합니다.`);
// }
// logActivity();

// const defaultPerson = {
//   name: {
//     first: "토끼",
//     last: "펭귄"
//   },
//   favActivity: "힙합"
// };
// function logActivity(p=defaultPerson){
//   console.log(`${p.name.first}은(는) ${p.favActivity}를 좋아합니다.`);
// }
// logActivity();

var lordify = function(firstName, land){
  return `${land}의 ${firstName}`;
}

var lordify2= (firstName,land) => `${land}의 ${firstName}`;

console.log(lordify("hello", "브리즈번"));
console.log(lordify("오정원", "시드니"));

function App() {
  
}
export default App;

//useEffect =>특정 코드의 실행을 제한한다.
// => component가 처음 render할때 실행되고
// 다시는 실행되지 않을 function을 넣는다.

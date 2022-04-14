// then 함수: 연쇄 호출하여 프로미스의 결과를 기다림.
// async 함수: 프로미스 다음에 있는 코드 실행하기 전에 프로미스 끝날 때까지 기다리라고 명령 가능

// 아래 코드는 randomuser.me에 대한 요청. 
const getFakePerson = async () => { // await은 getFakePerson을 비동기 함수로 만들어준다.
  try{
  let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
  let {results} = res.json();
  console.log(results);
  }catch(error){
    console.error(error);
  }
};

getFakePerson();

function App() {
  
}
export default App;

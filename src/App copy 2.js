import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  // array 반환: value, modifier function
  // useState(0); => counter값이 0으로 설정됨.
  const [keyword, setKeyword] = useState("");
  // value 값, 두 번째는 value를 modified하는 Function
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // component의 첫 번째 render 시점에 한 번 실행됨.
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
      console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(()=>{
      console.log("I run when 'counter' changes.");
  },[counter]);
  useEffect(()=>{
    console.log("I run when 'counter and keyword' changes.");
},[counter],[keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

//useEffect =>특정 코드의 실행을 제한한다.
// => component가 처음 render할때 실행되고
// 다시는 실행되지 않을 function을 넣는다.

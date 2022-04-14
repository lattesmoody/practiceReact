// 1.
// console.log(fetch("https://api.randomuser.me/?nat=US&results=1"));

// 2. 
// fetch("https://api.randomuser.me/?nat=US&results=1").then (res=>
//   console.log(res.json())
// );

// 3.
fetch("https://api.randomuser.me/?nat=US&results=1")
  .then(res => res.json())
  .then(json => json.results)
  .then(console.log)
  .catch(console.error);

function App() {
  
}
export default App;

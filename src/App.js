const name = "탈락";
const elevation = 9738;
const print = function(){
  console.log(`${this.name} 산의 높이는 ${this.elevation} 피트입니다.`)
};

const funHike = {name, elevation,print};

funHike.print();

function App() {
  
}
export default App;

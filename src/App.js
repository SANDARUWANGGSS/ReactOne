// import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';

const myData=[
  {
    name:"Mahela",
    city:"Galle",
    position:"SE",
    id:1231
  },
  {
    name:"Sanath",
    city:"Matara",
    position:"ASE",
    id:1232
  },
  {
    name:"Sanga",
    city:"Kandy",
    position:"SE",
    id:1233
  },
  {
    name:"Malinga",
    city:"Galle",
    position:"SSE",
    id:1234
  }
]
function App() {
  return (
   <>
    <div>
      React Learning
      <h1>
        Sandaruwan Gamage
      </h1>
      <p>Welcome to React</p>
      {/* <Main/> */}
      {/* Normal Method */}
      {/* {myData.map((ele)=>{
        return <Main name={ele.name} city={ele.city} position={ele.position}/>;
      } */}

      {/* Object Destructuring and using index*/}
      {/* {myData.map(({name,city,position},index)=>{
        return <Main key={index} name={name} city={city} position={position}/>;
      } */}

      {/* using index */}
      {myData.map(({name,city,position,id})=>{
        return <Main key={id} name={name} city={city} position={position}/>;
      }
      )}
    </div>
   </>
    
  );
}

export default App;

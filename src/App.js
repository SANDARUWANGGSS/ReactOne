// import logo from './logo.svg';
import { Fragment, useState } from 'react';
import './App.css';
import Main from './Components/Main';
import myData from './Data/myData';

// const NewBlock =()=>
// {
//   return(<>
//   {
//     myData.map(({name,city,position,id})=>{
//       return <Main key={id} name={name} city={city} position={position}/>;
//     }
//     )
//   }
//   </>
//   )
// }

let myVar = 'Amila';


function App() {
  const [myVar,setMyVar] = useState({name:"Mahela",
  city:"Galle",
  position:"SE",})
  const clickHandle = ()=>
{
  // myVar='Sanda';
  setMyVar({...myVar,
  name:"Malinga",
  city:"Dambulla"
});

setMyDataState([...myDataState,{
    name:"Pathum",
    city:"Kaluthara",
    position:"Cricketer",
    id:1238,
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mahela_Jayawardene_3.JPG/1200px-Mahela_Jayawardene_3.JPG'
}])
  console.log(myVar)
}

 const[myDataState,setMyDataState]=useState(myData);
console.log(myDataState)

  const mainBlock = myDataState.map(({name,city,position,image,id})=>{
    return <Main key={id} name={name} city={city} position={position} image={image}/>;
  }

 

  )
  return (
  //  <>
   <div>
    <div className='main_container'>
      React Learning
      <h1>
        {myVar.name}
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
      {/* {myData.map(({name,city,position,id})=>{
        return <Main key={id} name={name} city={city} position={position}/>;
      }
      )} */}

      <div className='mainBlock_container'>
        {mainBlock}
      </div>
      <br/><br/>
      <button style={{
        fontSize:"12px",
        border:"1px solid red",
        padding:"7px 12px",marginLeft:"600px",
        marginRight:"600px"}} onClick={clickHandle}>Click Me</button>
    </div>
    </div>
  //  </>
    
  );
}

export default App;

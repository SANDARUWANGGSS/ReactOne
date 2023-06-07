// import logo from './logo.svg';
import { Fragment } from 'react';
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

function App() {
  const mainBlock = myData.map(({name,city,position,image,id})=>{
    return <Main key={id} name={name} city={city} position={position} image={image}/>;
  }
  )
  return (
  //  <>
   <div>
    <div className='main_container'>
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
      {/* {myData.map(({name,city,position,id})=>{
        return <Main key={id} name={name} city={city} position={position}/>;
      }
      )} */}

      <div className='mainBlock_container'>
        {mainBlock}
      </div>
    </div>
    </div>
  //  </>
    
  );
}

export default App;

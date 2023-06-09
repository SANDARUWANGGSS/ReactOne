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
  // const [myVar,setMyVar] = useState({name:"Mahela",
  // city:"Galle",
  // position:"SE",})
  const clickHandle = ()=>
{
  setTimeout(()=>{
    setInputVal((pre)=>
    {
      if(pre<1)
    {
      return pre+1
    }
    else if(pre<2)
    {
      return pre+3
    }
    else
    {
      return pre+2
    }
    }
    )
    
    // console.log('Im Logged')
    
  },3000)
  

  // myVar='Sanda';
//   setMyVar({...myVar,
//   name:"Malinga",
//   city:"Dambulla"
// });

// setMyDataState([...myDataState,{
//     name:"Pathum",
//     city:"Kaluthara",
//     position:"Cricketer",
//     id:1238,
//     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mahela_Jayawardene_3.JPG/1200px-Mahela_Jayawardene_3.JPG'
// }])
//   console.log(myVar)
}

//  const[myDataState,setMyDataState]=useState(myData);
 const[inputVal,setInputVal]=useState(0);

 const inputHandle= (event,data)=>
 {
  event.preventDefault()
  console.log(data)
  setInputVal(event.target.value)
 }
// console.log(myDataState)
console.log(inputVal)
// myDataState
  const mainBlock = myData.map(({name,city,position,image,id},index)=>{
    return <Main key={id+index} name={name} city={city} position={position} image={image}/>;
  }
)
  return (
  //  <>
   <div>
    <div className='main_container'>
      React Learning
      <h1>
        {inputVal}
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
        marginBottom:"20px",
        marginRight:"600px"}} onClick={clickHandle}>Click Me</button>
    </div>

        {/* <input 
        style={{border:"1px solid red",fontSize:"14px", padding:"7px", 
        marginLeft:"600px", marginBottom:"20px"}} 

        type="text" 
          placeholder="Type what you want" 
        onChange={(e)=>{
          inputHandle(e,inputVal)
        }}
          /> */}
    </div>
  //  </>
    
  );
}

export default App;

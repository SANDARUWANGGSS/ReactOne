// const name="Sandaruwan";
// const position="SE";

import { Fragment } from "react";

// const myObject = {
//     name:`${name}`,
//     position:`${position}`,
//     city:'Tangalle'
// }

function Main({name,city,image,position})
{
    // console.log(props);
    // const {city}=myObject //Object Destructuring
    // return <div>
    //     This is a main component
    //     <ul>
    //         {/* <li>{props.children}</li> */}
    //         <li>{name}</li>
    //         <li>{city}</li>
    //         <li>{position}</li>
    //         {/* <li>{children}</li> */}
    //     </ul>
    //     </div>

    //Started with return Fragment
    return <div>

        <img src={image?`${image}`:"https://t3.ftcdn.net/jpg/02/80/63/56/360_F_280635610_9lVb6FQNhhG2pYIBaOhhwtSxf4fwQKgQ.jpg"} alt="crdImage"/>
        <div className="mainBlock_details">
            <h3>{!name?'No-Name':`${name}`}</h3>
            <p><span>{city}</span>
            <span>{position}</span>
            </p>
        </div>
    {/* This is a main component
    <ul> */}
        {/* <li>{props.children}</li> */}
        {/* <li>{name}</li>
        <li>{city}</li>
        <li>{position}</li> */}
        {/* <li>{children}</li> */}
    {/* </ul> */}
    </div>

}

export default Main;
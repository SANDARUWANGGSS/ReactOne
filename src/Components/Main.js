// const name="Sandaruwan";
// const position="SE";

// const myObject = {
//     name:`${name}`,
//     position:`${position}`,
//     city:'Tangalle'
// }

function Main({children,name,city,position})
{
    // console.log(props);
    // const {city}=myObject //Object Destructuring
    return <div>
        This is a main component
        <ul>
            {/* <li>{props.children}</li> */}
            <li>{name}</li>
            <li>{city}</li>
            <li>{position}</li>
            {/* <li>{children}</li> */}
        </ul>
        </div>
}

export default Main;
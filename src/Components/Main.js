function Main(props)
{
    return <div>
        This is a main component
        <ul>
            <li>{props.children}</li>
        </ul>
        </div>
}

export default Main;
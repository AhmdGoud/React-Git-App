export  function Header({head = 'from default'}){ // this is called object destructing
    // const thehead = props.head

    const h1style = {
        textAlign: "center",
        backgroundColor: 'red',
        margin: '0 0 10px 0',
        padding: '20px'
    }
    return (
        <div>
            <h1 style={h1style}>{head}</h1>
        </div>
    );
}


export  function Header(){
    const h1style = {
        textAlign: "center",
        backgroundColor: 'red',
        margin: '0 0 10px 0',
        padding: '20px'
    }
    return (
        <div>
            <h1 style={h1style}>First React App For Me</h1>
        </div>
    );
}
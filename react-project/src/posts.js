export function Posts(){
    return(
        <div>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

function Post(){
    const poststyle = {
        padding: '20px',
        width: '400px',
        border: '1px solid black'
    }
    return(
        <div style={poststyle}>
            <h1>this is the post head</h1><br></br>
            <p>this is the post body</p>
        </div>
    );    
}
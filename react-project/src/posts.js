export function Posts(props){
    console.log(props)
    const child = props.children
    return(
        <div style={{padding: '8px'}}>
            <Post head= 'first post in the page' bdy= 'post one body'/>
            <Post head= 'seconed post here in' bdy= 'post two body'/>
            {child}
        </div>
    );
}

function Post(props){
    const poststyle = {
        padding: '20px',
        width: '400px',
        border: '1px solid black'
    }

    const posthead = props.head; // we declared a var hold the value by accessing the key of the object
    const postbody = props.bdy; // the key in the object is the attribute in the html ele
    return(
        <div style={poststyle}>
            <h1>{posthead}</h1><hr></hr>
            <p>{postbody}</p>
        </div>
    );    
}
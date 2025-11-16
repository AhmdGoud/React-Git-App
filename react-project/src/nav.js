import './btnAffect.css'

export function Nav(){
    return(
        <div style={{border: '1px solid red', padding: '20px', width: '200px'}}>
            <Btn btname= 'my button'/>
            <Btn btname= 'click me'/>
        </div>
    );
}

function Btn(props){ // pros works like params
    // console.log(props) // it prints an {Object} keys and values
    return(
        <button onClick={alrt} className="btn" style={{padding: '3px 8px', margin: '20px'}}>{props.btname}</button>
    );
}

function alrt(){
    alert('batooon')
}
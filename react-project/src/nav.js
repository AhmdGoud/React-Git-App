import './btnAffect.css'

export function Nav(){
    return(
        <div style={{border: '1px solid red', padding: '20px', width: '200px'}}>
            <Btn />
            <Btn />
            <Btn />
            <Btn />
        </div>
    );
}

function Btn(){
    return(
        <button className="btn" style={{padding: '3px 8px', margin: '20px'}}>BTN</button>
    );
}
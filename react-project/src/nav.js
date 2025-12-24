export function Nav(){
    return(
        <div 
            style =
                {{border: '1px solid red',
                padding: '20px',
                width: '200px'}}>

            <Btn atr = 'from attribute'>
                btn as xml
            </Btn>
            <Btn>
                <div style={{backgroundColor: 'yellowGreen', width: '100%'}}>
                    another btn as xml
                </div>
            </Btn>
        </div>
    );
}


function Btn({atr, children}){
    return(
        <div style={{margin: '20px', border: '1px solid red'}}>
            {children}
        </div>
    );
}

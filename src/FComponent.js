import React from 'react';

function FComponent( { counter } ) {
    return (
        <div className='App1'>
            <h2>Function Component</h2>
            <h3>{counter}</h3>

            <Fchild counter={counter}/>
        </div>
    );
}

const Fchild =({ counter })=>{
    return(
        <div className='App1'>
            <h2>Function Child Component</h2>
            <h3>{counter}</h3>
        </div>
    )
}
export default FComponent;
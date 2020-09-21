import React from 'react';
import './App.css';
import Info from "./components/Info";
import Data from "./components/Data";

function App() {
    return (
        <div className='wrapper'>
            <div className='main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5 info'>
                            <Info/>
                        </div>
                        <div className='col-sm-7 form'>
                            <Data/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

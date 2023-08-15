import React, { useEffect, useState } from 'react';
let Digitalwatch=()=>{
    let [state,Setstate]=useState({
   currentTime:new Date().toLocaleTimeString()
    });
    useEffect(()=>{
        setInterval(()=>{
            Setstate(()=>({
                currentTime:new Date().toLocaleTimeString()
            }));

        },1000)
    })
    return(
        <React.Fragment>
            <h2>Welcome to Digital Watch</h2>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card shawdow-lg text-center">
                            <div className="card-header bg-warning">
                                <p className="h4">Digital Watch</p>
                                </div>
                                <div className="card-body">
                                    <div>
                                    <h3 className="display-4">{state.currentTime}</h3>
                                    </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Digitalwatch;
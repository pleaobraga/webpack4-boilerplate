import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import index from '../src/index'

ReactDOM.render(
    <BrowserRouter >
            <div className="job" >
                <Switch>
                    <Route path="/" component={index} />
                </Switch>
            </div>
        </BrowserRouter>, 
document.getElementById('root'));
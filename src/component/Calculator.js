import React from 'react'

export default function Calculator() {
  return (
    <div style={{padding : '2px',textAlign: 'center'}}>
        <h1 align = "center">Calculator</h1>
    <div className = "conatiner" style = {{border : 'solid blue', margin: '25px 345px 25px' , backgroundColor: 'blue'}}>
        <div className = "row">
            <div className = "col-md-9">
                <input type = "text" className = "form-control" id = "inp" placeholder = "0" onkeydown = "fun1(event)"/>
            </div>
            <div className = "col-md-3">
                <button className = "form-control" onclick = "click1('c')">Clear</button>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-9">
                <div className  = "row">
                    <div className = "col-md-4">
                        <button onclick = "click1('9')" className = "form-control">9</button>
                    </div>
                    <div className = "col-md-4"><button onclick = "click1('8')" className = "form-control">8</button></div>
                    <div className = "col-md-4"><button onclick = "click1('7')" className = "form-control">7</button></div>
                </div>
                <div className = "row">
                    <div className = "col-md-4"><button onclick = "click1('6')" className = "form-control">6</button></div>
                    <div className = "col-md-4"><button onclick = "click1('5')" className = "form-control">5</button></div>
                    <div className = "col-md-4"><button onclick = "click1('4')" className = "form-control">4</button></div>
                </div>
            </div>
            <div className = "col-md-3">
                <button onclick = "click1('=')" style = {{height : '90px'}} className = "form-control">=</button>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-3"><button onclick = "click1('3')" className = "form-control">3</button></div>
            <div className = "col-md-3"><button onclick = "click1('2')" className = "form-control">2</button></div>
            <div className = "col-md-3"><button onclick = "click1('1')" className = "form-control">1</button></div>
            <div className = "col-md-3"><button onclick = "click1('*')" className = "form-control">*</button></div>
        </div>
        <div className = "row">
            <div className = "col-md-3"><button onclick = "click1('0')" className = "form-control">0</button></div>
            <div className = "col-md-3"><button onclick = "click1('+')" className = "form-control">+</button></div>
            <div className = "col-md-3"><button onclick = "click1('-')" className = "form-control">-</button></div>
            <div className = "col-md-3"><button onclick = "click1('/')" className = "form-control">/</button></div>
        </div>
    </div>
    </div>
  )
}

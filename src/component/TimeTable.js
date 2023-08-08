import React from 'react'
import './style.css'
export default function 
() {
  return (
    <div>
        <h1 align = "center">Time - Table (2CSA)</h1>
    <table style = {{border: '1px solid'}}>
        <tr style = {{width:'1000%'}}>
            <th>DAY</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th rowspan="12" id = "vert">LUNCH</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
        </tr>
        <tr>
            <th rowspan = "2">Monday</th>
            <td rowspan = "2">TC</td>
            <td rowspan = "2">SI</td>
            <td colspan = "2">DSLAB</td>
            <td rowspan = "2">P</td>
            <td rowspan = "2">COA</td>
            <td rowspan = "2">DS</td>
            <td rowspan = "2">DSTL</td>
        </tr>
        <tr>
            <td colspan = "2">COLAB</td>
        </tr>
        <tr>
            <th rowspan = "2">Tuesday</th>
            <td rowspan = "2">DS</td>
            <td rowspan = "2">P</td>
            <td colspan = "2">COLab</td>
            <td rowspan = "2">SI</td>
            <td rowspan = "2">DS</td>
            <td rowspan = "2">COA</td>
            <td rowspan = "2">DSTL</td>
        </tr>
        <tr>
            <td colspan = "2">DSLab</td>
        </tr>
        <tr>
            <th rowspan = "2">Wednesday</th>
            <td rowspan = "2">COA</td>
            <td rowspan = "2">P</td>
            <td rowspan = "2">TC</td>
            <td rowspan = "2">DS</td>
            <td rowspan = "2">DSTL</td>
            <td rowspan = "2">SI</td>
            <td colspan = "2">DSLab</td>
        </tr>
        <tr>
            <td colspan = "2">MP2</td>
        </tr>
        <tr>
            <th rowspan = "2">Thursday</th>
            <td rowspan = "2">P</td>
            <td rowspan = "2">DSTL</td>
            <td rowspan = "2">DS</td>
            <td rowspan = "2">COA</td>
            <td colspan = "2">DSLab</td>
            <td rowspan = "2">TC</td>
            <td rowspan = "2">SI</td>
        </tr>
        <tr>
            <td colspan = "2">DSLAB</td>
        </tr>
        <tr>
            <th rowspan = "2">Friday</th>
            <td rowspan = "2">DS</td>
            <td rowspan = "2">P</td>
            <td rowspan = "2">DSTL</td>
            <td rowspan = "2">SI</td>
            <td rowspan = "2">DSTL</td>
            <td rowspan = "2">COA</td>
            <td colspan = "2">MP2</td>
        </tr>
        <tr>
            <td colspan = "2">DSLAB</td>
        </tr>
    </table>
    </div>
  )
}

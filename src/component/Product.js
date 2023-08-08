import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
let details = [{image : "https://assets.entrepreneur.com/content/3x2/2000/1674516398-ENT-MacBookAir133.jpeg", title : "MacBook Air 2017", Des : "13.3-inch (diagonal) LED-backlit glossy widescreen display with support for millions of colors",rate : 4 } , 

    {image : "https://m.media-amazon.com/images/I/71R-AObyPFL._SL1500_.jpg", title : "HP 255 G8 Notebook PC" , Des : "13.3-inch (diagonal) LED-backlit glossy widescreen display with support for millions of colors",rate: 2} , 
    
    {image : "https://m.media-amazon.com/images/I/51tRMZKn4tL._SL1080_.jpg", title : "Dell Inspiron 7420 2in1 " , Des : "13.3-inch (diagonal) LED-backlit glossy widescreen display with support for millions of colors",rate:4 } , 
    
    {image : "https://m.media-amazon.com/images/I/71k2oJWVmtL._SL1500_.jpg", title : "ASUS ROG Strix Scar 18 ", Des : "13.3-inch (diagonal) LED-backlit glossy widescreen display with support for millions of colors",rate: 5 }];
export default function Product() {
  return (
        <div className='container mt-5'>
            <div className='row'>
            {
                details.map(
                    (obj)=>{
                        return (
                            <div className = 'col-md-3'>
                                <Card style={{ width: '18rem' , height : '500px'}}>
                                        <Card.Img variant="top" src = {obj.image} width = "400" height = "300"/>
                                        <Card.Body>
                                            <Card.Title>{obj.title}</Card.Title>
                                            <Card.Text>
                                                {obj.Des}
                                            </Card.Text>
                                            <Button variant = "primary">Buy Now</Button>
                                            <Rating rating = {obj.rate}/>
                                        </Card.Body>
                                    </Card>
                            </div>
                        )
                    }
                )
            }
            </div>
        </div>
  );
}
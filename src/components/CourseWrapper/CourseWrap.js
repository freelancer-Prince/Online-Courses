import React, { useState } from 'react';
import style from './CourseWrap.css';
import Course from '../Course/Course';
import fakeData from '../../fakeData/index';

const CourseWrap=()=>{
    const fakeData12=fakeData;
    console.log(fakeData12[0].name)
    const [courses, setCourses]=useState(fakeData12);
    const [cart, setCart]=useState([])

    //button click handler
    const handleAddCart=(course)=>{
        
        const newCart=[...cart,course];
        setCart(newCart);
    }
     
    //Calculation courses price
    const total=cart.reduce( (total,course)=>total + course.price,0);

    //formate course price
    const grandTotal=(total).toFixed(2)

    return(
        <div className='Wrap'>
            <div className="row">
                <div className="col-md-9 col-lg-9 col-sm-9 col-xl-9 courseWraps">
                   <div className="course-title ml-2">
                    <strong>All Courses</strong>
                   </div>                 
                    
                        {
                            courses.map(course=><Course course={course} handleAddCart={handleAddCart}></Course>)
                        }                 
                    
                </div>
                <div className="col-md-3 col-lg-3 col-sm-3 col-xl-3 cartWrap p-2">
                    <small><strong>Order summery</strong></small>
                    <p><strong>Count:{cart.length}</strong></p>
                    <p><strong>SubTotal:{grandTotal}</strong></p>
                    <p><strong>Total:{grandTotal}</strong></p>
                    <button className='cart-info'>cart info</button>                   
                </div>
            </div>
        </div>
    )
}
export default CourseWrap;
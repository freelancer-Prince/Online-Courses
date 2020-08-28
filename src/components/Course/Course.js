import React from 'react';
import style from './Course.css';

const Course=(props)=>{
    console.log(props)
    const {name,img,price,}=props.course;
    const handleAddCart=props.handleAddCart;

    return(
        <div className='course container'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-lg-10 course">
                     {/* <img src="" alt=""/> */}
                     <p className='highlight'>{name}</p>
                    <p><strong className='highlight'>${price}</strong></p>
                    <button onClick={()=>handleAddCart(props.course)} className='btn-enroll'>Enroll Now</button>
                </div>
            </div>
        </div>
    )
}

export default Course;
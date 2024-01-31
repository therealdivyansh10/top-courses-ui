import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {

  let category = props.category
  let courses = props.courses;

  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses(){
    if(category === "All"){    
      let allCourses = [];
      Object.values(courses).forEach(data => {
        data.forEach(courseData => {
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }else{
      // main sirf specific category ka data pass karunga 
      return courses[category];
    }
  };

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
         getCourses().map(course => (
          <Card key={course.id} course = {course} likedCourses= {likedCourses} setLikedCourses = {setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards

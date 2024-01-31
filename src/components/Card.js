import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {

  let course  = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses ;

  function clickHandler(){
    // logic
    if(likedCourses.includes(course.id)){
      // pehle se pada hua hai
      setLikedCourses((prev) => prev.filter((cid) =>(cid) !== course.id))
      toast.warning("like removed")
    } 
    // pehle se like nahi hai ye course
    // insert krna hai ye course like courses se 
    else{
      if(likedCourses.likedCourses==0){
        setLikedCourses([course.id])
      }else{
        // already non empty  
        setLikedCourses((prev) => [...prev ,course.id])
      }
      toast.success("Liked...")
    }
  }

  return (
    <div className='w-[300px] bg-bgDark  bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url}/>
        <div className='w-[30px] bg-white rounded-full absolute right-2 bottom-3
        grid place-items-center'>
        <button onClick={clickHandler}>
          {
            !likedCourses.includes(course.id)?(<FcLikePlaceholder fontSize="1.75rem"/>):(<FcLike fontSize="1.75rem"/>)
          }
        </button>
      </div> 
      
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
        {
          course.description.length>100?(course.description.substr(0,100)+"..."):(course.description)
        }
        </p>
      </div>
 
      </div>     
    </div>
  )
}

export default Card

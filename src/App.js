import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import Filter from "./components/Filter";
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {

  const [courses,setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title)


  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      // output -> response
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network issue");
    }
    setLoading(false);
  }  


  useEffect(() => {
    fetchData();
  },[])


  return (
    <div className="bg-bgDark min-h-screen flex-col">
      <div>
        <Navbar/>
      </div>

     <div className="bg-bgDark">
     <div>
        <Filter filterData={filterData}
          category= {category}
          setCategory = {setCategory}
        />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center item-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category= {category}/>) 
        }
      </div>
     </div>

    </div>
  )
};

export default App;

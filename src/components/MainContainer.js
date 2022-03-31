import React,{useEffect,useState} from 'react'
import "../components/MainContainer.css";
import patterDivider from "../assets/pd-desktop.svg";
import dice from "../assets/icon-dice.svg";
import axios from 'axios';
const MainContainer = () => {

    const [advice,setAdvice] = useState({});
    const [isLoading,setIsLoading] = useState(false);

    const fetchAPI = async ()=>{
      const res = await axios.get("https://api.adviceslip.com/advice");
      if(res.data)
      {
      setAdvice(res.data);
      setIsLoading(true);
      }
     
     
      };

      const adviceHandler =()=>{

       fetchAPI();

      };

    useEffect(()=>{
        fetchAPI();
    },[]);

  return (
    <>
   {isLoading && (
     
            <div className='mainContainer'>
                <div className='adviceContainer'>
                    <h1 className='adviceId'>ADVICE #{advice.slip.id || 117}</h1>
                    <p className='advice'>"{advice.slip.advice || "Hello" }"</p>
                    <img className="divider" src={patterDivider} alt="patterDivider"/>
                </div>
                <button className='btn'type='button' ><img src={dice} className="dice" onClick={adviceHandler}></img></button>
            </div>
   )}
   </>
  )
}

export default MainContainer;
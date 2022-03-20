import React,{useEffect,useState,useCallback} from 'react'
import "../components/MainContainer.css";
import patterDivider from "../assets/pd-desktop.svg";
import dice from "../assets/icon-dice.svg";
import axios from 'axios';
const MainContainer = () => {

    const [advice,setAdvice] = useState(null);

    useEffect(()=>{

        const fetchAPI = async ()=>{
        const res = await axios.get("https://api.adviceslip.com/advice");
        console.log(res.data);
        setAdvice(res.data);
        };

        fetchAPI();

        // adviceHandler();

    },[]);
  return (
    <div className='mainContainer'>
        <div className='adviceContainer'>
            <h1 className='adviceId'>ADVICE #117</h1>
            <p className='advice'>"When you're at a concert or event, enjoy the moment, enjoy being there. Try leaving your camera in your pocket."</p>
            <img className="divider" src={patterDivider} alt="patterDivider" />
        </div>
        <button className='btn'type='button' ><img src={dice} className="dice"></img></button>
    </div>
  )
}

export default MainContainer
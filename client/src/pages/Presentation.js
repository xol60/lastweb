import { StrictMode } from "react";

import React,{useState} from 'react';
import Header from '../components/Presentation/Detail/Header'
import Step from '../components/Presentation/Detail/List'
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import {getSliders} from '../redux/actions'
import { slidersState$ } from '../redux/selectors';

function Presentation(){
    const dispatch = useDispatch();
    const [id,setId]=useState("63be8adef830870dfb11548a");
    const sliders = useSelector(slidersState$);
    React.useEffect(() => {
      dispatch(getSliders.getSlidersRequest());
      console.log(sliders);
    }, [dispatch]);
    return (
        <div className="App" >
   
    </div>

    )
}
export default Presentation
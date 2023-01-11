import { StrictMode } from "react";

import React,{useState} from 'react';
import Header from '../components/Presentation/Detail/Header'
import Step from '../components/Presentation/Detail/List'

import { useDispatch, useSelector } from 'react-redux';
import {getSliders} from '../redux/actions'
import { slidersState$ } from '../redux/selectors';

function Presentation(){
    const dispatch = useDispatch();
    const [id,setId]=useState("63be8adef830870dfb11548a");
    const sliders = useSelector(slidersState$);
    React.useEffect(() => {
      dispatch(getSliders.getSlidersRequest());

    }, [dispatch]);
    console.log(sliders);
    return (
        <div className="App" >
          <Header></Header>
          <div className="container">
            <Step currentIndex={3}/>
            </div>
    </div>

    )
}
export default Presentation
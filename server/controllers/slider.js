import {Slider} from'../models/Slider.js'
export const getSliders=async (req,res)=>{
    try {
        const sliders=await Slider.find();
        res.status(200).json(sliders);
        
    } catch (err) {
        res.status(500).json({error:err});
    }
  }
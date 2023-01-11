export function deleteG(datas,data){
    let x;
    
    for(let i=0;i<datas.length;i++)
    {
        
        
        

        if(datas[i]._id==data[0]._id)
        {
            x=i
        }

    }
    
   datas.splice(x,1);
    return datas;
    
}
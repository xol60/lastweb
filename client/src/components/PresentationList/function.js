export function check(datas,id)
{
    let list=[];
    for(let i=0;i<datas.length;i++)
    {
    

        if(datas[i].id_group==id)
        {
            list.push(datas[i])
        }

    }
    return list;
    
}
export function checkM(members,data)
{
    let list=[];
    
    

        for(let j=0;j<members.length;j++)
        {
            if(members[j].id_group==data.id)
            {
                list.push(members[j])
            }

        }

    
    return list
    
}
export function candeleteM(members,id_customer,id_group)
{
    for(let i=0;i<members.length;i++)
    {
        if(id_customer===members[i].id_customer&&id_group===members[i].id_group&&members[i].role==='Owner')
        {
            return true
        }

    }
    return false;
}
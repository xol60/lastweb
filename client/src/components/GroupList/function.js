export function checkF(groups,id,members)
{
    let list=[];
    for(let i=0;i<groups.length;i++)
    {
    

        for(let j=0;j<members.length;j++)
        {
            if(groups[i]._id===members[j].id_group && members[j].id_customer===id)
            {
                list.push(groups[i]);
            }

        }

    }
    return list
    
}
export function canDelete(members,id,group_id)
{
    for(let i=0;i<members.length;i++)
    {
        if(members[i].id_customer===id && group_id===members[i].id_group && members[i].role=='Owner')
        {
            return true;
        }
    }
    return false;
}
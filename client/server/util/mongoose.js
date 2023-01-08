export function check(datas,username,email)
{
    for(let i=0;i<datas.length;i++)
    {
    

        if(datas[i].username==username||datas[i].email==email)
        {
            return false
        }

    }
    return true

}
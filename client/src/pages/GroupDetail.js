import React from 'react';
import { Grid,Card,CardHeader,Avatar,Link,IconButton,Container } from '@mui/material';
import './styles.css'


import Header from '../components/Header';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';

function GroupDetail() {

    const navigate = useNavigate();
    let id=useParams()


    const goToMembers= () => {
      navigate(`/${id.id}/members`);
    };
    const goToPresentations= () => {
        navigate(`/${id.id}/presentations`);
      };

  return (
  
      
    
    
    <div className="app">
      <Header></Header>
      <Container maxWidth='lg' >
   
      <Grid container spacing={2} alignItems='stretch'>
      
        <Grid  item xs={12} sm={12}>
        <Card>
      
            <CardHeader style={{backgroundColor: "white"}}
        
                         title={<Link underline='hover' color='black' onClick={goToMembers}   variant='h4' >Members</Link>}
        
        
       
       
/>
      </Card>
      <Card>
            <CardHeader style={{backgroundColor: "black"}}
        
                        title={<Link underline='hover' color='white' onClick={goToPresentations}   variant='h4' >Presentations</Link>}/>
        </Card>
    
          
        </Grid>
      
    </Grid>
    </Container>
    </div>
  );
}
export default GroupDetail;
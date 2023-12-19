import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import { fetchData } from '../../Redux/Slices/UserDetail';
import { useNavigate } from 'react-router-dom';
function MyCard(props) {
  const userData = useSelector((state) => state.userDetail);
   const navigate=useNavigate();
   console.log(userData);
  const userId=(userData.value._id);
  console.log(userData.value);
  console.log(userId)
 
  let[isEditing,setEditing]=useState(false);
  let[prevTitle,setTitle]=useState(userData.value.name);
  let [prevUserId,setPrevUserId]=useState(userData.value.email);
 let [prevLocation,setPrevLocation]=useState(userData.value.address.city+" ,"+userData.value.address.state);
//  if(userData.value!=='')
//  {
//   setPrevLocation(userData.value.address.city+" ,"+userData.value.address.state);
//  }
  
  const Update=(id)=>{
    setEditing(!isEditing);
    props.onUpdate(id);
  }

  return userId===undefined?navigate ('/signin'): (
    <Card style={{ width: '18rem',border:"2px solid black",padding:"1rem",background:"linear-gradient(to bottom,white,plum, violet,purple)" }}>
      <Card.Body>
        <Card.Title>{isEditing?<textarea value={prevTitle} onChange={(e)=>setTitle(e.target.value)}/>:prevTitle}</Card.Title>
        <Card.Text>
         {isEditing?<textarea value={prevUserId} onChange={(e)=>setPrevUserId(e.target.value)}/>:prevUserId}
        </Card.Text>
        <Card.Text>
         {isEditing?<textarea value={prevLocation} onChange={(e)=>setPrevLocation(e.target.value)}/>:prevLocation}
        </Card.Text>
        <Button onClick={()=>Update(props.id)} className='button update' style={{backgroundColor:"white",color:"black"}}>{isEditing?'Save':'Update'}</Button>
       
      </Card.Body>
    </Card>
  );
}

const Profile=()=>{
     let[data,setdata]=useState([]);
     
     useEffect(()=>{
      getData();
  },[])

  const getData=async()=>{
    
     const json={name:"",email:""};
     
     setdata(json);
   }

const handleUpdate=(id)=>{
  console.log('update');
}
   
    return data.length==0?<h1>Loading...</h1>: (
        <>
        
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap", gap:"5rem"}}>
       
        <MyCard name={data.name} email={data.email} onUpdate={handleUpdate}/>
        
        </div>
        </>
    )
     }

export default Profile;

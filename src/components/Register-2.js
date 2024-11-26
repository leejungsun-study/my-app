import {useState} from 'react';
//간단한 회원관리 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개


 const Register2 = ()=>{
    const [input, setInput] =useState({
      name:"",
      birth:'',
      country:'',
      bio:'',
    });

    const onChange = (e)=>{
      console.log(e.target.name, e.target.value)
      setInput({
        ...input,
        [e.target.name] : e.target.value,
      });
    };
       
    
  return (
    <>
  <div>
    <input name="name"  type="text" placeholder={"이름"}
     onChange={onChange}/> 

   </div>
   <div>  
    <input name="birth" value={input.birth} type="date" onChange={onChange}></input>
     
  </div>
  <div>
    <select name="country" value={input.country} onChange={onChange}>
      <option value=""></option>
      <option value="kr">한국</option>
      <option value="us">미국</option>
      <option value="uk">영국</option>
    </select>
   
  </div>
  <div>
    <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
    
  </div>
  </>
  )
}

export default Register2;
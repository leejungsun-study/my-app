import {useState} from 'react';
//간단한 회원관리 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개


 const Register = ()=>{
    const [name, setName] = useState('이름');
    const [birth, setBirth] = useState('');
    const [contry, setCountry] = useState('');
    const [bio, setBio] = useState('');

    const onChangeName = (e) =>{
     setName(e.target.value);
    }
    const onChangeBirth = (e) =>{
      setBirth(e.target.value);
     }
     const onChangeCountry = (e) =>{
      setCountry(e.target.value);
     }

     const onChangeBio = (e) =>{
      setBio(e.target.value);
     }


  return (
    <>
  <div>
    <input value={name} type="text" placeholder={"이름"}
     onChange={onChangeName}/> 

   </div>
   <div>  
    <input type="date" onChange={onChangeBirth}></input>
     
  </div>
  <div>
    <select onChange={onChangeCountry}>
      <option value=""></option>
      <option value="kr">한국</option>
      <option value="us">미국</option>
      <option value="uk">영국</option>
    </select>
    {/* {value} */}
  </div>
  <div>
    <textarea onChange={onChangeBio}></textarea>
    {/* {text} */}
  </div>
  </>
  )
}

export default Register;
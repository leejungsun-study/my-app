import {useState,useRef,useEffect} from 'react';




const Ref = () => {
  
 
  const [value, setValue] = useState();
  const refCount = useRef(0);
  useEffect(()=>{
    refCount.current++;
  })
  const onChange = (e)=>{
       setValue(e.target.value);
     
  } 








  return (
    <>
     <input type="text" onChange={onChange}
       value={value}
     
     ></input>
     {value}
     { <h1>횟수 :{refCount.current} </h1> }

    </>
  )
}

export default Ref;
import {useState} from 'react';


//3가지 hook 관련된 팁
//1. 함수 컴포턴트, 커스텀 훅 내부에서만 호출 가능
//2. 조건부로 호출될수는 없다. (조건, 반복 안됨)
//3. 나만의 훅(커스텀 훅)을 직접 만듬.(use만 붙이면 됨)
// 커스텀 훅을 다른 폴더로 이동해서 불러다 씀
function useInput() {
  const [input, setInput] = useState(''); 

  const onChange = (e)=> {
    setInput(e.target.value)
  };
  return [input, onChange]
}


const HookExam = ()=> {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

 return(
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
 ) 
}

export default HookExam;
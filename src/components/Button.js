import '../App.css';
import cut1 from "../img/shortcut1.png";
const Button = ({text, color,children})=> {
 
   const ss = ()=>{
    console.log(text)
   }
  return(
   
    <> 
    <button 
     onClick={ss}
    style={{color :color}}>{text}- {color}
    {children}
    </button>
    <br></br>
    {/* <img src={cut1}/> */}
   

    </>
   
  )
}
Button.defaultProps = {
    text : "00",
    color: "black",
}

export default Button;
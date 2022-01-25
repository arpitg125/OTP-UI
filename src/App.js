import Phone from "./components/Phone";
import {useState} from 'react';
function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <main>
      <button onClick={()=>setButtonPopup(true)} className='btn-primary'>Phone Verification</button>
      <Phone trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2>Phone Verification</h2>
        <br />
        <div className="otp">
        <p>Enter the OTP you received on 89206-6XXXX</p>
        </div>
        <br />
        <div className="u-inp">
        <input maxLength={1} id="n1" autoFocus 
          onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();} } } 
          onKeyUp={(event)=> {if(/[0-9]/.test(event.key)){document.getElementById("n2").focus();} if(/[/backspace]/.test(event.key)){document.getElementById("n1");}else if(/[right arrow]/.test(event.key)){document.getElementById("n2").focus();}}}/>
        <input maxLength={1} id="n2" 
          onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
          onKeyUp={(event)=> {if(/[0-9]/.test(event.key)){document.getElementById("n3").focus();} if(/[/backspace]/.test(event.key)){document.getElementById("n1").focus();}else if(/[right arrow]/.test(event.key)){document.getElementById("n3").focus();}}}/>
        <input maxLength={1} id="n3" 
          onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();} }} 
          onKeyUp={(event)=> {if(/[0-9]/.test(event.key)){document.getElementById("n4").focus();} if(/[/backspace]/.test(event.key)){document.getElementById("n2").focus();}else if(/[right arrow]/.test(event.key)){document.getElementById("n4").focus();}}}/>
        <input maxLength={1} id="n4" 
          onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} 
          onKeyUp={(event)=> {if(/[0-9]/.test(event.key)){document.getElementById("n5").focus();} if(/[/backspace]/.test(event.key)){document.getElementById("n3").focus();}else if(/[right arrow]/.test(event.key)){document.getElementById("n5").focus();}}}/>
        <input maxLength={1} id="n5" 
          onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} 
          onKeyUp={(event)=> {if(/[0-9]/.test(event.key)){document.getElementById("n6").focus();} if(/[/backspace]/.test(event.key)){document.getElementById("n4").focus();} else if(/[right arrow]/.test(event.key)){document.getElementById("n6").focus();}}}/>
        <input maxLength={1} id="n6" 
          onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();} }} 
          onKeyUp={(event)=> {if(/[0-9]/.test(event.key)){document.getElementById("submit").focus();} if(/[/backspace]/.test(event.key)){document.getElementById("n5").focus();}else if(/[right arrow]/.test(event.key)){document.getElementById("n1");}}}/>
        </div>
        <br />
        <div className="otpx">
           <p>Change Number</p>
          <p>Re-Send OTP</p></div>
          <br />
         <button className="btn-x" id="submit"> Verify Phone Number</button>
         <br />
         <br />
      </Phone>
      </main>
    </div>
  );
}

export default App;

import React,{useState}  from "react";
import "./index.css"
const App=()=>{
   
     const handleSubmit=(e)=>{
          console.log(name)
          console.log(password)
          console.log(email)
          console.log(mob)
          console.log(gender)
          
          
     };
const[name,setName]=useState("")
const[password,setPassword]=useState("")

const[address,setAddress]=useState("")

const[email,setEmail]=useState("")

const[mob,setMob]=useState("")

const [gender,setGender]=useState('')

return<div>
         <div className="maindiv">
     <div className="innerdiv">
          <h1 className="form">
          
          </h1>
          
           <div>
                <label className="name">Name</label><br></br>
                <input className="label" type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)}/>
           </div>

           <div>
                <label className="name">Password</label><br></br>
                <input  className="label"type="pwd" name="pwd" id="pwd"onChange={(e)=>setPassword(e.target.value)}/>
           </div>

           <div>
                <label className="name">Address</label><br></br>
                <input  className="label" type="address" name="address" id="address"onChange={(e)=>setAddress(e.target.value)}/>
           </div>

           <div>
                <label className="name">Email</label><br></br>
                <input  className="label"type="email" name="email" id="email"onChange={(e)=>setEmail(e.target.value)}/>
           </div>

           <div>
                <label className="name">Mob</label><br></br>
                <input  className="label"type="tel" name="phone" id="phone"onChange={(e)=>setMob(e.target.value)}/>
           </div>

           <div >
                 <label className="name">Gender</label><br></br>
                 <input  className="label"type="radio" id="male" name="fav_language" value="male" onChange={(e)=>setGender(e.target.value)}/>
                 <label className="name">Male</label>
                 <input className="label" type="radio" id="female" name="fav_language" value="female" onChange={(e)=>setGender(e.target.value)}/>
                 <label className="name">Female</label>
           </div>

           <div>
                <label className="name">Country</label><br></br>
                <select className="label" >
                        <option value="">INDIA</option>
                        <option value="">CHINA</option>
                        <option value="">AUSTRALIA</option>
                        <option value="">ENGLAND</option>
                </select>
           </div>
           <button onClick={handleSubmit}>Submit</button>
           
        
     </div>
     
          </div>
          
      </div>
}
export default App;

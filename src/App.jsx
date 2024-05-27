import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const data = [
    {
    id:"name",
    label:"Name",
    inputType:"text",
    buttonName:"Next",
    placeholder:"Enter the Name"
    },
    {
      id:"email",
      label:"Email",
      inputType:"email",
      buttonName:"Next",
      placeholder:"Enter the Email"
      },
      {
        id:"dob",
        label:"DOB",
        inputType:"date",
        buttonName:"Next",
        placeholder:"Enter the DOB"
        },
        {
          id:"password",
          label:"Password",
          inputType:"password",
          buttonName:"Submit",
          placeholder:"Enter the Password"
          },

  ]
  const [index, setIndex] = useState(0)
  const [form,setForm] = useState(data)
  const [isSubmitted,setSubmitted] = useState(false)
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    dob:'',
    password:''
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(index===form.length-1){
      setSubmitted(true)
      console.log(index,"index value","submit form")
    }
    else{
    setIndex((prev)=>prev+1)
    }
    
  }
  const handleInputChange =(e)=>{
    const copyFormData ={...formData}
    const {id} = e.target
    const {name,value} = e.target
    console.log(value)
    copyFormData[name]=value
    setFormData(copyFormData)
   

  }
  console.log(formData)


  return (
    <div className='App'>
     
    {! isSubmitted &&<form onSubmit={handleSubmit} className='container'>
      {!index==0 && <p 
      style={{
        cursor:"pointer"
      }}
      onClick={()=>{
        setIndex((prev)=>prev-1)
      }}>{`<back`}</p>}
        <label htmlFor="">{form[index].label}</label>
        <input
        required
        value={formData[form[index].id]}
        name={form[index].id}
        type={form[index].inputType}
        placeholder={form[index].placeholder}
        onChange={(e)=>{
          handleInputChange(e)

        }}
        />
    
        <button type='step'>{form[index].buttonName}</button>
      </form>}
     {isSubmitted &&<div>
        <h1>Form Sucessfully submitted</h1>
        <hr />
        <b>name:{formData.name}</b>
        <br />
        <b>email:{formData.email}</b>
        <br />
        <b>email:{formData.dob}</b>
        <br />
        <b>email:{formData.password}</b>
        <br />



      </div>}
    
     
    </div>
  )
}

export default App

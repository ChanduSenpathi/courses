import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUsers } from '../config/services';

export default function Form() {
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { name: '', email: '', contact: '',course:"", emailErr: '', titleError: '', contactErr: '' }
    );
    const navigate=useNavigate()
    const addItem=(event)=>{
        const{name,value}=event.target
    setState({...state,[name]:value})
    }
    const validate1=()=>{
        let value=state.name
        let reg=new RegExp('^[A-Za-z]+$')
        if(value===""){
          setState({titleError:"Required"})
          return false
        }else if(!reg.test(value)){
          setState({titleError:"Enter only Alphabets & Spaces not allowed"})
          return false
        }else {
          setState({titleError:""})
          return true
        }
    }
    const validate2=()=>{
        let value=state.email
        let sub=value.substring(value.indexOf('@')+1);
        if(value===""){
        setState({emailErr:"Required"})
        return false
        }else if(!value.includes('@')||sub===''){
        setState({emailErr:"Enter valid Email"})
        return false
        }else {
        setState({emailErr:""})
        return true
        }
    }
    const validate3=()=>{
        let value=state.contact
        let reg=new RegExp('^[0-9]*$')
        if(value===''){
            setState({contactErr:"Required"})
            return false
        }
        else if(!reg.test(value)){
        setState({contactErr:"please Enter valid numbers"})
        return false
        }else{
        setState({contactErr:""})
        return true
        }
    }
    const validate=()=>{
        let sp1=validate1()
        let sp2=validate2()
        let sp3=validate3()
        return sp1&&sp2&&sp3
    }
    const postDetails=(event)=>{
        event.preventDefault()
        let result=validate()
        if(result){
            addUsers(state).then(res=>{
                navigate('/userdetails')
            })
        }
    }
  return (
    <div>
        <h2>Form</h2>
        <form onSubmit={postDetails}>
            <div className='form-group'>
                <label for="nameId">Username</label>
                <input type="text" id='nameId' name='name' className='form-control' onChange={addItem} />
                <p className='text-danger'>{state.titleError}</p>
            </div>
            <div className='form-group'>
                <label for="emailId">Email</label>
                <input type="email" id='emailId' name='email' className='form-control' onChange={addItem}/>
                <p className='text-danger'>{state.emailErr}</p>
            </div>
            <div className='form-group'>
                <label for="contactId">Contact Number</label>
                <input type="number" id="contactId" name='contact' className='form-control' onChange={addItem}/>
                <p className='text-danger'>{state.contactErr}</p>
            </div>
            <div className='form-group mb-4'>
                <label for="courseId">Select Course</label>
                <select className='form-control' id='courseId' name='course' onChange={addItem}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="React JS">React JS</option>
                <option value="Angular JS">Angular JS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Git/Github">Git/Github</option>
            </select>
            </div>
            <input type="submit" value="Submit" className='btn bg-success text-white'/>
        </form>
    </div>
  )
}

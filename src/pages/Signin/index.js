import React, { useState } from 'react'
import api from '../../services/Axios'

export default function Signin(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    
    const submit = async function(event){
        event.preventDefault()    
        const res = await api.post('/signin',{email, password})
        api.defaults.headers.common['AUTHORIZATION'] = `Bearer ${res.data.token}`    
    }
    
    
    return (
        <>
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password"
                className="form-control"
                id="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"/>    
            </div>    
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
        )
        
    }
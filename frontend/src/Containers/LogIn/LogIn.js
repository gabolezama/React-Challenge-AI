import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleOnClick= async (mail, password)=>{
        console.log(mail, password);

        const response = await fetch(`https://admindev.inceptia.ai/api/v1/login/`, {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                "email": mail,
                "password": password
            })
        })
        const log = await response.json()
        console.log(log);
        
        if(log.hasOwnProperty("token")){
            navigate(`/bots/${log.token}`)
        }else{
            alert('Combinación de Mail / Password incorrecto')
        }
    }

    const onChangeText=(value,tag)=>{

        if(tag==='EM'){
            setMail(value)
        }else{
            setPassword(value)
        }
    }

  return (
    <div className="card container" style={{marginTop: 20, borderRadius: 10, width: '20rem', backgroundColor: 'lightgray'}}>
        
        <div className="card-body" style={{ textAlign: 'center'}}>
            <h5 className="card-title">LogIn</h5>
            <label for="exampleFormControlInput1" class="form-label">Ingrese su Mail:</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e)=> onChangeText(e.target.value, 'EM')}/>
            <label for="exampleFormControlInput1" class="form-label">Ingrese su Password</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="contraseña" onChange={(e)=> onChangeText(e.target.value, 'PW')}/>
            <button type="button" class="btn btn-primary" style={{ marginTop: 20}} onClick={()=> handleOnClick(mail, password)}>Entrar</button>
        </div>
    </div>
  )
}

import React,{useState,useEffect} from 'react'

const Users = [{name:'Sarah',age:'20'},
               {name:'Alex',age:20},
               {name:'Michael',age:20}
            ]


export const UserSearch:React.FC =()=>{
    const inputRef = useRef<HTMLInputElement |null>(null);
    const [name,setName] = useState('');
    const [user,setUser]  = useState<{name:string,age:number}|undefined>();

    useEffect (()=>{
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus()
    },[])

    const onClick = ()=>{
        const foundUser = Users.find((user)=>{
            return user.name === name;
        });
    
        setUser(foundUser)
    }

    return(
        <div>
            <h1>Search User</h1>
            <input ref = {inputRef} value = {name} onChange={e=>setName(e.target.value)}/>
            <button onClick={onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    )
}

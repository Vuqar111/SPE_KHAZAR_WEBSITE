import React,{useState} from "react";
import {AiOutlineSearch} from 'react-icons/ai';
export default function SearchBox(props) {
    const [name,setName] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        props.history.push(`/search/name/${name}`)
    }

    const [opensearch,setopensearch] = useState(false)
    const opensearchHandler = () => {
        setopensearch(!opensearch)
    }
    return (
        <form className="search" onSubmit={submitHandler}>
            <div className={opensearch ? 'searchboxdiv open' : 'searchboxdiv'}>
                <input 
                type="text"
                name="q"
                id="q"
                onChange={(e) => setName(e.target.value)}
                ></input>
                <button className="primary" type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <div className={opensearch ? 'ressearch close' : 'ressearch'}  onClick={() => opensearchHandler()} >
              <AiOutlineSearch/>
            </div>
        </form>
    )
}
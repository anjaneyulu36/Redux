import axios from 'axios';
import React,{useState} from 'react';
import {useParams,useLocation,useNavigate} from 'react-router-dom'

function CountryDetails(props){

    var params=useParams();

    const [details,setDetails]=useState({})

    React.useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/name/${params.name}')
        .then((res)=>{
            console.log(res)
            setDetails({...res.data[0]})
        })

    },[params])
    return(
        <div className="mybox">
            <h1>CountryDetails:{details?.name?.common}</h1>
            <button>lets see todolist</button>
        </div>
    )
}

export default CountryDetails
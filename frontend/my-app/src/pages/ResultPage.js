import Result from '../components/Result';
import React, { useState, useEffect} from 'react';
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResultPage = () =>{

  const[result, setResult] = useState([]);
// let state = {
//     result: null
//   }
  const fetchResult = () => {
    let auth = localStorage.getItem("token");
    
    axios.get(`http://localhost:8080/api/test/result`,{
      headers:{
        Accept: "/",
        "Content-Type": "application/json",
        "Token" : auth,
      },
    })
      .then((res)=>{
        console.log(res);
        console.log(res.data.result);
        const hasil = res.data.result;
        setResult(hasil);
        // this.setState({
        //   result: res.data.result
        // })
      });
  };

  console.log(result);
  useEffect(()=> fetchResult(),[]);

  return(
    <>
    <Header />
    <br/><br/>
      {/* {
        result.map((result)=>( */}
          <Result
              fullname={result.fullname}
              highest={result.kategori_tertinggi}
              R = {result.nilai_R}
              I = {result.nilai_I}
              A = {result.nilai_A}
              S = {result.nilai_S}
              E = {result.nilai_E}
              C = {result.nilai_C}
              s1 = {result.saran_1}
              s2 = {result.saran_2}
              s3 = {result.saran_3}
              s4 = {result.saran_4}
              desc = {result.desc}
          />
        {/* ))
      } */}
    <Footer/>
    </>
  )
}

export default ResultPage;
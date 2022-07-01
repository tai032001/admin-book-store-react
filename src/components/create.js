import React, { useState } from "react";
import axios from "axios";
export default function Create(){
    
    // khoi tao gia tri 
    const [id,setID] = useState('');
    const [ten,setTen] = useState('');
    const [theLoai,settheLoai] = useState('');
    const [tacGia,settacGia] = useState('');

    // gan gia tri nhap tu input 
    const postData ={
            id,
            ten,
            theLoai,
            tacGia
    };
    // tao sach moi
    const postApi = () =>{
        axios.post(`https://localhost:7132/api/Sach/Add`,postData)
        .then(res => 
        {  const SachList = res.data;
            alert(`Create success book ${SachList.ten}`) 
            window.location.reload(false);
        }).catch(_error=>{
            alert(_error.response.data);
            window.location.reload(false);
        });   
    }
    // cap nhat thong tin sach
    const updateApi = ()=> {
        axios.put(`https://localhost:7132/api/Sach/Edit`,postData)
        .then(res => 
        {  const SachList = res.data; 
            alert(`Update success book ${SachList.ten}`)
            window.location.reload(false);
        }).catch(_error=>{
            alert(_error.response.data);
            window.location.reload(false);

        });   
    }
    
    return (
        <div>
                <label>ID</label>
                <input type="text"name="ID" 
                onChange={(e)=>setID(e.target.value)}></input>
               
                 <label>Name</label>
                <input type="text"name="Ten" 
                onChange={(e)=>setTen(e.target.value)}></input>
               
                
                <label>Category</label>
                <input type="text"name="TheLoai"
                onChange={(e)=>settheLoai(e.target.value)}></input>
                
               
                <label>Author </label>
                <input type="text"name="TacGia"
                onChange={(e)=>settacGia(e.target.value)}></input>
                <div>
                    <br/>
                    <br/>
                <button type="submit" className="btn btn-light mr-1" onClick={()=> postApi() }>CREATE</button>
                <button type="submit" className="btn btn-light mr-1" onClick={()=> updateApi() }>UPDATE</button>

                </div>
        </div>
    )
}
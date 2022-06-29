import React, { useState } from "react";
import axios from "axios";
export default function Create(){
    
    const [id,setID] = useState('');
    const [ten,setTen] = useState('');
    const [theLoai,settheLoai] = useState('');
    const [tacGia,settacGia] = useState('');

    // console.log(id,ten,theLoai,tacGia);
    // gan gia tri nhap 
    const postData ={
            id,
            ten,
            theLoai,
            tacGia
    };
    const postApi = () =>{
        axios.post(`https://localhost:7132/api/Sach/Add`,postData)
        .then(res => 
            {  const SachList = res.data; 
                console.log(SachList);
                window.location.reload(false);

                // setID(res.data.)
                // this.setState(SachList);
        }).catch(_error=>{
            alert('Sách đã tồn tại');
            window.location.reload(false);
        });   
    }

    const updateApi = ()=> {
        axios.put(`https://localhost:7132/api/Sach/Edit`,postData)
        .then(res => 
        {  const SachList = res.data; 
            console.log(SachList);
            window.location.reload(false);

            // setID(res.data.)
            // this.setState(SachList);
        }).catch(_error=>{
            alert('Sách không tồn tại');
            window.location.reload(false);

        });   
    }
    // const refeshpage= ()=>{
    //     window.location.reload(false);
    // }
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
                    <p></p>
                <button type="submit" className="btn btn-light mr-1" onClick={()=> postApi() }>CREATE</button>
                <button type="submit" className="btn btn-light mr-1" onClick={()=> updateApi() }>UPDATE</button>
                {/* <button type="submit" className="btn btn-light mr-1" onClick={()=> refeshpage() }>UPDATE TABLE</button> */}

                </div>
        </div>
    )
}
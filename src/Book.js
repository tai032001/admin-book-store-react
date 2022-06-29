import React,{Component} from "react";
import axios from 'axios';
import Create from './components/create';
export class Book extends Component{
    
    constructor(props){
        super(props);
        this.state={
            SachList:[]};
        this.getAll=this.getAll.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(event) {
    //     this.setState({SachList: event.target.value});
    //   }
    
   
    componentDidMount() {
        this.getAll();
};
    //phuong thuc lay het sach
    getAll =()=>{
        axios.get(`https://localhost:7132/api/Sach`)
        .then(res => 
        {   
            this.setState({ SachList:res.data });
        }).catch(error=>{
            console.log(error);
        });      
    }
    
        render(){
        
            // phuong thuc xoa sach 
            function deleteSach(id,name){
                if(window.confirm(`You want to DELETE ${name} Book ? `))
                {
                    axios.delete (`https://localhost:7132/api/Sach/delete/${id}`)
                    .then(res=>{
                        console.log(res.data);
                        window.location.reload(false);
                        // this.setState({SachList:res.data});
                    }).catch(error=> {
                        console.log(error)});
                        
                }else 
                alert (`Cancel delete ${name}`)       
            }

           // hien thi theo dang bang 
            let table_book = this.state.SachList.map((SachList)=>{
                return (
                    <tr key={SachList.id}>
                        <td>{SachList.id}</td>
                        <td>{SachList.ten}</td>
                        <td>{SachList.theLoai}</td>
                        <td>{SachList.tacGia}</td>
                        <td>
                        <button type="button" className="btn btn-light mr-1"onClick={()=>deleteSach(SachList.id,SachList.ten)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></button></td>
                    </tr>
                    
                )
            })

            // tao bang hien thi danh sach du lieu da lay duoc  
        return(
            <div>
               

            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">IDSach</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Author</th>
                    <th scope="col">Options</th>
                    </tr>
                </thead>
            <tbody>
                    {/* {this.state.SachList.map(SachList =><tr key={SachList.id}></tr>)} */}
                {table_book}
                
            </tbody>
            <tfoot>
                
               <tr>
                    <td colspan="5">
                        ADD / UPDATE BOOK
                    </td>
                </tr>
                
                
        </tfoot> 
            </table>
            <Create/>

            </div>
            
        
        )
    }
}
    
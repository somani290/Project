import React,{useState,useEffect} from "react";
import axios from "axios";
const Manageregister = () => {
    const [registers,setPosts] = useState([]);
  useEffect(() => {
      loadPosts();

  },[]);

const loadPosts = async () => {
  const result = await axios.get("http://localhost:3003/registers");
  setPosts(result.data.reverse());
}
return(
    <div>
        <table>
            <thead>
                <tr>
                    <th> Full Name </th>
                    <th> Hostel </th>
                    <th> Room </th>
                    <th> Branch </th>
                    <th> Mail Id </th>
                </tr>
            </thead>
            <tbody>
                {
                    registers.map((register,index) =>(
                        <tr>
                        
                            <td> {register.name}</td>
                            <td> {register.hostel}</td>
                            <td> {register.room}</td>
                            <td> {register.branch}</td>
                            <td> {register.mail}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)

}
export default Manageregister;
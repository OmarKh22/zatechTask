import { useMemo, useState } from "react";  
import { DropDownList } from "@progress/kendo-react-dropdowns";
import './Servies.css'
import { NavLink } from "react-router-dom";

const categories = ["all", "chemical", , "industrial"];
    const data =[
        {  
            id: 1,  
            label: "Best ever",  
            type: "chemical",  
          },  
          {  
            id: 2,  
            label: "Top 10  experince",  
            type: "industrial",  
          },    
          {  
            id: 4,  
            label: "How to prepare",  
            type: "chemical",  
          },  
          {  
            id: 5,  
            label: "Best 5 for hot summer",  
            type: "industrial",  
          },  
    ];

function Servies() {
    const [category, setCategory] = useState("data"); 
    const filteredData = useMemo(() => {  
        if (!category && category === "all") return data;  
      
        return data.filter(item => item.type === category);  
    }, [category]);
    
    return (
        <section className="k-my-8">
      <form className="k-form k-mb-4">
        <label className="k-label k-mb-3 h5">Select Category</label>
        <DropDownList data={categories} onChange={e => setCategory(e.value)} className="droppdown w-75" />
      </form>

      <section className="k-listgroup w-50 me-5 ">
      <ul>
          {filteredData.map(item => {
            return (
              <li key={item.id} className="k-listgroup-item">
                {item.label}
              </li>
            );
          })}
        </ul>
      </section>

          <label for="myfile" className="container-fluid h6 llabel">certeficate</label>
        <input type="file" id="myfile" name="myfile" className="container-fluid fileint w-75"/>

        <label for="myfile" className="container-fluid h6">Tax card</label>
        <input type="file" id="myfile" name="myfile" className="container-fluid fileint w-75"/>

        <label for="myfile" className="container-fluid h6">vet certeficate</label>
        <input type="file" id="myfile" name="myfile" className="container-fluid fileint w-75"/>

        <label for="myfile" className="container-fluid h6">certeficate</label>
        <input type="file" id="myfile" name="myfile" className="container-fluid fileint w-75"/>
          <br></br>
          <br></br>
        <label className="form-label">Email</label>
            <input
                type="email"
                className="form-control  w-75"
                placeholder="Enter your Email"
            />
            <label className="form-label">Password</label>
            <input
                type="password"
                className="form-control  w-75 "
                placeholder="Enter your Password"
            />
            <input type="checkbox" className="form-check-input"/>
            <label className="form-check-label" for="exampleCheck1"> I agree all points</label> <br></br>
            <NavLink type="submit" className="btn btn-primary w-75" to="/LogIn">Submit</NavLink>
    </section>
  );
};
    

export default Servies

import "./ViewUsers.css";
import React, { useState, useEffect } from "react";

export const ViewUsers = () => {
  const [name, setName] = useState([]);

  async function fetchText() {
    let response = await fetch(
      "https://deliver-greeting-cards.herokuapp.com/api/users",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    let data = await response.json();
    setName(data);
    console.log(data);
  }

  useEffect(() => {
    fetchText();
  }, []);

    useEffect(() => {
        fetchText()
    }, [])

    const handleDelete = async (id) => {
      try {
        const response = await fetch(`https://deliver-greeting-cards.herokuapp.com/api/users/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }, 
        });
        console.log(response); 
        window.location.reload(); 
      }
        catch (err) { 
            console.error("Error deleting user", err.message); 
        }
    };


    return (
        <div>
            <div className="header">
                <div className="home">
                    
                    <table>
                      <thead>
                          <tr>
                            <th className = "header-cell">Name</th></tr>
                          </thead>
                            {name.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.name ? data.name : "Tameem"}</td>
                                    </tr>
                                )
                            })}
                    </table>
                </div>
                <div className="home">
                    
                    <table>
                    <thead>
                          <tr>
                            <th className = "header-cell">Address ID</th></tr>
                          </thead>
                            {name.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.address_id ? data.address_id : "09182391028"}</td>
                                    </tr>
                                )
                            })}
                    </table>
                </div>
                <div className="home butt">
                          
  <table>
  <thead>
                          <tr>
                            <th className = "header-cell">Delete</th></tr>
                          </thead>
    {name.map((data, i) => {
      return (
        <tr key={i} className={i === name.length - 1 ? "last-row" : ""}>
          <td>
            <button onClick={() => handleDelete(data.id)}>Delete</button>
          </td>
        </tr>
      )
    })}
  </table>
</div>
            </div>
        </div>
    );
                        }
export default ViewUsers;

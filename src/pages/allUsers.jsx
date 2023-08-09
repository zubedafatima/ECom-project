import { useEffect, useState } from "react";
import { Dashboard } from "../layout/Dashboard";
import axios from "axios";
import { U_URL } from "../url";

export function AllUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(U_URL, { params: { limit: 5 } })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Dashboard>
      <div className="Login">
        <h1>ALL USERS</h1>
        <div className="Container">
          <div className="row">
            {data.map((user) => (
              <div className="Users" key={user.id}>
                <div className="card">
                  <p className="login-Head">Username:{user.username}</p>
                  <p className="login-Head">Email:{user.email}</p>
                  <p className="login-Head">Phone:{user.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

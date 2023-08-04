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
      <div className="ALL-USERS">
        <h1>ALL USERS</h1>
        <div className="Container">
          <div className="row">
            {data.map((user) => (
              <div className="col-sm-4" key={user.id}>
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-text">
                      {user.id}-Username:{user.username}
                    </h2>
                    <p className="card-text">Email:{user.email}</p>
                    <p className="card-text">Phone:{user.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

import { useEffect, useState } from "react";

const APIcalling = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  return (
    <>
      <center>
        <div>
          {list.map((userdata) => (
            <>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>{userdata.name}</div>
                <div>{userdata.username}</div>
                <div>{userdata.email}</div>
                <div>{userdata.address.city}</div>
              </div>
            </>
          ))}
        </div>
      </center>
    </>
  );
};
export default APIcalling;

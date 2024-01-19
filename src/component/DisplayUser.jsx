import  { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import  './PostUser.css'

const DisplayUser = () => {
  const users = useLoaderData();

  const [updatedUser, setUpdatedUser] = useState(users);
  console.log(updatedUser);
  //   useEffect(()=>{
  //     fetch()
  //   },[])
  console.log(users);

  const handleDelete = (_id) => {
    console.log(_id);
    // const URL = `http://localhost:5000/users/${_id}`;
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Data deleted successfully");
        }
        const filteredData = updatedUser.filter((item) => item._id !== _id);
        setUpdatedUser(filteredData);
      });
  };
  return (
    <div>
      <h2>User: {updatedUser.length}</h2>
      <div  className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {updatedUser.map((user) => (
        <div key={user._id} className="singleData">
          <h1>{user.name}</h1>
          <br />
          <div className="flex gap-3 justify-center">
          <button onClick={() => handleDelete(user._id)} type="submit" className="btn btn-sm btn-success">
            Delete
          </button>
          <Link  to={`/users/${user._id}`}>
            <button className="btn btn-sm btn-secondary" type="submit">UPDATE</button>
          </Link>
          </div>
        </div>
      ))}
      </div>
    
    </div>
  );
};

export default DisplayUser;

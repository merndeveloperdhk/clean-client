import axios from "axios";

import {  useLoaderData, useNavigate } from "react-router-dom";

const UpdateData = () => {
  const singleData = useLoaderData();
  const navigate = useNavigate()
  console.log(singleData);
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const updateData = {
      name,
      email,
      password,
    };
    console.log(updateData);

    // fetch(`http://localhost:5000/users/${singleData._id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updateData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    axios
      .put(`http://localhost:5000/users/${singleData._id}`, updateData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        navigate('/users')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Updated: </h1>
      <form onSubmit={handleUpdate} >
        <input type="text" defaultValue={singleData?.name} name="name" id="" className="border p-2 mb-1 rounded"/>
        <br />
        <input
          type="email"
          defaultValue={singleData?.email}
          name="email"
          id=""
          className="border p-2 mb-1 rounded"
        />
        <br />
        <input
          type="password"
          name="password"
          defaultValue={singleData?.password}
          id=""
          className="border p-2 mb-2 rounded"
        />
        <br />
        <button type="submit" className="btn btn-sm btn-secondary ">Update</button>
      </form>
    </div>
  );
};

export default UpdateData;

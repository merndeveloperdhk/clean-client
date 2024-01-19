import axios from "axios";


const PostUser = () => {
  const handlePostUser = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    const myData = {
      name,
      email,
      password,
    };
    console.log(myData);

    // fetch("http://localhost:5000/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(myData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    // try {
    //   const res = await fetch("http://localhost:5000/users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(myData),
    //   });
    //   const data = await res.json();
    //   console.log(data);
    //   if (data.acknowledged) {
    //     alert("Data posted successfully");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    try {
      const response = await axios.post("http://localhost:5000/users", myData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      if (response.data.acknowledged) {
            alert("Data posted successfully");
          }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      
      <h1>User: </h1>
      <form onSubmit={handlePostUser} action="">
        <input type="text" name="name" id="name" placeholder="Your name" className="border p-2 rounded" />
        <br /><br />
        <input type="email" name="email" id="email" placeholder="your email" className="border p-2 rounded" />
        <br /><br />
        <input type="password" name="password" id="password" placeholder="********" className="border p-2 rounded" />
        <br /><br />
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </div>
  );
};

export default PostUser;

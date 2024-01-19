import { NavLink } from "react-router-dom";


const Navbar = () => {
  const navMenu = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/post">Post User</NavLink>
      <NavLink to="/users">All User</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/reg">Register</NavLink>
      <NavLink to="/logout">logout</NavLink>
    </>
  );
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Logo</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navMenu}
              </ul>
            </div>
          </div>
          {/* Page content here */}
         {/* content from navbar component. Not necessary */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {navMenu}
          </ul>
        </div>
      </div>
      {/* 
 <div className="menu">
            <NavLink to='/'>Post User</NavLink>
            <NavLink to='/users'>Display Users</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/reg'>Register</NavLink>
            <NavLink to='/logout'>logout</NavLink>
        </div> */}
    </div>
  );
};

export default Navbar;

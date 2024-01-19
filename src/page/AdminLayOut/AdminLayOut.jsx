import {  NavLink, Outlet } from "react-router-dom";


const AdminLayOut = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12">
            <div className=" adminMenu md:col-span-3 bg-slate-200 min-h-[calc(100vh-160px)] flex flex-col space-y-2">
                <NavLink to='/admin' className="bg-gray-300 p-2 ">Home</NavLink>
                <NavLink to='/admin/post' className="bg-gray-300 p-2 ">Post User</NavLink>
                <NavLink to='/admin/users' className="bg-gray-300 p-2 ">All User</NavLink>
                <NavLink to='/admin/adminProduct' className="bg-gray-300 p-2 ">product</NavLink>
                <NavLink to='/admin/adminContact' className="bg-gray-300 p-2 ">Admin contact</NavLink>
            </div>
            <div
            className="col-span-9 bg-sky-200 min-h-[calc(100vh-160px)] p-3">
                <Outlet></Outlet>
                </div>
        </div>
    );
};

export default AdminLayOut;
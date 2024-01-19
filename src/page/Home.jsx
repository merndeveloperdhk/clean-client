const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between gap-3 my-4">
        {/* Left side */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              eius dicta esse corporis omnis veniam atque delectus vitae,
              similique aliquid at ducimus perspiciatis quia consectetur
              voluptas ipsa laboriosam repellat optio. Eius quia harum veniam
              error quisquam quas similique magnam omnis magni nostrum cumque
              accusantium exercitationem nisi minima, dolores facere neque?
            </p>
            <div className="flex gap-2 mt-4">
              <button className="btn btn-success rounded-xl">Book a service</button>
              <button className="btn btn-success rounded-xl">Read more</button>
            </div>
          </div>
          <div>
            <div className="divider"></div>
            <div className="flex justify-between">
              <div>
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                  </div>
                </div>
                <p>ratings 5 out of 5 by our clients</p>
              </div>
            </div>
          </div>
        </div>
    {/* Right side */}
        <div className="md:w-1/2">
          <img
            className="w-[550px] h-[340px] object-cover"
            src="https://media.istockphoto.com/id/1423165621/photo/teachers-and-janitor-walking-thru-school-corridor.webp?b=1&s=170667a&w=0&k=20&c=qquHGx7vneUz46tMsdK8noSLRA-FKg2XtffYimdjuaU="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

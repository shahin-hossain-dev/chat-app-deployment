import GenderCheckBox from "./GenderCheckBox";

const Signup = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col max-w-96 mx-auto min-h-screen">
        <div className="h-full w-full p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-100">
          <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
          <form className="card-body !px-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Full Name</span>
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter Fullname "
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter confirm password"
                className="input input-bordered w-full"
                required
              />
            </div>
            <GenderCheckBox />
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Signup
              </button>
            </div>
          </form>
          <p className="text-center">
            Already Have an account, <a className="link link-primary">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

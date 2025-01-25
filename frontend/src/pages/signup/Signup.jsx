import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const onCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <div className="flex items-center justify-center flex-col max-w-96 mx-auto min-h-screen">
        <div className="h-full w-full p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-100">
          <h2 className="text-3xl font-semibold text-center">Sign Up</h2>
          <form onSubmit={handleSignup} className="card-body !px-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Fullname "
                className="input input-bordered w-full"
                value={inputs.fullname}
                onChange={(e) =>
                  setInputs({ ...inputs, fullname: e.target.value })
                }
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
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
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
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
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
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
                required
              />
            </div>
            <GenderCheckBox
              onCheckBoxChange={onCheckBoxChange}
              selectedGender={inputs.gender}
            />
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Signup
              </button>
            </div>
          </form>
          <p className="text-center">
            Already Have an account,{" "}
            <Link to={"/login"} className="link link-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

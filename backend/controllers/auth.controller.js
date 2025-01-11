// all auth controller here

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword } = req.body;
    res.send({ fullname, username, password, confirmPassword });
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  res.send("login route");
};

export const logout = (req, res) => {
  res.send("logout route");
};

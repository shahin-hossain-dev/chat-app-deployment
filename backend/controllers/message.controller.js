export const sendMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
  } catch (error) {
    console.log("Error from sendMessage controller : ", error.message);
    res.status(500).json("Internal Server Error");
  }
};

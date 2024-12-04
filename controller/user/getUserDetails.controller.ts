import { Request, Response } from "express";
import User from "../../model/user.model";

const getUserDetailsControlller = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // check for product
    const userExist = await User.findOne({ email });
    if (!userExist) {
      res.status(404).json({ message: "No user found with this email." });
      return;
    }

    const responseBody= {
        name: userExist.name,
        email: userExist.email,
        phoneNumber: userExist.phoneNumber,
    }
    res.status(200).json({responseBody});
    return;
  } catch (error) {
    console.log(`Server error in fetching user details: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default getUserDetailsControlller;

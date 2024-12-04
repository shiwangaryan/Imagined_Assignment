import User from "../../model/user.model";
import { Response, Request } from "express";

// send email for finding user and other details to update in body
const updateUserDetailsController = async (req: Request, res: Response) => {
  try {
    // get details of user
    const { name, email, phoneNumber } = req.body;
    const user = await User.findOne({ email });

    // check if user exists or else update
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // here updating only name and phoneNumber as email is unique and used for indexing
    if (name) user.name = name;
    if (phoneNumber) {
      const phoneNumberExist = await User.findOne({ phoneNumber });
      if (phoneNumberExist) {
        res.status(404).json({ message: "Phone number already exists" });
        return;
      }
      user.phoneNumber = phoneNumber;
    }
    await user.save();

    res.status(200).json({ message: "User details updated successfully" });
    return;
  } catch (error) {
    console.log(`Error in updating user controller: ${error}`);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again." });
    return;
  }
};

export default updateUserDetailsController;

import User from "../../model/user.model";
import { Request, Response } from "express";

const createUserController = async (req: Request, res: Response) => {
  try {
    // retreive info and check for duplicate data
    const { name, email, phoneNumber } = req.body;
    const emailExist = await User.findOne({ email });
    const phoneExist = await User.findOne({ phoneNumber });

    if (emailExist || phoneExist) {
      res.status(400).json({ message: "Email or Phone number already exist." });
      return;
    }

    // save user
    const newUser = new User({
      name,
      email,
      phoneNumber,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully." });
    return;
  } catch (error) {
    console.log(`Error in user creation controller: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default createUserController;

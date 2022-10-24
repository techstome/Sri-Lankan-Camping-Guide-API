import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../routes/utils/error.js";

export const register = async (req,res,next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            address:req.body.address,
            nic:req.body.nic,
            phone_number:req.body.phone_number,
            email:req.body.email,
            password:hash

        })

        await newUser.save()
        res.status(200).send("user has been created")

    } catch (err) {
        next(err)
    }
}
export const login = async (req,res,next) => {
    try {

        const user = await User.findOne({email:req.body.email})
        if(!user) return next(createError(404, "User not found"))

        const isPasswordCorret = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorret) return next(createError(400, "Wrong password or user name"))
        
        const {password, is_admin, ...otherDetails} = user._doc
        res.status(200).json({...otherDetails})

    } catch (err) {
        next(err)
    }
}
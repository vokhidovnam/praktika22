import bcryptjs from 'bcryptjs';
import User from '../model/user.model.js';

export const test = (req,res) => {
    res.json({
        message: 'Api route is working!',
    });
};


export const updateUser =  async (req,res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, "You can only update your own account!"))
    try {
if(req.body.password) {
    req.body.password = bcryptjs.hashSync(req.body.password, 10)
}

    const updateUser = await User.findByIdAndupdate(req.params.id, {
        $set: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
        }
    }, {new: true})

    const {password, ...rest} = updateUser._doc

    res.status(200).json(rest)
    } catch (error) {
        next(error)
    }
};
import mongo from '../DB'
// eslint-disable-next-line no-unused-vars
import userSchema, { userInterface } from '../schemas/user'

const User = mongo.db.model('user', userSchema)

const createUser = (userData: userInterface) => {
    return User.create(userData)
}

const getUserById = (userId: string) => {
    return User.findById(userId)
}

const updateUserById = (userId: string, data: userInterface) => {
    return User.findByIdAndUpdate(userId, data, { lean: true, new: true })
}

const deleteUserById = (userId: string) => {
    return User.findByIdAndRemove(userId)
}

export default {
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
}

// eslint-disable-next-line no-unused-vars
import { Schema, Document } from 'mongoose'

const userSchema = new Schema({
    firstName: String,
    lastName: String
})

export default userSchema

export interface userInterface extends Document {
    firstName: string,
    lastName: string
}

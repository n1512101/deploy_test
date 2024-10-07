const User = require('./models/userModel')
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://ngq299:j4PspVgCfoWqpdup@test-pro-db.mhsww.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db`)

const insert = async () => {
  const newUser = new User({
    name: 'jerry'
  })
  await newUser.save()
}

insert()
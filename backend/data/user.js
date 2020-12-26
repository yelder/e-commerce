import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'José Perez',
    email: 'jose132@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'María Rodriguez',
    email: 'mariar@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

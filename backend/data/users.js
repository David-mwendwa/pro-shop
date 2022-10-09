import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'David',
    email: 'david@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    idAdmin: true,
  },
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    idAdmin: true,
  },
  {
    name: 'John',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jose',
    email: 'jose@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;

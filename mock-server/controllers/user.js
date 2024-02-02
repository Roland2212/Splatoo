import { USERS_MOCK } from "../mocks/user.js";
import { v4 as uuidv4 } from "uuid";

const users = USERS_MOCK;

export const signin = (request, response) => {
  const { email, password } = request.body;

  const user = users.find((user) => {
    return user.email === email;
  });

  if (!user) {
    setTimeout(() => {
      return response.status(404).json({ message: "User doesn`t exist." });
    }, 1000);
  }

  if (user?.password !== password) {
    setTimeout(() => {
      return response.status(400).json({ message: "Invalid credential." });
    }, 1000);
  }

  const token = uuidv4();

  setTimeout(() => {
    response.status(200).json({ user, token });
  }, 1000);
};

export const signup = (request, response) => {
  const { firstName, lastName, email, password, confirmedPassword } = request.body;

  const user = users.find((user) => {
    return user.email === email;
  });

  if (user) {
    setTimeout(() => {
      return response.status(400).json({ message: "User already exist." });
    }, 1000);
  }

  if (password !== confirmedPassword) {
    setTimeout(() => {
      return response.status(400).json({ message: "Passwords not match." });
    }, 1000);
  }

  const newUser = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
    password,
  };

  const token = uuidv4();

  users.push(newUser);

  setTimeout(() => {
    response.status(200).json({ user: newUser, token });
  }, 1000);
};

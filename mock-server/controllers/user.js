import { USERS_MOCK } from "../mocks/user.js";
import { v4 as uuidv4 } from "uuid";

const users = USERS_MOCK;

export const signin = (request, response) => {
  const { email, password } = request.body;

  const user = users.find((user) => {
    return user.email === email;
  });

  setTimeout(() => {
    if (!user) {
      return response.status(404).json({ messageKey: "AUTH.text.does_not_exist" });
    }

    if (user?.password !== password) {
      return response.status(400).json({ messageKey: "AUTH.text.invalid_credential" });
    }

    const token = uuidv4();

    response.status(200).json({ user, token });
  }, 1000);
};

export const signup = (request, response) => {
  const { firstName, lastName, email, password, confirmedPassword } = request.body;

  const user = users.find((user) => {
    return user.email === email;
  });

  if (user) {
    return response.status(400).json({ code: 400, message: "User already exist." });
  }

  if (password !== confirmedPassword) {
    return response.status(400).json({ code: 400, message: "Passwords not match." });
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
    response.status(200).json({ code: 200, user: newUser, token });
  }, 1000);
};

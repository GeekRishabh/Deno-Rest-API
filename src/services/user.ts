import db from "../db/index";

const client = db.getDatabase;
const users = client.collection("users");

const createUser = async ({ request, response }: any) => {
  const user = await request.body();
  response.body = await users.insertOne(new User(user.value));
};

const getUsers = async ({ response }: any) => {
  response.body = await users.find();
};

export default {
  getUsers,
  createUser,
};

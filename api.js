const mockUsers = [
  { id: 1, name: "สมชาย ใจดี", role: "admin" },
  { id: 2, name: "สมหญิง รักเรียน", role: "user" },
];

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getUsers() {
  await delay();
  return {
    status: 200,
    data: mockUsers,
  };
}

export async function createUser(payload) {
  await delay();
  const newUser = {
    id: Date.now(),
    name: payload.name || "ผู้ใช้ใหม่",
    role: payload.role || "user",
  };
  mockUsers.push(newUser);
  return {
    status: 201,
    data: newUser,
  };
}

// 1. Định nghĩa interface User
interface User {
  id: number;
  name: string;
  email: string;
}

// 2. Mảng user ảo
const fakeUsers: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

// 3. Hàm async fetchUser trả về một user
async function fetchUser(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    const user = fakeUsers.find(u => u.id === id);
    setTimeout(() => {
      if (user) resolve(user);
      else reject(`Không tìm thấy user với id=${id}`);
    }, 1000);
  });
}

// 4. Hàm async fetchUsers nhận một mảng id
async function fetchUsers(ids: number[]): Promise<User[]> {
  // Tạo một mảng Promise từ các id
  const promises = ids.map(id => fetchUser(id));

  // Chờ tất cả Promise hoàn thành
  return Promise.all(promises);
}

// 5. Gọi thử
async function run19() {
  try {
    const users = await fetchUsers([1, 3]);
    console.log("Users nhận được:", users);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}

run19();

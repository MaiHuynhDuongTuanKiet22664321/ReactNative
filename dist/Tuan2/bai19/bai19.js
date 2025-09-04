"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 2. Mảng user ảo
const fakeUsers = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
];
// 3. Hàm async fetchUser trả về một user
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const user = fakeUsers.find(u => u.id === id);
            setTimeout(() => {
                if (user)
                    resolve(user);
                else
                    reject(`Không tìm thấy user với id=${id}`);
            }, 1000);
        });
    });
}
// 4. Hàm async fetchUsers nhận một mảng id
function fetchUsers(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        // Tạo một mảng Promise từ các id
        const promises = ids.map(id => fetchUser(id));
        // Chờ tất cả Promise hoàn thành
        return Promise.all(promises);
    });
}
// 5. Gọi thử
function run19() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield fetchUsers([1, 3]);
            console.log("Users nhận được:", users);
        }
        catch (error) {
            console.error("Lỗi:", error);
        }
    });
}
run19();

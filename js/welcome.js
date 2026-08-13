// ========== 显示欢迎语（不影响任何功能） ==========
console.log("🏨 欢迎使用 Mid-Mountain Hotel 管理系统");
console.log("📅 当前时间：" + new Date().toLocaleString());

// 可选：在控制台输出一句随机问候
let greetings = ["祝您入住愉快！", "享受您的旅程！", "欢迎光临！"];
console.log("💬 " + greetings[Math.floor(Math.random() * 3)]);
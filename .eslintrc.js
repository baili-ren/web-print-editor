// 规则查询网站：
// https://eslint.bootcss.com/docs/rules/
module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    parserOptions: {
        "parser": "@babel/eslint-parser"
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        // myGlobal: false
    },
    rules: {
        // 自定义你的规则
        'no-console': 0,
        // 变量相关
        'no-undef': 'error', // 未声明的变量
        'no-unused-vars': 1, // 未使用过的变量
        'no-use-before-define': 0, // 定义前使用
        'vue/no-unused-vars': 1,
        'vue/no-dupe-keys': 1,
    },
};
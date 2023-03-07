module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
    overrides: [],
    parserOptions: {
        project: "**/tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    settings: {
        react: {
            version: "17.0.2",
        },
    },
    rules: {
        "react/react-in-jsx-scope": "off", // import react 없어도 되도록 수정
        "@typescript-eslint/explicit-function-return-type": "off", // 컴포넌트에서 리턴타입 JSX.Element를 반환하지 않아도 되도록 수정
        "@typescript-eslint/strict-boolean-expressions": "off", // true false를 구분할 때 문자열일 경우도 명확하게 구분할지 확인하는 옵션
        "@typescript-eslint/no-misused-promises": "off", // await 가 붙어있는 함수를 return할때 Promise<void>라고 명시해주는 옵션. props로 함수를 onlick에 바로 넣으려고 하면 eslint 오류가 나옴. 화살표함수로 변경해줘야함.
        "@typescript-eslint/triple-slash-reference": "off", // 슬래시3개를 사용하는것에 관한 설정. next-env.d.ts
    },
};

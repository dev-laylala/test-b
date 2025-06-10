module.exports = {
    presets: [
      [
        "@babel/preset-typescript",
        {
          allowNamespaces: true,
          allowDeclareFields: true,
          // 이 옵션이 핵심입니다
          onlyRemoveTypeImports: false // 타입 import만 제거하지 말고 일반 import도 허용
        }
      ],
      "@babel/preset-react",
      "@babel/preset-env"
    ],
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      "babel-plugin-transform-typescript-metadata"
    ]
  };

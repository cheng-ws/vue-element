module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/preset-env', { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};
// module.exports = {
//   presets: ["@vue/app",
//     ['@babel/preset-env',      //添加 babel-preset-env 配置
//       {
//         'modules': false
//       }
//     ]
//   ],
//   plugins: [
//     [
//       "component",
//       {
//         "libraryName": "element-ui",
//         "styleLibraryName": "theme-chalk"
//       }
//     ]
//   ]
// };

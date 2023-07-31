import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    https: false,
    // proxy: {
    //   '/api': {
    //     target: 'https://lianghj.top:8888/api/private/v1/', // 所要代理的目标地址
    //     rewrite: (path) => path.replace(/^\/api/, ''), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
    //     changeOrigin: true // true/false, Default: false - changes the origin of the host header to the target URL
    //   }
    // }
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "~script",
        replacement: resolve(__dirname, "src/script"),
      },
    ],
  },
  css: {
    //css预处理
    preprocessorOptions: {
      // scss: {
      //   /*
      // 	引入var.scss全局预定义变量，
      // 	如果引入多个文件，
      // 	可以使用
      // 	'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
      // 	这种格式
      // 	 */
      //   additionalData:
      //     '@import "@/styles/variables.scss";@import "@/styles/mixin.scss";',
      // },
    },
  },
  base: "./", //设置构建根目录为相对路径
  build: {
    // sourcemap: false,
    // minify: 'terser',
    // chunkSizeWarningLimit: 1500,
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split("/")
            : [];
          const fileName =
            facadeModuleId[facadeModuleId.length - 2] || "[name]";
          return `js/${fileName}/[name].[hash].js`;
        },
      },
    },
  },
  define: {
    "process.env": {
      BASE_URL: "http://192.168.195.21:8003", //http://128.21.9.139:5100  https://bmsapi.gdjkjc.cn:13578  http://localhost:5031
    },
  },
  //提高页面初次加载速度，降低项目启动速度
  optimizeDeps: {
    include: ["vue-router", "vuex", "element-plus"],
  },
});

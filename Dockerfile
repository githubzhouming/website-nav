# 官方node 镜像
FROM node:20-alpine AS base
# 指定工作目录
WORKDIR /app
# 拷贝文件
COPY . .

# 安装依赖
RUN npm install&&npm run build

# 声明暴露端口号
EXPOSE 80

FROM nginx:1.24-alpine

COPY --from=base /app/dist /user/share/nginx/html

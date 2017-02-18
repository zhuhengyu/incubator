# PC在用的两个基本的Nginx配置

```
    # 博客本地静态文件
    server {
        listen 4101; # 监听4101端口
        server_name blog; # 服务名
        location / { # 监听路径/
            #return 301 https://charlesoy.github.io/;
            root /Users/ouyangchao/Documents/git/blog/public/; # 根目录
            index index.html; # 默认文档
        }
        access_log /Users/ouyangchao/Documents/log/nginx/blog.access.log; # 访问日志路径
        error_log /Users/ouyangchao/Documents/log/nginx/blog.error.log; # 错误日志路径
    }

    # demo-react-redux项目的前后端分离
    server {
        listen 4111; # 监听4111端口
        server_name localhost; # 服务名
        location / { # 监听路径/
            root /Users/ouyangchao/Projects/Smallit/okrSystem/dist/client/; # 前端项目打包编译生成的文件所在的目录
            try_files $uri /index.html; # 所有路径均返回该文件
            #index index.html;
        }
        location /data { # 监听路径/data， 后端入口
            rewrite /data/(.*) /okrSystemBackEnd/data/$1 break; # 重写请求到指定路径
            proxy_pass http://127.0.0.1:8080; # 代理传递到指定服务器及端口
        }
        access_log /Users/ouyangchao/Documents/log/nginx/backend.access.log; # 访问日志路径
        error_log /Users/ouyangchao/Documents/log/nginx/backend.error.log; # 错误日志路径
    }
```

>注意日志文件所在的路径需要手动建立。
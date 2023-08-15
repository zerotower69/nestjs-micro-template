<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

切换到[中文](./README.zh.md)

<p> A template of nest.js microservices with <a href="https://nacos.io/zh-cn/index.html">nacos</a>.</p>

<strong>Using this template, you must learn how to use nacos first! I'm not
your teacher, your teacher is nacos document.</strong>

**How to run the project quickly?**
* 1. install and run your mysql first
* 2. install and run nacos, you will use database `nacos` to store your nacos config and other data.
* 3. start to run pnpm scripts in the `package.json` file by root path.
```bash
# step1: pnpm build:packages :: build the common workspace packages, which are imported by the micro services.
pnpm build:packages
# step2: pnpm start:app :: run all your micro services in development mode.
pnpm start:app

```

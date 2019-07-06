Yarn workspace example
---

ตัวอย่างจากบทคาม [มารู้จัก Yarn workspaces กันดีกว่า](https://devahoy.com/blog/2019/07/yarn-workspaces/)

## Usage

```
yarn workspace info
```

สัง่ start server ทั้ง 3 apps

```
yarn workspace appA start
yarn workspace appB start
yarn workspace appC start
```

หรือสามารถเพิ่ม dependencies แต่ละ app ได้ เช่น เพิ่ม React ไปที่ appB

```
yarn workspace appB add react react-dom --dev
```
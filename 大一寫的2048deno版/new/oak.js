import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";


const app = new Application();
const router = new Router();
router.get("/", (context) => {
    context.response.body =`
    <html>
    <head>
        <title>2048</title>
        <link rel="stylesheet" href="2048.css">
        <script src="./2048.js" charset="utf-8"></script>
        <style>
        </style>
    </head>
    <body>
        <div class="container">
            <div class="info">
              <h1>2048</h1>
            </div>
            <span id="result"><b>看你能不能2048哇哇哇(利用上下左右方向鍵去玩)</b></span>
        <div class="grid"></div>
    </body>
</html>`;
  })
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (ctx) => {
  console.log('path=', ctx.request.url.pathname) 
  await send(ctx, ctx.request.url.pathname, { 
    root: Deno.cwd(),
  });

});
console.log('start at : http://127.0.0.1:8016')
await app.listen({ port: 8016 });
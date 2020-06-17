const Koa = require('koa')

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(ctx.url)
    console.log(1)
    if(ctx.query.authorized !== '1'){
        ctx.status = 401;
        return
    }
    await next();
    console.log('END')
})

app.use((ctx, next) => {
    console.log(2);
    next();
})

app.use(ctx => {
    ctx.body = 'hello world'
});

app.listen(4000, () => {
    console.log('Listening to port 4000')
})
//서버를 포트 4000번으로 열고 서버에 접속하면 'hello world'라는 텍스트를 반환
import Post from '../../models/post'

/*
  POST /api/posts
  {
    tutle: '제목',
    body:'내용,
    tags: ['태그1', '태그2']
  }
*/

export const write = async ctx => {
  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = ctx => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e){
    ctx.theow(500,e);
  }
};

export const read = ctx => {};

export const remove = ctx => {};

export const update = ctx => {};
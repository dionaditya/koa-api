const Router = require('koa-router');
const queries = require('../db/queries/movies');

const router = new Router();
const BASE_URL = `/api/v1/movies`;

router.get(BASE_URL, async (ctx) => {
    try {
      const movies = await queries.getAllUsers();
      ctx.body = {
        status: 'success',
        data: movies
      };
    } catch (err) {
      console.log(err)
    }
  })

router.get(`${BASE_URL}/:id`, async (ctx) => {
    try {
      console.log(ctx.params.id)
      const user = await queries.getSingleUsers(ctx.params.id);
      if (user.length) {
        ctx.body = {
          status: 'success',
          data: user
        };
      } else {
        ctx.status = 404;
        ctx.body = {
          status: 'error',
          message: 'That movie does not exist.'
        };
      }
    } catch (err) {
      console.log(err)
    }
  })

 router.post(`${BASE_URL}`, async (ctx) => {
    console.log(ctx.request.body)
    try {
      const user = await queries.addUser(ctx.request.body);
      if (user.length) {
        ctx.status = 201;
        ctx.body = {
          status: 'success',
          data: user
        };
      } else {
        ctx.status = 400;
        ctx.body = {
          status: 'error',
          message: 'Something went wrong.'
        };
      }
    } catch (err) {
        ctx.status = 400;
        ctx.body = {
          status: 'error',
          message: err.message || 'Sorry, an error has occurred.'
        };
    }
  })
    
  
  
module.exports = router;

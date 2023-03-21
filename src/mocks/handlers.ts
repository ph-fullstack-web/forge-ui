import {rest} from 'msw';

export const handlers = [
  rest.get('http://localhost:3030/api/v1/users', (req, res, ctx) => {
    return res(
      ctx.json([
        {userId: 1, name: 'John Doe'},
        {userId: 2, name: 'Jane Doe'},
      ])
    );
  }),
];

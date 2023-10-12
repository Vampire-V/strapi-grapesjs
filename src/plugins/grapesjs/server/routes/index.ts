export default [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      // policies: [],
      // auth: false,
    },
  },
  {
    method: 'GET',
    path: '/get-pages',
    handler: 'myController.getPages',
    config: {
      // policies: [],
      // auth: false,
    },
  }
];

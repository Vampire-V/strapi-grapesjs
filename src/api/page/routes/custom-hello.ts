module.exports = {
    routes: [
      {
        method: "GET",
        path: "/all-hellos",
        handler: "page.findAll",
        config: {
          auth: false,
        },
      },
      {
        method: "GET",
        path: "/page/ssr",
        handler: "page.generateHTML",
        config: {
            auth: false,
          },
      },
    ],
  };
export default {
  isDev: true,
  dev: {
    port: ":2022",
    meli: {
      domain: "http://localhost",
      paths: {
        search: "items?search=",
        items: "items/",
      },
    },
  },
  qa: {
    port: "",
    meli: {
      domain: "http://localhost",
      paths: {
        search: "items?search=",
        items: "items/",
      },
    },
  },
};

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/results/2020/close",
        destination: "/pln2020/scoreboards/html/scoreboard-closed.html",
        permanent: true,
      },
      {
        source: "/results/2020/open",
        destination: "/pln2020/scoreboards/html/scoreboard.html",
        permanent: true,
      },
    ];
  },
};

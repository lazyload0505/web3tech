module.exports = {
  apps : [
      {
        name: "web3allfun",
        script: "./dist/apps/main-server/main.js",
        watch: true,
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 80,
            "NODE_ENV": "production",
        }
      }
  ]
}

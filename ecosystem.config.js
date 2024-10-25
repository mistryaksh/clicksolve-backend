module.exports = {
  apps: [
    {
      name: "clicqsolve",
      script: "npm",
      args: "start",
      watch: ["src"],
      ignore_watch: ["node_modules", "logs"],
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      exec_mode: "fork", // you can change this to 'cluster' if you want multiple instances
      instances: 1, // set this to the number of instances for load balancing if using cluster mode
      autorestart: true,
      max_restarts: 5,
      restart_delay: 5000,
      error_file: "./logs/app-err.log",
      out_file: "./logs/app-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};

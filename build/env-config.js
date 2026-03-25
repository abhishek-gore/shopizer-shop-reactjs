window._env_ = {
  APP_PRODUCTION: "false",
  APP_BASE_URL: "http://localhost:8080",
  APP_API_VERSION: "/api/v1/",
  APP_MERCHANT: "DEFAULT",
  APP_PRODUCT_GRID_LIMIT: "15",
  APP_MAP_API_KEY: "",
  APP_NUVEI_TERMINAL_ID: "",
  APP_NUVEI_SECRET: "",
  APP_PAYMENT_TYPE: "MONEYORDER",
  APP_STRIPE_KEY: "pk_test_TYooMQauvdEDq54NiTphI7jx",
  APP_THEME_COLOR: "#D1D1D1",
}

// Define process.env for compatibility - must be defined before any scripts load
window.process = window.process || {};
window.process.env = window.process.env || {};
window.process.env.PUBLIC_URL = window.process.env.PUBLIC_URL || "";
window.process.env.NODE_ENV = window.process.env.NODE_ENV || "production";

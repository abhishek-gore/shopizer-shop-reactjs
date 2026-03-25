// Polyfill for process.env
if (typeof window !== 'undefined') {
  window.process = window.process || {};
  window.process.env = window.process.env || {};
  
  // Ensure PUBLIC_URL is set
  if (!window.process.env.PUBLIC_URL) {
    window.process.env.PUBLIC_URL = "";
  }
  
  // Add NODE_ENV if not present
  if (!window.process.env.NODE_ENV) {
    window.process.env.NODE_ENV = "production";
  }
}

// Also define it globally for modules that check before window is available
if (typeof global !== 'undefined' && !global.process) {
  global.process = {
    env: {
      PUBLIC_URL: "",
      NODE_ENV: "production"
    }
  };
}

module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Transpile JS/JSX/TS/TSX files using babel-jest
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/", // Transform `axios` module (or other specific modules) using babel
  ],
};
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

// Determine the mode from the NODE_ENV environment variable
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: mode,
  target: 'node',
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  externals: [nodeExternals({
    allowlist: ['@demox-labs/aleo-sdk-staging']
  })],

  // Entry point of the application
  entry: {
    index: path.resolve(__dirname, 'src') + '/index.ts',
    wasmTest: path.resolve(__dirname, 'src') + '/index.wasmTest.ts',
  },

  // Output configuration
  output: {
    pathinfo: false,
    path: path.resolve(__dirname, 'dist'),
  },

  // Resolve .ts and .js files
  resolve: {
    extensions: ['.ts', '.js', '.wasm'],
  },

  // Module rules for TypeScript
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
      },
      {
        test: /\.wasm$/,
        type: 'asset/inline'
      }
    ],
  },

  plugins: [
    new Dotenv()
  ],

  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
};
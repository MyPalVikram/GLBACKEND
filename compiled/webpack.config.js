var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`, // Path to entry point
  output: {
    filename: 'bundle.js', // Name of output bundle file
    path: DIST_DIR // Directory to place output file
  },
  module: { // modular rules to follow when transpiling files
    loaders: [// list of different file formats and rules for each set
    { // describes a file type and which modules to use to interpret them
      test: /\.jsx?/,
      include: SRC_DIR,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'env']
      }
    }]
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiU1JDX0RJUiIsImpvaW4iLCJfX2Rpcm5hbWUiLCJESVNUX0RJUiIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnRyeSIsIm91dHB1dCIsImZpbGVuYW1lIiwibG9hZGVycyIsInRlc3QiLCJpbmNsdWRlIiwibG9hZGVyIiwicXVlcnkiLCJwcmVzZXRzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxPQUFPQyxRQUFRLE1BQVIsQ0FBWDtBQUNBLElBQUlDLFVBQVVGLEtBQUtHLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFkO0FBQ0EsSUFBSUMsV0FBV0wsS0FBS0csSUFBTCxDQUFVQyxTQUFWLEVBQXFCLGNBQXJCLENBQWY7O0FBRUFFLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsU0FBUSxHQUFFTixPQUFRLFlBREgsRUFDaUI7QUFDaENPLFVBQVE7QUFDTkMsY0FBVSxXQURKLEVBQ3dCO0FBQzlCVixVQUFNSyxRQUZBLENBRXdCO0FBRnhCLEdBRk87QUFNZkMsVUFBUyxFQUF1QjtBQUM5QkssYUFBVSxDQUFvQjtBQUM1QixNQUE0QjtBQUMxQkMsWUFBTyxRQURUO0FBRUVDLGVBQVVYLE9BRlo7QUFHRVksY0FBUyxjQUhYO0FBSUVDLGFBQU87QUFDTEMsaUJBQVMsQ0FBQyxPQUFELEVBQVUsS0FBVjtBQURKO0FBSlQsS0FEUTtBQURIO0FBTk0sQ0FBakIiLCJmaWxlIjoid2VicGFjay5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBTUkNfRElSID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy9jbGllbnQvc3JjJyk7XG52YXIgRElTVF9ESVIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnL2NsaWVudC9kaXN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeTogYCR7U1JDX0RJUn0vaW5kZXguanN4YCwgIC8vIFBhdGggdG8gZW50cnkgcG9pbnRcbiAgb3V0cHV0OiB7XG4gICAgZmlsZW5hbWU6ICdidW5kbGUuanMnLCAgICAgICAgLy8gTmFtZSBvZiBvdXRwdXQgYnVuZGxlIGZpbGVcbiAgICBwYXRoOiBESVNUX0RJUiAgICAgICAgICAgICAgICAvLyBEaXJlY3RvcnkgdG8gcGxhY2Ugb3V0cHV0IGZpbGVcbiAgfSxcbiAgbW9kdWxlIDogeyAgICAgICAgICAgICAgICAgICAgICAvLyBtb2R1bGFyIHJ1bGVzIHRvIGZvbGxvdyB3aGVuIHRyYW5zcGlsaW5nIGZpbGVzXG4gICAgbG9hZGVycyA6IFsgICAgICAgICAgICAgICAgICAgLy8gbGlzdCBvZiBkaWZmZXJlbnQgZmlsZSBmb3JtYXRzIGFuZCBydWxlcyBmb3IgZWFjaCBzZXRcbiAgICAgIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZXNjcmliZXMgYSBmaWxlIHR5cGUgYW5kIHdoaWNoIG1vZHVsZXMgdG8gdXNlIHRvIGludGVycHJldCB0aGVtXG4gICAgICAgIHRlc3QgOiAvXFwuanN4Py8sXG4gICAgICAgIGluY2x1ZGUgOiBTUkNfRElSLFxuICAgICAgICBsb2FkZXIgOiAnYmFiZWwtbG9hZGVyJyxcbiAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICBwcmVzZXRzOiBbJ3JlYWN0JywgJ2VudiddXG4gICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbiJdfQ==
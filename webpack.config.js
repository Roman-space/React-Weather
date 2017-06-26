module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
        Main: 'app/components/main.jsx',
        Nav: 'app/components/nav.jsx',
        Weather: 'app/components/Weather.jsx',
        About: 'app/components/About.jsx',
        Examples: 'app/components/Examples.jsx',
        Weather_form: 'app/components/weather_form.jsx',
        Weather_result: 'app/components/weather_result.jsx',
        OpenWeatherMap: 'app/components/api/open_weather_map.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
    devtool: 'cheap-module-eval-source-map'
};

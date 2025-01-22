```javascript
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Add content paths
  theme: {
    extend: {
      colors: {
        'theme-color': '#007bff' // Example custom color
      }
    }
  },
  plugins: []
}
```
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind Colors</title>
  <link href="output.css" rel="stylesheet">
</head>
<body>
  <div class="bg-theme-color p-4 text-white">This should be blue!</div>
</body>
</html>
```
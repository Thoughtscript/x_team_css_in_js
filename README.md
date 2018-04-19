# x_team_css_in_js

X-Team CSS in JS Example: A comparison of *CSS in JS* libraries updated for 2018.

![Popularity](https://github.com/Thoughtscript/x_team_css_in_js/blob/master/Popularity.PNG)

We compare several libraries:

```
   Aphrodite
   CXS
   Emotion
   Glamorous
   JSS
   Radium
   Styled-Components
   Styletron
```

Testing for:
```
    (1) Phantom.js page load performance
    (2) Phantom.js I/0 performance
    (3) live-server 'http' request performance - time to complete 1000 requests
    (4) Webpack 3.6 compile time
    (5) Webpack 3.6 bundle size
```

# Running the Tests

Build Tests:
```bash
    $ npm run build-all
    $ npm run number-request
    $ npm run phantom-page
    $ npm run phantom-io
```

# Results

Let's go over our results!

### Build Time and Bundle Size!

# Unminified (Development):

```

```

**Build Time Winner**:  (ms)
**Vendor Dependencies Size Winner**:  (KB)
**App Size Winner**:  (KB)
**Overall Size Winner**:  (KB)

# Minified (Production):


```

```

**Build Time Winner**:  (ms)
**Vendor Dependencies Size Winner**:  (KB)
**App Size Winner**:  (KB)
**Overall Size Winner**:  (KB)


### live-server - Time To Complete 1000 Requests




### Phantom.js - Page Load Performance





### Phantom.js - I/O Performance





# Resources and Tributes

Updating 

https://engineering.hellofresh.com/the-css-in-js-battle-89c34a7a83ea

https://hackernoon.com/all-you-need-to-know-about-css-in-js-984a72d48ebc

# Testing Suite

https://benchmarkjs.com/

http://phantomjs.org/quick-start.html

https://webpack.js.org/
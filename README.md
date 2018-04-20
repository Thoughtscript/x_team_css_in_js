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

# Unminified (Development):

Testing build time for `development`-like scenarios (time to rebuild/recompile on change):

<table>
    <thead>
        <tr>
            <th>Library</th>
            <th>Vendor Size</th>
            <th>App Size</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Average Run</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Aphrodite</th>
            <th>938 KB</th>
            <th>4.02 KB</th>
            <th>4237 ms</th>
            <th>5450 ms</th>
            <th>4952 ms</th>
            <th>4879.66 ms</th>
        </tr>
        <tr>
            <th>CXS</th>
            <th>858 KB</th>
            <th>3.94 KB</th>
            <th>4952 ms</th>
            <th>5023 ms</th>
            <th>5399 ms</th>
            <th>5124.66 ms</th>
        </tr>
        <tr>
            <th>Emotion</th>
            <th>890 KB</th>
            <th>4.26 KB</th>
            <th>5093 ms</th>
            <th>6322 ms</th>
            <th>6015 ms</th>
            <th>5810 ms</th>
        </tr>
        <tr>
            <th>Glamorous</th>
            <th>1.02 MB</th>
            <th>3.96 KB</th>
            <th>5029 ms</th>
            <th>4911 ms</th>
            <th>6406 ms</th>
            <th>5448.66 ms</th>
        </tr>
         <tr>
            <th>JSS</th>
            <th>937 KB</th>
            <th>4.08 KB</th>
            <th>5816 ms</th>
            <th>5383 ms</th>
            <th>5967 ms</th>
            <th>5722 ms</th>
        </tr>
        <tr>
            <th>Radium</th>
            <th>1.02 MB</th>
            <th>6.04 KB</th>
            <th>7495 ms</th>
            <th>6416 ms</th>
            <th>6210 ms</th>
            <th>6707 ms</th>
        </tr>
        <tr>
            <th>Styled-Components</th>
            <th>990 KB</th>
            <th>4.29 KB</th>
            <th>6107 ms</th>
            <th>5732 ms</th>
            <th>5650 ms</th>
            <th>5829.66 ms</th>
        </tr>
        <tr>
            <th>Styletron</th>
            <th>875 KB</th>
            <th>4.07 KB</th>
            <th>6029 ms</th>
            <th>3597 ms</th>
            <th>5649 ms</th>
            <th>5091.66 ms</th>
        </tr>
    </tbody>
</table>

**Build Time Winner**:  Aphrodite (4879.66 avg ms)
**Vendor Dependencies Size Winner**: CXS (858 KB)
**App Size Winner**: CXS (3.94 KB)
**Overall Size Winner**: CXS (861.94 KB)

# Minified (Production):

Testing build time and size for `production`-like scenarios:

<table>
    <thead>
        <tr>
            <th>Library</th>
            <th>Vendor Size</th>
            <th>App Size</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Average Run</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Aphrodite</th>
            <th>184 KB</th>
            <th>1.76 KB</th>
            <th>10890 ms</th>
            <th>4952 ms</th>
            <th>9653 ms</th>
            <th>8498.33 ms</th>
        </tr>
        <tr>
            <th>CXS</th>
            <th>165 KB</th>
            <th>1.74 KB</th>
            <th>9806 ms</th>
            <th>5399 ms</th>
            <th>9895 ms</th>
            <th>8366.66 ms</th>
        </tr>
        <tr>
            <th>Emotion</th>
            <th>179 KB</th>
            <th>1.91 KB</th>
            <th>10251 ms</th>
            <th>6015 ms</th>
            <th>10628 ms</th>
            <th>8964.66 ms</th>
        </tr>
        <tr>
            <th>Glamorous</th>
            <th>230 KB</th>
            <th>1.72 KB</th>
            <th>13597 ms</th>
            <th>6406 ms</th>
            <th>12359 ms</th>
            <th>10787.33 ms</th> 
        </tr>
         <tr>
            <th>JSS</th>
            <th>197 KB</th>
            <th>1.79 KB</th>
            <th>11285 ms</th>
            <th>5967 ms</th>
            <th>11029 ms</th>
            <th>9427 ms</th>
        </tr>
        <tr>
            <th>Radium</th>
            <th>230 KB</th>
            <th>2.77 KB</th>
            <th>11854 ms</th>
            <th>6210 ms</th>
            <th>12343 ms</th>
            <th>10135.66 ms</th>
        </tr>
        <tr>
            <th>Styled-Components</th>
            <th>205 KB</th>
            <th>1.91 KB</th>
            <th>11800 ms</th>
            <th>5650 ms</th>
            <th>11178 ms</th>
            <th>9542.66 ms</th>
        </tr>
        <tr>
            <th>Styletron</th>
            <th>179 KB</th>
            <th>1.79 KB</th>
            <th>10163 ms</th>
            <th>5649 ms</th>
            <th>10879 ms</th>
            <th>8897 ms</th>
        </tr>
    </tbody>
</table>

**Build Time Winner**: CXS (8366.66 avg ms)
**Vendor Dependencies Size Winner**: CXS (165 KB)
**App Size Winner**: Glamorous (1.72 KB)
**Overall Size Winner**: CXS (166.74 KB)

<style>
    table > thead > tr > th { font-weight: 600; }
    table { margin: 25px; }
    tr > th { padding: 5px; width: 75px; }
</style>

### live-server -  Time To Complete 1000 Requests

In this test, we see how well the different frameworks hold-up against each other in high-use scenarios. We want to see how much throughput our server can handle given the choice of a particular *CSS in JS* framework (**Please note that this is a test of server-side performance rather than client page-loading performance**):

```bash
    $ npm run number-request
```

<table>
    <thead>
        <tr>
            <th>Library</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Average Run</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Aphrodite</th>
            <th>3304 ms</th>
            <th>3302 ms</th>
            <th>3134 ms</th>
            <th>3246.66 ms</th>
        </tr>
        <tr>
            <th>CXS</th>
            <th>2811 ms</th>
            <th>2823 ms</th>
            <th>2994 ms</th>
            <th>2876 ms</th>
        </tr>
        <tr>
            <th>Emotion</th>
            <th>2606 ms</th>
            <th>2732 ms</th>
            <th>2756 ms</th>
            <th>2698 ms</th>
        </tr>
        <tr>
            <th>Glamorous</th>
            <th>2716 ms</th>
            <th>2524 ms</th>
            <th>2572 ms</th>
            <th>2604 ms</th> 
        </tr>
         <tr>
            <th>JSS</th>2572
            <th>2681 ms</th>
            <th>2585 ms</th>
            <th>2657 ms</th>
            <th>2641 ms</th>
        </tr>
        <tr>
            <th>Radium</th>
            <th>2783 ms</th>
            <th>2573 ms</th>
            <th>2942 ms</th>
            <th>2766 ms</th>
        </tr>
        <tr>
            <th>Styled-Components</th>
            <th>2133 ms</th>
            <th>2551 ms</th>
            <th>2790 ms</th>
            <th>2491.33 ms</th>
        </tr>
        <tr>
            <th>Styletron</th>
            <th>2479 ms</th>
            <th>2457 ms</th>
            <th>2582 ms</th>
            <th>2506 ms</th>
        </tr>
    </tbody>
</table>

**The Winner:** Styled-Components (2491.33 avg ms)

### Phantom.js - Page Load Performance

In this test, we'll be testing the time to execute a request and receive a response back from our test server. We want to see how fast we can request, render, and receive a `production` page when equipped with a particular *CSS in JS* framework:

```bash
    $ npm run phantom-page
```

<table>
    <thead>
        <tr>
            <th>Library</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Average Run</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Aphrodite</th>
            <th>3121 ms</th>
            <th>3016 ms</th>
            <th>3230 ms</th>
            <th>3122.33 ms</th>
        </tr>
        <tr>
            <th>CXS</th>
            <th>2995 ms</th>
            <th>2983 ms</th>
            <th>3133 ms</th>
            <th>3037 ms</th>
        </tr>
        <tr>
            <th>Emotion</th>
            <th>3002 ms</th>
            <th>3042 ms</th>
            <th>2917 ms</th>
            <th>2987 ms</th>
        </tr>
        <tr>2917
            <th>Glamorous</th>
            <th>2947 ms</th>
            <th>3047 ms</th>
            <th>2968 ms</th>
            <th>2987.33 ms</th> 
        </tr>
         <tr>
            <th>JSS</th>
            <th>2906 ms</th>
            <th>3018 ms</th>
            <th>3178 ms</th>
            <th>3034 ms</th>
        </tr>
        <tr>
            <th>Radium</th>
            <th>3000 ms</th>
            <th>2691 ms</th>
            <th>3118 ms</th>
            <th>2936.33 ms</th>
        </tr>
        <tr>
            <th>Styled-Components</th>
            <th>3012 ms</th>
            <th>2873 ms</th>
            <th>3075 ms</th>
            <th>2986.66 ms</th>
        </tr>
        <tr>
            <th>Styletron</th>
            <th>3031 ms</th>
            <th>3044 ms</th>
            <th>2995 ms</th>
            <th>3023.33 ms</th>
        </tr>
    </tbody>
</table>

**The Winner:**  ( avg ms)

### Phantom.js - I/O Performance

To further quantify overall I/O performance, we'll also test the time to load each supplied `index.html` with all `production` assets this time using Phantom.js and combining the results with our previous build size:

```bash
    $ npm run phantom-io
```

<table>
    <thead>
        <tr>
            <th>Library</th>
            <th>First Run</th>
            <th>Second Run</th>
            <th>Third Run</th>
            <th>Average Run</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Aphrodite</th>
            <th>57.3864 KB/S</th>
            <th>54.3953 KB/S</th>
            <th>56.3250 KB/S</th>
            <th>56.0355 KB/S</th>
        </tr>
        <tr>
            <th>CXS</th>
            <th>53.8044 KB/S</th>
            <th>50.7116 KB/S</th>
            <th>55.0842 KB/S</th>
            <th>53.2000 KB/S</th>
        </tr>
        <tr>
            <th>Emotion</th>
            <th>57.6513 KB/S</th>
            <th>57.6697 KB/S</th>
            <th>56.1657 KB/S</th>
            <th>57.1622 KB/S</th>
        </tr>
        <tr>
            <th>Glamorous</th>
            <th>75.1118 KB/S</th>
            <th>72.2544 KB/S</th>
            <th>85.9495 KB/S</th>
            <th>77.7719 KB/S</th>
        </tr>
         <tr>
            <th>JSS</th>
            <th>62.8684 KB/S</th>
            <th>65.2198 KB/S</th>
            <th>73.8447 KB/S</th>
            <th>67.3109 KB/S</th>
        </tr>
        <tr>
            <th>Radium</th>
            <th>77.0251 KB/S</th>
            <th>79.8251 KB/S</th>
            <th>71.2706 KB/S</th>
            <th>76.0402 KB/S</th>
        </tr>
        <tr>
            <th>Styled-Components</th>
            <th>66.6591 KB/S</th>
            <th>71.7441 KB/S</th>
            <th>62.3222 KB/S</th>
            <th>66.9084 KB/S</th>
        </tr>
        <tr>
            <th>Styletron</th>
            <th>59.7652 KB/S</th>
            <th>61.8508 KB/S</th>
            <th>62.3222 KB/S</th>
            <th>61.3127 KB/S</th>
        </tr>
    </tbody>
</table>

**The Winner:** CXS (53.2000 avg KB/S)

# Resources and Tributes

Updating 

https://engineering.hellofresh.com/the-css-in-js-battle-89c34a7a83ea

https://hackernoon.com/all-you-need-to-know-about-css-in-js-984a72d48ebc

# Testing Suite

https://github.com/tapio/live-server

http://phantomjs.org/quick-start.html

https://webpack.js.org/
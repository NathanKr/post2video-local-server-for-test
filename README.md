<h1>Project Name</h1>
....



<h2>Project Description</h2>
....



<h2>Motivation</h2>
While Puppeteer can load local HTML files using the file:// protocol,
this environment differs from real-world browser behavior.
Relative links, navigation between pages, fetch requests, and security
rules behave differently when pages are not served over HTTP.

To enable reliable browser tests across multiple static HTML pages,
the goal was to serve the test files over HTTP using an adequate solution.

<h2>Key Takeaways</h2>
<ul>
    <li>...</li>
   
</ul>

<h2>Installation</h2>
....


<h2>Usage</h2>
puppeteer
vitest
typescript


<h2>Technologies Used</h2>
....


<h2>Design Options</h2>

<h3>In-Process Server — Embedded Node HTTP Server (in code)</h3>

Description
Use Node’s built-in http module to serve static HTML files.
The server is started and stopped programmatically from the test suite.

When to choose

You want zero dependencies

You want full control

Tests own the lifecycle

Trade-offs

Slightly more code

You maintain the server logic

<h3>Port Management — External Static Server Command</h3>

Description
Use a small CLI static server (http-server, serve, etc.) to host the HTML
files, and point Puppeteer to http://localhost.

When to choose

Fastest setup

Works great in CI

No server code in repo

Trade-offs

Less control

Server lifecycle handled outside tests

<h3>The Express-Based Static Server</h3>

Description
Use Express to serve static HTML files via express.static.
This allows easy extension later if routes, middleware, or APIs are needed.

When to choose

You expect future growth

You may add dynamic behavior later

Trade-offs

Overkill for pure static testing

Extra dependency

Summary table (clarity)
Option	How many to use	Complexity
Node HTTP	Pick one	Minimal
CLI server	Pick one	Minimal
Express	Pick one	Medium


<h2>Code Structure</h2>
....

<h2>Demo</h2>
....

<h2>Points of Interest</h2>
<ul>
    <li>...</li>
   
</ul>

<h2>References</h2>
<ul>
    <li>...</li>
   
</ul>


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
the goal was to serve the test files over HTTP using a minimal static
server, without introducing a build step or application framework.

<h2>Key Takeaways</h2>
<ul>
    <li>...</li>
   
</ul>

<h2>Installation</h2>
....


<h2>Usage</h2>
puputeer
vitest
typescript


<h2>Technologies Used</h2>
....


<h2>Design</h2>

Design Options

<h3>Minimal Static HTTP Server</h3>
Serve multiple static HTML files over HTTP using a lightweight Node.js server.
This removes file:// limitations while keeping the setup simple and fully
controlled for Puppeteer tests.

<h3>Test-Controlled Server Lifecycle</h3>
Start the static server before the test suite runs and shut it down afterward
(e.g. via beforeAll / afterAll). This guarantees the HTTP endpoint is
available when Puppeteer navigates between pages and avoids manual setup.

<h3>Direct Page Navigation in Tests</h3>
Navigate directly between static pages using real HTTP URLs
(page.goto("http://localhost/...")) without abstractions such as routing
frameworks or page object layers, keeping tests readable and proportional to
the project size.


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


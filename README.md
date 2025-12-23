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



<h2>Technologies Used</h2>
<ul>
<li>puppeteer</li>
<li>vitest</li>
<li>typescript</li>
</ul>

## Design Options

### 1. In-Process Server — Embedded Node HTTP Server
**Description:** Use Node’s built-in `http` module to serve static HTML files. The server is started and stopped programmatically from the test suite.

#### When to choose
* **Zero Dependencies:** You want to avoid adding third-party packages to the project.
* **Full Control:** You need to customize the server behavior at a granular level.
* **Integrated Lifecycle:** You want the test runner (Vitest) to own the start/stop process entirely.

#### Trade-offs
* **Maintenance:** You are responsible for maintaining the server logic and handling edge cases (like MIME types).
* **Boilerplate:** Requires slightly more initial code to set up the file reading and response handling.

---

### 2. Port Management — External Static Server Command
**Description:** Use a small CLI static server (e.g., `http-server`, `serve`) to host the HTML files and point Puppeteer to `http://localhost`.

#### When to choose
* **Speed of Implementation:** This is the fastest way to move from `file://` to `http://`.
* **CI/CD Compatibility:** Works seamlessly in pipeline environments where a server can be run as a background service.
* **Separation of Concerns:** Keeps the testing logic strictly about testing, not infrastructure.

#### Trade-offs
* **External Lifecycle:** You must ensure the server is killed properly after tests to avoid "Port already in use" errors.
* **Reduced Control:** Configuration is limited to what the CLI tool provides.

---

### 3. The Express-Based Static Server
**Description:** Use Express to serve static HTML files via `express.static`. This allows easy extension later if routes, middleware, or APIs are needed.

#### When to choose
* **Future Growth:** You anticipate moving beyond static files into dynamic content.
* **API Simulation:** You need to mock backend endpoints or test specific HTTP headers and status codes.
* **Middleware Needs:** You want to use existing Express plugins for logging or security headers.

#### Trade-offs
* **Overkill:** Adds significant weight and complexity for a project that may only ever need to serve static HTML.
* **Dependency Management:** Introduces a large dependency tree into your `node_modules`.

---

### 4. Testing Framework Integration — vitest-puppeteer / sirv
**Description:** Use dedicated testing utilities that handle server lifecycle automatically. `vitest-puppeteer` provides server config in your vitest setup, or use `sirv` with globalSetup hooks. The server starts before tests and stops after, with no manual lifecycle code needed.

#### When to choose
* **Zero Boilerplate:** You want the framework to manage server start/stop without writing lifecycle code.
* **Best Practice Integration:** Already using Vitest + Puppeteer and want the recommended approach.
* **Automatic Cleanup:** Need guaranteed teardown without manual beforeAll/afterAll hooks.

#### Trade-offs
* **Framework Lock-in:** Tightly coupled to Vitest or your specific test runner.
* **Limited Customization:** Server behavior is configured declaratively, not programmatically.
* **Additional Dependency:** Adds another package to your testing stack.

---

### Summary Table

| Option | Dependencies | Complexity | Control | Lifecycle |
|--------|-------------|-----------|---------|-----------|
| Node HTTP | None | Minimal | Full | Manual |
| CLI Server | CLI tool | Minimal | Limited | External |
| Express | express | Medium | Full | Manual |
| vitest-puppeteer | vitest plugin | Low | Medium | Automatic |

---

### Recommendation

**For most Vitest + Puppeteer projects:** Use **Option 4 (vitest-puppeteer)**. It provides the cleanest developer experience with automatic lifecycle management and minimal boilerplate.

**If you need zero dependencies:** Use **Option 1 (Node HTTP)**. Perfect for learning projects or when you want complete control without external packages.

**For quick prototyping or CI pipelines:** Use **Option 2 (CLI Server)**. Fastest setup and works well when server lifecycle is managed externally.

**If you plan to add API mocking or dynamic content:** Use **Option 3 (Express)**. Worth the overhead if you know you'll need middleware or custom routes.

---

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


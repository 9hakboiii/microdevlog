<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DevMicroBlog - Developer Community</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .post-card {\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n        }\n        .post-card:hover {\n            transform: translateY(-5px);\n            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);\n        }\n        .code-block {\n            font-family: 'Courier New', monospace;\n            background-color: #2d2d2d;\n            color: #f8f8f2;\n            border-radius: 0.5rem;\n            overflow-x: auto;\n        }\n        .tag-chip {\n            transition: all 0.2s ease;\n        }\n        .tag-chip:hover {\n            transform: scale(1.05);\n            background-color: #3b82f6;\n            color: white;\n        }\n        .comment-reply {\n            border-left: 3px solid #3b82f6;\n        }\n        .markdown-content h2 {\n            font-size: 1.5rem;\n            font-weight: bold;\n            margin-top: 1rem;\n            margin-bottom: 0.5rem;\n        }\n        .markdown-content pre {\n            background-color: #2d2d2d;\n            padding: 1rem;\n            border-radius: 0.5rem;\n            overflow-x: auto;\n            margin: 1rem 0;\n        }\n        .markdown-content code {\n            background-color: #2d2d2d;\n            padding: 0.2rem 0.4rem;\n            border-radius: 0.25rem;\n        }\n        .markdown-content ul {\n            list-style-type: disc;\n            padding-left: 1.5rem;\n            margin: 1rem 0;\n        }\n        .markdown-content ol {\n            list-style-type: decimal;\n            padding-left: 1.5rem;\n            margin: 1rem 0;\n        }\n        .markdown-content blockquote {\n            border-left: 4px solid #3b82f6;\n            padding-left: 1rem;\n            margin: 1rem 0;\n            color: #64748b;\n        }\n    ",
    }}
  />
  {/* Navigation Bar */}
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center">
              <i className="fas fa-code text-white" />
            </div>
            <span className="ml-2 text-xl font-bold text-dark">
              DevMicro<span className="text-primary">Blog</span>
            </span>
          </div>
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            <a
              href="#"
              className="border-primary text-dark inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              id="nav-home"
            >
              Home
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              id="nav-trending"
            >
              Trending
            </a>
            <a
              href="#"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              id="nav-bookmarks"
            >
              Bookmarks
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              id="create-post-btn"
            >
              <i className="fas fa-plus mr-2" /> New Post
            </button>
          </div>
          <div className="ml-3 relative">
            <div>
              <button
                className="bg-gray-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                id="user-menu-button"
              >
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                  JS
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left Sidebar */}
      <div className="md:w-1/4 lg:w-1/5 space-y-6">
        {/* User Profile Card */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-3">
              JS
            </div>
            <h3 className="text-lg font-bold text-center">John Smith</h3>
            <p className="text-gray-500 text-sm text-center">
              Full Stack Developer
            </p>
            <div className="mt-4 flex space-x-4">
              <div className="text-center">
                <p className="font-bold">42</p>
                <p className="text-xs text-gray-500">Posts</p>
              </div>
              <div className="text-center">
                <p className="font-bold">128</p>
                <p className="text-xs text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold">87</p>
                <p className="text-xs text-gray-500">Following</p>
              </div>
            </div>
          </div>
        </div>
        {/* Trending Tags */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-lg mb-4">Trending Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="tag-chip bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full cursor-pointer">
              #javascript
            </span>
            <span className="tag-chip bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full cursor-pointer">
              #reactjs
            </span>
            <span className="tag-chip bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full cursor-pointer">
              #python
            </span>
            <span className="tag-chip bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full cursor-pointer">
              #webdev
            </span>
            <span className="tag-chip bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full cursor-pointer">
              #docker
            </span>
            <span className="tag-chip bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full cursor-pointer">
              #tailwindcss
            </span>
            <span className="tag-chip bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full cursor-pointer">
              #ai
            </span>
            <span className="tag-chip bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full cursor-pointer">
              #github
            </span>
          </div>
        </div>
        {/* GitHub Integration */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-lg mb-2">GitHub Integration</h3>
          <p className="text-sm text-gray-600 mb-4">
            Connect your GitHub account to showcase your projects
          </p>
          <button className="w-full bg-gray-800 hover:bg-black text-white py-2 px-4 rounded-md flex items-center justify-center">
            <i className="fab fa-github mr-2" /> Connect GitHub
          </button>
        </div>
      </div>
      {/* Main Feed */}
      <div className="md:w-2/4 lg:w-3/5">
        {/* Create Post Card */}
        <div
          className="bg-white rounded-xl shadow-sm mb-6"
          id="create-post-card"
        >
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                  JS
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <button
                  className="w-full text-left text-gray-500 border border-gray-300 rounded-lg px-4 py-2 hover:border-gray-400 focus:outline-none"
                  id="open-editor-btn"
                >
                  Share your thoughts or code snippet...
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Post Feed */}
        <div id="post-feed">
          {/* Post 1 */}
          <div className="post-card bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">
                      ML
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Mary Lee</h4>
                    <p className="text-gray-500 text-sm">Posted 3 hours ago</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <i className="fas fa-ellipsis-h" />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">
                  Understanding React Hooks Performance
                </h3>
                {/* AI Summary */}
                <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-robot text-primary text-lg mt-1" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-primary">
                        AI Summary
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        React Hooks optimize performance by reducing component
                        complexity. Proper use of useMemo and useCallback
                        prevents unnecessary re-renders. Custom hooks enable
                        reusable stateful logic across components.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Post Content */}
                <div className="markdown-content mb-4">
                  <p>
                    When working with React Hooks, it's crucial to understand
                    their performance implications. Here's a common pattern I
                    see:
                  </p>
                  <pre className="code-block p-4 rounded-lg mt-3">
                    <code>
                      function MyComponent() {"{"}
                      {"\n"}
                      {"  "}const [data, setData] = useState(null);{"\n"}
                      {"  "}
                      {"\n"}
                      {"  "}// ❌ Avoid: This runs on every render{"\n"}
                      {"  "}const processedData = processData(data);{"\n"}
                      {"  "}
                      {"\n"}
                      {"  "}// ✅ Better: Memoize expensive calculations{"\n"}
                      {"  "}const processedData = useMemo(() =&gt;
                      processData(data), [data]);{"\n"}
                      {"  "}
                      {"\n"}
                      {"  "}return &lt;div&gt;{"{"}processedData{"}"}
                      &lt;/div&gt;;{"\n"}
                      {"}"}
                    </code>
                  </pre>
                  <p>
                    Using <code>useMemo</code> prevents recalculating on every
                    render when dependencies haven't changed.
                  </p>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag-chip bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full cursor-pointer">
                    #reactjs
                  </span>
                  <span className="tag-chip bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full cursor-pointer">
                    #performance
                  </span>
                  <span className="tag-chip bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full cursor-pointer">
                    #hooks
                  </span>
                  <span className="tag-chip bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full cursor-pointer">
                    #javascript
                  </span>
                </div>
                {/* Actions */}
                <div className="flex justify-between border-t border-gray-200 pt-4">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-blue-500">
                      <i className="far fa-comment mr-1" />
                      <span>24</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-green-500">
                      <i className="fas fa-retweet mr-1" />
                      <span>8</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-red-500">
                      <i className="far fa-heart mr-1" />
                      <span>42</span>
                    </button>
                  </div>
                  <button
                    className="flex items-center text-gray-500 hover:text-yellow-500 bookmark-btn"
                    data-post={1}
                  >
                    <i className="far fa-bookmark mr-1" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Comments Section */}
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex items-start space-x-3 mb-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-semibold">
                    JS
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg border border-gray-200">
                    <textarea
                      className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Add a comment..."
                      rows={2}
                      defaultValue={""}
                    />
                    <div className="flex justify-end p-2">
                      <button className="bg-primary text-white px-4 py-1 rounded-md text-sm">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Existing Comments */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-semibold">
                      TS
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex justify-between">
                        <h4 className="font-bold">Tom Smith</h4>
                        <span className="text-gray-500 text-sm">
                          2 hours ago
                        </span>
                      </div>
                      <p className="mt-1">
                        Great example! I'd also recommend using React DevTools
                        Profiler to identify unnecessary re-renders.
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <button className="flex items-center hover:text-primary">
                          <i className="far fa-thumbs-up mr-1" /> 5
                        </button>
                        <button className="flex items-center ml-3 hover:text-primary reply-btn">
                          <i className="far fa-comment mr-1" /> Reply
                        </button>
                      </div>
                    </div>
                    {/* Reply */}
                    <div className="comment-reply mt-3 ml-4 pl-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-semibold">
                            ML
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-white rounded-lg p-3">
                            <div className="flex justify-between">
                              <h4 className="font-bold">Mary Lee</h4>
                              <span className="text-gray-500 text-sm">
                                1 hour ago
                              </span>
                            </div>
                            <p className="mt-1">
                              Thanks Tom! The Profiler is indeed essential for
                              performance optimization.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Post 2 */}
          <div className="post-card bg-white rounded-xl shadow-sm mb-6 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">
                      AR
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Alex Rivera</h4>
                    <p className="text-gray-500 text-sm">Posted 1 day ago</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <i className="fas fa-ellipsis-h" />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">
                  Python Type Hinting Best Practices
                </h3>
                {/* AI Summary */}
                <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <i className="fas fa-robot text-primary text-lg mt-1" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-primary">
                        AI Summary
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        Python type hints improve code readability and
                        maintainability. Use generics for container types and
                        Union for multiple types. Type checkers like mypy
                        enforce correctness.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Post Content */}
                <div className="markdown-content mb-4">
                  <p>
                    Type hints have become essential in modern Python
                    development. Here are some best practices:
                  </p>
                  <pre className="code-block p-4 rounded-lg mt-3">
                    <code>
                      from typing import List, Dict, Optional{"\n"}
                      {"\n"}def process_items({"\n"}
                      {"    "}items: List[str], {"\n"}
                      {"    "}prices: Dict[str, float]{"\n"}) -&gt;
                      Optional[float]:{"\n"}
                      {"    "}# Process items and return total price{"\n"}
                      {"    "}total = sum(prices.get(item, 0.0) for item in
                      items){"\n"}
                      {"    "}return total if total &gt; 0 else None
                    </code>
                  </pre>
                  <p>Key points:</p>
                  <ul>
                    <li>
                      Use <code>Optional</code> for values that can be None
                    </li>
                    <li>Specify container types with generics</li>
                    <li>Run mypy regularly in your CI pipeline</li>
                  </ul>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag-chip bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full cursor-pointer">
                    #python
                  </span>
                  <span className="tag-chip bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full cursor-pointer">
                    #typing
                  </span>
                  <span className="tag-chip bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full cursor-pointer">
                    #bestpractices
                  </span>
                </div>
                {/* Actions */}
                <div className="flex justify-between border-t border-gray-200 pt-4">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-blue-500">
                      <i className="far fa-comment mr-1" />
                      <span>16</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-green-500">
                      <i className="fas fa-retweet mr-1" />
                      <span>5</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-red-500">
                      <i className="far fa-heart mr-1" />
                      <span>38</span>
                    </button>
                  </div>
                  <button
                    className="flex items-center text-gray-500 hover:text-yellow-500 bookmark-btn"
                    data-post={2}
                  >
                    <i className="far fa-bookmark mr-1" />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Load More */}
        <div className="text-center mt-6">
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50">
            Load More Posts
          </button>
        </div>
      </div>
      {/* Right Sidebar */}
      <div className="md:w-1/4 lg:w-1/5 space-y-6">
        {/* AI Features Card */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-lg mb-4">AI-Powered Features</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-robot text-primary" />
              </div>
              <div className="ml-3">
                <h4 className="font-medium">Auto-Summary</h4>
                <p className="text-sm text-gray-600">
                  AI generates concise summaries of your posts
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-tags text-primary" />
              </div>
              <div className="ml-3">
                <h4 className="font-medium">Smart Tagging</h4>
                <p className="text-sm text-gray-600">
                  Relevant tags suggested automatically
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-lightbulb text-primary" />
              </div>
              <div className="ml-3">
                <h4 className="font-medium">Code Analysis</h4>
                <p className="text-sm text-gray-600">
                  Get insights on your code snippets
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Community Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-lg mb-4">Community Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Total Posts</span>
              <span className="font-bold">12,842</span>
            </div>
            <div className="flex justify-between">
              <span>Active Users</span>
              <span className="font-bold">3,215</span>
            </div>
            <div className="flex justify-between">
              <span>Comments Today</span>
              <span className="font-bold">1,247</span>
            </div>
            <div className="flex justify-between">
              <span>Code Snippets</span>
              <span className="font-bold">8,936</span>
            </div>
          </div>
        </div>
        {/* GitHub Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-lg mb-4">GitHub Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <i className="fab fa-github text-gray-800" />
              </div>
              <div className="ml-3">
                <h4 className="font-medium">react-project</h4>
                <p className="text-sm text-gray-600">Updated 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <i className="fab fa-github text-gray-800" />
              </div>
              <div className="ml-3">
                <h4 className="font-medium">python-toolkit</h4>
                <p className="text-sm text-gray-600">Updated 1 day ago</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 text-center text-primary font-medium hover:underline">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  </main>
  {/* Create Post Modal */}
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden"
    id="create-post-modal"
  >
    <div className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-bold">Create New Post</h3>
        <button
          id="close-modal-btn"
          className="text-gray-500 hover:text-gray-700"
        >
          <i className="fas fa-times" />
        </button>
      </div>
      <div className="flex-1 overflow-auto p-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="post-title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="post-title"
            type="text"
            placeholder="Post title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="post-content"
          >
            Content
          </label>
          <div className="border rounded-md overflow-hidden">
            <div className="flex border-b">
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                <i className="fas fa-bold" />
              </button>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                <i className="fas fa-italic" />
              </button>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                <i className="fas fa-link" />
              </button>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                <i className="fas fa-code" />
              </button>
              <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                <i className="fas fa-image" />
              </button>
            </div>
            <textarea
              className="w-full h-48 p-4 focus:outline-none"
              id="post-content"
              placeholder="Write your post here... Markdown supported"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tags
          </label>
          <div className="flex flex-wrap gap-2 mb-2" id="selected-tags">
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full flex items-center">
              #reactjs
              <button className="ml-1 text-blue-800 hover:text-blue-900">
                <i className="fas fa-times" />
              </button>
            </span>
          </div>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tag-input"
              type="text"
              placeholder="Add tags..."
            />
            <div className="absolute right-3 top-2">
              <button
                className="text-gray-500 hover:text-primary"
                id="ai-tags-btn"
              >
                <i className="fas fa-magic mr-1" /> AI Suggest
              </button>
            </div>
          </div>
        </div>
        <div
          className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg mb-4 hidden"
          id="ai-summary-section"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <i className="fas fa-robot text-primary text-lg mt-1" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-primary">AI Summary</p>
              <p className="text-sm text-gray-700 mt-1" id="ai-summary-text">
                Summary will be generated here...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 border-t flex justify-between">
        <div>
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            id="ai-summary-btn"
          >
            <i className="fas fa-robot mr-2" /> Generate AI Summary
          </button>
        </div>
        <div>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 mr-2">
            Save Draft
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
            Publish Post
          </button>
        </div>
      </div>
    </div>
  </div>
</>;

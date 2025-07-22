import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faPlus,
  faEllipsisH,
  faRobot,
  faComment,
  faRetweet,
  faHeart,
  faBookmark,
  faThumbsUp,
  faBold,
  faItalic,
  faLink,
  faImage,
  faMagic,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faComment as farComment,
  faHeart as farHeart,
  faBookmark as farBookmark,
  faThumbsUp as farThumbsUp,
} from '@fortawesome/free-regular-svg-icons';

const MainPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAiSummary, setShowAiSummary] = useState(false);
  const [selectedTags, setSelectedTags] = useState(['#reactjs']);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Mary Lee',
      authorInitials: 'ML',
      authorColor: 'bg-green-500',
      timeAgo: '3 hours ago',
      title: 'Understanding React Hooks Performance',
      aiSummary:
        'React Hooks optimize performance by reducing component complexity. Proper use of useMemo and useCallback prevents unnecessary re-renders. Custom hooks enable reusable stateful logic across components.',
      content: `When working with React Hooks, it's crucial to understand their performance implications. Here's a common pattern I see:

\`\`\`javascript
function MyComponent() {
  const [data, setData] = useState(null);
  
  // ❌ Avoid: This runs on every render
  const processedData = processData(data);
  
  // ✅ Better: Memoize expensive calculations
  const processedData = useMemo(() => processData(data), [data]);
  
  return <div>{processedData}</div>;
}
\`\`\`

Using \`useMemo\` prevents recalculating on every render when dependencies haven't changed.`,
      tags: ['#reactjs', '#performance', '#hooks', '#javascript'],
      comments: 24,
      retweets: 8,
      likes: 42,
      bookmarked: false,
    },
    {
      id: 2,
      author: 'Alex Rivera',
      authorInitials: 'AR',
      authorColor: 'bg-purple-500',
      timeAgo: '1 day ago',
      title: 'Python Type Hinting Best Practices',
      aiSummary:
        'Python type hints improve code readability and maintainability. Use generics for container types and Union for multiple types. Type checkers like mypy enforce correctness.',
      content: `Type hints have become essential in modern Python development. Here are some best practices:

\`\`\`python
from typing import List, Dict, Optional

def process_items(
    items: List[str], 
    prices: Dict[str, float]
) -> Optional[float]:
    # Process items and return total price
    total = sum(prices.get(item, 0.0) for item in items)
    return total if total > 0 else None
\`\`\`

Key points:
- Use \`Optional\` for values that can be None
- Specify container types with generics
- Run mypy regularly in your CI pipeline`,
      tags: ['#python', '#typing', '#bestpractices'],
      comments: 16,
      retweets: 5,
      likes: 38,
      bookmarked: false,
    },
  ]);

  const trendingTags = ['#javascript', '#reactjs', '#python', '#webdev', '#docker', '#tailwindcss', '#ai', '#github'];

  const handleBookmark = (postId) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post)));
  };

  const handleCreatePost = () => {
    setShowCreateModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
    setShowAiSummary(false);
  };

  const handleGenerateAiSummary = () => {
    setShowAiSummary(true);
  };

  const handleGenerateAiTags = () => {
    setSelectedTags(['#reactjs', '#performance', '#hooks']);
  };

  return (
    <div className="bg-gray-50 text-slate-800 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-blue-500 w-8 h-8 rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faCode} className="text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-slate-800">
                  DevMicro<span className="text-blue-500">Blog</span>
                </span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a
                  href="#"
                  className="border-blue-500 text-slate-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Trending
                </a>
                <a
                  href="#"
                  className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Bookmarks
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={handleCreatePost}
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  New Post
                </button>
              </div>
              <div className="ml-3 relative">
                <div>
                  <button className="bg-gray-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
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
                <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-content-center text-white text-2xl font-bold mb-3">
                  JS
                </div>
                <h3 className="text-lg font-bold text-center">John Smith</h3>
                <p className="text-gray-500 text-sm text-center">Full Stack Developer</p>
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
                <span className="tag-chip bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200 transition-all duration-200">#javascript</span>
                <span className="tag-chip bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-green-200 transition-all duration-200">#reactjs</span>
                <span className="tag-chip bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-purple-200 transition-all duration-200">#python</span>
                <span className="tag-chip bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-yellow-200 transition-all duration-200">#webdev</span>
                <span className="tag-chip bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-red-200 transition-all duration-200">#docker</span>
                <span className="tag-chip bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-indigo-200 transition-all duration-200">#tailwindcss</span>
                <span className="tag-chip bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-pink-200 transition-all duration-200">#ai</span>
                <span className="tag-chip bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-teal-200 transition-all duration-200">#github</span>
              </div>
            </div>

            {/* GitHub Integration */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-lg mb-2">GitHub Integration</h3>
              <p className="text-sm text-gray-600 mb-4">Connect your GitHub account to showcase your projects</p>
              <button className="w-full bg-gray-800 hover:bg-black text-white py-2 px-4 rounded-md flex items-center justify-center">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                Connect GitHub
              </button>
            </div>
          </div>

          {/* Main Feed */}
          <div className="md:w-2/4 lg:w-3/5">
            {/* Create Post Card */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                      JS
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <button
                      className="w-full text-left text-gray-500 border border-gray-300 rounded-lg px-4 py-2 hover:border-gray-400 focus:outline-none"
                      onClick={handleCreatePost}
                    >
                      Share your thoughts or code snippet...
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Feed */}
            <div>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} onBookmark={handleBookmark} />
              ))}
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
                    <FontAwesomeIcon icon={faRobot} className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Auto-Summary</h4>
                    <p className="text-sm text-gray-600">AI generates concise summaries of your posts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faMagic} className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Smart Tagging</h4>
                    <p className="text-sm text-gray-600">Relevant tags suggested automatically</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faCode} className="text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Code Analysis</h4>
                    <p className="text-sm text-gray-600">Get insights on your code snippets</p>
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
                    <FontAwesomeIcon icon={faGithub} className="text-gray-800" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">react-project</h4>
                    <p className="text-sm text-gray-600">Updated 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FontAwesomeIcon icon={faGithub} className="text-gray-800" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">python-toolkit</h4>
                    <p className="text-sm text-gray-600">Updated 1 day ago</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-center text-blue-500 font-medium hover:underline">
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Create Post Modal */}
      {showCreateModal && (
        <CreatePostModal
          onClose={handleCloseModal}
          showAiSummary={showAiSummary}
          onGenerateAiSummary={handleGenerateAiSummary}
          onGenerateAiTags={handleGenerateAiTags}
          selectedTags={selectedTags}
        />
      )}
    </div>
  );
};

// Post Card Component
const PostCard = ({ post, onBookmark }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm mb-6 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div
                className={`h-10 w-10 rounded-full ${post.authorColor} flex items-center justify-center text-white font-semibold`}
              >
                {post.authorInitials}
              </div>
            </div>
            <div>
              <h4 className="font-bold">{post.author}</h4>
              <p className="text-gray-500 text-sm">{post.timeAgo}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>

          {/* AI Summary */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faRobot} className="text-blue-500 text-lg mt-1" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-blue-500">AI Summary</p>
                <p className="text-sm text-gray-700 mt-1">{post.aiSummary}</p>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="markdown-content mb-4">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-blue-200 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex justify-between border-t border-gray-200 pt-4">
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-500 hover:text-blue-500">
                <FontAwesomeIcon icon={farComment} className="mr-1" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-green-500">
                <FontAwesomeIcon icon={faRetweet} className="mr-1" />
                <span>{post.retweets}</span>
              </button>
              <button className="flex items-center text-gray-500 hover:text-red-500">
                <FontAwesomeIcon icon={farHeart} className="mr-1" />
                <span>{post.likes}</span>
              </button>
            </div>
            <button
              className={`flex items-center ${
                post.bookmarked ? 'text-yellow-500' : 'text-gray-500'
              } hover:text-yellow-500`}
              onClick={() => onBookmark(post.id)}
            >
              <FontAwesomeIcon icon={post.bookmarked ? faBookmark : farBookmark} className="mr-1" />
              <span>{post.bookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
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
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Add a comment..."
                  rows="2"
                ></textarea>
                <div className="flex justify-end p-2">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm">Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Create Post Modal Component
const CreatePostModal = ({ onClose, showAiSummary, onGenerateAiSummary, onGenerateAiTags, selectedTags }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-bold">Create New Post</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="post-title">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="post-content">
              Content
            </label>
            <div className="border rounded-md overflow-hidden">
              <div className="flex border-b">
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faBold} />
                </button>
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faItalic} />
                </button>
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faLink} />
                </button>
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faCode} />
                </button>
                <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faImage} />
                </button>
              </div>
              <textarea
                className="w-full h-48 p-4 focus:outline-none"
                id="post-content"
                placeholder="Write your post here... Markdown supported"
              ></textarea>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full flex items-center"
                >
                  {tag}
                  <button className="ml-1 text-blue-800 hover:text-blue-900">
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </span>
              ))}
            </div>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tag-input"
                type="text"
                placeholder="Add tags..."
              />
              <div className="absolute right-3 top-2">
                <button className="text-gray-500 hover:text-blue-500" onClick={onGenerateAiTags}>
                  <FontAwesomeIcon icon={faMagic} className="mr-1" />
                  AI Suggest
                </button>
              </div>
            </div>
          </div>

          {showAiSummary && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon icon={faRobot} className="text-blue-500 text-lg mt-1" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-blue-500">AI Summary</p>
                  <p className="text-sm text-gray-700 mt-1">
                    React Hooks provide a powerful way to manage state and side effects in functional components. This
                    post explores best practices for optimizing performance with useMemo and useCallback to prevent
                    unnecessary re-renders.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t flex justify-between">
          <div>
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              onClick={onGenerateAiSummary}
            >
                             <FontAwesomeIcon icon={faRobot} className="mr-2" />
               Generate AI Summary
            </button>
          </div>
          <div>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 mr-2">
              Save Draft
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Publish Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

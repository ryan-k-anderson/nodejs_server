What is Node?
-	Runtime environment built on Google V8 JavaScript engine which is used in Chrome
-	Allows us to us JavaScript outside of a browser context
o	E.g., can use directly on a computer or server OS
o	Has support for HTTP, reading from / writing to files

“Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.”
-	Many server languages instantiate every client request on a new thread, this takes up system memory.
-	Node runs all client on a single thread and I/) operations are event-based. This makes it highly scalable compared to traditional server-side languages that have limited threads.

Event Loop?
-	Once script executes, Node register events and enters an event loop where it checks for events continuously
-	Triggers a callback when an event is detected. This all happens asynchronously and it is non-blocking

Why Node?
-	Very fast
-	Code is written in plain JavaScript
-	Node Package Manager (NPM) is great
-	Well supported, very popular, has active community

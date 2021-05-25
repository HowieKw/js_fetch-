# What is fetch?

- an interface that allows us to push and pull data from a server 
- it is asynchronous meaning that it will allow any code after it to run while it is being completed
- it is a method that is implicitly ran on the window object


## How to use fetch?
``` fetch(url, [options]) ```

1. url will be the path that is being accessed
2. options can be a variety of additional information, such as headers, authentication etc.
3. by default fetch makes a `get` request
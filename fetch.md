# What is fetch?

- The Fetch API is a simpler, easy-to-use version of XMLHttpRequest to consume resources asynchronously
- an interface that allows us to push and pull data from a server 
- it is asynchronous meaning that it will allow any code after it to run while it is being completed
- it is a method that is implicitly ran on the window object

## How to use fetch?

``` fetch(url, [options]) ```

- url will be the path that is being accessed
- options can be a variety of additional information, such as headers, authentication etc.
- by default fetch makes a `get` request

## Promises 

- When a fetch request is completed successfully, it will return a Promise. 
- A promise will have two statuses: Fulfilled or Rejected
- Inside this first promise, there is a response 
- We will want to jsonify this response inside of a promise method `.then` like so:

```fetch(url).then(res => res.json())```
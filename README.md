#Backbone-ToDo
![Backbone.js Logo](http://backbonejs.org/docs/images/backbone.png "Backbone.js Logo")

The project goal was learning about Backbone by doing a simple example in order to get used to the more common terms of the library.

## Demo
https://goo.gl/GxQbD3

##What is it?

To get started, the first thing that you need to know about Backbone is that it is not a framework, such as Angular or React, it is a library that allows us to create interactive web apps. An interesting thing about this library is that has a hard dependency to jQuery and underscore.js, both are javascript libraries.

##Concepts
Backbone is composed by:
* Views
* Events
* Models
* Collections
* Routers

### Views
Views are the equivalent to controllers in other frameworks, allowing us to listen for changes in the UI, handle user events, etc.
``` js
var AppView = Backbone.View.extend({
  // el - stands for element. Every view has a element associate in with HTML
  //      content will be rendered.
  el: '#container',
  // It's the first function called when this view it's instantiated.
  initialize: function(){
    this.render();
  },
  // $el - it's a cached jQuery object (el), in which you can use jQuery functions
  //       to push content. Like the Hello World in this case.
  render: function(){
    this.$el.html("Hello World");
  }
});
var appView = new AppView();
```

```js
var AppView = Backbone.View.extend({
  el: $('#container'),
  // template which has the placeholder 'who' to be substitute later
  template: _.template("<h3>Hello <%= who %></h3>"),
  initialize: function(){
    this.render();
  },
  render: function(){
    // render the function using substituting the varible 'who' for 'world!'.
    this.$el.html(this.template({who: 'world!'}));
    //***Try putting your name instead of world.
  }
});
var appView = new AppView();
```

Furthermore, we can use templates in order to render html and pass variables to the UI, it is a similar behavior how Jade works.
### Models
Models are the heart of every app. Contains the interactive data and the logic surrounding it, such as getters and setters, emits events when data changes, etc.
It manages an internal table of data attributes, and triggers events when any of its data is modified. Models should be able to be passed around throughout your app, and used anywhere that data is needed.
```js
app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});
```

### Collections
A collection helps you to deal with a group of related models, handling the loading and saving of new models to the server, and providing helper functions for performing computations agains a list of models, listen for events when any element in the collection changes, etc.
You need to specify the url parameter with a relative url, where the model’s resource would be located on the server.

```js
app.TodoList = Backbone.Collection.extend({
  model: app.Todo,
  localStorage: new Store("backbone-todo")// Example using localStorage, but in other scenario, it should have a sever's url.
});
```

### Events
Gives us the ability to bind and trigger custom events. We can trigger a function when the user make click in a button.

Events are written in the following format:
```js
//{"<EVENT_TYPE> <ELEMENT_ID>": "<CALLBACK_FUNTION>"}
events: {'keypress #new-todo': 'createTodoOnEnter'};
```
### Routes
Allows us to make reference to certain state or location of the web app.

## Project Installation
### Previous considerations
* You must have nodejs installed in your environment

### To make changes
If you want to run this project and perform changes, you must open your terminal and run:
```sh
$ npm install --dev
```

Then, if you want to start the server, in the terminal run:
```sh
$ npm run dev
```

### To production
Simply open your terminal and run:
```sh
$ npm install
```

And then:
```sh
$ npm start
```

##References
* [Backbone for Absolute Beginners](http://adrianmejia.com/blog/2012/09/11/backbone-dot-js-for-absolute-beginners-getting-started/)
* [Official Backbone's page](http://backbonejs.org/)
* [Official ToDo example](http://backbonejs.org/docs/todos.html)

# Sort and Peace

*using SortableJS and mathJS for a fun little web app, themed around the three main characters of Leo Tolstoy's novel 'War and Peace': Pierre, Andrei and Natasha* <br />

### specification
- photos of all 15 actors who have played one of these roles in the five film / TV adaptations of 'War and Peace' (excluding 1915), grouped into three sortable character areas
- dragging a photo into the drop area of the character triggers the loading of data attributes from the image (in future this will come from a database)
- the standard age deviation between actors and characters will automatically be calculated with a mathematical library

## technologies used:

- [sortable.js](https://github.com/RubaXa/Sortable/) - because of its ability to restrict which photo can be dropped into which drop area, without jQuery
- [maths.js](http://mathjs.org/) - for the standard deviation calculations
- [Express](http://expressjs.com/) web framework and [ejs](http://www.embeddedjs.com/) templating engine
- [flat-ui bootstrap](http://designmodo.github.io/Flat-UI/)
- TDD: Selenium, mocha, chai, grunt webdriver

## how to install from scratch:

clone the repo and install the npm dependencies:
~~~
  ... $ git clone git@github.com:globalavocado/Sort-and-Peace.git 
  ... $ npm install –d
~~~

start the Node server:
~~~
  ... $ npm start 
~~~

### run the tests:

install Selenium globally and start Selenium server
~~~
  ... $ npm install -g selenium-standalone@latest
  ... $ selenium-standalone install
  ... $ selenium-standalone start
~~~

run the test suite:
~~~
  ... $ grunt 
~~~
but this will also work:
~~~
  ... $ npm test 
~~~
# Sort and Peace

*using SortableJS and mathJS for a fun little web app, themed around the three main characters of Leo Tolstoy's novel 'War and Peace': Pierre, Andrei and Natasha* <br />

### specification
- photos of all 15 actors who have played one of these roles in the five film / TV adaptations of 'War and Peace' (excluding 1915), grouped into three sortable character areas
- dragging a photo into the drop area of the character triggers the loading of metadata from the database
- the standard age deviation between actors and characters will automatically be calculated with a mathematical library

## technologies used:

- [sortable.js](https://github.com/RubaXa/Sortable/) - because of its ability to restrict which photo can be dropped into which drop area, without jQuery
- [maths.js](http://mathjs.org/) - for the standard deviation calculations
- [flat-ui bootstrap](http://designmodo.github.io/Flat-UI/)
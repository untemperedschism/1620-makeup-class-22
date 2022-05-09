# 1620-makeup-class-22

Makeup class for 1620 may 2022

## working with templates, adding content to the DOM

There are several ways to insert new content into the DOM, creating dynamic web applications, online stores...

I like using the pattern below for three reasons:

1. You don’t need to learn a lot of new JavaScript, you are really just writing HTML
2. I think this is the easiest method to read, you don’t need to spend a lot of time working through this code to figure out what it is doing
3. This method most closely resembles code that you might write if you are using one of the popular JavaScript frontend frameworks, React, Svelt, Vue...
Which is maybe a sub-set of 1, you don’t have to learn as much new stuff.

Why wouldn’t you use this method? It is not as performant as some other methods. In practical applications you won’t find that this is your bottleneck(the thing slowing your application down) very often.

```jsx
const quark = {
	name: "Quark"
	age: 53
}

function personTemplate(person) {
	const template = `
		<article>
			<p>${person.name}</p>
			<p>${person.age}</p>
		</article>
	`
	return templace
}

function insertNewPerson(person) {
		const container = document.querySelector('.container')
		const personHTML = personTemplate(person)
		container.insertAdjacentHTML('afterbegin', personHTML)
}

insertNewPerson(quark)
```

[Template literals (Template strings) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

[Element.insertAdjacentHTML() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

## events

Events aren’t unique to JavaScript or Web programming.

In simplest term, an event is when something happens that triggers something else.

When you double click an image file in your file browser(regardless of OS) the image probably opens. There is a chain of events triggered by this double click. Software(the software you use to view images) opens that software then opens the image that you clicked.  All of this makes use of a number of tools working in conjunction to do something really simple, that most people never think about. 

As software developers, you have to think about it. The good news is that a lot of the heavy lifting, or hard work is done for you. Because this is a web development class, specifically intro to frontend, we are going to focus on web, and keep it easy by just looking at click events.

[Introduction to events - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

[Handling Events :: Eloquent JavaScript](https://eloquentjavascript.net/15_event.html)

## the event object

In the section above I said that a lot of the hard work has been done for your. There are two mechanisms at play that contribute to this, both are things provided by the browser.

1. Modern browsers have APIs that allow them register events of different types.
2. The **event object.**

When you click a button, or image, or...(anything) browsers create an event object. This is a JavaScript Object that contains a very large amount of data about the event. Some of the things included:

- what type of event (click, load, key press...)
- info about the element that was clicked
- x and y coordinates of the cursor

[Event reference | MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

[JS Event target versus currentTarget](https://www.youtube.com/watch?v=SpatM1W5wRQ)

[Handling Events in JavaScript](https://www.javascripttutorial.net/javascript-dom/handling-events-in-javascript/)

[What Does "(e)" Mean in JavaScript? - Event Handler Object Explained](https://www.youtube.com/watch?v=_BVkOvpyRI0)

## event delegation

Event delegation is an event handling pattern that makes use of event bubbling.

> The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
- [javascript.info](https://javascript.info/event-delegation)
> 

You do this for two reasons:

1. Make your code more efficient, less memory is used
2. Make your code easier to read

[Bubbling and capturing](https://javascript.info/bubbling-and-capturing)

[Event delegation](https://javascript.info/event-delegation)

[Understanding JavaScript Event Delegation Technique By Examples](https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/)

[How and Why to Use JavaScript Event Delegation](https://techstacker.com/javascript-event-delegation/)

## Practice

**This is optional practice, they won’t be graded. You can also try to implement some of this in your projects.**

Complete the code in the “assign-starter” directory to create something that resembles a simple online store. I have provided two arrays of climbing shoe images hosted on [cloudinary](https://cloudinary.com/) however if you want to you can replace them with something else I won’t be looking at your work, this is just practice for you, so make it your own.

Don’t add anything to the HTML document

Use event delegation in completing the functionality described below

Try to add the following functionality:

When you click on five ten link in the header, display all of the five ten shoes in a grid.

When you click on the scarpa link in the header, display all of the scarpa shoes in a grid.

When an individual shoe is clicked on display a larger image of the this shoe, with some sort of simple close button (try using font awesome for this)

When the close button is clicked you return to the grid view.

Only one of these views will be displayed at a time.

- five ten grid
- scarpa grid
- individual shoe

If you want to continue practicing try to add more features that might be in a real online store such as adding items to a shopping cart.

Keep practicing and you will keep getting getting better at writing code.

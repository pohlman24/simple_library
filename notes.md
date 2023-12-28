# LEARNED 

### Event delegation 
To access dom elements that arent always in the DOM, you can use event delegations.
event delegations are when the parent element of the target element is used as the middle man for the eventlistener and you check what the target of the event is
- i used `booklistDiv` for mine. in html its just the parent tag around all the books that could be created
`if(event.target.id == "toggle-is-read")`

### Form Management 
- should also use the `<button type="submit"` for the submission button, not the "button" type and handle click events in js, 
- the submit type will by default reload the page, can use `event.preventDefault()` to prevent this
- this reset a form can use `this.reset()`
- get form details by accessing html ids `document.getElementById("bookTitle").value;`

## Datasets
- can add custom attributes to DOM elements called data attributes
- `DOMelement.dataset.index = bookIndex;`

## Modals
- can use the built in `<dialog>` tag
- to open the modal use `element.showModal()`
- to close the modal use `element.close()`
- to set up closing modal by clicking outside of it use the event.stopPropagation on top-most element inside of the modal
`form.addEventListener("mousedown", (event) => event.stopPropagation()`
`newBookDialog.addEventListener("mousedown", () => newBookDialog.close());`


# STYLE
- can access modal backdrop with the `::backdrop` tag
- I liked the styling I used for the form
    - used the input["type"] well 
    - making `label { display: block }` helped
- used the transition. set up is `transition: property time effect`

## Flex vs Grid for book showcase
- I initally used the flexbox and it worked well at first glance, i items would fill the rows and then auto wrap down nicely, but without using justify-items i couldnt get the spacing to be great but with 
jutsify-items, it made adding new books very bad as the the books swapped places and moved too much
    - advantage: auto wrap, easy and intutive for me
- Gird: the grid works well since you can use the 1fr and set up the rows and column templates but it doesnt have auto wrap so i had to learn about `repeat(auto-fit, minmax(300px, 1fr));` 
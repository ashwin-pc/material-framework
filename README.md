# Material Framework

## Highlights
The Material Framework is a combination of individual files, namely:
- card.css
- button.css
- form.css
- table.css
- fonts.css

they can be added either individually, or as a whole using the `material.min.css` file based on the need of the application.

##### Project Structure (optional)
````
.
├── css
├── js
├── img
└── fonts
 html files
````
 save the fonts folder from this repo _(from src or dist directory)_ in your project following this structure to use an offline version of the Roboto font with this framework.

## card.css
##### Basic Syntax
````
<div class="card">
  Enter card contents here...
</div>
````
### Options
With additional classes added to the Basic syntax we can control the various depth level and hover effect of the card styling.

1. Hover
2. Z-depth
 - z-0 to z-6
3. Size and Column
 - small (width : 300px)
 - regular (width : 500px) _(default)_
 - large (width : 700px)

Example:
````
<div class="card large hover z-1">
  Enter Card contents here...
</div>
````
##### Points to Note
- The card width can be manually set with the following syntax.

````
.card{
  max-width: //Set width here;
}
````

- The Card will follow the full device width when `device-width < card-width`.
- the `<h1>` tag is by default Center aligned with 0 top margin. Use it for card titles. Use other heading tags for subheadings for the card.
- A background image can be set by placing a file named `bg.jpg` in img folder of the root directory

## button.css
##### Basic Syntax
````
<button class="button">Button</button>
````    
or
````
<input type="button" class="button" value="Button"/>
````
Use the standard HTML syntax for buttons, but add a class of "button" to implement the style. For adding other options, just add the other classes to the same class attribute.

### Options

1. Effects
 - hover
 - raised
2. colors
 - grey
 - blue
 - red
 - green
 - blueGrey
3. narrow

Example:
````
<input type="button" class="button hover blue narrow" value="button"/>
````
##### Points to Note
- The button can be manually set with the following syntax. Remember to add the custom color class to the button element.

````
.button.customColor{
  color: //Set text color here;
  background-color: //Set button color here;
}
````

## form.css
### Usage
The usage of the form CSS styles has been kept very simple in-order to aide their ease of use. The form elements can be used normally without any class declarations, except in the form tag itself.

### Syntax
````
<form class="form">
   <!-- Enter form code here -->
</form>
````

#### __Important__
1. For text inputs, the label element __MUST BE PRESENT__ and kept as the __very next tag__ following the input text tag, and the input text element __MUST BE DECLARED required__

````
<input type="text" required/>
<label>Label for above input</label>
````

2. Change color of button by giving it an id or class and setting its `background-color` & `color` attributes.
3. add class full to the form to set text box, text area, select options to full form width.
4. The form by default has no margins. Set a margin attribute to the form class if necessary.

#### Elements supported
- [x] Text input with Label
 - text
 - number
 - email
 - password
 - color
 - date
 - tel
 - time
 - url
- [x] Select options
- [x] Default and Submit buttons
- [x] Disabled button
- [x] Text area
- [x] Radio
- [x] Check Box

#### Known issues
- Invalid values for text inputs with labels will result in the label returning to its default state when focus is lost.

## table.css
### Basic Syntax
````
<table class="table">
  //Table contents
</table>
````

### Options
- full _(width : 100%)_
- alternate _(alternate color rows)_
- center _(center align table cells)_

Example:
````
<table class="table full alternate center">
  //Table contents
</table>
````

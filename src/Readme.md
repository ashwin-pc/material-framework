# Readme.md

## button.css
##### Basic Syntax
    <button class="button">Button</button>
or

    <input type="button" class="button" value="Button"/>

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

    <input type="button" class="button hover blue narrow" value="button"/>


## form.css
### Usage
The useage of the form CSS styles has been kept very simple in-order to aide their ease of use. The form elements can be used normally without any class declarations, except in the form tag itself.

### Syntax
    <form class="form">
       <!-- Enter form code here -->
    </form>

#### __Important__
1. For text inputs, the label element __MUST BE PRESENT__ and kept as the __very next tag__ following the input text tag


    <input type="text"/>
    <label>Label for above input</label>

2. Change color of button by giving it an id or class and setting its background-color & color attributes.
3. add class full to the form to set text box, text area, select options to full form width.
4. The form by default has no margins. Set a margin attribute to the form class if necessary.

#### Elements supported
- [x] Text input with Label
- [x] Select options
- [x] Default and Submit buttons
- [ ] Disabled button
- [ ] Text area
- [ ] Radio
- [ ] Check Box

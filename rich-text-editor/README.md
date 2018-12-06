# Rich Text Editor, WYSIWYG, for Oracle JET based on Quill JS

JET  version : 5.0.0 and above

Quill JS version : 1.3.6

Quill Docs
https://quilljs.com/

## Usage
Put the complete code base inside "\src\js\jet-composites"

The to use it in view : 

```
<rich-text-editor id="richText" toolbar-options='["text-sizes","bold","color","order","bullet","italic", "image"]' content="{{content}}"/>
```

In viewModel (if you want to pass a default HTML/Text to be displayed):

```
self.content = ko.observable("<p> Hello World !</p> <b>Rich Text Editor by Soham </b>");
```

To use the method exposed by the web component:

in view, for example, define a button : 

```
<oj-button id='button1' on-oj-action='[[buttonClick]]'>Button 1</oj-button>
```

in viewModel, write something like below :

```
self.buttonClick = function(event){
    var innerHtm = $("#richText")[0].getUpdatedHTML();
    console.log(innerHtm);
    return true;
  }
```

## Toolbar options

These are the options you can use to enable the toolbar buttons and dropdwons :

text-sizes, bold, italic, underline, strike

color, background

quote, code-block, link

image, video

header1, header2, order, bullet, indent1, indent2

direction, align

sub-script, super-script, clean

If you are interested to know more about these toolbar options, check : https://quilljs.com/docs/formats/

## To add a Fonts dropdown use the slot provided by the component.
# How to use "fontsArea" slot

Define a "select" in the slot

```
<span slot="fontsArea">
   <select class="ql-font">
    <option selected>Sans Serif</option>
    <option value="roboto">Roboto</option>
    <option value="arial">Arial</option>
     <!-- and other Fonts -->
   </select>
</span>
```

Define CSS classes for each on the fonts selection

```
/* Set dropdown font-families */
  #toolbar-container .ql-font span[data-label="Sans Serif"]::before {
    font-family: "Sans Serif";
  }
  #toolbar-container .ql-font span[data-label="Roboto"]::before {
    font-family: "Roboto";
  }
  #toolbar-container .ql-font span[data-label="Arial"]::before {
    font-family: "Arial";
  }
  /* Set content font-families */
  .ql-font-roboto {
    font-family: "Roboto";
  }
  .ql-font-arial {
    font-family: "Arial";
  }
/* Do not set Sans Serif since it is the default font */
```

More info -> https://stackoverflow.com/questions/43728080/how-to-add-font-types-on-quill-js-with-toolbar-options

## Known limitation 
There are no min or max length support on Quill JS 1.3.6 version.


  
  

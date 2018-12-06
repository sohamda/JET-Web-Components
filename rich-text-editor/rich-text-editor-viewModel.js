/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
    ['ojs/ojcore', 'knockout', 'jquery', 'ojL10n!./resources/nls/rich-text-editor-strings', './libs/quill/quill'], function (oj, ko, $, componentStrings, Quill) {

    
    function RichTextEditor(context) {
        var self = this;
		
		// code to render the text editor.
		var node = document.querySelector("#editor-container");
		var editorContext = oj.Context.getContext(node).getBusyContext();
		
		editorContext.whenReady().then(function () {
		    // set default HTML
			document.querySelector("#editor-container").innerHTML = context.properties.content;
			
			// set toolbar option
			var options = {
				  modules: {
					toolbar: '#toolbar-container'
				  },
				  theme: 'snow'
				};
				
			// initialize Quill
			self.quill = new Quill('#editor-container', options);
			
		});
		
		// code for show/hide toolbar options
		
		self.sizeDisplay = "none";
		self.sizeBlockDisplay = "none";
		
		self.boldDisplay = "none";
		self.italicDisplay = "none";
		self.underlineDisplay = "none";
		self.strikeDisplay = "none";
		self.formatBlockDisplay = "none";
		
		self.colorDisplay = "none";
		self.backgroundColorDisplay = "none";
		self.colorBlockDisplay = "none";
		
		self.blockquoteDisplay = "none";
		self.codeblockDisplay = "none";
		self.linkDisplay = "none";
		self.linkBlockDisplay = "none";
		
		self.imageDisplay = "none";
		self.videoDisplay = "none";
		self.imageBlockDisplay = "none";
		
		self.header1Display = "none";
		self.header2Display = "none";
		self.headerBlockDisplay = "none";
		
		self.orderDisplay = "none";
		self.bulletDisplay = "none";
		self.indent1Display = "none";
		self.indent2Display = "none";
		self.indentBlockDisplay = "none";
		
		self.directionDisplay = "none";
		self.alignDisplay = "none";
		self.alignBlockDisplay = "none";
		
		self.subscriptDisplay = "none";
		self.superscriptDisplay = "none";
		self.scriptBlockDisplay = "none";
		
		self.cleanDisplay = "none";
		self.cleanBlockDisplay = "none";
		
		context.props.then(function (propertyMap) {			
			if(propertyMap.toolbarOptions) {
				propertyMap.toolbarOptions.forEach(function(item) {
					switch(item) {
						case "text-sizes":
							self.sizeDisplay = "inline";
							self.sizeBlockDisplay = "";
							break;
						case "bold":
							self.boldDisplay = "inline";
							self.formatBlockDisplay = "";
							break;
						case "italic":
							self.italicDisplay = "inline";							
							self.formatBlockDisplay = "";
							break;
						case "underline":
							self.underlineDisplay = "inline";	
							self.formatBlockDisplay = "";							
							break;
						case "strike":
							self.strikeDisplay = "inline";							
							self.formatBlockDisplay = "";
							break;
						case "color":
							self.colorDisplay = "inline";
							self.colorBlockDisplay = "";							
							break;
						case "background":
							self.backgroundColorDisplay = "inline";							
							self.colorBlockDisplay = "";
							break;
						case "quote":
							self.blockquoteDisplay = "inline";	
							self.linkBlockDisplay = "";							
							break;
						case "code-block":
							self.codeblockDisplay = "inline";							
							self.linkBlockDisplay = "";							
							break;
						case "link":
							self.linkDisplay = "inline";							
							self.linkBlockDisplay = "";							
							break;
						case "image":
							self.imageDisplay = "inline";							
							self.imageBlockDisplay = "";							
							break;
						case "video":
							self.videoDisplay = "inline";							
							self.imageBlockDisplay = "";
							break;
						case "header1":
							self.header1Display = "inline";							
							self.headerBlockDisplay = "";							
							break;
						case "header2":
							self.header2Display = "inline";							
							self.headerBlockDisplay = "";
							break;
						case "order":
							self.orderDisplay = "inline";	
							self.indentBlockDisplay = "";							
							break;
						case "bullet":
							self.bulletDisplay = "inline";							
							self.indentBlockDisplay = "";
							break;
						case "indent1":
							self.indent1Display = "inline";	
							self.indentBlockDisplay = "";							
							break;
						case "indent2":
							self.indent2Display = "inline";							
							self.indentBlockDisplay = "";
							break;
						case "direction":
							self.directionDisplay = "inline";	
							self.alignBlockDisplay = "";							
							break;
						case "align":
							self.alignDisplay = "inline";							
							self.alignBlockDisplay = "";							
							break;
						case "sub-script":
							self.subscriptDisplay = "inline";							
							self.scriptBlockDisplay = "";							
							break;
						case "super-script":
							self.superscriptDisplay = "inline";							
							self.scriptBlockDisplay = "";
							break;
						case "clean":
							self.cleanDisplay = "inline";		
							self.cleanBlockDisplay = "";
							break;
						default:
							text = "Nothing matched";
					}
				});
			}
        });
        		
    };
	
	//Implementation of the getUpdatedHTML component method
    RichTextEditor.prototype._getUpdatedHTML = function () {
        return $("#editor-container div:first-child" ).html();
    };

    return RichTextEditor;
});
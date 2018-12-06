/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcore', 'text!./rich-text-editor-view.html', './rich-text-editor-viewModel', 'text!./component.json', 'css!./rich-text-editor-styles', 
		'ojs/ojcomposite', 'css!./libs/quill/quill.bubble', 'css!./libs/quill/quill.snow'],
  function(oj, view, viewModel, metadata) {
    oj.Composite.register('rich-text-editor', {
      view: view, 
      viewModel: viewModel, 
      metadata: JSON.parse(metadata)
    });
  }
);
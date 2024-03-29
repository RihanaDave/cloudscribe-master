﻿CKEDITOR.editorConfig = function( config )
{
	config.entities = false;
	config.smiley_path = '/cr/images/emojis/';
	config.scayt_autoStartup = false;
	config.disableNativeSpellChecker = false;
    config.extraPlugins = 'cloudscribe-filedrop,autosave';
	config.autosave = { saveDetectionSelectors: "a[href^='javascript:__doPostBack'][id*='Save'],a[id*='Cancel'],button[id*='Save']", messageType: "no"};
	config.removePlugins = 'uploadimage,language'; //cloudscribe now does this via it's own mechanism to support drag/drop/paste image upload

	//this is needed if the language plugin is not removed above. Creates a list for the WCAG 3.1.2 Language of Parts specification
	config.language_list = [ 'en:English', 'cy:Welsh', 'fr:French', 'es:Spanish' ];

    config.fillEmptyBlocks = false;
    config.forcePasteAsPlainText = 'allow-word';
    config.filebrowserWindowHeight = '70%';
    config.filebrowserWindowWidth = '80%';

	config.allowedContent = true;
    config.extraAllowedContent = 'p(*)[*]{*};div(*)[*]{*};li(*)[*]{*};ul(*)[*]{*};span(*)[*]{*}';

	config.fontSize_defaultLabel = 'Normal';
    config.fontSize_sizes = 'X-Small/font-xsmall;Small/font-small;Normal/font-normal;Large/font-large;X-Large/font-xlarge';
    config.fontSize_style =
    {
		element:    'span',
		attributes: { 'class': '#(size)' },
		overrides:  [{ element: 'font', attributes: { 'size': null}}]
    };

	config.format_tags = 'p;h1;h2;h3;h4;pre;address;div';
	config.toolbarCanCollapse = true;
	config.toolbarStartupExpanded = true;

	var defaultToolbar =
	[
		{ name: 'document', items: [ 'Maximize','Sourcedialog', '-', 'Preview', 'Print', '-', 'Templates' ] },
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
		{ name: 'insert', items: [ 'Image', 'CodeSnippet', 'oembed', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak', 'Iframe', 'pre', 'EmojiPanel' ] },
		'/',
		{ name: 'styles', items: [ 'Format', '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'TextColor', 'BGColor', '-', 'RemoveFormat' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
		{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] }
	];

	var ckAll =
	[
		{ name: 'document', items: [ 'Maximize','Source', 'Sourcedialog', '-', 'NewPage', 'ExportPdf', 'Preview', 'Print', '-', 'Templates' ] },
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
		{ name: 'insert', items: [ 'Image', 'CodeSnippet', 'oembed', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak', 'Iframe', 'pre', 'EmojiPanel' ] },
		'/',
		{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize', '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'TextColor', 'BGColor', '-', 'CopyFormatting', 'RemoveFormat' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
		{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
		{ name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] }
	];

	config.toolbar_cloudscribedefault = defaultToolbar;
	config.toolbar_CKFull = ckAll;
	config.toolbar_Full = defaultToolbar;

	config.toolbar_Newsletter =
	[
		{ name: 'document', items: [ 'Maximize','Sourcedialog', '-', 'Preview', 'Print' ] },
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll' ] },
		{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },
		'/',
		{ name: 'styles', items: [ 'Format', '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'TextColor', 'BGColor', '-', 'RemoveFormat' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
		{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] }
	];

	config.toolbar_FullWithTemplates = defaultToolbar;

	config.toolbar_Forum =
	[
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll' ] },
		{ name: 'insert', items: [ 'HorizontalRule', 'SpecialChar', 'EmojiPanel' ] },
		{ name: 'styles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Blockquote' ] },
		{ name: 'links', items: [ 'Link', 'Unlink' ] }
	];

	config.toolbar_ForumWithImages =
	[
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo' ] },
		{ name: 'editing', items: [ 'Find', 'Replace', '-', 'SelectAll' ] },
		{ name: 'insert', items: [ 'Image', 'HorizontalRule', 'SpecialChar', 'EmojiPanel' ] },
		{ name: 'styles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript' ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Blockquote' ] },
		{ name: 'links', items: [ 'Link', 'Unlink' ] }
	];

	config.toolbar_AnonymousUser =
	[
		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'PasteText'] },
		{ name: 'insert', items: [ 'EmojiPanel' ] },
		{ name: 'styles', items: [ 'Bold', 'Italic', 'Underline'  ] },
		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Blockquote' ] },
		{ name: 'links', items: [ 'Link', 'Unlink' ] }
	];

	config.toolbar_None = [];

};

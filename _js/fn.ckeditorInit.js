// EDITOR
let myEditor1;
let myEditor2;


// EDITOR UPLOAD
function MyCustomUploadAdapterPlugin(editor) {
	editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
		return new UploadAdapter(loader);
	}
}

if (document.getElementById("ckeditor-classic")) {
	ClassicEditor.create(document.querySelector('#ckeditor-classic'), {
		extraPlugins: [MyCustomUploadAdapterPlugin],
		htmlSupport: {
			allow: [
				{
					name: /.*/,
					attributes: true,
					classes: true,
					styles: true
				},
			]
		},
		htmlEmbed: {
			showPreviews: true
		},
	})
	.then(editor => {	myEditor1 = editor;	})
	.catch(error => { console.error(error);	});
}

if (document.getElementById("ckeditor-classic2")) {
	ClassicEditor.create(document.querySelector('#ckeditor-classic2'), {
		extraPlugins: [MyCustomUploadAdapterPlugin],
		htmlSupport: {
			allow: [
				{
					name: /.*/,
					attributes: true,
					classes: true,
					styles: true
				},
			]
		},
		htmlEmbed: {
			showPreviews: true
		},
	})
	.then(editor => {	myEditor2 = editor;	})
	.catch(error => {	console.error(error); });
}

// EDITOR RESERT
function clearEditorContent(editorInstance) {
  if (editorInstance) {
    editorInstance.setData('');
  }
}
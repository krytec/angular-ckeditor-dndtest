import { Component, ViewChild } from '@angular/core';
import { ChangeEvent, CKEditor5, CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import * as DecoupledEditor from '../ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild( 'editor' ) editorComponent: CKEditorComponent;
  title = 'poc';
  public Editor = DecoupledEditor;

  public model = {
    editorData : '<p>Hello World</p>',
  }

  public myModel = {
    age: 17,
    name: 'donald'
  };

  public onReady( editor: CKEditor5.Editor ) {
    this.model.editorData = '<p>Hello World</p>';
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    // console.log('EditorData= ',this.model.editorData)
    // console.log( 'Data', data );
  }

  onDivDrag(event){
    console.log(event);
    event.dataTransfer.setData('cosimaobject', JSON.stringify(this.myModel));
    event.effectAllowed = "copyMove";
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { MaterialModule } from '../material';
import { TodosRoutingModule } from './todos-routing.module';
import {TodoStates} from './store';
import {TodoContainerComponent} from './todo-container/todo-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PipesModule} from '../shared/pipes';
import {FormComponent} from './form/form.component';
import {ListComponent} from './list/list.component';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    TodosRoutingModule,
    // NgxsStoragePluginModule.forRoot({
    //   key: 'todos',
    // }),
    NgxsModule.forFeature(TodoStates),
  ],
  declarations: [
    TodoContainerComponent,
      FormComponent,
      ListComponent,
  ],
  providers: [],
})
export class TodosModule {}

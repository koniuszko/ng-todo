import {Pipe, PipeTransform} from '@angular/core';
import {Task} from 'src/data';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Task[], category: string) {
    switch (category) {
      case 'all':
        return tasks;
      case 'active':
        return tasks.filter(t => t.active);
      case 'completed':
        return tasks.filter(t => !t.active);
      default:
        return tasks;
    }
  }
}

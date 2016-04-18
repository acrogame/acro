// Worker.js
// Various Workers to process Tasks

import {ITask} from './Task';
import {GameWorker} from './../workers/GameWorker';

export class Worker {
  
  constructor() {}
  
  static gameWorker(task: ITask):Promise<any> {
    console.log('Getting a gameWorker...');
    return new GameWorker(task.data).go();
  }
}
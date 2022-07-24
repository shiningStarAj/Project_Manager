import {Component,OnInit} from '@angular/core';
import {NodeService} from './nodeservice';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    files1: TreeNode[];

    files2: TreeNode[];
    
    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files1 = files);
        this.nodeService.getFiles().then(files => this.files2 = files);
    }
}

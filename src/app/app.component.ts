import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import { Router } from '@angular/router';

export class FileNode {
  children: FileNode[];
  filename: string;
  type: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  constructor(public router: Router) {
    
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.nestedDataSource.data = data);

    this.dataChange.next([
      {
        filename: "OverView",
        type: true,
        children: [
          {
            filename: "GeneralView",
            type: true,
            children: [
              {
                filename: "GeneralChild",
                type: false,
                children: [],
              }
            ],
          },
          {
            filename: "President Word",
            type: false,
            children: [],
          },
          {
            filename: "Goals",
            type: false,
            children: [],
          }
        ],
      },
      {
        filename: "Universities",
        type: true,
        children: [
              {
            filename: "KAU",
            type: true,
            children: [
              {
                filename: "KAU-1",
                type: false,
                children: [],
              },
              {
                filename: "KAU-2",
                type: false,
                children: [],
              },
              {
                filename: "KAU-3",
                type: true,
                children: [
                  {
                    filename: "KAU-3-1",
                    type: true,
                    children: [
                      {
                        filename: "KAU-3-1-1",
                        type: false,
                        children: [],
                      }
                    ],
                  }
                ],
              },
             
            ],
          },
          {
            filename: "KFTMS",
            type: false,
            children: [],
          },
          {
            filename: "KUS",
            type: false,
            children: [],
          }
        ],
      },
    ]);
  }

  private _getChildren = (node: FileNode) => { return observableOf(node.children); };
  
  hasNestedChild = (_: number, nodeData: FileNode) => {return (nodeData.type); };
}
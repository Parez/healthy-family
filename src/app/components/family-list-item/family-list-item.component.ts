import {Component, Input, OnInit} from '@angular/core';
import {FamilyMember} from '../../models/family-member';

@Component({
  selector: 'app-family-list-item',
  templateUrl: './family-list-item.component.html',
  styleUrls: ['./family-list-item.component.scss']
})
export class FamilyListItemComponent implements OnInit {
  @Input() member: FamilyMember;
  constructor() { }

  ngOnInit() {
  }

}

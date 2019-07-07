import {Component, Input, OnInit} from '@angular/core';
import {FamilyMember} from '../../models/family-member';
import {FamilyService} from '../../services/family.service';
import {Family} from '../../models/family';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {
  @Input() family: Family;
  constructor(private familyService: FamilyService) { }

  ngOnInit() {
    this.family = this.familyService.getFamily();
  }

}

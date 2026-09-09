import { Component, OnInit } from '@angular/core';
import { Profile } from '../services/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  profile: any;

  constructor(private profileService: Profile) { }

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }

}
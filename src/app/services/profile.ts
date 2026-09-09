import { Injectable } from '@angular/core';
import { Profile as ProfileInterface } from '../initialization/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class Profile {

  profile: ProfileInterface = {
    name: 'NJ',
    username: 'MonsterBreeder67',
    email: 'njrodrigo9@gmail.com',
    address: 'Redacted',
    role: 'Level 1 Abyss watcher'
  };

  getProfile() {
    return this.profile;
  }
}
import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'menu-demo',
  templateUrl: 'menu-demo.html',
  styleUrls: ['menu-demo.css'],
})
export class MenuDemo {
  selected = '';
  items = [
    {text: 'Refresh'},
    {text: 'Settings'},
    {text: 'Help', disabled: true},
    {text: 'Sign Out'}
  ];

  manyItems = [
    {text: 'Item 1'},
    {text: 'Item 2'},
    {text: 'Item 3'},
    {text: 'Item 4'},
    {text: 'Item 5'},
    {text: 'Item 6'},
    {text: 'Item 7'},
    {text: 'Item 8'},
    {text: 'Item 9'},
    {text: 'Item 10'},
    {text: 'Item 11'},
    {text: 'Item 12'},
    {text: 'Item 13'},
    {text: 'Item 14'},
    {text: 'Item 15'},
    {text: 'Item 16'},
    {text: 'Item 17'},
    {text: 'Item 18'},
    {text: 'Item 19'},
    {text: 'Item 20'},
    {text: 'Item 20'},
    {text: 'Item 21'},
    {text: 'Item 22'},
    {text: 'Item 23'},
    {text: 'Item 24'},
    {text: 'Item 25'},
    {text: 'Item 26'},
    {text: 'Item 27'},
    {text: 'Item 28'},
    {text: 'Item 29'},
    {text: 'Item 30'},
  ];

  iconItems = [
    {text: 'Redial', icon: 'dialpad'},
    {text: 'Check voicemail', icon: 'voicemail', disabled: true},
    {text: 'Disable alerts', icon: 'notifications_off'}
  ];

  select(text: string) { this.selected = text; }
}

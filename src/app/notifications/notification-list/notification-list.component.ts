import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from '../message';
import { NotificationsService } from '../notifications.service';


@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  messages: Observable<Message[]>;

  constructor(private notificationsService: NotificationsService) {
    this.messages = this.notificationsService.messagesOutput;
   }

  ngOnInit(): void {
  }

  clearMessage(id: number) {
    this.notificationsService.clearMessage(id);
  }

}

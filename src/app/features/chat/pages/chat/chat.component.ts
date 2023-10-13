import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  messageToSent: string = '';
  nickname: string = '';
  onlineUserCount: number = 0;
  constructor(private socket: Socket) {}

  ngOnInit() {
    this.socket.on('MessageReceived', (message: string) => {
      this.messages.push(message);
    });

    this.socket.on('UserCountChanged', (userCount: number) => {
      this.onlineUserCount = userCount;
    });
  }
  send() {
    // Server'a canlı bir method göndermeyi sağlar..
    let message = {
      message: this.messageToSent,
      nickname: this.nickname,
    };
    this.socket.emit('MessageSent', message);
    this.messages.push({ ...message, nickname: 'Siz' });
  }
}

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
  constructor(private socket: Socket) {}

  ngOnInit() {
    this.socket.on('MessageReceived', (message: string) => {
      this.messages.push(message);
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

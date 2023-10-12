import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ChatComponent } from './pages/chat/chat.component';
import { FormsModule } from '@angular/forms';

const config: SocketIoConfig = { url: 'http://localhost:9000', options: {} };

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule,
  ],
})
export class ChatModule {}

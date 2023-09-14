// in MessageParser.jsx

import store from '../redux/store';
import { setUserName } from '../redux/reducer';

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  parse(message) {
    message = message.toLowerCase();
    console.log(message);
    const userMsg =
      this.state.messages[this.state.messages.length - 1]?.message;

    if (userMsg === 'Got it!' && message == 'got it') {
      return this.actionProvider.calenderSlots();
    }
    if (userMsg === 'Enter your name') {
      store.dispatch(setUserName(message));
      return this.actionProvider.askUserAge();
    }
  }
}

export default MessageParser;

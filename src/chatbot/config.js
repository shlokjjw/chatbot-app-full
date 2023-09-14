import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';
import InitialChatMessage from '../components/InitialChatMsg';
import GotIt from '../components/GotIt';
import Slot from '../components/Slots/Slots';
import AgeDropDown from '../components/AgeDropDown';
const botName = 'Bot';

const config = {
  initialMessages: [
    createChatBotMessage(<InitialChatMessage />),
    createCustomMessage('Custom', 'custom'),
  ],
  botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(14 165 233)',
    },
    chatButton: {
      backgroundColor: 'rgb(14 165 233)',
    },
  },
  customMessages: {
    custom: (props) => <GotIt {...props} />,
  },
  widgets: [
    {
      widgetName: 'datePicker',
      widgetFunc: (props) => <Slot {...props} />,
    },
    {
      widgetName: 'agePicker',
      widgetFunc: (props) => <AgeDropDown {...props} />,
    },
  ],
};

export default config;

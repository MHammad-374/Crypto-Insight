import { create } from 'zustand';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotStore {
  messages: Message[];
  isTyping: boolean;
  error: string | null;
  sendMessage: (text: string) => Promise<void>;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
}

export const useChatbotStore = create<ChatbotStore>((set, get) => ({
  messages: [],
  isTyping: false,
  error: null,
  sendMessage: async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    set({ isTyping: true, error: null });
    get().addMessage(userMessage);
    
    try {
      // API call would go here
      // const response = await chatbotService.sendMessage(text);
      // const botMessage: Message = {
      //   id: (Date.now() + 1).toString(),
      //   text: response.text,
      //   sender: 'bot',
      //   timestamp: new Date(),
      // };
      // get().addMessage(botMessage);
      set({ isTyping: false });
    } catch (error) {
      set({ error: 'Failed to send message', isTyping: false });
    }
  },
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => set({ messages: [] }),
}));

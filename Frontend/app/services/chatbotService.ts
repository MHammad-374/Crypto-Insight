const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatResponse {
  text: string;
  suggestions?: string[];
}

export const chatbotService = {
  async sendMessage(message: string): Promise<ChatResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/chatbot/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  async getSuggestions(): Promise<string[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/chatbot/suggestions`);
      if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      throw error;
    }
  },
};

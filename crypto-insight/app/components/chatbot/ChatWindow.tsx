'use client';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatWindowProps {
  messages?: Message[];
}

export default function ChatWindow({ messages = [] }: ChatWindowProps) {
  return (
    <div className="bg-white rounded-lg shadow-md h-96 overflow-y-auto p-4">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500">
          <p>Start a conversation about crypto...</p>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

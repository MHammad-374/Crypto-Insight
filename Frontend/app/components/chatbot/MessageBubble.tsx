interface MessageBubbleProps {
  text: string;
  sender: 'user' | 'bot';
  timestamp?: Date;
}

export default function MessageBubble({ text, sender, timestamp }: MessageBubbleProps) {
  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] ${sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'} rounded-lg p-3`}>
        <p className="text-sm">{text}</p>
        {timestamp && (
          <p className="text-xs mt-1 opacity-70">
            {timestamp.toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
}

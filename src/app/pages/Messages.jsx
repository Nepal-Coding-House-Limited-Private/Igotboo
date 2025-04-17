import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Search, Send, Paperclip, Smile, MoreVertical, Phone, Video } from "lucide-react";

const Messages = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { id: 1, sender: "John Doe", content: "Hey, how are you?", timestamp: "2m ago", isSent: false, read: true },
    { id: 2, sender: "You", content: "I'm doing great! How about you?", timestamp: "1m ago", isSent: true, read: true },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [selectedContact, setSelectedContact] = useState({
    id: 1,
    name: "John Doe",
    status: "Online",
    initials: "JD",
    lastMessage: "Hey, how are you?",
    unread: 0,
    time: "2m ago",
  });

  const contacts = [
    { id: 1, name: "John Doe", status: "Online", initials: "JD", lastMessage: "Hey, how are you?", unread: 0, time: "2m ago" },
    { id: 2, name: "Sarah Wilson", status: "Offline", initials: "SW", lastMessage: "See you tomorrow!", unread: 2, time: "1h ago" },
    { id: 3, name: "Mike Johnson", status: "Online", initials: "MJ", lastMessage: "Thanks for the help!", unread: 0, time: "3h ago" },
    { id: 4, name: "Emma Davis", status: "Away", initials: "ED", lastMessage: "Can you review my code?", unread: 1, time: "5h ago" },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = { id: messages.length + 1, sender: "You", content: newMessage.trim(), timestamp: "Just now", isSent: true, read: false };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleContactClick = (contact) => {
    navigate(`/chat/${contact.id}`); // Navigate to the specific chat
    setSelectedContact(contact);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Contacts List */}
      <div className="w-full md:w-1/4 border-b md:border-r bg-gray-50 flex flex-col min-w-0">
        <div className="p-4 border-b bg-white">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`p-4 hover:bg-white cursor-pointer transition-colors ${selectedContact.id === contact.id ? "bg-gray-100" : ""}`}
              onClick={() => handleContactClick(contact)}
            >
              <div className="flex items-center space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">{contact.initials}</span>
                  </div>
                  {contact.status === "Online" && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-900 truncate">{contact.name}</h3>
                    <span className="text-xs text-gray-400 flex-shrink-0">{contact.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                    {contact.unread > 0 && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex-shrink-0">{contact.unread}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Chat Header */}
        <div className="p-4 border-b bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">{selectedContact.initials}</span>
                </div>
                {selectedContact.status === "Online" && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">{selectedContact.name}</h3>
                <p className="text-sm text-gray-500">{selectedContact.status}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button className="text-gray-500 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-full">
                <Phone size={20} />
              </button>
              <button className="text-gray-500 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-full">
                <Video size={20} />
              </button>
              <button className="text-gray-500 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div key={message.id} className={`flex items-start space-x-2 ${message.isSent ? "justify-end" : ""}`}>
              {!message.isSent && (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-500 text-sm font-medium">{message.sender[0]}</span>
                </div>
              )}
              <div className={`rounded-lg p-3 max-w-[70%] break-words ${message.isSent ? "bg-blue-500 text-white" : "bg-white text-gray-800 shadow-sm"}`}>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <div className="flex items-center justify-end space-x-1 mt-1">
                  <span className={`text-xs ${message.isSent ? "text-white/70" : "text-gray-500"}`}>{message.timestamp}</span>
                  {message.isSent && <span className="text-xs text-white/70">{message.read ? "✓✓" : "✓"}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t bg-white">
          <form onSubmit={handleSendMessage}>
            <div className="flex items-center space-x-4">
              <button type="button" className="text-gray-500 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-full flex-shrink-0">
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 min-w-0"
              />
              <button type="button" className="text-gray-500 hover:text-blue-500 p-2 hover:bg-gray-100 rounded-full flex-shrink-0">
                <Smile size={20} />
              </button>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors flex-shrink-0">
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messages;

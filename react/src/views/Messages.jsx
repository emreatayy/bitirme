import React, { useState } from 'react';
// CSS dosyasını içe aktarın

const MessageApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [dragOver, setDragOver] = useState(false);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      const updatedMessages = [...messages, { content: newMessage, profileImage: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png' }];
      setMessages(updatedMessages);
      setNewMessage('');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragOver(false);
    const files = Array.from(event.dataTransfer.files);
    // İşlem yapmak için seçilen dosyaları kullanabilirsiniz.
    console.log(files);
  };

  return (
    <div className="message-app bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Özel Mesajlar</h1>
      <div className="message-list mb-4">
        {messages.map((message, index) => (
          <div key={index} className="message bg-white p-2 mb-2 rounded flex items-start">
            <img
              src={message.profileImage}
              alt="Profil Resmi"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>{message.content}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-form flex mb-4">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Mesajınızı Buraya Girin"
          className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div
          className={`drop-area bg-gray-200 border border-gray-300 px-4 py-2 rounded-r flex items-center ml-2 ${
            dragOver ? 'bg-blue-100 border-blue-500' : ''
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p className="text-gray-500">Dosyaları buraya sürükleyip bırakın</p>
        </div>
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:bg-blue-600 hover:bg-blue-600"
        >
          Yolla
        </button>
      </form>
    </div>
  );
};

export default MessageApp;

"use client"
import { useState, useRef, useEffect } from 'react';
import styles from './Chat.module.css';
import { Button } from '@/components/ui/button';

const Chat = () => {
    const [messages, setMessages] = useState([
        'Hello there!',
        'Hi! How are you?',
        'I am good, thanks! What about you?'
    ]);
    const [newMessage, setNewMessage] = useState('');
    const [showNewMessageNotification, setShowNewMessageNotification] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    console.log("chatContainerRef", chatContainerRef);
    console.log("chatEndRef", chatEndRef);


    const addMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
            setShowNewMessageNotification(true); // Show the new message notification
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
            if (scrollHeight - scrollTop === clientHeight) {
                setShowNewMessageNotification(false);
            }
        }
    }, [messages]);

    const scrollToBottom = () => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
            setShowNewMessageNotification(false);

        }
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.messagesContainer} ref={chatContainerRef}>
                {messages.map((message, index) => (
                    <div key={index} className={styles.message}>
                        {message}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            {showNewMessageNotification && (
                <Button className='bg-green-700 max- pb-2 w-32' onClick={scrollToBottom}>
                    New Message
                </Button>
            )}
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <Button className='bg-green-700' onClick={addMessage}>Send</Button>
            </div>
        </div>
    );
};

export default Chat;

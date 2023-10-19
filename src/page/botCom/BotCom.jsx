import React, {useState, useEffect} from 'react';
import axios from "axios";

const BotCom = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [all, setAll] = useState()

    const telegram_bot_id = "6920438003:AAER-xy_Hg9O8ZD4UzEiYSUMM1Y7TLdAcdw";
    const chat_id = 694031233;

    const ready = () => {
        setName(document.getElementById("name").value);
        setMessage(document.getElementById("message").value);
        setEmail(document.getElementById("email").value);
        setAll("🎉🎉 New client has arrived 🎉🎉\n" + "\nEmail: " + email + "\nName: " + name + "\nMessage: " + message)
    };

    const sender = () => {
        ready();
        if (name === '' || message === '' || email === '') {
            alert('Malumotda xato bor');
        } else {
            const settings = {
                url: `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'cache-control': 'no-cache'
                },
                data: {
                    chat_id: chat_id,
                    text: all,
                }
            };

            axios(settings)
                .then(response => {
                    console.log(response);
                    alert('Malumot jo\'natildi');
                    setName('');
                    setMessage('');
                    setEmail('')
                })
                .catch(error => {
                    console.error(error);
                    alert('Xatolik yuz berdi');
                });
        }
    };

    // useEffect(() => {
    //     return () => {};
    // }, []);

    return (
        <div className="mt-5 container">
            <input
                className="form-control"
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                className="form-control mt-2"
                placeholder="name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                className="form-control mt-2"
                placeholder="Message"
                type="text"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <button className="mt-3 btn btn-danger" onClick={sender}>Send</button>
        </div>
    );
};
export default BotCom;
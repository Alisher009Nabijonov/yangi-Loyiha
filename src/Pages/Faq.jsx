import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Ohir1 from '../assets/15.png';

const Faq = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendToTelegramBot = async (e) => {
        e.preventDefault();
        const botToken = '7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ';
        const chatId = '5900769240';
        const text = `Ask a Question
😀:Name: ${formData.name}

📄:Subject: ${formData.subject}

📄:Message: ${formData.message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text
                })
            });

            if (response.ok) {
                toast.success('Successfully send!');
                setFormData({ name: '', subject: '', message: '' });
            } else {
                toast.error('error saved!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='faq'>
            <div className="faq_main">
                <Toaster />
                <div className='shop_title'>
                    <h1 className='title_h1'>FAQ</h1>
                    <NavLink to="/">home.</NavLink>
                    <NavLink to="/pages">Pages.</NavLink>
                    <span className='title_span'>Faq</span>
                </div>
                <div className="faq_generel">
                    <div className="generel_1">
                        <h1>General Information</h1>
                        <h2>Eu dictumst cum at sed euismood condimentum?</h2>
                        <p className='generel_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                        <h2>Magna bibendum est fermentum eros.</h2>
                        <p className='generel_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                        <h2>Odio muskana hak eris conseekin sceleton?</h2>
                        <p className='generel_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>

                        <h2>Elit id blandit sabara boi velit gua mara?</h2>
                        <p className='generel_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
                    </div>
                    <div className="faq_form">
                        <h2>Ask a Question</h2>
                        <form onSubmit={sendToTelegramBot}>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Your Name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder='Subject'
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    id="faq_textarea"
                                    placeholder='Type Your Message'
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">Send Mail</button>
                        </form>
                    </div>
                </div>
                <div className='faq_pas'>
                    <img src={Ohir1} alt="" />
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Faq;


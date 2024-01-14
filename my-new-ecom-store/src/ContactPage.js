import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        subject: '',
        email: '',
        body: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let newErrors = {};
        if (formData.fullName.length < 3) newErrors.fullName = 'Full name must be at least 3 characters';
        if (formData.subject.length < 3) newErrors.subject = 'Subject must be at least 3 characters';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email must be a valid email address';
        if (formData.body.length < 3) newErrors.body = 'Body must be at least 3 characters';
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
            console.log('Form Data:', formData); // Log form data to the console
    
        }
    };
    

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <label>Full Name:</label>
                    <input 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleChange} 
                    />
                    {errors.fullName && <p className="error-message">{errors.fullName}</p>}
                </div>
                <div>
                    <label>Subject:</label>
                    <input 
                        type="text" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                    />
                    {errors.subject && <p className="error-message">{errors.subject}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div>
                    <label>Body:</label>
                    <textarea 
                        name="body" 
                        value={formData.body} 
                        onChange={handleChange} 
                    />
                    {errors.body && <p className="error-message">{errors.body}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default ContactPage;

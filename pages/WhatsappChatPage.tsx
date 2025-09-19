import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import StyledButton from '../components/StyledButton';
import Icon from '../components/Icon';
import PageTransition from '../components/PageTransition';

const WhatsappChatPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ phone?: string; message?: string; form?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneRegex = /^\+?[1-9]\d{7,14}$/;
  
  const validate = (): boolean => {
    const newErrors: { phone?: string; message?: string } = {};
    if (!phoneRegex.test(phone)) {
        newErrors.phone = 'Please enter a valid phone number (e.g., +6281234567890).';
    }
    if (!message.trim()) {
        newErrors.message = 'Please enter a message.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formattedPhone = phone.replace(/[^0-9]/g, '');
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodedMessage}`;
      
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        setErrors({ form: 'Popup blocked. Please allow popups for this site to open WhatsApp.' });
      } else {
        setPhone('');
        setMessage('');
      }
    } catch (err) {
      setErrors({ form: 'Failed to open WhatsApp. Please try again.'});
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <PageContainer>
        <Icon name="chat" />
        <h1 className="text-4xl md:text-5xl font-bold text-dark-text mb-2">WhatsApp Chat Form</h1>
        <p className="mb-8 text-lg md:text-xl text-dark-text-muted">
          Instantly connect with WhatsApp using a custom message
        </p>
        <h2 className="sr-only">Contact Form</h2>
        <motion.div 
          className="max-w-lg mx-auto p-6 sm:p-8 bg-dark-surface rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark-text text-left mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full px-4 py-3 bg-dark-surface-elevated border border-dark-border rounded-md shadow-sm placeholder-dark-text-muted focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="e.g., +6281234567890"
                  required
                  aria-invalid={!!errors.phone}
                  aria-describedby="phone-error"
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-sm text-red-400 text-left" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-text text-left mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="block w-full px-4 py-3 bg-dark-surface-elevated border border-dark-border rounded-md shadow-sm placeholder-dark-text-muted focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Type your message here..."
                  maxLength={500}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                ></textarea>
                 {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-400 text-left" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
              {errors.form && (
                <p className="text-sm text-red-400" role="alert">{errors.form}</p>
              )}
              <div>
                <StyledButton type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Opening...' : 'Open WhatsApp Chat'}
                </StyledButton>
              </div>
            </div>
          </form>
        </motion.div>
      </PageContainer>
    </PageTransition>
  );
};

export default WhatsappChatPage;
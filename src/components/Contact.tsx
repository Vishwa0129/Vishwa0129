import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

interface ContactProps {
  theme: string;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thanks for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Get in Touch
        </h2>
        <p className={`text-lg mb-16 text-center max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              Contact Information
            </h3>
            <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${theme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                  <a href="mailto:vishwateja0129@gmail.com" className={`hover:underline ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    vishwateja0129@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${theme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Phone</h4>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    +91 9492985419
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={`p-3 rounded-lg mr-4 ${theme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-medium mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Location</h4>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </div>
            
            <h4 className={`text-lg font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Follow Me</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Vishwa0129" 
                className={`p-3 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/vishwa-teja-3a78a0283/" 
                className={`p-3 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="mb-6">
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="mb-8">
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={6} 
                  className={`w-full p-3 rounded-lg border ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center hover:bg-blue-700 transition-colors group"
              >
                Send Message
                <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { MapPin, Mail, Linkedin, Twitter, FileText } from 'lucide-react';
import { Button } from '../components/UI/Button';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I typically respond within 24-48 hours.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return <div className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold font-serif text-[#4A4A4A] mb-4 text-center">
          Let's Work Together
        </h1>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Have a project in mind? I'd love to help bring it to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-[#F7F3ED] p-8 rounded-lg">
            <h2 className="text-2xl font-bold font-serif text-[#4A4A4A] mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5E8C6A]" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5E8C6A]" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5E8C6A]" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5E8C6A]" required></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold font-serif text-[#4A4A4A] mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-[#5E8C6A] mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#4A4A4A]">Location</h3>
                  <p className="text-gray-700">Atlanta, GA</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-[#5E8C6A] mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#4A4A4A]">Email</h3>
                  <p className="text-gray-700">a21ndrewabrams@gmail.com</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6 mt-8">
                <h3 className="font-bold text-[#4A4A4A] mb-4">
                  Connect Online
                </h3>
                
              </div>
              <div className="border-t border-gray-200 pt-6 mt-8">
                <h3 className="font-bold text-[#4A4A4A] mb-4">Response Time</h3>
                <p className="text-gray-700">
                  I typically respond within 24–48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
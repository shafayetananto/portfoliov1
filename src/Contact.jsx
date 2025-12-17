import { useState, useEffect, useRef } from "react";
import { Loader2, Send, CheckCircle, AlertCircle, Mail, User, MessageSquare } from 'lucide-react';
import { useTextRevealAnimation } from './hooks/useTextRevealAnimation.js';

export default function Contact() {
  const headingRef = useTextRevealAnimation({ animationType: 'heading' });
  const paragraphRef = useTextRevealAnimation({ animationType: 'paragraph' });
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const formRef = useRef(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef()
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 300);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setErrors({});
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function validateForm() {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message';
      isValid = false;
    }

    setErrors(newErrors);

    if (newErrors.name) {
      nameRef.current.focus();
    } else if (newErrors.email) {
      emailRef.current.focus();
    } else if (newErrors.message) {
      messageRef.current.focus();
    }

    return isValid;
  }

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'bcf9758c-ae08-4098-bf39-31cbe61f8f2a',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission',
          from_name: 'shafayetbinzaman.vercel.app'
        })
      });

      if (response.status === 200) {
        setStatus('success');
        setMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("error");
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus('error');
      setMessage("Something went wrong. Please try again or contact me directly.");
      console.log('Error', error);
    }
  }

  return (
    <>

      <div className={`fixed bottom-4 left-2 right-2 sm:left-2 sm:right-auto sm:max-w-md z-50 transition-all duration-300 ease-out ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-[110%] opacity-0'
        }`}>
        <div className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-md ${status === 'success'
          ? 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300'
          : 'bg-rose-500/10 border-rose-400/30 text-rose-300'
          }`}>
          {status === 'success' ? (
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          )}
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm break-words">{message}</p>
          </div>
        </div>
      </div>

      <div id="contact" ref={formRef} className="w-full max-w-4xl m-auto mb-70 px-4 scroll-mt-28">
        <div className="mb-12 text-center">
          <h2 ref={headingRef} className="text-2xl md:text-3xl lg:text-4xl font-bold text-accentP mb-8 text-center font-poppins">
            Get in touch
          </h2>
          <p ref={paragraphRef} className="mx-auto max-w-3xl text-lg text-[#94a3b8]">
            Got an idea? I’m ready when you are
          </p>
          <p className="text-textP">
            Please contact me directly at <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:' + 'shafayetbinzaman06' + '@' + 'gmail.com';
              }}
              className="text-accentB hover:underline cursor-pointer font-medium"
            >
              shafayetbinzaman06@gmail.com
            </a> or through this form.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-200 mb-2 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-purple-400" />
                Name
              </label>
              <input
                ref={nameRef}
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg 
                  text-slate-100 placeholder-slate-500
                  focus:outline-none focus:ring-2 transition-all duration-200
                  ${errors.name
                    ? 'border-rose-500/50 focus:ring-rose-500/30 focus:border-rose-500'
                    : 'border-slate-700/50 focus:border-purple-400 focus:ring-purple-500/30'
                  }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-rose-400 flex items-center gap-1 animate-in slide-in-from-top-2 fade-in duration-200">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-200 mb-2 flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg 
                  text-slate-100 placeholder-slate-500
                  focus:outline-none focus:ring-2 transition-all duration-200
                  ${errors.email
                    ? 'border-rose-500/50 focus:ring-rose-500/30 focus:border-rose-500'
                    : 'border-slate-700/50 focus:border-purple-400 focus:ring-purple-500/30'
                  }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-rose-400 flex items-center gap-1 animate-in slide-in-from-top-2 fade-in duration-200">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-200 mb-2 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-accentG" />
              Message
            </label>
            <textarea
              ref={messageRef}
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg 
                text-slate-100 placeholder-slate-500
                focus:outline-none focus:ring-2 transition-all duration-200 resize-none
                ${errors.message
                  ? 'border-rose-500/50 focus:ring-rose-500/30 focus:border-rose-500'
                  : 'border-slate-700/50 focus:border-purple-400 focus:ring-purple-500/30'
                }`}
              placeholder="Tell me about your project or idea..."
            />
            {errors.message && (
              <p className="mt-2 text-sm text-rose-400 flex items-center gap-1 animate-in slide-in-from-top-2 fade-in duration-200">
                <AlertCircle className="w-4 h-4" />
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 
              text-white font-semibold rounded-lg
              hover:shadow-lg hover:shadow-purple-500/50 
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900
              transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
              transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {status === 'loading' ? (
              <span className="flex items-center justify-center gap-2 relative z-10">
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2 relative z-10">
                <Send className="w-5 h-5" />
                Send Message
              </span>
            )}
          </button>

        </div>
      </div>
    </>
  );
}
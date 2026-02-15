import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    window.location.href = `mailto:yashwanthvarma74@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message} - From: ${formData.email}`
    setSent(true)
  }

  return (
    <section id="contact" className="px-10 py-24">

      <div className="text-center mb-16">
        <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="text-white text-5xl font-bold">
          Contact <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/Yashwanthvarmak" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yashwanth-varma-konduru-52a64232a/" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:yashwanthvarma74@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8">
        <div className="flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@gmail.com"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Hello Yashwanth, I'd like to talk about..."
              className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors duration-300"
          >
            {sent ? '✓ Message Sent!' : 'Send Message'}
          </button>

        </div>
      </div>

    </section>
  )
}

export default Contact
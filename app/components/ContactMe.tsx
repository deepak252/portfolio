'use client'
import { useState } from 'react'

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:deepakkudc16102000@gmail.com?subject=Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="dashboard-section">
      <h3 className="mb-10">Contact Me</h3>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <button
            type="submit"
            className="base-btn w-full text-white bg-blue-600 hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

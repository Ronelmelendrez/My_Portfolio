import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const Contact: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 3000);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="font-mono py-20 bg-gray-50 dark:bg-navy/30"
    >
      <Container>
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's work together"
        />

        <div
          ref={ref}
          className="
            grid gap-12 lg:grid-cols-2
            transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)]
          "
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
          }}
        >
          {/* LEFT SIDE - INFO */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="rounded-2xl bg-white/80 dark:bg-navy-light/80 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                Contact Info
              </h3>

              <div className="space-y-5 text-base">
                <div>
                  <p className="text-grayText">📍 Location</p>
                  <p className="text-gray-800 dark:text-gray-200">
                    Placer, Surigao del Norte, Philippines
                  </p>
                </div>

                <div>
                  <p className="text-grayText">✉️ Email</p>
                  <p className="text-gray-800 dark:text-gray-200">
                    ronelmelendrez01@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-grayText">📱 Phone</p>
                  <p className="text-gray-800 dark:text-gray-200">
                    09174979497
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-white/80 dark:bg-navy-light/80 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="mb-4 text-sm uppercase tracking-wider text-grayText">
                Find me online
              </h3>

              <div className="flex flex-wrap gap-3">
                {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="
                        rounded-lg border border-electric/20
                        bg-electric/10 px-3 py-1 text-sm
                        text-electric transition-all
                        hover:bg-electric/20
                      "
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-2xl bg-white/80 dark:bg-navy-light/80 p-8 shadow-lg backdrop-blur-xl">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 text-5xl">✅</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-grayText">
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white/70 px-4 py-3 text-sm outline-none focus:border-electric dark:border-gray-700 dark:bg-navy/50"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white/70 px-4 py-3 text-sm outline-none focus:border-electric dark:border-gray-700 dark:bg-navy/50"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="mt-4 w-full rounded-lg border border-gray-300 bg-white/70 px-4 py-3 text-sm outline-none focus:border-electric dark:border-gray-700 dark:bg-navy/50"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-4 w-full resize-none rounded-lg border border-gray-300 bg-white/70 px-4 py-3 text-sm outline-none focus:border-electric dark:border-gray-700 dark:bg-navy/50"
                />

                <button
                  onClick={handleSubmit}
                  className="
                    mt-6 w-full rounded-lg
                    bg-gradient-to-r from-electric to-cyan
                    px-6 py-3 font-semibold text-white
                    shadow-lg transition-all
                    hover:scale-[1.02] hover:shadow-electric/30
                  "
                >
                  Send Message →
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
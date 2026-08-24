"use client";

import LeafletMap from "./Map";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Contact <span className="text-blue-600">Dearo Venture Canada</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Reach out to our global headquarters or local branch network for investment queries, partnership opportunities, and customer support.
          </p>
        </div>

        {/* TWO-COLUMN CARDS FOR INFO & FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* CONTACT INFO CARD (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" /> Office & Contact Info
              </h3>

              <div className="space-y-4 text-slate-700 text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide">Corporate Address</strong>
                    <span className="text-xs sm:text-sm text-slate-600">
                      8ᵗʰ Floor, Ceylinco House, No. 69, Janadhipathi Mawatha, Colombo 01
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide">Phone Lines</strong>
                    <span className="text-xs sm:text-sm text-blue-600 font-medium block">
                      General: 011 478 2400
                    </span>
                    <span className="text-xs text-slate-500">
                      Direct Support: +94 74 390 8274
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 text-xs uppercase tracking-wide">Email Enquiries</strong>
                    <a
                      href="mailto:info@dearoventurecanada.com"
                      className="text-xs sm:text-sm text-blue-600 font-medium hover:underline block"
                    >
                      info@dearoventurecanada.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 block text-center">
                Dearo Venture Canada Ltd — Empowering Sustainable Growth
              </span>
            </div>
          </div>

          {/* SEND MESSAGE FORM (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" /> Send Us a Message
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-slate-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-slate-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-slate-50"
                  placeholder="Investment opportunity / General inquiry"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full border border-slate-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-slate-50"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FULL WIDTH REDESIGNED INTERACTIVE MAP */}
        <div className="pt-4">
          <LeafletMap />
        </div>
      </div>
    </section>
  );
}
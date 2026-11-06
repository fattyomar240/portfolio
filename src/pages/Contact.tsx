import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CONTACT_EMAIL = "fattyomar240@gmail.com";

const SOCIALS = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@yourusername",
    href: "https://github.com",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Your Name",
    href: "https://linkedin.com",
    external: true,
  },
];

const INFO_ITEMS = [
  { icon: MapPin, label: "Location", value: "Your City, Country" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  { icon: Mail, label: "Email", value: CONTACT_EMAIL },
];

export default function Contact() {
  const [state, handleSubmit, reset] = useForm("maeeayyz");

  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 px-6 page-enter">
      <div className="max-w-5xl mx-auto w-full">

        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="text-accent-400 text-sm font-mono mb-3"> Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h1>
          <p className="text-ink-200 text-lg max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always
            open. I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8">

          {/* Left: Info + socials */}
          <div className="md:col-span-2 space-y-4 reveal">
            <Card>
              <CardContent className="p-6 space-y-5">
                <h3 className="text-white font-semibold text-lg">Get in touch</h3>
                {INFO_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 pb-4 border-b border-ink-600/50 last:border-0 last:pb-0"
                    >
                      <div className="w-9 h-9 flex items-center justify-center bg-accent-500/10 rounded-lg flex-shrink-0">
                        <Icon size={16} className="text-accent-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-ink-400 text-xs font-medium uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-white text-sm font-medium truncate">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Socials */}
            <div className="space-y-3">
              <p className="text-ink-300 text-sm font-medium pl-1">Find me on</p>
              <div className="grid grid-cols-3 gap-3">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.external ? "_blank" : undefined}
                      rel={social.external ? "noopener noreferrer" : undefined}
                      className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-ink-600 hover:border-accent-500/40 hover:bg-accent-500/5 transition-all duration-300"
                    >
                      <Icon size={22} className="text-ink-200 group-hover:text-accent-400 transition-colors" />
                      <span className="text-xs text-ink-300 group-hover:text-white transition-colors font-medium">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Contact form card */}
          <div className="md:col-span-3 reveal">
            <Card className="h-full">
              <CardContent className="p-6 md:p-8">

                {/* ✅ Success state */}
                {state.succeeded ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center gap-5">
                    <div className="w-20 h-20 rounded-full bg-accent-500/10 flex items-center justify-center">
                      <CheckCircle size={40} className="text-accent-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Message Sent! 🎉</h4>
                      <p className="text-ink-300 text-sm max-w-xs mx-auto">
                        Thanks for reaching out! I've received your email and
                        will reply within 24 hours.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-center">
                      <button
                        type="button"
                        onClick={reset}
                        className="h-11 px-5 rounded-lg font-semibold text-white bg-accent-500 hover:bg-accent-400 transition-colors"
                      >
                        Send another message
                      </button>
                      <Link
                        to="/"
                        className="h-11 px-5 rounded-lg font-semibold text-accent-400 border border-accent-500/40 hover:bg-accent-500/10 transition-colors flex items-center justify-center"
                      >
                        Return to homepage
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-white font-semibold text-lg mb-1">Send a message</h3>
                    <p className="text-ink-300 text-sm mb-6">
                      Fill out the form and I'll get back to you soon.
                    </p>

                    {state.errors !== null && (
                      <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 mb-5">
                        <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-red-300 text-sm">
                          We couldn't send your message. Please check the form and try again.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-sm font-medium text-ink-200 mb-2">
                            Name
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            autoComplete="name"
                            required
                            className="w-full h-11 px-4 rounded-lg bg-ink-800 border border-ink-600 text-white placeholder:text-ink-400 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/15 transition-all text-sm disabled:opacity-50"
                          />
                          <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-ink-200 mb-2">
                            Email
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            autoComplete="email"
                            required
                            className="w-full h-11 px-4 rounded-lg bg-ink-800 border border-ink-600 text-white placeholder:text-ink-400 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/15 transition-all text-sm disabled:opacity-50"
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-subject" className="block text-sm font-medium text-ink-200 mb-2">
                          Subject
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          name="subject"
                          placeholder="Project inquiry"
                          className="w-full h-11 px-4 rounded-lg bg-ink-800 border border-ink-600 text-white placeholder:text-ink-400 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/15 transition-all text-sm disabled:opacity-50"
                        />
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-ink-200 mb-2">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          placeholder="Tell me about your project..."
                          required
                          className="w-full px-4 py-3 rounded-lg bg-ink-800 border border-ink-600 text-white placeholder:text-ink-400 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/15 transition-all text-sm resize-none disabled:opacity-50"
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                      </div>

                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full h-12 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed bg-accent-500 hover:bg-accent-400 shadow-lg glow-sm"
                      >
                        {state.submitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={17} />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-ink-500 text-xs text-center">
                        Your message goes directly to my inbox — no spam, no middleman.
                      </p>
                    </form>
                  </>
                )}

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

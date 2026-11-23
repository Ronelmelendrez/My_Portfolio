import { useState, type FormEvent } from 'react';
import { FiLoader, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Reveal from '../common/Reveal';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import SocialLinks from '../common/SocialLinks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const infoItems = [
  { icon: FiMail, title: 'Gmail', value: 'ronelmelendrez01@gmail.com' },
  { icon: FiPhone, title: 'Phone', value: '09984883647' },
  { icon: FiMapPin, title: 'Location', value: 'Ampayon Butuan City, Agusan Del Norte' },
];

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    // Simulated network round-trip for the demo form.
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 md:py-[120px]">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="CONTACT"
            title="Let's build something."
            subtitle="Have a project in mind? Tell me about it — I read every message."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-14 md:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            {infoItems.map(({ icon: Icon, title, value }) => (
              <div key={title} className="mb-6 flex items-start gap-4">
                <div className="icon-btn h-[42px] w-[42px] flex-shrink-0">
                  <Icon size={17} />
                </div>
                <div>
                  <h4 className="font-display mb-1 text-[14.5px]">{title}</h4>
                  <p className="text-dim text-[13.5px]">{value}</p>
                </div>
              </div>
            ))}
            <Separator className="mb-6" />
            <SocialLinks />
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit}>
              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" required />
                </div>
              </div>
              <div className="mb-5">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="What's this about?" required />
              </div>
              <div className="mb-5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} placeholder="Tell me about the project..." required />
              </div>
              <Button type="submit" disabled={sending} className="w-full justify-center">
                {sending && <FiLoader className="animate-spin" size={15} />}
                {sending ? 'Sending…' : submitted ? 'Message Sent ✓' : 'Send Message'}
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
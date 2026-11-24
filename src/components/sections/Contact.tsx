import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiAlertCircle, FiAlertTriangle, FiLoader, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
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

type FieldKey = 'name' | 'email' | 'subject' | 'message';
type FormValues = Record<FieldKey, string>;
type FormErrors = Partial<Record<FieldKey, string>>;

const FIELD_ORDER: FieldKey[] = ['name', 'email', 'subject', 'message'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';
  else if (values.name.trim().length < 2) errors.name = 'That name looks too short.';

  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "That email address doesn't look right.";

  if (!values.subject.trim()) errors.subject = 'Please add a subject.';

  if (!values.message.trim()) errors.message = 'Please write a message.';
  else if (values.message.trim().length < 10) {
    errors.message = 'A little more detail, please — at least 10 characters.';
  }

  return errors;
}

export default function Contact() {
  const navigate = useNavigate();
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [sending, setSending] = useState(false);

  const errorCount = Object.values(errors).filter(Boolean).length;

  /** Re-validate one field in place (used by change/blur handlers). */
  const revalidate = (field: FieldKey, next: FormValues) => {
    const result = validate(next);
    setErrors((prev) => ({ ...prev, [field]: result[field] }));
  };

  const handleChange =
    (field: FieldKey) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = { ...values, [field]: event.target.value };
      setValues(next);
      // Live-fix the error once the field has been touched or submitted.
      if (attempted || errors[field]) revalidate(field, next);
    };

  const handleBlur = (field: FieldKey) => () => {
    revalidate(field, values);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = validate(values);
    setErrors(result);
    setAttempted(true);

    const firstInvalid = FIELD_ORDER.find((key) => result[key]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    if (sending) return;

    setSending(true);
    // Simulated network round-trip for the demo form, then confirmation.
    window.setTimeout(() => {
      setSending(false);
      navigate('/thank-you');
    }, 900);
  };

  const errorProps = (field: FieldKey) =>
    errors[field]
      ? {
          'aria-invalid': true as const,
          'aria-describedby': `${field}-error`,
          className: 'border-destructive focus:border-destructive',
        }
      : {};

  const errorText = (field: FieldKey) =>
    errors[field] ? (
      <p
        id={`${field}-error`}
        className="mt-1.5 flex items-start gap-1.5 font-mono text-[12px] leading-snug text-destructive"
      >
        <FiAlertCircle size={13} className="mt-0.5 shrink-0" />
        {errors[field]}
      </p>
    ) : null;

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
            <form onSubmit={handleSubmit} noValidate>
              {attempted && errorCount > 0 && (
                <div
                  role="alert"
                  className="mb-5 flex items-start gap-2.5 rounded-[10px] border border-destructive/40 bg-destructive/10 px-4 py-3 text-[13px] leading-snug text-destructive"
                >
                  <FiAlertTriangle size={15} className="mt-0.5 shrink-0" />
                  <span>
                    Please fix {errorCount} {errorCount === 1 ? 'field' : 'fields'} below before
                    sending.
                  </span>
                </div>
              )}

              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={values.name}
                    onChange={handleChange('name')}
                    onBlur={handleBlur('name')}
                    {...errorProps('name')}
                  />
                  {errorText('name')}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    {...errorProps('email')}
                  />
                  {errorText('email')}
                </div>
              </div>

              <div className="mb-5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={values.subject}
                  onChange={handleChange('subject')}
                  onBlur={handleBlur('subject')}
                  {...errorProps('subject')}
                />
                {errorText('subject')}
              </div>

              <div className="mb-5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about the project..."
                  value={values.message}
                  onChange={handleChange('message')}
                  onBlur={handleBlur('message')}
                  {...errorProps('message')}
                />
                <div className="mt-1.5 flex items-start justify-between gap-3">
                  {errorText('message')}
                  <span
                    className={`ml-auto shrink-0 font-mono text-[11.5px] ${
                      values.message.trim().length > 0 && values.message.trim().length < 10
                        ? 'text-destructive'
                        : 'text-dim'
                    }`}
                  >
                    {values.message.trim().length} chars
                  </span>
                </div>
              </div>

              <Button type="submit" disabled={sending} className="w-full justify-center">
                {sending && <FiLoader className="animate-spin" size={15} />}
                {sending ? 'Sending…' : 'Send Message'}
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

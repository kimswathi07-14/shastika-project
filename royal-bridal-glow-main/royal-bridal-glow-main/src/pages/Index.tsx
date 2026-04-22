import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Sparkles, Crown, Brush, Camera, Heart, Gem, Star,
  Phone, Mail, MessageCircle, Instagram, Facebook, MapPin,
  Check, Menu, X, ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import heroBride from "@/assets/hero-bride.jpg";
import aboutImg from "@/assets/about-monica.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const PHONE = "+919876543210";
const WHATSAPP = "919876543210";
const EMAIL = "hello@monicabridalstudio.com";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: Crown, title: "Bridal Makeup", desc: "Traditional South Indian bridal makeup designed to highlight natural beauty and complement bridal attire." },
  { icon: Camera, title: "HD Bridal Makeup", desc: "High-definition makeup that looks flawless under professional cameras and bright wedding lighting." },
  { icon: Sparkles, title: "Airbrush Bridal Makeup", desc: "Lightweight airbrush technique for a smooth, long-lasting, naturally luminous finish." },
  { icon: Gem, title: "Reception Makeup", desc: "Glamorous and elegant looks perfect for reception events and evening celebrations." },
  { icon: Heart, title: "Engagement Makeup", desc: "Soft, radiant styles designed for engagement ceremonies and intimate photoshoots." },
  { icon: Brush, title: "Party & Occasion", desc: "Professional makeup for special occasions, parties, photoshoots, and celebrations." },
];

const packageItems = [
  "HD Bridal Makeup", "Airbrush Makeup Option", "Professional Hairstyling",
  "Saree Draping Assistance", "Jewelry Setting", "Skin Preparation",
  "Long-lasting Waterproof Makeup", "Touch-up Kit for Bride",
];
const addOns = ["Engagement Makeup", "Reception Makeup", "Bridesmaid Makeup", "Family Member Makeup"];

const galleryItems = [
  { src: g1, cat: "Bridal Makeup", label: "Traditional Bridal" },
  { src: g3, cat: "Bridal Makeup", label: "HD Bridal Glam" },
  { src: g2, cat: "Reception Looks", label: "Reception Glow" },
  { src: g4, cat: "Engagement Makeup", label: "Engagement Radiance" },
  { src: g5, cat: "Bridal Makeup", label: "Floral Bride" },
  { src: g6, cat: "Reception Looks", label: "Royal Reception" },
];
const filters = ["All", "Bridal Makeup", "Reception Looks", "Engagement Makeup"];

const testimonials = [
  { name: "Priya R.", text: "Monica made me feel like a queen on my wedding day. The HD makeup lasted from morning rituals till the late reception — flawless in every photo!", role: "Bride, Chennai" },
  { name: "Anitha K.", text: "Such a calm, comforting presence on the most overwhelming day. My bridal look was elegant, traditional, and exactly what I had dreamed of.", role: "Bride, Coimbatore" },
  { name: "Divya S.", text: "The airbrush finish was incredible — light on the skin yet picture-perfect. Monica is genuinely the best bridal artist I could have asked for.", role: "Bride, Bangalore" },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", date: "", event: "Wedding", location: "", message: "",
  });

  useEffect(() => {
    document.title = "Monica Maharani Bridal Studio | Royal Indian Bridal Makeup Artist";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone number.");
      return;
    }
    toast.success("Inquiry received! Monica will reach out to you shortly. 💐");
    setForm({ name: "", phone: "", email: "", date: "", event: "Wedding", location: "", message: "" });
  };

  const filteredGallery = filter === "All" ? galleryItems : galleryItems.filter(g => g.cat === filter);

  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Monica, I'd like to inquire about bridal makeup booking.")}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Floating contact icons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {[
          { Icon: Phone, href: `tel:${PHONE}`, label: "Call", color: "bg-primary" },
          { Icon: MessageCircle, href: whatsappLink, label: "WhatsApp", color: "bg-gradient-gold" },
          { Icon: Mail, href: `mailto:${EMAIL}`, label: "Email", color: "bg-secondary" },
        ].map(({ Icon, href, label, color }) => (
          <a
            key={label}
            href={href}
            target={label === "WhatsApp" ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            className={`${color} text-primary-foreground w-11 h-11 rounded-full flex items-center justify-center shadow-luxe hover:scale-110 transition-elegant animate-float`}
            style={{ animationDelay: `${label.length * 0.1}s` }}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-primary/95 backdrop-blur-md border-b border-accent/20">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Monica Bridal Makeup Studio logo" width={48} height={48} className="w-11 h-11" />
            <div className="leading-tight">
              <div className="font-display text-base md:text-lg text-accent font-semibold tracking-[0.2em]">MONICA</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-primary-foreground/80">Maharani Bridal Studio</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map(n => (
              <a key={n.href} href={n.href} className="text-sm text-primary-foreground/90 hover:text-accent transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all">
                {n.label}
              </a>
            ))}
            <Button asChild variant="gold" size="sm">
              <a href="#contact">Book Appointment</a>
            </Button>
          </nav>

          <button className="lg:hidden text-primary-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-primary border-t border-accent/20 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map(n => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-primary-foreground/90 hover:text-accent py-1">{n.label}</a>
              ))}
              <Button asChild variant="gold" size="sm" className="mt-2">
                <a href="#contact" onClick={() => setMenuOpen(false)}>Book Appointment</a>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBride} alt="South Indian bride with HD bridal makeup" className="w-full h-full object-cover object-center" width={1536} height={1792} />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground max-w-xl animate-fade-in">
            <p className="font-script text-3xl md:text-5xl text-accent mb-3">Royal Bridal Beauty</p>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="font-display text-[11px] tracking-[0.4em] uppercase text-accent">Maharani Bridal Studio</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Bringing Your <span className="text-gradient-gold">Maharani</span> Bridal Look to Life
            </h1>
            <p className="text-base md:text-lg text-primary-foreground/85 mb-8 max-w-lg leading-relaxed">
              A royal Indian bridal experience by Monica — heritage-inspired artistry, palace-worthy glamour, and flawless HD looks crafted for your wedding day.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="gold" size="lg">
                <a href="#contact">Book Bridal Makeup <ChevronRight className="w-4 h-4 ml-1" /></a>
              </Button>
              <Button asChild variant="outlineGold" size="lg">
                <a href="#gallery">View Bridal Gallery</a>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-primary-foreground/80 text-sm">
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-accent fill-accent" /> 500+ Brides</div>
              <div className="h-4 w-px bg-accent/40" />
              <div className="flex items-center gap-2"><Crown className="w-4 h-4 text-accent" /> HD & Airbrush</div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gradient-soft">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-full" />
            <img src={aboutImg} alt="Monica bridal makeup artist" width={1024} height={1280} loading="lazy" className="relative rounded-2xl shadow-luxe object-cover w-full max-h-[600px]" />
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold text-accent-foreground px-6 py-4 rounded-xl shadow-gold hidden md:block">
              <div className="font-serif text-3xl font-semibold">10+</div>
              <div className="text-xs uppercase tracking-widest">Years of Artistry</div>
            </div>
          </div>
          <div>
            <p className="font-script text-3xl text-secondary mb-2">About the artist</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-2">Meet Monica</h2>
            <p className="uppercase tracking-[0.25em] text-xs text-accent mb-6">Bridal Makeup Artist</p>
            <div className="gold-divider mb-6" />
            <div className="space-y-5 text-foreground/80 leading-relaxed">
              <p>
                Monica is a passionate and professional bridal makeup artist dedicated to making every bride look radiant and confident on her special day. She specializes in elegant <strong className="text-primary">South Indian bridal transformations</strong>, creating customized looks that enhance natural beauty while matching the bride's personality, outfit, and wedding theme.
              </p>
              <p>
                Known for her attention to detail, expert skin preparation, and long-lasting bridal makeup that looks stunning both in person and on camera — Monica works closely with every bride to ensure a calm, comfortable, and unforgettable preparation experience.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { n: "500+", l: "Happy Brides" },
                { n: "100%", l: "HD Ready" },
                { n: "5★", l: "Rated Service" },
              ].map(s => (
                <div key={s.l} className="text-center p-4 rounded-xl bg-card shadow-soft">
                  <div className="font-serif text-2xl text-gradient-royal font-semibold">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="What we offer" title="Bridal Makeup Services" subtitle="A curated range of professional bridal artistry, tailored to every ceremony." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <Card key={title} className="group p-8 bg-card border-border hover:border-accent transition-elegant hover:-translate-y-2 hover:shadow-luxe relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-gold opacity-0 group-hover:opacity-20 blur-2xl transition-elegant rounded-full" />
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-5">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 bg-gradient-royal text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--accent)) 0%, transparent 40%), radial-gradient(circle at 80% 80%, hsl(var(--secondary)) 0%, transparent 40%)" }} />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-14">
            <p className="font-script text-3xl text-accent mb-2">Signature Offering</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-3">The Bridal Package</h2>
            <div className="gold-divider w-32 mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-background/10 backdrop-blur-md border-accent/30 text-primary-foreground">
              <h3 className="font-serif text-2xl text-accent mb-6 flex items-center gap-2">
                <Crown className="w-6 h-6" /> What's Included
              </h3>
              <ul className="space-y-3">
                {packageItems.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent-foreground" />
                    </span>
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8 bg-background/10 backdrop-blur-md border-accent/30 text-primary-foreground">
              <h3 className="font-serif text-2xl text-accent mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6" /> Optional Add-ons
              </h3>
              <ul className="space-y-3 mb-8">
                {addOns.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Heart className="w-3 h-3 text-secondary-foreground" />
                    </span>
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="gold" size="lg" className="w-full">
                <a href="#contact">Customize My Package</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Bridal portfolio" title="A Gallery of Glow" subtitle="Real brides. Real transformations. Crafted with love and precision." />
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10 mb-10">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm transition-elegant border ${filter === f ? "bg-gradient-royal text-primary-foreground border-transparent shadow-soft" : "bg-card text-foreground border-border hover:border-accent"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGallery.map((g, i) => (
              <div key={g.src} className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-luxe transition-elegant aspect-[3/4]">
                <img src={g.src} alt={g.label} loading="lazy" width={900} height={1200} className="w-full h-full object-cover group-hover:scale-110 transition-elegant duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-70 group-hover:opacity-90 transition-elegant" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-primary-foreground translate-y-2 group-hover:translate-y-0 transition-elegant">
                  <p className="text-xs uppercase tracking-widest text-accent">{g.cat}</p>
                  <h4 className="font-serif text-xl">{g.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <SectionTitle eyebrow="Bride stories" title="Words From Our Brides" subtitle="The greatest reward is a bride who feels beautiful and at ease." />
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {testimonials.map(t => (
              <Card key={t.name} className="p-8 bg-card shadow-soft hover:shadow-luxe transition-elegant relative">
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Heart className="w-5 h-5 text-accent-foreground fill-accent-foreground" />
                </div>
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-accent fill-accent" />)}
                </div>
                <p className="text-foreground/80 leading-relaxed italic mb-6">"{t.text}"</p>
                <div className="gold-divider mb-4" />
                <div>
                  <div className="font-serif text-lg text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-script text-3xl text-secondary mb-2">Reserve your date</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Bridal Inquiry</h2>
            <div className="gold-divider w-32 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Share your wedding details and Monica will personally reach out to craft a bespoke bridal experience just for you.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { Icon: Phone, label: "Call", value: PHONE, href: `tel:${PHONE}` },
                { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                { Icon: MapPin, label: "Studio", value: "Chennai, Tamil Nadu", href: "#" },
              ].map(({ Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 p-4 rounded-xl bg-card hover:shadow-soft transition-elegant border border-border hover:border-accent">
                  <div className="w-11 h-11 rounded-full bg-gradient-royal flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="text-foreground font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>
            <Button asChild variant="gold" size="lg" className="w-full sm:w-auto">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> Quick Book on WhatsApp
              </a>
            </Button>
          </div>

          <Card className="p-8 md:p-10 shadow-luxe border-accent/30 bg-gradient-soft">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Bride Name" id="name">
                  <Input id="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" required maxLength={80} />
                </Field>
                <Field label="Phone Number" id="phone">
                  <Input id="phone" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." required maxLength={20} />
                </Field>
              </div>
              <Field label="Email" id="email">
                <Input id="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" maxLength={120} />
              </Field>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Wedding Date" id="date">
                  <Input id="date" type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                </Field>
                <Field label="Event Type" id="event">
                  <select id="event" value={form.event} onChange={e => setForm({ ...form, event: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Reception</option>
                    <option>Party / Photoshoot</option>
                  </select>
                </Field>
              </div>
              <Field label="Location" id="location">
                <Input id="location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="City / Venue" maxLength={120} />
              </Field>
              <Field label="Message" id="message">
                <Textarea id="message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your dream bridal look..." rows={4} maxLength={1000} />
              </Field>
              <Button type="submit" variant="royal" size="lg" className="w-full">Send Inquiry</Button>
            </form>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-royal text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, transparent 60%)" }} />
        <div className="container mx-auto px-4 text-center relative">
          <p className="font-script text-4xl text-accent mb-4">Be a Radiant Bride</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-5">Book Your Bridal Makeup with Monica</h2>
          <p className="max-w-xl mx-auto text-primary-foreground/85 mb-8">
            Make your wedding day unforgettable with a flawless, long-lasting bridal look crafted just for you.
          </p>
          <Button asChild variant="gold" size="lg">
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="" width={40} height={40} className="w-10 h-10" />
              <div>
                <div className="font-serif text-lg text-accent">Monica</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">Bridal Studio</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">Premium bridal makeup artistry — making every bride feel timeless.</p>
          </div>
          <FooterCol title="Quick Links" items={navItems.map(n => n.label)} hrefs={navItems.map(n => n.href)} />
          <FooterCol title="Bridal Services" items={services.map(s => s.title)} />
          <div>
            <h4 className="font-serif text-lg text-accent mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> {PHONE}</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> {EMAIL}</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> Chennai, India</li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-accent/40 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-elegant">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-accent/40 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-elegant">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-10 pt-6 border-t border-accent/20 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Monica Bridal Makeup Studio. Crafted with love.
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) => (
  <div className="text-center max-w-2xl mx-auto">
    <p className="font-script text-3xl text-secondary mb-2">{eyebrow}</p>
    <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">{title}</h2>
    <div className="gold-divider w-32 mx-auto mb-4" />
    {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
  </div>
);

const Field = ({ label, id, children }: { label: string; id: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-xs uppercase tracking-widest text-primary">{label}</Label>
    {children}
  </div>
);

const FooterCol = ({ title, items, hrefs }: { title: string; items: string[]; hrefs?: string[] }) => (
  <div>
    <h4 className="font-serif text-lg text-accent mb-4">{title}</h4>
    <ul className="space-y-2 text-sm text-primary-foreground/80">
      {items.map((item, i) => (
        <li key={item}>
          <a href={hrefs?.[i] || "#"} className="hover:text-accent transition-colors">{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Index;

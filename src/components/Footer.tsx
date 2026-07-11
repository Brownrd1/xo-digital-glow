import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import logoMark from "@/assets/logo-mark.svg";

const footerLinks = {
  company: [
    { label: "Platform", href: "/#platform" },
    { label: "Company", href: "/#contact" },
    { label: "Early access", href: "/#contact" },
  ],
  services: [
    { label: "XO for WooCommerce", href: "/xo-wp" },
    { label: "Checkout", href: "/xo-wp#how-it-works" },
    { label: "B2B workflows", href: "/xo-wp#how-it-works" },
    { label: "Plans", href: "/xo-wp#pricing" },
  ],
  helpful: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-background to-graphite">
      {/* Large background brand text */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden">
        <span className="footer-brand-text whitespace-nowrap">
          XO DIGITAL
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoMark}
                alt="XO Digital Systems Logo"
                className="w-[46px] h-[46px] object-contain"
              />
              <span className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold text-foreground tracking-tight">
                  XO DIGITAL
                </span>
                <span className="text-[10px] font-medium text-muted-foreground tracking-[0.2em]">
                  SYSTEMS
                </span>
              </span>
            </div>

            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              XO Digital Systems is building connected commerce software for businesses with complex buying journeys.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:admin@xo.systems.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  admin@xo.systems.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} XO Digital Systems. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.helpful.slice(2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

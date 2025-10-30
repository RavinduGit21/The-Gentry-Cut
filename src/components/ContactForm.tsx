import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-input border-0 border-b-2 border-muted-foreground focus:border-accent rounded-none transition-all duration-300"
        />
      </div>
      
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-input border-0 border-b-2 border-muted-foreground focus:border-accent rounded-none transition-all duration-300"
        />
      </div>
      
      <div>
        <Input
          type="tel"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="bg-input border-0 border-b-2 border-muted-foreground focus:border-accent rounded-none transition-all duration-300"
        />
      </div>
      
      <div>
        <Textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={4}
          className="bg-input border-0 border-b-2 border-muted-foreground focus:border-accent rounded-none transition-all duration-300 resize-none"
        />
      </div>
      
      <Button type="submit" variant="gold" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;

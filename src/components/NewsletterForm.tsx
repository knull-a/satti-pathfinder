import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { newsletterService } from "@/services/newsletterService";
import axios from "axios";

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await newsletterService.toggleUser(formData);
      
      if (response.success) {
        toast({
          title: t('newsletter.success.title'),
          description: t('newsletter.success.desc'),
        });
        setFormData({ name: "", email: "" });
      } else {
        const backendError = (response.error || response.message || '').toLowerCase();
        const mapped = backendError.includes('already') && backendError.includes('subscribed')
          ? t('newsletter.error.alreadySubscribed')
          : t('newsletter.error.desc');
        toast({
          title: t('newsletter.error.title'),
          description: mapped,
          variant: "destructive",
        });
      }
    } catch (error: unknown) {
      console.error('Newsletter subscription error:', error);
      const apiMessage = axios.isAxiosError(error)
        ? (error.response?.data as { error?: string; message?: string } | undefined)?.error ||
          (error.response?.data as { error?: string; message?: string } | undefined)?.message
        : undefined;
      const normalized = (apiMessage || '').toLowerCase();
      const mapped = normalized.includes('already') && normalized.includes('subscribed')
        ? t('newsletter.error.alreadySubscribed')
        : t('newsletter.error.desc');
      toast({
        title: t('newsletter.error.title'),
        description: mapped,
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Mail className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">{t('newsletter.title')}</h3>
          </div>
          <p className="text-muted-foreground">
            {t('newsletter.desc')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('newsletter.name')}</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('newsletter.namePlaceholder')}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('newsletter.email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('newsletter.emailPlaceholder')}
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            {t('newsletter.submit')}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default NewsletterForm;
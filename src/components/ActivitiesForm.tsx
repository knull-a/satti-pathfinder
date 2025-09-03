import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ActivitiesForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CheckCircle className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">{t('activities.form.title').split('?')[0]}?</h3>
          </div>
          <p className="text-muted-foreground">
            {t('activities.form.title').split('? ')[1]}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('activities.form.name')}</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('activities.form.name')}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('activities.form.email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t('activities.form.phone')}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (xxx) xxx-xx-xx"
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            {t('activities.form.submit')}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default ActivitiesForm;
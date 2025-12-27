import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.email("Insira um e-mail válido"),
  subject: z.string().min(5, "O assunto deve ser mais descritivo"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("from_name", data.name);
    formData.append("subject", `Contato via Portfólio: ${data.subject}`);
    formData.append("replyto", data.email);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch(import.meta.env.VITE_WEB3FORMS_API_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Mensagem enviada com sucesso!");
        form.reset();
      } else {
        toast.error("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro de conexão. Verifique sua rede.");
      console.error(error)
    }
  };

  const inputStyles = "bg-background border-2 border-border rounded-xl focus-visible:outline-none focus-visible:ring-0 focus-visible:border-dracula-orange outline-none transition-all placeholder:text-muted-foreground text-foreground";

  return (
    <main className="min-h-screen bg-background text-foreground p-6 md:p-12 font-jetbrains flex items-center justify-center transition-colors duration-500">
      <div className="max-w-6xl w-full flex flex-col xl:flex-row gap-12 xl:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8"
        >
          <div className="text-center xl:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos <span className="text-dracula-secondary">Conversar?</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Estou aberto a novas oportunidades e colaborações em projetos inovadores.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-dracula-current rounded-xl flex items-center justify-center text-dracula-cyan border border-border group-hover:border-dracula-cyan transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">E-mail</p>
                <p className="text-lg font-bold">matheuscarv.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-dracula-current rounded-xl flex items-center justify-center text-dracula-green border border-border group-hover:border-dracula-green transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Telefone / WhatsApp</p>
                <p className="text-lg font-bold">(65) 99207-9383</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-dracula-current rounded-xl flex items-center justify-center text-dracula-primary border border-border group-hover:border-dracula-primary transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Localização</p>
                <p className="text-lg font-bold">Várzea Grande, MT - Brasil</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 bg-card p-8 md:p-10 rounded-3xl border border-border shadow-2xl transition-colors"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Seu Nome" className={`${inputStyles} h-14`} {...field} />
                      </FormControl>
                      <FormMessage className="text-dracula-red" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Seu E-mail" className={`${inputStyles} h-14`} {...field} />
                      </FormControl>
                      <FormMessage className="text-dracula-red" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Assunto" className={`${inputStyles} h-14`} {...field} />
                    </FormControl>
                    <FormMessage className="text-dracula-red" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="Sua Mensagem" 
                        className={`${inputStyles} min-h-37.5 py-4`} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-dracula-red" />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={form.formState.isSubmitting}
                className="w-full h-14 bg-dracula-green text-dracula-bg font-bold rounded-xl hover:opacity-80 transition-all gap-2 uppercase"
              >
                {form.formState.isSubmitting ? "Enviando..." : "Enviar mensagem"} <Send size={18} />
              </Button>
            </form>
          </Form>
        </motion.div>

      </div>
    </main>
  );
};

export default Contact;

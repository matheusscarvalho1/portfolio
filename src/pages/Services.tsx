import { useTranslation } from "react-i18next";
import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/data/services"; // Importe seus dados

const Services = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8 transition-colors duration-500">
      <section aria-labelledby="services-title" className="max-w-4xl w-full">
        <h1 id="services-title" className="text-4xl font-bold mb-4 text-center">
          {t("services.title_main")}{" "}
          <span className="text-dracula-secondary">{t("services.title_highlight")}</span>
        </h1>

        <p className="text-center mb-12 text-muted-foreground">
          {t("services.description")}
        </p>
        
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <li key={service.id}>
              <ServiceCard
                icon={service.icon}
                title={t(`services.cards.${service.id}.title`)}
                description={t(`services.cards.${service.id}.desc`)}
                color={service.color}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Services;

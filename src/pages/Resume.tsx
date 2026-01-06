import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { 
  BackpackIcon, 
  CodeIcon, 
  PersonIcon, 
  ChevronRightIcon,
  ShadowIcon
} from "@radix-ui/react-icons";
import { useTranslation, Trans } from "react-i18next";

import { DownloadIcon } from "lucide-react";
import { ResumeItem } from "@/components/TimelineItem";
import { Badge } from "@/components/ui/badge";
import { LibAndTechniques } from "@/data/libAndTechniques";
import { BackEndSkills, FrontEndSkills } from "@/data/skills";

type ViewOption = 'sobre-mim' | 'experiencia' | 'habilidades' | 'formacao';



const Resume = () => {
  const { t, i18n } = useTranslation();
  const [view, setView] = useState<ViewOption>('sobre-mim');

const navItems: { id: ViewOption; label: string; icon: React.ReactNode }[] = [
  { id: "sobre-mim", label: t("resume.nav.about"), icon: <PersonIcon /> },
  { id: "experiencia", label: t("resume.nav.experience"), icon: <BackpackIcon /> },
  { id: "habilidades", label: t("resume.nav.skills"), icon: <CodeIcon /> },
  { id: "formacao", label: t("resume.nav.education"), icon: <ShadowIcon /> }
];

  return (
    <main className="flex flex-col justify-center items-center p-6 md:p-8 bg-background text-foreground min-h-screen transition-colors duration-500">
      <div className="flex flex-col xl:flex-row items-start gap-10 md:gap-20 max-w-6xl w-full">
        <div className="flex flex-col gap-4 w-full xl:w-1/3">
          <h1 className="text-3xl font-bold mb-6 text-center xl:text-left">
            {t("resume.title_main")}{" "}
            <span className="text-dracula-secondary">
              {t("resume.title_highlight")}
            </span>
          </h1>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => setView(item.id)}
                aria-label={`Visualizar a seção ${item.label}`}
                className={`h-16 justify-between text-lg border-2 transition-all font-bold 
                  ${view === item.id 
                    ? "border-dracula-cyan text-dracula-cyan bg-card hover:bg-card hover:text-dracula-cyan hover:border-dracula-cyan/50" 
                    : "border-border text-muted-foreground bg-transparent hover:text-dracula-cyan hover:border-dracula-cyan/50"
                  }`}
              >
                <span className="flex items-center gap-4">
                  {item.icon} {item.label}
                </span>
                {view === item.id && <ChevronRightIcon className="w-6 h-6" />}
              </Button>
            ))}
          </div>
          <div className="mt-4 pt-6 border-t border-border">
        <Button
          asChild
          aria-label={t("resume.download.aria")}
          className="w-full h-16 border-2 font-bold transition-all border-dracula-green text-dracula-green bg-transparent hover:text-background hover:bg-dracula-green">
            <a href="/matheus-scarvalho-cv.pdf" download>
              {t("resume.download.label")}
              <DownloadIcon className="ml-3 w-5 h-5" />
            </a>
        </Button>
          </div>
        </div>
        <div className="flex-1 w-full bg-card p-8 rounded-2xl border border-border min-h-125 transition-colors">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {view === "sobre-mim" && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="text-center xl:text-left">
                    <h3 className="text-3xl font-bold text-dracula-cyan mb-4">
                      {t("resume.about.title")}
                    </h3>
                    <p className="text-dracula-primary font-mono text-sm mb-6 uppercase tracking-widest">
                      {t("resume.about.role")}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-background p-4 rounded-xl border border-dracula-green">
                      <span className="text-2xl font-bold text-dracula-green">{t("resume.about.stats.productivity.value")}</span>
                      <p className="text-[10px] uppercase text-muted-foreground">{t("resume.about.stats.productivity.label")}</p>
                    </div>
                    <div className="bg-background p-4 rounded-xl border border-dracula-cyan">
                      <span className="text-2xl font-bold text-dracula-cyan">{t("resume.about.stats.performance.value")}</span>
                      <p className="text-[10px] uppercase text-muted-foreground">{t("resume.about.stats.performance.label")}</p>
                    </div>
                    <div className="bg-background p-4 rounded-xl border border-dracula-primary">
                      <span className="text-2xl font-bold text-dracula-primary">{t("resume.about.stats.process.value")}</span>
                      <p className="text-[10px] uppercase text-muted-foreground">{t("resume.about.stats.process.label")}</p>
                    </div>
                  </div>
                  <div className="max-h-125 overflow-y-auto pr-4 custom-scrollbar space-y-6 text-sm md:text-base leading-relaxed text-balance">
                      <p className="text-foreground">
                        <Trans
                              key={i18n.language}
                              i18nKey="resume.about.description.p1"
                              components={{1: <strong className="text-dracula-orange" />}}
                            />
                      </p>
                      <div className="space-y-4">
                          <h4 className="text-dracula-primary font-bold uppercase text-xs tracking-widest">{t("resume.about.expertise.title")}</h4>
                          <p className="text-foreground text-sm">
                            <Trans
                              key={i18n.language}
                              i18nKey="resume.about.expertise.text"
                              components={{1: <strong className="text-dracula-orange" />}}
                            />
                          </p>
                      </div>
                      <div className="bg-background p-6 rounded-2xl border border-border">
                          <h4 className="text-dracula-primary font-bold uppercase text-xs tracking-widest mb-4">Soft Skills</h4>
                          <div className="flex flex-wrap gap-2">
                              {(
                              t("resume.about.soft_skills.items", {
                                returnObjects: true,
                              }) as string[]
                            ).map((tag) => (
                              <Badge key={tag} variant="draculaProps">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                      </div>
                      <p className="text-dracula-cyan italic font-medium">
                          {t("resume.about.quote")}
                      </p>
                  </div>
                </div>
              )}
              {view === "experiencia" && (
                <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-500">
                  <h3 className="text-3xl font-bold text-dracula-cyan">
                    {t("resume.experience.title")}
                  </h3>

                  <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                    <div className="border-l-2 border-dracula-green/30 pl-6 space-y-10">

                      {/* EXPERIÊNCIA 1 */}
                      <div className="relative">
                        <div className="absolute w-3 h-3 bg-dracula-green rounded-full -left-[1.95rem] top-1.5 shadow-[0_0_8px_var(--dracula-green)]" />

                        <span className="text-dracula-primary text-sm font-mono">
                          {t("resume.experience.items.backend.period")}
                        </span>

                        <h4 className="text-xl font-bold text-foreground">
                          {t("resume.experience.items.backend.role")}
                        </h4>

                        <p className="text-dracula-secondary font-semibold text-sm">
                          {t("resume.experience.items.backend.company")}
                        </p>

                        <p className="text-xs md:text-sm text-muted-foreground mt-1 mb-4 italic">
                          {t("resume.experience.items.backend.stack")}
                        </p>

                        <ul className="space-y-3 text-sm text-foreground/90 dark:text-foreground/80 leading-relaxed">
                          {(t("resume.experience.items.backend.activities", {
                            returnObjects: true,
                          }) as string[]).map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-dracula-green">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* EXPERIÊNCIA 2 */}
                      <div className="relative">
                        <div className="absolute w-3 h-3 bg-dracula-green/50 rounded-full -left-[1.95rem] top-1.5" />

                        <span className="text-dracula-primary text-sm font-mono">
                          {t("resume.experience.items.frontend.period")}
                        </span>

                        <h4 className="text-xl font-bold text-foreground">
                          {t("resume.experience.items.frontend.role")}
                        </h4>

                        <p className="text-dracula-secondary font-semibold text-sm">
                          {t("resume.experience.items.frontend.company")}
                        </p>

                        <p className="text-xs md:text-sm text-muted-foreground mt-1 mb-4 italic">
                          {t("resume.experience.items.frontend.stack")}
                        </p>

                        <ul className="space-y-3 text-sm text-foreground/90 dark:text-foreground/80 leading-relaxed">
                          {(t("resume.experience.items.frontend.activities", {
                            returnObjects: true,
                          }) as string[]).map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-dracula-green">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              )}
              {view === "habilidades" && (
                <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-500">
                  <div className="text-center xl:text-left">
                    <h3 className="text-3xl font-bold text-dracula-cyan">
                      {t("resume.skills.title")}
                    </h3>

                    <p className="text-white/60 text-sm mt-2">
                      {t("resume.skills.subtitle")}
                    </p>
                  </div>

                  <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-10">

                    {/* FRONT-END */}
                    <section>
                      <h4 className="text-dracula-orange font-mono text-xs uppercase tracking-widest mb-6 border-l-2 border-dracula-orange pl-3">
                        {t("resume.skills.frontend")}
                      </h4>

                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                        {FrontEndSkills.map((skill, index) => (
                          <div key={index} className="flex flex-col items-center group ml-4">
                            <div className="text-4xl md:text-5xl p-4 bg-dracula-current/20 rounded-xl border border-white/5 group-hover:border-dracula-orange/50 transition-all duration-300 mb-2">
                              <div className={`transition-colors duration-300 ${skill.color}`}>
                                {skill.icon}
                              </div>
                            </div>

                            <span className="text-[10px] font-bold uppercase text-center opacity-80 group-hover:opacity-100 group-hover:text-dracula-orange transition-all">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* BACK-END */}
                    <section>
                      <h4 className="text-dracula-orange font-mono text-xs uppercase tracking-widest mb-6 border-l-2 border-dracula-orange pl-3">
                        {t("resume.skills.backend")}
                      </h4>

                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                        {BackEndSkills.map((skill, index) => (
                          <div key={index} className="flex flex-col items-center group ml-4">
                            <div className="text-4xl md:text-5xl p-4 bg-dracula-current/20 rounded-xl border border-white/5 group-hover:border-dracula-orange/50 transition-all duration-300 mb-2">
                              <div className={`transition-colors duration-300 ${skill.color}`}>
                                {skill.icon}
                              </div>
                            </div>

                            <span className="text-[10px] font-bold uppercase text-center opacity-80 group-hover:opacity-100 group-hover:text-dracula-orange transition-all">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </section>

                    {/* ECOSSISTEMA */}
                    <section className="bg-dracula-current/10 p-6 rounded-2xl border border-white/5">
                      <h4 className="text-dracula-secondary font-mono text-xs uppercase tracking-widest mb-6 text-center">
                        {t("resume.skills.ecosystem")}
                      </h4>

                      <div className="flex flex-wrap justify-center gap-3">
                        {LibAndTechniques.map((tag) => (
                          <Badge
                            key={tag}
                            variant="draculaProps"
                            className="px-4 py-1.5 bg-dracula-bg text-[10px] md:text-[11px] font-bold cursor-default"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </section>

                  </div>
                </div>
              )}         
              {view === "formacao" && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h3 className="text-3xl font-bold text-dracula-cyan">
                  {t("resume.education.title")}
                </h3>
                   <div className="border-l-2 border-dracula-green/30 pl-6 space-y-10">
                        {(t("resume.education.items", { returnObjects: true }) as {
                              date: string;
                              title: string;
                              subtitle: string;
                              link: string;
                              
                            }[]).map((item, index) => (
                              <ResumeItem
                                key={index}
                                date={item.date}
                                title={item.title}
                                subtitle={item.subtitle}
                                link={item.link}
                              />
                            ))}
                          </div>
                        </div>
                      )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Resume;
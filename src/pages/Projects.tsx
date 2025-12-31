import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from 'react-i18next';

interface ProjectProps {
    id: number;
    title: string;
    status: "completed" | "in-progress" | "maintenance"; 
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
}

const Projects = () => {
    const { t } = useTranslation();
    
    const projects = t("projects.list", { returnObjects: true }) as ProjectProps[];

    return (
        <section
            className="min-h-screen bg-background py-10 px-4 overflow-hidden"
            aria-labelledby="projects-title"
        >
            <div className="max-w-7xl mx-auto">
                <h1
                    id="projects-title"
                    className="text-4xl font-bold mb-6 text-center text-foreground"
                >
                    {t("projects.title_main")}{" "}
                    <span className="text-dracula-secondary">
                        {t("projects.title_highlight")}
                    </span>
                </h1>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    slidesPerView={1}
                    spaceBetween={50}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    a11y={{
                        prevSlideMessage: t("projects.carousel.prev"),
                        nextSlideMessage: t("projects.carousel.next"),
                        firstSlideMessage: t("projects.carousel.first"),
                        lastSlideMessage: t("projects.carousel.last"),
                        paginationBulletMessage: t("projects.carousel.pagination"),
                    }}
                    role="region"
                    aria-roledescription={t("projects.carousel.role_description")}
                    aria-label={t("projects.carousel.aria_label")}
                    className="w-full custom-swiper"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id} className="flex justify-center items-center px-2">
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Projects;
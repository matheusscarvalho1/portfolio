import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects";

const Projects = () => {
   return (
        <section className="min-h-screen bg-background py-10 px-4 overflow-hidden transition-colors duration-300" aria-labelledby="projects-title">
            <div className="max-w-7xl mx-auto">
                <h1 id="projects-title" className="text-4xl font-bold mb-6 text-center text-foreground">
                    Meus <span className="text-dracula-secondary">Projetos</span>
                </h1>

               <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    slidesPerView={1} 
                    spaceBetween={50} 
                    navigation={true}
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true
                    }}
                    autoplay={{ delay: 8000, disableOnInteraction: false,  pauseOnMouseEnter: true }}
                    a11y={{
                        prevSlideMessage: 'Projeto anterior',
                        nextSlideMessage: 'Próximo projeto',
                        firstSlideMessage: 'Primeiro projeto',
                        lastSlideMessage: 'Último projeto',
                        paginationBulletMessage: 'Ir para o projeto {{index}}',
                    }}
                    role="region"
                    aria-roledescription="carrossel"
                    aria-label="Lista de projetos em carrossel"
                    className="w-full custom-swiper" 
                >
                    {projectsData.map((project) => (
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

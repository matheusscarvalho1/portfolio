import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon, GitHubLogoIcon, DownloadIcon } from "@radix-ui/react-icons";
import CountUp from 'react-countup';
import { useQuery } from "@apollo/client/react";
import { GET_GITHUB_DATA } from '../graphql/queries';
import Loading from "@/components/common/Loading";
import profileImg from "/assets/PROFILE.png";
import { ProfileImage } from "@/components/ProfileImage";
import Error500Page from "@/components/common/Error-500";
import { useTranslation, Trans } from "react-i18next";

interface GitHubRepo {
  defaultBranchRef: {
    target: { history: { totalCount: number }; };
  } | null;
}

interface GitHubResponse {
  viewer: {
    repositories: {
      totalCount: number;
      nodes: GitHubRepo[];
    };
  };
}

const Home = () => {
    const { t, i18n } = useTranslation();
    const { loading, error, data } = useQuery<GitHubResponse>(GET_GITHUB_DATA);

    if (loading) return (<Loading />);
    if (error) return (<Error500Page />);

    const repositories = data?.viewer.repositories;
    const totalPublicRepos = repositories?.totalCount ?? 0;

    const totalCommitsGlobal = repositories?.nodes?.reduce((total, repo) => {
            const commits = repo.defaultBranchRef?.target.history.totalCount ?? 0;
            return total + commits;
        }, 0) ?? 0;

    return ( 
        <main className="flex flex-col justify-center items-center p-6 md:p-8 bg-background text-foreground min-h-screen transition-colors duration-500">
            <section aria-labelledby="hero-title">
                <div className="flex flex-col-reverse xl:flex-row items-center gap-10 md:gap-25">
                    <div className="flex flex-col justify-center flex-1 text-center xl:text-left">
                        <h2 className="text-dracula-cyan text-sm md:text-base uppercase tracking-[0.3em] mb-3 font-medium">
                            {t("home.role")}
                        </h2>                     
                        <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                            {t("home.greeting")} <br />
                            <span className="text-dracula-secondary">Matheus Carvalho</span>
                        </h1>
                        <h2 className="text-lg md:text-xl text-muted-foreground leading-relaxed italic text-balance max-w-2xl mx-auto md:mx-0">
                            <Trans 
                                key={i18n.language}
                                i18nKey="home.description" 
                                components={{ 1: <strong className="text-dracula-primary" /> }}
                            />
                            <span className="inline-block align-middle w-1 h-[1.1em] bg-current animate-terminal-blink" aria-hidden="true"/>
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 xl:justify-start">
                            <Button 
                                asChild
                                size="lg" 
                                className="h-12 px-6 text-md bg-transparent border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-background transition-all font-bold border-2"
                            >
                                <a href="/matheus-scarvalho-cv.pdf" download aria-label={t("home.aria.download")}>
                                    {t("home.download_cv")} <DownloadIcon className="w-5 h-5 ml-2" aria-hidden="true" />
                                </a>
                            </Button>
                            
                            <div className="flex gap-4">
                                <Button asChild className="bg-transparent rounded-full w-12 h-12 border-2 border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-background transition-all">
                                    <a href="https://www.linkedin.com/in/matheusscarvalho/" target="_blank" rel="noopener noreferrer" aria-label={t("home.aria.linkedin")}>
                                        <LinkedInLogoIcon className="w-6 h-6" aria-hidden="true"/>
                                    </a>
                                </Button>
                                <Button asChild className="bg-transparent rounded-full w-12 h-12 border-2 border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-background transition-all">
                                    <a href="https://github.com/matheusscarvalho1/" target="_blank" rel="noopener noreferrer" aria-label={t("home.aria.github")}>
                                        <GitHubLogoIcon className="w-6 h-6" aria-hidden="true"/>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="scale-110 mt-6 md:scale-130">
                        <ProfileImage src={profileImg} alt="Matheus Carvalho" />
                    </div>
                </div>
            </section>

            <div className="flex flex-wrap gap-8 md:gap-16 mt-16 md:mt-24 justify-center border-t border-border pt-10 w-full max-w-5xl">
                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-green mb-1" aria-label={t("home.aria.exp_label")}>
                        <CountUp end={3} duration={8} />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-medium leading-tight">
                        <Trans 
                            key={`experience-${i18n.language}`}
                            i18nKey="home.stats.experience" 
                            components={{ 1: <br /> }} 
                        />
                    </p>
                </div>

                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-orange mb-1" aria-label={t("home.aria.proj_label")}>
                        +<CountUp end={6} duration={8} />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-medium leading-tight">
                        <Trans 
                            key={`projects-${i18n.language}`}
                            i18nKey="home.stats.projects" 
                            components={{ 1: <br /> }} 
                        />
                    </p>
                </div>

                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-cyan mb-1" aria-label={`${t("home.stats.repositories")}: ${totalPublicRepos}`}>
                        +<CountUp end={totalPublicRepos} duration={8} />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-medium leading-tight">
                        {t("home.stats.repositories")}
                    </p>
                </div>

                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-secondary mb-1" aria-label={`${t("home.stats.commits")}: ${totalCommitsGlobal}`}>
                        +<CountUp end={totalCommitsGlobal} duration={8} separator="." />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-medium leading-tight">
                        <Trans 
                            key={`commits-${i18n.language}`}
                            i18nKey="home.stats.commits" 
                            components={{ 1: <br /> }} 
                        />
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Home;
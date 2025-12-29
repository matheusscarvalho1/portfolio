import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon, GitHubLogoIcon, DownloadIcon } from "@radix-ui/react-icons"
import CountUp from 'react-countup';
import { useQuery } from "@apollo/client/react";
import { GET_GITHUB_DATA } from '../graphql/queries';
import Loading from "@/components/common/Loading";
import profileImg from "/assets/PROFILE.png";
import { ProfileImage } from "@/components/ProfileImage";
import ErrorPage from "@/components/common/Error";

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
    const { loading, error, data } = useQuery<GitHubResponse>(GET_GITHUB_DATA);

    if (loading) return (<Loading />);
    if (error) return (<ErrorPage statusCode={500} />);

    const repositories = data?.viewer.repositories;
    const totalPublicRepos = repositories?.totalCount ?? 0;

    const totalCommitsGlobal = repositories?.nodes?.reduce((total, repo) => {
            const commits = repo.defaultBranchRef?.target.history.totalCount ?? 0;
            return total + commits;
        }, 0) ?? 0;

    return ( 
        <main className="flex flex-col justify-center items-center p-6 md:p-8 bg-background text-foreground min-h-screen transition-colors duration-500">
            <div className="flex flex-col-reverse xl:flex-row items-center gap-10 md:gap-25">
                <div className="flex flex-col justify-center flex-1 text-center xl:text-left">
                    <h1 className="text-dracula-cyan text-sm md:text-base uppercase tracking-[0.3em] mb-3 font-medium">
                        Desenvolvedor de Software
                    </h1>                     
                    <h1 className="text-4xl sm:text-5xl md:6xl font-bold mb-4 leading-tight">
                        Olá, eu sou <br />
                        <span className="text-dracula-secondary">Matheus Carvalho</span>
                    </h1>
                    <h2 className="text-lg md:text-xl text-muted-foreground leading-relaxed italic text-balance max-w-2xl mx-auto md:mx-0">
                        // Transformando requisitos complexos em soluções digitais de alto impacto, com expertise em desenvolvimento <strong className="text-dracula-primary">Front-end</strong>, <strong className="text-dracula-primary">Mobile</strong>, <strong className="text-dracula-primary">Back-end</strong>  e <strong className="text-dracula-primary">FullStack</strong>.
                        <span className="inline-block align-middle w-1 h-[1.1em] bg-current animate-terminal-blink" />
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 xl:justify-start">
                        <Button 
                            asChild
                            size="lg" 
                            className="h-12 px-6 text-md bg-transparent border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-background transition-all font-bold border-2"
                        >
                            <a href="/matheus-scarvalho-cv.pdf" download>
                                DOWNLOAD CV <DownloadIcon className="w-5 h-5 ml-2" />
                            </a>
                        </Button>
                        
                        <div className="flex gap-4">
                            <Button 
                                asChild 
                                className="bg-transparent rounded-full w-12 h-12 border-2 border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-background transition-all"
                            >
                                <a href="https://www.linkedin.com/in/matheusscarvalho/" target="_blank" rel="noopener noreferrer">
                                    <LinkedInLogoIcon className="w-6 h-6" />
                                </a>
                            </Button>
                            <Button 
                                asChild 
                                className="bg-transparent rounded-full w-12 h-12 border-2 border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-background transition-all"
                            >
                                <a href="https://github.com/matheusscarvalho1" target="_blank" rel="noopener noreferrer">
                                    <GitHubLogoIcon className="w-6 h-6" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="scale-110 mt-6 md:scale-130">
                    <ProfileImage src={profileImg} alt="Matheus Carvalho" />
                </div>
            </div>
            <div className="flex flex-wrap gap-8 md:gap-16 mt-16 md:mt-24 justify-center border-t border-border pt-10 w-full max-w-5xl">
                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-green mb-1">
                        <CountUp end={3} duration={8} />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-medium leading-tight">Anos de <br/> experiência</p>
                </div>
                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-orange mb-1">
                        +<CountUp end={6} duration={8} />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-medium leading-tight">Projetos <br/> robustos</p>
                </div>
                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-cyan mb-1">
                        +<CountUp end={totalPublicRepos} duration={8} />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-medium leading-tight">Repositórios</p>
                </div>

                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-secondary mb-1">
                        +<CountUp end={totalCommitsGlobal} duration={8} separator="." />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-medium leading-tight">Total de <br/>Commits</p>
                </div>
            </div>
        </main>
    );
}

export default Home;

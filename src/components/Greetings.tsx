import { Button } from "./ui/button";
import { LinkedInLogoIcon, GitHubLogoIcon, DownloadIcon } from "@radix-ui/react-icons"
import CountUp from 'react-countup';
import { useQuery } from "@apollo/client/react";
import { GET_GITHUB_DATA } from '../graphql/queries';
import Loading from "./common/Loading";
import type { GitHubRepo, GitHubResponse } from "@/interface/github-interface";
import profileImg from "/assets/profile.png";
import { ProfileImage } from "./ProfileImage";
import ErrorPage from "./common/Error";

const Greetings = () => {
    const { loading, error, data } = useQuery<GitHubResponse>(GET_GITHUB_DATA);

    if (loading) return (<Loading />);
    if (error) return (<ErrorPage type={500} />);

    const totalPublicRepos = data?.viewer.repositories.totalCount || 0;
    const commits = data?.viewer.repositories.nodes
    const totalCommitsGlobal = commits?.reduce(
        (acc: number, repo: GitHubRepo) => {
            const repoCommits = repo.defaultBranchRef?.target.history.totalCount || 0;
            return acc + repoCommits;
        }, 
        0
    ) || 0;

    return ( 
        <main className="flex flex-col justify-center items-center p-6 md:p-8 bg-dracula-bg text-dracula-text min-h-screen">
            <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-6xl w-full">
                
                <div className="flex flex-col justify-center flex-1 text-center md:text-left">
                    <h1 className="text-dracula-cyan text-sm md:text-base uppercase tracking-[0.3em] mb-3 font-medium">
                        Desenvolvedor de Software
                    </h1> 
                    
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        Olá, eu sou <br />
                        <span className="text-dracula-secondary">Matheus Carvalho</span>
                    </h1>

                    <h2 className="text-lg md:text-xl opacity-80 leading-relaxed italic text-balance max-w-2xl mx-auto md:mx-0">
                        // Transformando requisitos complexos em soluções digitais de alto impacto, com expertise em <strong>Front-end</strong>, <strong>Back-end</strong> e <strong>Mobile</strong>
                        <span className="inline-block align-middle w-1 h-[1.1em] bg-current animate-terminal-blink" />
                    </h2>

                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mt-8">
                        <Button 
                            asChild 
                            variant="outline" 
                            size="lg" 
                            className="h-12 px-6 text-md bg-transparent border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-dracula-bg transition-all font-bold border-2"
                        >
                            <a 
                                href="/ATS_CV_Matheus_Carvalho_Desenvolvedor_Front_End_2025_V7.pdf" 
                                download="ATS_CV_Matheus_Carvalho_Desenvolvedor_Front_End_2025_V7.pdf"
                            >
                                DOWNLOAD CV <DownloadIcon className="w-5 h-5 ml-2" />
                            </a>
                        </Button>
                        
                        <div className="flex gap-4">
                            <Button 
                                asChild 
                                variant="outline" 
                                className="bg-transparent rounded-full w-12 h-12 border-2 border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-dracula-bg transition-all"
                            >
                                <a href="https://www.linkedin.com/in/matheusscarvalho/" target="_blank" rel="noopener noreferrer">
                                    <LinkedInLogoIcon className="w-6 h-6" />
                                </a>
                            </Button>
                            <Button 
                                asChild 
                                variant="outline" 
                                className="bg-transparent rounded-full w-12 h-12 border-2 border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-dracula-bg transition-all"
                            >
                                <a href="https://github.com/matheusscarvalho1" target="_blank" rel="noopener noreferrer">
                                    <GitHubLogoIcon className="w-6 h-6" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-48 h-48 md:w-72 md:h-72 flex justify-center items-center">
                    <div className="scale-110 md:scale-125">
                        <ProfileImage src={profileImg} alt="Matheus Carvalho" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-8 md:gap-16 mt-16 md:mt-24 justify-center border-t border-white/10 pt-10 w-full max-w-5xl">
                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-green mb-1">
                        <CountUp end={3} duration={8} />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-60 font-medium leading-tight">Anos de <br/> experiência</p>
                </div>
                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-orange mb-1">
                        +<CountUp end={8} duration={8} />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-60 font-medium leading-tight">Projetos <br/> robustos</p>
                </div>
                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-cyan mb-1">
                        <CountUp end={totalPublicRepos} duration={8} />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-60 font-medium leading-tight">Repositórios <br/> públicos</p>
                </div>

                <div className="text-center min-w-30">
                    <h3 className="text-4xl md:text-5xl font-bold text-dracula-secondary mb-1">
                        +<CountUp end={totalCommitsGlobal} duration={8} separator="." />
                    </h3>
                    <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-60 font-medium leading-tight">Total de <br/> Commits</p>
                </div>
            </div>
        </main>
    );
}

export default Greetings;

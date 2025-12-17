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
        <main className="flex flex-col justify-center items-center p-8 bg-dracula-bg text-dracula-text">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex flex-col justify-center max-w-2xl">
                    <h1 className="text-dracula-cyan text-sm uppercase tracking-widest mb-2">
                        Desenvolvedor de Software
                    </h1> 
                    <h1 className="text-5xl font-bold mb-4">
                        Olá, eu sou <br /><span className="text-dracula-secondary">Matheus Carvalho</span>
                    </h1>
                     <h2 className="text-lg opacity-80 leading-relaxed italic text-balance">
                        // Transformando requisitos complexos em soluções digitais de alto impacto, com expertise em <strong>Front-end</strong>, <strong>Back-end</strong> e <strong>Mobile</strong>
                        <span className="inline-block align-middle w-0.5 h-[1.1em] bg-current animate-terminal-blink" />
                    </h2>
                    <div className="flex items-center gap-4 mt-8">
                    <Button 
                        asChild 
                        variant="outline" 
                        size="lg" 
                        className=" bg-transparent border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-dracula-bg transition-all font-bold"
                    >
                        <a 
                            href="/ATS_CV_Matheus_Carvalho_Desenvolvedor_Front_End_2025_V7.pdf" 
                            download="ATS_CV_Matheus_Carvalho_Desenvolvedor_Front_End_2025_V7.pdf"
                        >
                            DOWNLOAD CV <DownloadIcon className="w-5 h-5" />
                        </a>
                    </Button>
                    <Button 
                        asChild 
                        variant="outline" 
                        size="icon" 
                        className="bg-transparent rounded-full w-12 h-12 border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-dracula-bg transition-all"
                    >
                        <a href="https://www.linkedin.com/in/matheusscarvalho/" target="_blank" rel="noopener noreferrer">
                            <LinkedInLogoIcon className="w-6 h-6" />
                        </a>
                    </Button>
                    <Button 
                        asChild 
                        variant="outline" 
                        size="icon" 
                        className="bg-transparent rounded-full w-12 h-12 border-dracula-green text-dracula-green hover:bg-dracula-green hover:text-dracula-bg transition-all"
                    >
                        <a href="https://github.com/matheusscarvalho1" target="_blank" rel="noopener noreferrer">
                            <GitHubLogoIcon className="w-6 h-6" />
                        </a>
                    </Button>
                </div>
            </div>
                <ProfileImage src={profileImg} alt="Matheus Carvalho" />
            </div>
            <div className="flex flex-wrap gap-12 mt-20 justify-center">
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-dracula-green">
                        <CountUp end={3} duration={8} />
                    </h3>
                    <p className="text-xs uppercase opacity-60">Anos de experiência</p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl font-bold text-dracula-orange">
                        +<CountUp end={8} duration={8} />
                    </h3>
                    <p className="text-xs uppercase opacity-60">Projetos robustos</p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl font-bold text-dracula-cyan">
                        <CountUp end={totalPublicRepos} duration={8} />
                    </h3>
                    <p className="text-xs uppercase opacity-60">Repositórios públicos</p>
                </div>

                <div className="text-center">
                    <h3 className="text-4xl font-bold text-dracula-secondary">
                        <CountUp end={totalCommitsGlobal} duration={8} separator="." />
                    </h3>
                    <p className="text-xs uppercase opacity-60">Commits</p>
                </div>
            </div>
        </main>
    );
}

export default Greetings;

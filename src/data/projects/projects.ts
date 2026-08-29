import { Project } from "@/types/portfolio";
import { findCompanyByAlias, getTechStack } from "@/utils/portfolio";
import { ProjectHighlights } from "./projectHighlights";
import { ProjectPoints } from "./projectPoints";
import { ProjectTechStack } from "./projectTechStack";

export const Projects: Project[] = [
    {
        name: "Templato",
        alias: "templato",
        highlight: ProjectHighlights.Templato,
        points: ProjectPoints.Templato,
        company: findCompanyByAlias("redsoft"),
        isPersonal: false,
        techStack: getTechStack(ProjectTechStack.Templato),
        duration: '10 months',
        isVisible: true,
    },
    {
        name: "MovieRanker",
        alias: "movie_ranker",
        highlight: ProjectHighlights.MovieRanker,
        points: ProjectPoints.MovieRanker,
        company: findCompanyByAlias("wo"),
        isPersonal: false,
        techStack: getTechStack(ProjectTechStack.MovieRanker),
        duration: '5 months',
        liveUrl: "https://www.movieranker.com/",
        isVisible: true,
    },
    {
        name: "ParcelPort",
        alias: "parcel_port",
        highlight: ProjectHighlights.ParcelPort,
        points: ProjectPoints.ParcelPort,
        company: findCompanyByAlias("wo"),
        isPersonal: false,
        techStack: getTechStack(ProjectTechStack.ParcelPort),
        duration: '1.5 years',
        isVisible: true,
    },
    {
        name: "ItsKeedi",
        alias: "its_keedi",
        highlight: ProjectHighlights.ItsKeedi,
        points: ProjectPoints.ItsKeedi,
        company: findCompanyByAlias("shukul"),
        isPersonal: false,
        techStack: getTechStack(ProjectTechStack.ItsKeedi),
        duration: '4 months',
        isVisible: true,
    },
    {
        name: "Levrx",
        alias: "levrx",
        highlight: ProjectHighlights.Levrx,
        points: ProjectPoints.Levrx,
        company: findCompanyByAlias("lw"),
        isPersonal: false,
        techStack: getTechStack(ProjectTechStack.Levrx),
        duration: '5 years',
        liveUrl: "https://mwa.levrx.com/cdphp/login",
        isVisible: true,
    },
    {
        name: "SysGenie",
        alias: "sys_genie",
        points: [],
        isPersonal: true,
        techStack: getTechStack(ProjectTechStack.SysGenie),
        duration: '3 weeks',
        isVisible: true,
    },
    {
        name: "Codefolio",
        alias: "codefolio",
        points: [],
        isPersonal: true,
        techStack: getTechStack(ProjectTechStack.Codefolio),
        duration: '1 month',
        isVisible: true,
        liveUrl: 'https://codefolio.amanpathak-devwork.workers.dev/'
    },
];
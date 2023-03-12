export interface PortfolioCardProps {
    portfolio: {
        id: number;
        title: string;
        feature: string[];
        skills: string[];
        iframe?: string;
        img: string;
        site: string;
        git: string;
        youtube: string;
    };
}

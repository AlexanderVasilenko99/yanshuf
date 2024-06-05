import { ProjectModel, WORK_TYPES } from "../../Models/ProjectModel";
import "./GallerySection.scss";
import Project from "./Project/Project";

function GallerySection(): JSX.Element {
    const projects: ProjectModel[] = [
        new ProjectModel("Vasilenko Car Rental", WORK_TYPES.WEBSITE, '2023', '', 'alexandervasilenko99.github.io/car-rental/', 'car-rental.png'),
        new ProjectModel("Sockets Checklist", WORK_TYPES.LANDING_PAGE, '2023', 'JenyVStudio', 'https://lp.smoove.io/xqmn', 'checklist1.png'),
        new ProjectModel("Summer Makeover", WORK_TYPES.LANDING_PAGE, '2023', 'JenyVStudio', 'https://lp.smoove.io/omm7', 'summer-makeover1.png'),
        new ProjectModel("Insta Genius PRO", WORK_TYPES.LANDING_PAGE, '2024', 'JenyVStudio', 'https://lp.smoove.io/txpm', 'igpro.png'),
        new ProjectModel("Wood Wonders", WORK_TYPES.WEBSITE, '2024', 'Wood Wonders', '#', 'wood-wonders.png'),
        new ProjectModel("Vasilenko Vacations", WORK_TYPES.WEBSITE, '2024', '', 'http://45.55.70.243:4000/home', 'vasilenko-vacations.png'),
        new ProjectModel("Insta Genius", WORK_TYPES.LANDING_PAGE, '2024', 'JenyVStudio', 'https://lp.smoove.io/tpfa', 'ig.png'),
        new ProjectModel("PBR Analytics", WORK_TYPES.WEBSITE, '2024', 'PBR Analytics', 'https://alexandervasilenko99.github.io/PBR-Analytics/', 'pbranalytics.png'),
        new ProjectModel("Color Matching", WORK_TYPES.LANDING_PAGE, '2023', 'JenyVStudio', 'https://lp.smoove.io/obzd', 'colors.png'),
        new ProjectModel("Cinderella", WORK_TYPES.LANDING_PAGE, '2023', 'JenyVStudio', 'https://lp.smoove.io/odby', 'cinderella3.png'),
        new ProjectModel("Insta Boost", WORK_TYPES.LANDING_PAGE, '2023', 'JenyVStudio', 'https://lp.smoove.io/o6mp', 'insta-boost4.png'),
        new ProjectModel("JenyVStudio", WORK_TYPES.MANAGEMENT, '2022', 'JenyVStudio', 'https://www.jenyvstudio.co.il/', 'maintanence1.png'),
    ]
    return (
        <div className="GallerySection" id="portfolio">
            <div className="gallery-headers-container">
                <h1>Project Gallery</h1>
                <h3>Some of my recent projects</h3>
            </div>
            {projects.map(p => <div key={p.project_name}><Project
                redirect={p.redirect}
                workType={p.workType}
                client_name={p.client_name}
                due_date={p.due_date}
                image_name={p.image_name}
                project_name={p.project_name}
            /></div>)}
        </div >
    );
}

export default GallerySection;

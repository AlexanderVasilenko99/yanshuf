class AppConfig {
    public readonly gitBaseURL = 'https://alexandervasilenko99.github.io/yanshuf';
    
    public readonly homePage = '/home';
    public readonly booksPage = '/books';
    public readonly aboutPage = '/about';
    public readonly salesPage = '/sales';
    public readonly authorsPage = '/authors';
    public readonly dAndDPage = '/d&d';
    public readonly articlesPage = '/articles';
    public readonly galleryPage = '/gallery';

    public readonly genresPage = this.booksPage + '/genres';
    public readonly picksOfTheMonthPage = this.booksPage + '/picks-of-the-month';

    public readonly seriesPage = this.booksPage + '/series';

    public readonly booksFetchURL = 'https://raw.githubusercontent.com/AlexanderVasilenko99/yanshuf/main/public/books';
    public readonly picksOfTheMonthFetchURL = 'https://raw.githubusercontent.com/AlexanderVasilenko99/yanshuf/main/public/picks-of-the-month';
}
const appConfig = new AppConfig();
export default appConfig;
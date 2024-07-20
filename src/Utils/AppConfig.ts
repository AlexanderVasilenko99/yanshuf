class AppConfig {
    public readonly homePage = '/home';
    public readonly booksPage = '/books';
    public readonly aboutPage = '/about';
    public readonly authorsPage = '/authors';

    public readonly fictionPage = this.booksPage + '/fiction';
    public readonly thrillerPage = this.booksPage + '/thriller';

    public readonly seriesPage = this.booksPage + '/series';

    public readonly booksFetchURL = 'https://raw.githubusercontent.com/AlexanderVasilenko99/yanshuf/main/public/books';
    public readonly picksOfTheMonthFetchURL = 'https://raw.githubusercontent.com/AlexanderVasilenko99/yanshuf/main/public/picks-of-the-month';
}
const appConfig = new AppConfig();
export default appConfig;
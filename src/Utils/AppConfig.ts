class AppConfig {
    public readonly homePage = 'home';
    public readonly booksPage = 'books';
    public readonly aboutPage = 'about';
    
    public readonly booksFetchURL = 'https://raw.githubusercontent.com/AlexanderVasilenko99/yanshuf/main/public/books';
}
const appConfig = new AppConfig();
export default appConfig;
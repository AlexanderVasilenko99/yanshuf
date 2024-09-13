class ArticleModel {
    public constructor(
        public id: number,
        public title: string,
        public publishDate: Date,
        public coverImage: string,
        public short: string,
        public content: string,
    ) { }
}
export default ArticleModel;
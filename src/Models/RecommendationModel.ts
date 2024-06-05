class RecommendationModel {
    public constructor(public header: string, public content: string, public author: string) {
        this.header = header;
        this.content = content;
        this.author = author;
    }
}
export default RecommendationModel;
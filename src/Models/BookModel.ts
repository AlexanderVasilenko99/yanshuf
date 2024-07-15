class BookModel {
    public constructor(
        // public name: string,
        // public author: string,
        // public image_name: string,
        // public synopsis?: string,

        public id: number,
        public title: string,
        public author: string,
        public genre: string,
        public publishedYear: number,
        public price: number,
        public coverImage: string,
        public description: string,
        public rating: number,
        public publisher: string,
        public pageCount: number,
        public language: string,
        public series: {
            name: string,
            orderInSeries: number,
        },
        public edition: string,
        public releaseDate: string,
    ) { }
}
export default BookModel;
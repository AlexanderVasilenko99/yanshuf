class BookModel {
    public constructor(
        public name: string,
        public author: string,
        public image_name: string,
        public synopsis?: string
    ) { }
}
export default BookModel;
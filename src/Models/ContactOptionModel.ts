class ContactOptionModel {
    public constructor(public header: string, public content: string, public redirect: string, public image_name: string) {
        this.header = header;
        this.content = content;
        this.redirect = redirect;
        this.image_name = image_name;
    }
}
export default ContactOptionModel;
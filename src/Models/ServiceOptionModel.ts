class ServiceOptionModel {
    public constructor(public header: string, public content: string, public image_name: string, public icon_image_name: string) {
        this.header = header;
        this.content = content;
        this.image_name = image_name;
        this.icon_image_name = icon_image_name;
    }
}
export default ServiceOptionModel;
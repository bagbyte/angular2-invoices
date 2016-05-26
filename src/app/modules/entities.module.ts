export module Entities {
    export class Menu {
        area: String;
        children: MenuItem[];

        constructor (area: String, children: MenuItem[]) {
            this.area = area;
            this.children = children;
        }
    }

    export class MenuItem {
        name: String;
        icon: String;
        link: String;
        children: MenuItem[];

        constructor (name: String, icon: String, link: String, children: MenuItem[]) {
            this.name = name;
            this.icon = icon;
            this.link = link;
            this.children = children;
        }
    }
}
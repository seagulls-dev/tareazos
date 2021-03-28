import { FuseNavigation } from "@fuse/types";

export const navigation: FuseNavigation[] = [
    {
        id: "tasks",
        title: "Tareas",
        translate: "NAV.TASKS.TITLE",
        type: "item",
        icon: "email",
        url: "/tasks/products",
        badge: {
            title: "",
            translate: "NAV.CLIENTFORMS.BADGE",
        },
    },
    {
        id: "forms",
        title: "Usuarios",
        translate: "NAV.CLIENTFORMS.TITLE",
        type: "item",
        icon: "email",
        url: "/users/list",
        badge: {
            title: "",
            translate: "NAV.CLIENTFORMS.BADGE",
        },
    },
    {
        id: "forms",
        title: "Solicitud de Fondos",
        translate: "NAV.FUNDSREQUESTED.TITLE",
        type: "item",
        icon: "email",
        url: "/fundsRequested/list",
        badge: {
            title: "",
            translate: "NAV.FUNDSREQUESTED.BADGE",
        },
    },
    {
        id: "clientes",
        title: "Formularios",
        translate: "NAV.CLIENTES.TITLE",
        type: "item",
        icon: "email",
        url: "/clientes",
        badge: {
            title: "",
            translate: "NAV.CLIENTES.BADGE",
        },
    },
    {
        id: "catalogos",
        title: "Catalogos",
        translate: "NAV.CATALOGOS.TITLE",
        type: "item",
        icon: "email",
        url: "/catalogos",
        badge: {
            title: "",
            translate: "NAV.CATALOGOS.BADGE",
        },
    },
    {
        id: "applications",
        title: "Applications",
        translate: "NAV.APPLICATIONS",
        type: "group",
        children: [
            // {
            //     id       : 'sample',
            //     title    : 'Sample',
            //     translate: 'NAV.SAMPLE.TITLE',
            //     type     : 'item',
            //     icon     : 'email',
            //     url      : '/sample',
            //     badge    : {
            //         title    : '',
            //         translate: 'NAV.SAMPLE.BADGE',
            //         bg       : '#F44336',
            //         fg       : '#FFFFFF'
            //     }
            // },
            {
                id: "forms",
                title: "Usuarios",
                translate: "NAV.CLIENTFORMS.TITLE",
                type: "item",
                icon: "email",
                url: "/users/list",
                badge: {
                    title: "",
                    translate: "NAV.CLIENTFORMS.BADGE",
                },
            },
            {
                id: "clientes",
                title: "Formularios",
                translate: "NAV.CLIENTES.TITLE",
                type: "item",
                icon: "email",
                url: "/clientes",
                badge: {
                    title: "",
                    translate: "NAV.CLIENTES.BADGE",
                },
            },
        ],
    },
];

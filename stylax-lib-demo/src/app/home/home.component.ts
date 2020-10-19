import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'stylax-lib-demo';
  navigation = {
    topbar: [
        {
            title: 'Settings',
            link: '/settings',
            icon: 'cogs',
        },
        {
            title: 'Sign Out',
            link: '/dashboard',
            icon: 'sign-out-alt',
        },
    ],
    sidebar: {
        pages: [
            {
                title: 'General',
                items: [
                    {
                        title: 'Introduction',
                        link: '/technical',
                        icon: 'binoculars',
                    },
                ],
            },
            {
                title: 'Styles',
                items: [
                    {
                        title: 'Colors',
                        link: '/styles/colors',
                        icon: 'binoculars',
                    },
                    {
                        title: 'Icons',
                        link: '/styles/icons',
                        icon: 'icons',
                    },
                    {
                        title: 'Typography',
                        link: '/styles/font',
                        icon: 'font',
                    },
                ],
            },
            {
                title: 'Usage & Behaviour',
                items: [
                    {
                        title: 'Notifications',
                        link: '/usage/notifications',
                        icon: 'bell',
                    },
                    {
                        title: 'Tooltips & Hints',
                        link: '/usage/tooltips',
                        icon: 'info-circle',
                    },
                    {
                        title: 'Buttons',
                        link: '/usage/buttons',
                        icon: 'external-link-square-alt',
                    },
                    {
                        title: 'Charts',
                        link: '/usage/charts',
                        icons: 'chart-line',
                    },
                    {
                        title: 'Cards',
                        link: '/usage/cards',
                        icon: 'address-card',
                    },
                    {
                        title: 'Data input',
                        link: '/usage/input',
                        icon: 'align-right',
                    },
                    {
                        title: 'Forms',
                        link: '/usage/forms',
                        icon: 'edit',
                    },
                    {
                        title: 'Filter & Search',
                        link: '/usage/filtersearch',
                        icon: 'search',
                    },
                    {
                        title: 'Lists & Tables',
                        link: '/usage/tables',
                        icon: 'table',
                    },
                    {
                        title: 'Navigation',
                        link: '/usage/navigation',
                        icon: 'route',
                    },
                    {
                        title: 'Assistance',
                        link: '/usage/embeddedassistance',
                        icon: 'hand-pointer',
                    },
                ],
            },
            {
                title: 'Demo',
                items: [
                    {
                        title: 'Dashboard',
                        link: '/dashboard',
                        icon: 'home',
                    },
                    {
                        title: 'Analysis',
                        link: '/analysis',
                        icon: 'bars',
                    },
                    {
                        title: 'Datatable',
                        link: '/datatable',
                        icon: 'clipboard',
                    },
                ],
            },
        ],
        items: [],
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}

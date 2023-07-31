import { Component, OnInit } from '@angular/core';
import { AppHelperService } from 'src/app/services/app-helper.service';
import { links } from 'src/app/config/links';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    social_links = links;
    datastructures: datastructures[] = []
    algorithms: datastructures[] = []

    constructor(private appHelperService: AppHelperService) {

    }

    ngOnInit(): void {
        this.initLists();
    }

    launchLink(url: string, newTab = true) {
        this.appHelperService.launchLink(url, newTab);
    }

    initLists() {
        this.initDatastructures();
        this.initAlgorithms();
    }
    initDatastructures() {
        this.datastructures = [
            {
                'name': 'Linked Lists',
                'link': 'linked-list'
            },
            {
                'name': 'Array',
                'link': 'array'
            },
            {
                'name': 'Heap',
                'link': 'heaps'
            },
            {
                'name': 'Queue',
                'link': 'queue'
            },
            {
                'name': 'Stack',
                'link': 'stack'
            },
            {
                'name': 'Tree',
                'link': 'tree'
            }
        ]
    }
    initAlgorithms() {
        this.algorithms = [
            {
                'name': 'Search',
                'link': 'search'
            },
            {
                'name': 'Sort',
                'link': 'sort'
            }
        ]
    }

}

interface datastructures {
    name: string,
    link: string
}

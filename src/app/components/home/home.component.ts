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
                'name': 'Linked Lists (coming-soon)',
                'link': 'linked-list'
            },
            {
                'name': 'Array (coming-soon)',
                'link': 'array'
            },
            {
                'name': 'Heap (coming-soon)',
                'link': 'heaps'
            },
            {
                'name': 'Queue (coming-soon)',
                'link': 'queue'
            },
            {
                'name': 'Stack (coming-soon)',
                'link': 'stack'
            },
            {
                'name': 'Tree (coming-soon)',
                'link': 'tree'
            }
        ]
    }
    initAlgorithms() {
        this.algorithms = [
            {
                'name': 'Search (coming-soon)',
                'link': 'search'
            },
            {
                'name': 'Sort (coming-soon)',
                'link': 'sort'
            }
        ]
    }

}

interface datastructures {
    name: string,
    link: string
}

import { Component, OnInit } from '@angular/core';
import Konva from 'konva';
@Component({
    selector: 'app-linked-list',
    templateUrl: './linked-list.component.html',
    styleUrls: ['./linked-list.component.scss']
})
export class LinkedListComponent implements OnInit {

    constructor() {

    }

    total_links_counter = 0;

    ngOnInit(): void {
        this.initKonva()
    }

    addToList() {
        let elem = document.querySelector('#add-input') as HTMLInputElement;
        console.log(elem.value);
    }

    searchList() {
        let elem = document.querySelector('#search-input') as HTMLInputElement;
        console.log(elem.value);
    }

    deleteFromList() {
        let elem = document.querySelector('#delete-input') as HTMLInputElement;
        console.log(elem.value);
    }

    initKonva() {

        // setup stage
        let width = document.querySelector('#linked-list-content')?.scrollWidth || 400;
        let height = document.querySelector('#linked-list-content')?.scrollHeight || 400;
        let stage = new Konva.Stage({
            container: '.linked-list-konva-container',
            width: width,
            height: height,
        });

        let layer = new Konva.Layer();
        stage.add(layer);

        let linkItems = [];
        let connectors = [];
        for (let i = 0; i < 6; i += 1) {
            linkItems.push(this.generateBox(width, height, 'box-' + i));
            if (i == 0) return
            connectors.push(this.generateConnectors('box-' + (i - 1), 'box-' + i));
        }

        // generate nodes for the app
        connectors.forEach((connector) => {
            var line = new Konva.Arrow({
                stroke: 'black',
                id: connector.id,
                fill: 'black',
            };
            layer.add(line);
        });

        targets.forEach((target) => {
            var node = new Konva.Circle({
                id: target.id,
                fill: Konva.Util.getRandomColor(),
                radius: 20 + Math.random() * 20,
                shadowBlur: 10,
                draggable: true,
            });
            layer.add(node);

            node.on('dragmove', () => {
                // mutate the state
                target.x = node.x();
                target.y = node.y();

                // update nodes from the new state
                updateObjects();
            });
        });

        updateObjects();
    }

    generateBox(width: number, height: number, id: string) {
        let box = new Konva.Rect({
            x: Math.random() * width - 100,
            y: Math.random() * height - 100,
            fill: COLORS[Math.floor(Math.random() * COLORS.length)],
            stroke: 'black',
            strokeWidth: 4,
            draggable: true,
            width: 100,
            height: 50,
            id: id
        });

        box.on('dragstart', function () {
            this.moveToTop();
        });

        box.on('dragmove', function () {
            document.body.style.cursor = 'pointer';
            this.x = this.x();
            this.y = this.y();

            // update nodes from the new state
            updateObjects();
        });

        box.on('mouseover', function () {
            document.body.style.cursor = 'pointer';
        });
        box.on('mouseout', function () {
            document.body.style.cursor = 'default';
        });

        return box;
    }

    generateConnectors(from: any, to: any) {
        this.total_links_counter += 1;
        return {
            id: 'connector-' + this.total_links_counter,
            from: from,
            to: to,
        }
    }

    getConnectorPoints(from: any, to: any) {
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        let angle = Math.atan2(-dy, dx);

        const radius = 50;

        return [
            from.x + -radius * Math.cos(angle + Math.PI),
            from.y + radius * Math.sin(angle + Math.PI),
            to.x + -radius * Math.cos(angle),
            to.y + radius * Math.sin(angle),
        ];
    }

    updateObjects(linkItems: any, connectors: any, layer: any) {

        linkItems.forEach((linkItem: any) => {
            var node = linkItem.findOne('#' + linkItem.id);
            node.x(linkItem.x);
            node.y(linkItem.y);
        });

        connectors.forEach((connector: any) => {
            var line = layer.findOne('#' + connector.id);
            var fromNode = layer.findOne('#' + connector.from);
            var toNode = layer.findOne('#' + connector.to);

            const points = this.getConnectorPoints(
                fromNode.position(),
                toNode.position()
            );
            line.points(points);
        });
    }

}

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];


import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { AppHelperService } from 'src/app/services/app-helper.service';

@Component({
    selector: 'app-sorting',
    templateUrl: './sorting.component.html',
    styleUrls: ['./sorting.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SortingComponent implements OnInit {

    numbersValue = 0
    delayValue = 0
    sortingInProgress = false;
    constructor(private appHelperService: AppHelperService,
        private ref: ChangeDetectorRef) {

    }
    ngOnInit(): void {
        this.initApp();
    }

    initApp() {
        if (this.sortingInProgress) return

        this.updateNumbersSliderValue();
        this.updateDelaySliderValue();
        this.generateSortingDivs();
    }

    updateNumbersSliderValue() {
        if (this.sortingInProgress) return
        this.numbersValue = +(document.querySelector('#sorting-numbers') as HTMLInputElement).value
        this.generateSortingDivs();
    }

    updateDelaySliderValue() {
        this.delayValue = +(document.querySelector('#sorting-delay') as HTMLInputElement).value

    }

    generateSortingDivs() {

        let parent = document.querySelector('#sorting-content');
        let child = parent?.querySelector('#divs-container');
        if (child) {
            parent?.removeChild(child);
        }

        const newDiv: any = document.createElement("div");
        newDiv.id = 'divs-container';
        parent?.append(newDiv)


        let lower = 10
        let higher = lower + this.numbersValue * 2;
        for (let i = 0; i < this.numbersValue; i += 1) {
            let height = this.appHelperService.generateRandomNumbers(lower, higher);
            let div = this.generateDiv(height);
            newDiv?.appendChild(div);
        }
    }

    generateDiv(height: number) {
        const newDiv: any = document.createElement("div");
        newDiv.style.setProperty('--height', (height * 5) + 'px');
        newDiv.classList.add('sortingTower')
        newDiv.setAttribute('value', height);
        return newDiv;
    }

    async startSorting() {
        if (this.sortingInProgress) return
        this.sortingInProgress = true;

        let choice = document.querySelector('#sorting-algorithm-select') as HTMLSelectElement;
        if (choice.value == '1') {
            await this.bubble();
        } else if (choice.value == '2') {
            await this.insertion();
        } else if (choice.value == '3') {
            await this.selection();
        } else if (choice.value == '4') {

        } else if (choice.value == '5') {

        } else if (choice.value == '6') {

        }

        this.sortingInProgress = false

    }

    async insertion() {
        let divsToBeSorted: any = document.querySelector('#sorting-content')?.querySelector('#divs-container')?.querySelectorAll('.sortingTower');

        let i, key, j;
        for (i = 1; i < divsToBeSorted.length; i++) {
            key = divsToBeSorted[i];
            j = i - 1;


            while (j >= 0 && await this.compareDivs(divsToBeSorted[j], key)) {
                this.swapDivs(divsToBeSorted[j], divsToBeSorted[j + 1]);
                j = j - 1;
            }
            await this.swapDivs(divsToBeSorted[j], key);
        }

    }

    async selection() {
        let divsToBeSorted: any = document.querySelector('#sorting-content')?.querySelector('#divs-container')?.querySelectorAll('.sortingTower');

        let i, j, min_idx;

        for (i = 0; i < divsToBeSorted.length - 1; i++) {
            min_idx = i;
            divsToBeSorted[i].classList.add('temp-hold');

            for (j = i + 1; j < divsToBeSorted.length; j++)
                if (await this.compareDivs(divsToBeSorted[min_idx], divsToBeSorted[j])) {
                    min_idx = j;
                }

            this.swapDivs(divsToBeSorted[min_idx], divsToBeSorted[i])
            divsToBeSorted[i].classList.remove('temp-hold');
            divsToBeSorted[i].classList.add('correct');

        }
        for (let i = 0; i < divsToBeSorted.length; i++) {
            divsToBeSorted[i].classList.add('correct');

        }
    }

    async bubble() {
        let divsToBeSorted: any = document.querySelector('#sorting-content')?.querySelector('#divs-container')?.querySelectorAll('.sortingTower');

        let swapped = false;
        for (let i = 0; i < divsToBeSorted.length - 1; i++) {
            swapped = false;
            for (let j = 0; j < divsToBeSorted.length - i - 1; j++) {
                if (await this.compareDivs(divsToBeSorted[j], divsToBeSorted[j + 1])) {
                    await this.swapDivs(divsToBeSorted[j], divsToBeSorted[j + 1]);
                    swapped = true;
                }
            }

            divsToBeSorted[divsToBeSorted.length - i - 1].classList.add('correct');
            if (!swapped) break;
        }
        for (let i = 0; i < divsToBeSorted.length; i++) {
            divsToBeSorted[i].classList.add('correct');

        }

    }

    async compareDivs(one: any, two: any) {
        // add color change class
        one.classList.add('compare-start');
        two.classList.add('compare-start');

        await this.delay(this.delayValue)

        let val = false
        if (+one.getAttribute('value') > +two.getAttribute('value')) {
            val = true
        }

        one.classList.remove('compare-start');
        two.classList.remove('compare-start');

        return val;
    }

    async swapDivs(from: any, to: any) {

        // add color change class
        from.classList.add('swap-start');
        to.classList.add('swap-start');

        await this.delay(this.delayValue)

        // swap values and attributes
        let from_val = from.getAttribute('value');
        let to_val = to.getAttribute('value');
        from.setAttribute('value', to_val);
        to.setAttribute('value', from_val);
        from.style.setProperty('--height', (to_val * 5) + 'px');
        to.style.setProperty('--height', (from_val * 5) + 'px');

        await this.delay(this.delayValue)

        // add color change class
        from.classList.remove('swap-start');
        to.classList.remove('swap-start');

    }

    async delay(time = 500) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, time)
        })
    }

}

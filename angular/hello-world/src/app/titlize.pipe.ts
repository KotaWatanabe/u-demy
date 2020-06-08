import { Pipe, PipeTransform } from '@angular/core';
import { log } from 'util';

@Pipe({
    name: 'titlize'
})
export class TitlizePipe implements PipeTransform {
    transform(value: string) {
        if(!value) 
            return null;

        const wordArray = value.split(' ');

        const titleArray = wordArray.map((word,index) => {
            if( index > 0 && this.isPreposition(word)) 
                return  word.toLowerCase();
            else 
                return this.toTitleCase(word)   
        })
        return titleArray.join(' ');
    }

    private isPreposition(word: string): boolean {
        const prepositions = ['the','of','for','at','from','in'];
        return prepositions.includes(word.toLowerCase());
    }

    private toTitleCase(word: string):string {
        return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase()
    }
}

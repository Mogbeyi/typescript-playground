import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import {LinkedList} from './LinkedList';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([1000, 3, -5, 0, 100, -100])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(sorter.collection)

// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort()

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(100);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
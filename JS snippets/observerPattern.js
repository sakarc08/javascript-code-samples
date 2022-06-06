function subject() {
    this.subscriberList = [];
    this.subscribe = obj => {
        this.subscriberList.push(obj);
    }

    this.notify = () => {
        this.subscriberList.forEach(obj => obj.childMethod());
    }

    this.change = () => {
        console.log('something changed at subject level');
        this.notify();
    }
}

function child(name) {
    this.name = name;
    this.childMethod = () => {
        console.log('called from ', this.name);
    }
}

const obj1 = new child('one');
const obj2 = new child('two');

const subject1 = new subject();
subject1.subscribe(obj1);


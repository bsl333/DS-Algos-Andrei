class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // ** NOTE: forced hashing to have collisions by ignoring casing.
      hash = (hash + key.toLowerCase().charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    const address = this._hash(key);
    const bucket = this.data[address];
    if (bucket) {
      const value = bucket.find(arr => key === arr[0]) || [];
      return value[1]
    }
    return undefined;
  }

  keys() {
    return this.data.reduce((acc, bucket) => {
      const bucketKeys = bucket.reduce((bucketAcc, [keys, _]) => bucketAcc.push(keys) && bucketAcc, []);
      acc.push(...bucketKeys);
      return acc;
    }, []);

    // const keys = [];
    // for (let bucket of this.data) {
    //   if (bucket) {
    //     for (let [key, _] of bucket) {
    //       keys.push(key);
    //     }
    //   }
    // }
    // return keys;
  }



  // My first Solution:
  // set(key, value) {
  //   const address = this._hash(key);
  //   const valueToStore = `${key}:_:${value}`;
  //   if (!this.data[address]) {
  //     this.data[address] = [valueToStore]
  //   } else {
  //     const keyWithIndex = this.data[address].findIndex(val => key === val.split(':_:')[0]);
  //     if (keyWithIndex > -1) {
  //       this.data[address][keyWithIndex] = valueToStore
  //     } else {
  //       this.data[address].push(valueToStore);
  //     }
  //   }
  // }

  // get(key) {
  //   const address = this._hash(key);
  //   const bucket = this.data[address];
  //   if(bucket.length === 1) {
  //     return bucket[0].split(':_:')[1];
  //   } else {
  //     return bucket.find(val => key === val.split(':_:')[0]).split(':_:')[1]
  //   }
  // }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('Grapes', 100)
myHashTable.set('GraPes', 500)
myHashTable.get('GraPes')
console.log(myHashTable.get('grapes'), myHashTable.get('Grapes'), myHashTable.get('GraPes'))


myHashTable.set('apples', 9)
myHashTable.get('apples')

myHashTable.keys()

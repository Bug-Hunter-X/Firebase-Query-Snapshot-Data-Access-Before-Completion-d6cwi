Instead of directly accessing data, use promises or the `.onSnapshot` listener to handle asynchronous operations:

//Using Promises
firebase.firestore().collection('myCollection').get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // Access document data here; doc.data() will be defined
    console.log(doc.id, doc.data());
  });
}).catch((error) => {
  console.error('Error getting documents:', error);
});

// Using onSnapshot
const unsubscribe = firebase.firestore().collection('myCollection').onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // Access document data here
    console.log(doc.id, doc.data());
  });
}, (error) => {
  console.error('Error getting documents:', error);
});

//To stop listening for changes
//unsubscribe();
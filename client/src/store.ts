
  import { writable } from "svelte/store";

  //let isOpen: boolean = false;
  export const isOpen = writable(false);

  // // Abonnez-vous aux changements de la valeur du store
  // const unsubscribe = count.subscribe(value => {
  //   console.log(`La valeur du store est maintenant : ${value}`);
  // });

  // // Mettez à jour la valeur du store
  // count.set(1); // Cela déclenchera le callback subscribe

  // // Pour vous désabonner lorsque vous n'en avez plus besoin
  // unsubscribe();


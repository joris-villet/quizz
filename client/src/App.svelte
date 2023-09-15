<script lang="ts">
  import Quizz from "./lib/Quizz.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import arrowIcon from "./assets/arrow.png";
  import { isOpen } from "./store";
  import { fade } from "svelte/transition";
  let isOpenValue: boolean;
  let currentYear = new Date().getFullYear();

  const unsubscribe = isOpen.subscribe((value: boolean) => {
    console.log(`La valeur du store est maintenant : ${value}`);
    isOpenValue = value;
  });

  // on:click={() => (isOpen ? (isOpen = false) : (isOpen = true))}
</script>

<main>
  <div class:container__people--open={isOpenValue} class="container">
    <Navbar />
    <Quizz />
    <div class="container__people">
      <button
        on:click={() =>
          isOpenValue
            ? isOpen.update((val) => (val = false))
            : isOpen.update((val) => (val = true))}
        class="container__people--btn"
      >
        {#if isOpenValue}
          <img
            class="arrow-close arrow-icon"
            src={arrowIcon}
            alt="icon flèche"
          />
        {:else}
          <img class="arrow-icon" src={arrowIcon} alt="icon flèche" />
        {/if}
      </button>
      <div class="container__people__content">
        <ul>
          <li>joris</li>
          <li>joris</li>
          <li>joris</li>
          <li>joris</li>
        </ul>
      </div>
    </div>
  </div>
  {#if !isOpenValue}
    <p transition:fade={{ duration: 700 }} class="author">
      <strong>Frontend by Joris &copy; {currentYear}</strong>
    </p>
  {/if}
</main>

<style>
  .container {
    display: grid;
    grid-template-columns: 60px 1fr 50px;
    min-height: 100vh;
    transition: 0.7s ease-in-out;
  }

  .container__people {
    position: relative;
    background: rgba(177, 235, 248, 0.24);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .container__people__content {
    /* background-color: rgba(255, 255, 255, 0.1); */
    padding: 10px;
  }

  .container__people--btn {
    position: absolute;
    top: 50%;
    left: 0rem;
    transform: translate(-50%, -50%);
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .container__people--open {
    grid-template-columns: 60px 1fr 500px;
  }

  .arrow-close {
    transform: rotate(180deg);
  }

  .arrow-icon {
    width: 30px;
  }

  .author {
    position: absolute;
    bottom: 0rem;
    right: 5rem;
    font-style: italic;
    color: rgb(59, 59, 59);
  }
</style>

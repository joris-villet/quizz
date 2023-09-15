<div class="container__quizz">
  <div class="container__quizz--question">
    question Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
    sunt. ?
  </div>
  <div>
    <input name="a" type="checkbox" />
    <label for="a">blablabla Réponse A</label>
  </div>
  <div>
    <input name="b" type="checkbox" />
    <label for="b">Réponse B</label>
  </div>
  <div>
    <input name="c" type="checkbox" />
    <label for="c">Réponse C</label>
  </div>
  <div>
    <input name="d" type="checkbox" />
    <label for="d">Réponse D</label>
  </div>
  <div class="valid-answer">
    <button>Valider</button>
  </div>
</div>

<style>
  .container__quizz {
    color: rgb(56, 56, 56);
    /* background: rgba(20, 35, 66, 0.923); */
    border-radius: 20px;
    margin: 1rem;
    margin-right: 5rem;
    padding: 2rem;
  }

  .container__quizz--question {
    margin-bottom: 7rem;
  }

  .container__quizz div:not(:last-child) {
    background: rgb(241, 241, 245);
    background: linear-gradient(
      90deg,
      rgba(241, 241, 245, 1) 0%,
      rgba(217, 250, 251, 0.4766281512605042) 100%
    );
    margin: 0.5rem;
    border-radius: 30px;
    height: 50px;
    padding-left: 1rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }

  .container__quizz label {
    margin-left: 2rem;
  }

  .valid-answer {
    text-align: center;
    margin-top: 2rem;
  }

  .valid-answer button {
    border-radius: 20px;
    border: none;
    height: 30px;
    width: 120px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
</style>

class RecipeCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const article = document.createElement("article");
    const style = document.createElement("style");

    style.textContent = `
      * {
        font-family: sans-serif;
        box-sizing: border-box;
      }

      article {
        width: 300px;
        border: 1px solid rgb(223, 225, 229);
        border-radius: 8px;
        overflow: hidden;
        margin: 10px;
      }

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      p {
        margin: 8px 12px;
      }

      a {
        text-decoration: none;
        color: black;
      }

      .title {
        font-size: 18px;
        font-weight: bold;
      }
    `;

    article.innerHTML = `
      <img>
      <p class="title"><a></a></p>
      <p class="organization"></p>
      <p class="rating"></p>
      <p class="time"></p>
      <p class="ingredients"></p>
    `;

    shadow.append(style, article);
  }

  set data(data) {
    if (!data) return;

    const article = this.shadowRoot.querySelector("article");

    article.querySelector("img").src = data.imgSrc;
    article.querySelector("img").alt = data.imgAlt;

    article.querySelector("a").href = data.titleLink;
    article.querySelector("a").textContent = data.titleText;

    article.querySelector(".organization").textContent = data.organization;
    article.querySelector(".rating").textContent = `Rating: ${data.rating} (${data.numRatings} ratings)`;
    article.querySelector(".time").textContent = `Time: ${data.lengthTime}`;
    article.querySelector(".ingredients").textContent = data.ingredients;
  }
}

customElements.define("recipe-card", RecipeCard);
import { quotes } from "./quotes.json";

const content: HTMLElement = document.getElementById("content") as HTMLElement;

document.addEventListener("DOMContentLoaded", () => { 

  // 1. Feladat: ABC szerint rendezés
  document.getElementById("f1")?.addEventListener("click", () => {
    const quotesAbc = Array.from(quotes);
    quotesAbc.sort((a, b) => a.author.localeCompare(b.author));

    const ul = document.createElement("ul");

    quotesAbc.forEach((quote) => {
      const li = document.createElement("li");
      li.innerText = quote.author + ": ";

      const quoteLi = document.createElement("q");
      quoteLi.innerText = quote.quote;

      li.appendChild(quoteLi);
      ul.appendChild(li);
    });

    content.innerHTML = "";
    content.appendChild(ul);
  });

  // 2. Feladat: The kiemelése
  document.getElementById("f2")?.addEventListener("click", () => { 
    let quotesThe: string[] = [];

    quotesThe = quotes.map((quote) => { return quote.quote });

    const ol = document.createElement("ol");

    quotesThe.forEach((quote) => {
      const li = document.createElement("li");
      li.innerHTML = quote.replace("the", "<b>the</b>").replace("The", "<b>The</b>");
      ol.appendChild(li);

    });

    content.innerHTML = "";
    content.appendChild(ol);

  });

  // 3. Felaadat: Hosszak kiírása
  document.getElementById("f3")?.addEventListener("click", () => { 
    let quotesLenght: number[] = [];

    quotes.forEach((quote) => {
        quotesLenght.push(quote.quote.length);
    });

    const p = document.createElement("p");

    p.innerText = quotesLenght.join(", ");

    content.innerHTML = "";
    content.appendChild(p);

  });

  // 4. Felaadat: Darabszám
  document.getElementById("f4_input")?.addEventListener("input", () => { 
    const input: HTMLInputElement = document.getElementById("f4_input") as HTMLInputElement;
    const output: HTMLInputElement = document.getElementById("f4_output") as HTMLInputElement;
    const mode: HTMLInputElement = document.getElementById("f4_mode") as HTMLInputElement;

    const author: string = input.value.trim();
    let numberOfQuotes: number = 0;
    const pontos = mode.checked;

    quotes.forEach((quote) => {
      if (pontos && quote.author == author) {
        numberOfQuotes++;
      }
      else if (!pontos && quote.author.includes(author)) {
        numberOfQuotes++;
      }
    });

    output.value = numberOfQuotes.toString();

  });

});
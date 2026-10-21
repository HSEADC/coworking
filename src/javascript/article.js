const CopyButton = document.getElementById("CopyLink");
const ShareStatus = document.getElementById("ShareStatus");

CopyButton.addEventListener("click", function () {
  if (!navigator.clipboard) {
    ShareStatus.textContent = "Скопируй ссылку из адресной строки браузера.";
    return;
  }
  navigator.clipboard
    .writeText(window.location.href)
    .then(function () {
      ShareStatus.textContent = "Ссылка скопирована!";
    })
    .catch(function () {
      ShareStatus.textContent = "Скопируй ссылку из адресной строки браузера.";
    });
});

const Article = document.querySelector(".ArticleBody");
const ProgressCow = document.getElementById("ProgressCow");
const ArticleSections = Article.querySelectorAll(".ArticleSection");
const ContentsLinks = document.querySelectorAll(".ContentsMenu a");

function UpdateReadingProgress() {
  const ArticleTop = Article.getBoundingClientRect().top + window.scrollY;
  const ReadingDistance = Article.offsetHeight - window.innerHeight;
  let Progress = 0;

  if (ReadingDistance > 0) {
    Progress = (window.scrollY - ArticleTop) / ReadingDistance;
  } else if (window.scrollY >= ArticleTop) {
    Progress = 1;
  }

  Progress = Math.max(0, Math.min(1, Progress));
  ProgressCow.style.left = Progress * 100 + "%";

  let CurrentSection = ArticleSections[0].id;
  for (let i = 0; i < ArticleSections.length; i++) {
    if (
      ArticleSections[i].getBoundingClientRect().top <=
      window.innerHeight * 0.35
    ) {
      CurrentSection = ArticleSections[i].id;
    }
  }
  for (let i = 0; i < ContentsLinks.length; i++) {
    if (ContentsLinks[i].getAttribute("href") === "#" + CurrentSection) {
      ContentsLinks[i].classList.add("ActiveSection");
    } else {
      ContentsLinks[i].classList.remove("ActiveSection");
    }
  }
}
window.addEventListener("scroll", UpdateReadingProgress, { passive: true });
window.addEventListener("resize", UpdateReadingProgress);
window.addEventListener("load", UpdateReadingProgress);
UpdateReadingProgress();

const Footer = document.querySelector(".SiteFooter");

function ShowFooterCow() {
  if (Footer.getBoundingClientRect().top < window.innerHeight) {
    Footer.classList.add("CowVisible");
  }
}

window.addEventListener("scroll", ShowFooterCow);
window.addEventListener("resize", ShowFooterCow);
ShowFooterCow();

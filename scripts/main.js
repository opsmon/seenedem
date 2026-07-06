const contacts = {
  telegram: "https://t.me/seenedem",
  vk: "https://vk.com/deniskovalenkokms",
};

const quizSteps = [
  {
    key: "type",
    title: "Какая съемка нужна?",
    mode: "single",
    options: [
      "Портрет",
      "Love story",
      "Мероприятие",
      "Семейная",
      "Контент для соцсетей",
      "B2B / бренд-контент",
      "Фото товара",
      "Контент для маркетплейса",
      "Творческий проект",
      "Репортаж для бренда",
      "Пока не знаю, хочу обсудить",
    ],
  },
  {
    key: "date",
    title: "Когда планируется съемка?",
    mode: "single",
    options: [
      "В ближайшие дни",
      "На этой неделе",
      "В этом месяце",
      "Дата уже есть",
      "Выбрал(а) свободный день в календаре",
      "Нужна съемка к событию",
      "Просто прицениваюсь",
    ],
    extraWhen: ["Дата уже есть", "Выбрал(а) свободный день в календаре", "Нужна съемка к событию"],
    extraKey: "dateExtra",
    extraPlaceholder: "Например: 18 июля, вечер / свободная дата из календаря",
  },
  {
    key: "place",
    title: "Где хотите снимать?",
    hint: "Можно выбрать несколько вариантов, если пока есть сомнения.",
    mode: "multiple",
    options: [
      "На улице",
      "В студии",
      "Дома",
      "На мероприятии",
      "В офисе / шоуруме",
      "На производстве",
      "В кафе / отеле / интерьере",
      "В городе у воды",
      "Нужна помощь с локацией",
    ],
  },
  {
    key: "style",
    title: "Какой стиль ближе?",
    hint: "Можно отметить несколько настроений.",
    mode: "multiple",
    options: [
      "Спокойно и естественно",
      "Кинематографично",
      "Чистый портрет",
      "Репортажно",
      "Черно-белая серия",
      "Тепло и камерно",
      "Минималистично",
      "Предметно и чисто",
      "Editorial / как журнал",
      "Pinterest mood",
      "Хочу что-то необычное",
    ],
  },
  {
    key: "format",
    title: "Какой формат ближе?",
    mode: "single",
    options: [
      "Короткая съемка до часа",
      "1-2 часа без спешки",
      "Полдня",
      "Полный день / событие",
      "Контент-день для бренда",
      "Пакет кадров на месяц",
      "Пока не знаю",
    ],
  },
  {
    key: "people",
    title: "Кто будет в кадре?",
    mode: "single",
    options: [
      "Один человек",
      "Пара",
      "Семья",
      "Компания друзей",
      "Гости мероприятия",
      "Команда / бренд",
      "Товар / предметы",
      "Процесс работы",
    ],
  },
  {
    key: "usage",
    title: "Для чего нужны фотографии?",
    hint: "Это помогает понять темп, формат и нужные кадры.",
    mode: "multiple",
    options: [
      "Для себя",
      "Для соцсетей",
      "Для сайта / портфолио",
      "Для афиши или анонса",
      "Для семейного архива",
      "Для бренда / проекта",
      "Для маркетплейса",
      "Для карточек товара",
      "Для рекламных креативов",
      "Для контент-плана",
      "Подарок",
    ],
  },
  {
    key: "references",
    title: "Есть референсы или примеры?",
    hint: "Можно выбрать всё, что есть. Pinterest, скрины и ссылки очень помогают.",
    mode: "multiple",
    options: [
      "Есть Pinterest-доска",
      "Есть скриншоты примеров",
      "Есть брендбук / визуальный стиль",
      "Есть список обязательных кадров",
      "Нужен moodboard от Дениса",
      "Нужен гайд по подготовке",
      "Пока ничего нет",
    ],
  },
  {
    key: "important",
    title: "Что важно?",
    hint: "Можно выбрать несколько вариантов.",
    mode: "multiple",
    options: [
      "Помощь с позированием",
      "Быстрая отдача фото",
      "Много живых кадров",
      "Минимум постановки",
      "Обсудить идею заранее",
      "Помощь с образом",
      "Подобрать локацию",
      "Нужна конфиденциальность",
      "Показать продукт понятно",
      "Снять серию для регулярного контента",
      "Собрать кадры под разные форматы",
    ],
  },
  {
    key: "budget",
    title: "По бюджету как комфортнее?",
    mode: "single",
    options: [
      "Хочу узнать варианты",
      "Нужен компактный формат",
      "Готов обсудить оптимальный пакет",
      "Важнее результат, чем минимальная цена",
      "Бюджет уже понимаю",
    ],
    extraWhen: "Бюджет уже понимаю",
    extraKey: "budgetExtra",
    extraPlaceholder: "Можно написать ориентир, если удобно",
  },
  {
    key: "details",
    title: "Пара деталей",
    hint: "Необязательно, но так Денису будет проще ответить предметно.",
    mode: "fields",
    fields: [
      {
        key: "name",
        label: "Как к вам обращаться?",
        placeholder: "Имя",
      },
      {
        key: "contact",
        label: "Где удобнее ответить?",
        placeholder: "Telegram, VK или телефон",
      },
    ],
  },
  {
    key: "comment",
    title: "Комментарий",
    hint: "Можно описать идею, вопрос, референсы или важные детали.",
    mode: "comment",
  },
];

function getInitialAnswers() {
  return {
    type: "",
    date: "",
    dateExtra: "",
    place: [],
    style: [],
    format: "",
    people: "",
    usage: [],
    references: [],
    important: [],
    budget: "",
    budgetExtra: "",
    name: "",
    contact: "",
    comment: "",
  };
}

const state = {
  step: 0,
  answers: getInitialAnswers(),
};

const body = document.querySelector("[data-quiz-body]");
const counter = document.querySelector("[data-quiz-counter]");
const progress = document.querySelector("[data-quiz-progress]");
const backButton = document.querySelector("[data-quiz-back]");
const nextButton = document.querySelector("[data-quiz-next]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const calendarRoot = document.querySelector("[data-calendar]");

const schedule = {
  start: new Date(2026, 6, 6),
  shootingDays: 15,
  requestDays: 15,
  monthsToShow: 4,
};

function initTheme() {
  const savedTheme = localStorage.getItem("seenedem-theme");
  const isLight = savedTheme === "light";

  document.body.classList.toggle("is-light", isLight);
  updateThemeToggle();
}

function updateThemeToggle() {
  if (!themeToggle) {
    return;
  }

  themeToggle.textContent = document.body.classList.contains("is-light")
    ? "темно"
    : "свет";
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  items.forEach((item) => observer.observe(item));
}

function initCalendar() {
  if (!calendarRoot) {
    return;
  }

  const today = stripTime(new Date());
  const firstMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const months = Array.from({ length: schedule.monthsToShow }, (_, index) => {
    return new Date(firstMonth.getFullYear(), firstMonth.getMonth() + index, 1);
  });

  calendarRoot.innerHTML = months.map((month) => renderMonth(month, today)).join("");
}

function renderMonth(month, today) {
  const monthName = new Intl.DateTimeFormat("ru-RU", {
    month: "long",
    year: "numeric",
  }).format(month);
  const firstWeekday = getMondayWeekday(month);
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const blanks = Array.from({ length: firstWeekday - 1 }, () => `<span class="calendar-day calendar-day--blank"></span>`);
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const date = new Date(month.getFullYear(), month.getMonth(), index + 1);
    const isFree = isAvailableDate(date);
    const isToday = stripTime(date).getTime() === today.getTime();
    const label = `${index + 1} ${monthName}: ${isFree ? "съемочный день" : "по запросу"}`;

    return `
      <span
        class="calendar-day ${isFree ? "is-free" : "is-busy"} ${isToday ? "is-today" : ""}"
        aria-label="${label}"
        title="${label}"
      >
        ${index + 1}
      </span>
    `;
  });

  return `
    <article class="calendar-month">
      <h3>${monthName}</h3>
      <div class="calendar-weekdays" aria-hidden="true">
        <span>пн</span><span>вт</span><span>ср</span><span>чт</span><span>пт</span><span>сб</span><span>вс</span>
      </div>
      <div class="calendar-grid">
        ${[...blanks, ...days].join("")}
      </div>
    </article>
  `;
}

function isAvailableDate(date) {
  const oneDay = 24 * 60 * 60 * 1000;
  const diff = Math.floor((stripTime(date) - stripTime(schedule.start)) / oneDay);
  const cycleLength = schedule.shootingDays + schedule.requestDays;
  const cycleDay = ((diff % cycleLength) + cycleLength) % cycleLength;

  return cycleDay < schedule.shootingDays;
}

function getMondayWeekday(date) {
  const day = date.getDay();
  return day === 0 ? 7 : day;
}

function stripTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function renderQuiz() {
  const isResult = state.step >= quizSteps.length;
  const total = quizSteps.length;
  counter.textContent = isResult
    ? "Готово"
    : `${String(state.step + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  progress.style.width = `${isResult ? 100 : ((state.step + 1) / total) * 100}%`;
  backButton.disabled = state.step === 0;
  nextButton.textContent = isResult ? "Начать заново" : state.step === total - 1 ? "Собрать отчет" : "Дальше";

  body.classList.remove("is-changing");
  void body.offsetWidth;
  body.classList.add("is-changing");

  if (isResult) {
    renderResult();
    return;
  }

  const step = quizSteps[state.step];
  const hint = step.hint ? `<p class="quiz__hint">${step.hint}</p>` : "";
  body.innerHTML = `<h3 class="quiz__question">${step.title}</h3>${hint}${renderStepControl(step)}`;
  bindStepControls(step);
}

function renderStepControl(step) {
  if (step.mode === "comment") {
    return `
      <textarea class="quiz-textarea" data-comment placeholder="Можно оставить поле пустым">${escapeHtml(state.answers.comment)}</textarea>
    `;
  }

  if (step.mode === "fields") {
    return `
      <div class="quiz-fields">
        ${step.fields
          .map(
            (field) => `
              <label class="quiz-label">
                <span>${field.label}</span>
                <input class="quiz-field" data-field="${field.key}" type="text" value="${escapeHtml(state.answers[field.key])}" placeholder="${field.placeholder}" />
              </label>
            `,
          )
          .join("")}
      </div>
    `;
  }

  const options = step.options
    .map((option) => {
      const selected = isSelected(step, option) ? " is-selected" : "";
      return `<button class="option${selected}" type="button" data-option="${escapeHtml(option)}">${option}</button>`;
    })
    .join("");

  const extra =
    shouldShowExtra(step)
      ? `<input class="quiz-field" data-extra="${step.extraKey}" type="text" value="${escapeHtml(state.answers[step.extraKey])}" placeholder="${step.extraPlaceholder}" aria-label="Дополнительная информация" />`
      : "";

  return `<div class="options">${options}</div>${extra}`;
}

function bindStepControls(step) {
  body.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.option;

      if (step.mode === "multiple") {
        const list = state.answers[step.key];
        state.answers[step.key] = list.includes(value)
          ? list.filter((item) => item !== value)
          : [...list, value];
      } else {
        state.answers[step.key] = value;
        if (step.extraKey && !shouldShowExtra(step)) {
          state.answers[step.extraKey] = "";
        }
      }

      renderQuiz();
    });
  });

  body.querySelectorAll("[data-extra]").forEach((field) => {
    field.addEventListener("input", (event) => {
      state.answers[field.dataset.extra] = event.target.value.trim();
    });
    field.focus();
  });

  body.querySelectorAll("[data-field]").forEach((field) => {
    field.addEventListener("input", (event) => {
      state.answers[field.dataset.field] = event.target.value.trim();
    });
  });

  const comment = body.querySelector("[data-comment]");
  if (comment) {
    comment.addEventListener("input", (event) => {
      state.answers.comment = event.target.value.trim();
    });
  }
}

function isSelected(step, option) {
  const value = state.answers[step.key];
  return Array.isArray(value) ? value.includes(option) : value === option;
}

function shouldShowExtra(step) {
  if (!step.extraWhen || !step.extraKey) {
    return false;
  }

  const triggers = Array.isArray(step.extraWhen) ? step.extraWhen : [step.extraWhen];
  return triggers.includes(state.answers[step.key]);
}

function canGoNext() {
  if (state.step >= quizSteps.length) {
    return true;
  }

  const step = quizSteps[state.step];
  if (step.mode === "comment" || step.mode === "fields") {
    return true;
  }

  const value = state.answers[step.key];
  return Array.isArray(value) ? value.length > 0 : Boolean(value);
}

function renderResult() {
  const message = buildMessage();
  body.innerHTML = `
    <h3 class="quiz__question">Отчет по съемке готов</h3>
    <textarea class="result-message" readonly data-result-message>${escapeHtml(message)}</textarea>
    <div class="result-actions">
      <button class="button button--primary" type="button" data-copy>Скопировать текст</button>
      <a class="button button--ghost" href="${contacts.telegram}" target="_blank" rel="noopener noreferrer" aria-label="Открыть Telegram Дениса в новой вкладке">Открыть Telegram</a>
      <a class="button button--ghost" href="${contacts.vk}" target="_blank" rel="noopener noreferrer" aria-label="Открыть ВКонтакте Дениса в новой вкладке">Открыть VK</a>
    </div>
    <p class="copy-status" data-copy-status></p>
  `;

  body.querySelector("[data-copy]").addEventListener("click", copyResult);
}

function buildMessage() {
  const date =
    state.answers.dateExtra
      ? `${state.answers.date}: ${state.answers.dateExtra}`
      : state.answers.date;

  const budget =
    state.answers.budget === "Бюджет уже понимаю" && state.answers.budgetExtra
      ? `${state.answers.budget}: ${state.answers.budgetExtra}`
      : state.answers.budget;

  const suggestedFormat = getSuggestedFormat();
  const knownLines = getKnownSummary(date, budget);
  const nextQuestions = getNextQuestions(date);
  const optionalLines = [
    state.answers.name ? `👤 Имя: ${state.answers.name}` : "",
    state.answers.contact ? `📲 Удобная связь: ${state.answers.contact}` : "",
    state.answers.comment ? `💬 Комментарий: ${state.answers.comment}` : "",
  ].filter(Boolean);

  const lines = [
    "Привет, Денис! Хочу обсудить съемку.",
    "",
    "📷 Короткий бриф",
    `• Тип съемки: ${state.answers.type || "хочу обсудить"}`,
    `• Дата / срок: ${date || "хочу обсудить"}`,
    `• Локация: ${formatList(state.answers.place)}`,
    `• Формат: ${state.answers.format || "хочу обсудить"}`,
    `• Кто в кадре: ${state.answers.people || "хочу обсудить"}`,
    "",
    "🎞️ Настроение и задача",
    `• Стиль: ${formatList(state.answers.style)}`,
    `• Для чего фото: ${formatList(state.answers.usage)}`,
    `• Референсы / подготовка: ${formatList(state.answers.references)}`,
    `• Важно: ${formatList(state.answers.important)}`,
    `• Бюджет: ${budget || "хочу обсудить"}`,
    "",
    "🧭 Что уже понятно",
    ...knownLines,
    "",
    "📦 Предварительный формат",
    `• ${suggestedFormat}`,
    "",
    "💰 Что может влиять на стоимость",
    `• ${getPriceFactors().join("\n• ")}`,
  ];

  if (optionalLines.length > 0) {
    lines.push("", "📝 Дополнительно", ...optionalLines);
  }

  if (nextQuestions.length > 0) {
    lines.push("", "❓ Что осталось уточнить", ...nextQuestions);
  }

  lines.push(
    "",
    "Подскажите, пожалуйста, как это лучше организовать, какие есть варианты по формату и стоимости.",
  );
  return lines.join("\n");
}

function getSuggestedFormat() {
  const type = state.answers.type;
  const usage = state.answers.usage;
  const format = state.answers.format;
  const people = state.answers.people;

  if (type.includes("товар") || type.includes("маркетплейс") || people.includes("Товар") || usage.includes("Для карточек товара")) {
    return "похоже на предметную / товарную съемку: важны список кадров, фон, ракурсы и формат использования";
  }

  if (type.includes("B2B") || type.includes("бренд") || usage.includes("Для бренда / проекта")) {
    return "похоже на бренд-съемку: стоит собрать кадры команды, процесса, пространства и деталей";
  }

  if (type.includes("Мероприятие") || type.includes("Репортаж") || format.includes("Полный день")) {
    return "похоже на репортаж: важны тайминг, ключевые моменты и приоритетные люди";
  }

  if (usage.includes("Для соцсетей") || format.includes("Пакет кадров")) {
    return "похоже на контент-пакет: лучше заранее продумать форматы для постов, сторис и обложек";
  }

  return "похоже на персональную съемку: можно начать с настроения, локации и комфортного темпа";
}

function getKnownSummary(date, budget) {
  return [
    `• задача: ${state.answers.type || "нужно определить"}`,
    `• срок: ${date || "нужно согласовать"}`,
    `• место: ${formatList(state.answers.place)}`,
    `• объем: ${state.answers.format || "нужно подобрать"}`,
    `• использование: ${formatList(state.answers.usage)}`,
    `• бюджетный ориентир: ${budget || "нужно обсудить"}`,
  ];
}

function getPriceFactors() {
  const factors = [];

  if (state.answers.format) {
    factors.push("длительность и выбранный формат съемки");
  }

  if (state.answers.place.length > 1) {
    factors.push("несколько локаций или перемещения");
  }

  if (state.answers.people.includes("Товар") || state.answers.type.includes("товар")) {
    factors.push("количество товаров, обязательные ракурсы и требования к карточкам");
  }

  if (state.answers.usage.some((item) => item.includes("бренд") || item.includes("реклам") || item.includes("маркетплейс"))) {
    factors.push("коммерческое использование и требования площадок");
  }

  if (state.answers.important.some((item) => item.includes("Быстрая") || item.includes("разные форматы"))) {
    factors.push("срочность и объем итоговой отдачи");
  }

  if (state.answers.references.some((item) => item.includes("moodboard") || item.includes("гайд"))) {
    factors.push("помощь с идеей, moodboard и подготовкой");
  }

  return factors.length ? factors : ["точный объем задачи, дата, локация и количество итоговых кадров"];
}

function getNextQuestions(date) {
  const questions = [];

  if (!date) {
    questions.push("• точная дата или удобное съемочное окно");
  }

  if (state.answers.place.length === 0 || state.answers.place.includes("Нужна помощь с локацией")) {
    questions.push("• локация или варианты, которые подходят по настроению");
  }

  if (state.answers.references.length === 0 || state.answers.references.includes("Пока ничего нет")) {
    questions.push("• 3-5 референсов или просьба собрать moodboard");
  }

  if (!state.answers.budget) {
    questions.push("• комфортный диапазон бюджета или желаемый масштаб съемки");
  }

  return questions;
}

function formatList(value) {
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "хочу обсудить";
  }

  return value || "хочу обсудить";
}

async function copyResult() {
  const message = body.querySelector("[data-result-message]").value;
  const status = body.querySelector("[data-copy-status]");

  try {
    await navigator.clipboard.writeText(message);
    status.textContent = "Текст скопирован. Теперь можно открыть Telegram и отправить Денису.";
  } catch (error) {
    const textarea = body.querySelector("[data-result-message]");
    textarea.focus();
    textarea.select();
    status.textContent = "Не получилось скопировать автоматически. Выделите текст и скопируйте вручную.";
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

backButton.addEventListener("click", () => {
  if (state.step > 0) {
    state.step -= 1;
    renderQuiz();
  }
});

nextButton.addEventListener("click", () => {
  if (state.step >= quizSteps.length) {
    state.step = 0;
    state.answers = getInitialAnswers();
    renderQuiz();
    return;
  }

  if (!canGoNext()) {
    if (typeof nextButton.animate === "function") {
      nextButton.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-4px)" },
          { transform: "translateX(4px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 180 },
      );
    }
    return;
  }

  state.step += 1;
  renderQuiz();
});

document.querySelector("[data-easter]").addEventListener("click", () => {
  const message = document.querySelector("[data-easter-message]");
  message.classList.toggle("is-visible");
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("is-light");
    localStorage.setItem("seenedem-theme", isLight ? "light" : "dark");
    updateThemeToggle();
  });
}

initTheme();
initCalendar();
initReveal();
renderQuiz();

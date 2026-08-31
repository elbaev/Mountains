'use strict';

document.documentElement.classList.add('js');

(() => {
  const ACCESS_HASH = '24408714b8a10ab3';
  const ACCESS_KEY = 'alaenia_guest_access_v1';
  const CHECKLIST_KEY = 'alaenia_checklist_v1';
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');

  const routePlans = {
    '2-0': {
      title: 'Два дня: ясный первый образ',
      summary: 'Один день остается городу, второй — единому горному маршруту. Такой формат требует дисциплины: без лишних ответвлений и попытки увидеть все сразу.',
      why: 'Два разных впечатления получают собственное время, а переезды не дробят день на короткие эпизоды.',
      days: [
        { title: 'Владикавказ без спешки', text: 'Начните с исторического центра, набережной и спокойного ужина. Не переносите горы на вечер: город заслуживает отдельного темпа.', tags: ['город', 'пешком', 'вечер'] },
        { title: 'Куртатинское ущелье и Даргавс', text: 'Ранний выезд, один цельный маршрут через ключевые точки и возвращение до позднего вечера. Кармадон оставьте факультативным.', tags: ['горы', 'главный день', 'ранний выезд'] }
      ]
    },
    '2-1': {
      title: 'Два дня с ночью в горах',
      summary: 'Вы получаете закат и горное утро, но платите за это сокращенным городским временем и дополнительными сборами. Сценарий красивый, но плотный.',
      why: 'Ночевка убирает вечернюю обратную дорогу и превращает короткую поездку в более глубокое впечатление.',
      days: [
        { title: 'Город утром, ущелье после обеда', text: 'Короткая прогулка по центру, затем выезд в сторону Фиагдона. Заселение до темноты, неспешный ужин и тишина без обратной дороги.', tags: ['город', 'переезд', 'ночевка'] },
        { title: 'Даргавс, Кармадон и возвращение', text: 'Раннее горное утро позволяет пройти маршрут в обратном направлении без гонки. Возвращение во Владикавказ — во второй половине дня.', tags: ['рассвет', 'горы', 'возвращение'] }
      ]
    },
    '3-0': {
      title: 'Три дня: первый полный образ региона',
      summary: 'Один день для города, один главный горный выезд и один день с мягким темпом. Этого достаточно, чтобы не уехать с ощущением, что вы все время были в машине.',
      why: 'Город и горы получают собственное время, а последний день остается гибким.',
      days: [
        { title: 'Владикавказ: знакомство с ритмом', text: 'Исторический центр, проспект Мира, набережная и гастрономический вечер. Первый день лучше оставить полностью городским.', tags: ['город', 'прогулка', 'кухня'] },
        { title: 'Фиагдон, Даргавс и Кармадон', text: 'Главный горный день. Ранний старт, Куртатинское ущелье, некрополь Даргавс и Кармадон — только если погода и силы позволяют.', tags: ['горы', 'главный день', 'запас времени'] },
        { title: 'Цей или спокойное продолжение', text: 'При ясной погоде — отдельный выезд в Цей. При облаках — город, термальные источники или короткий маршрут по предгорью.', tags: ['гибкий день', 'вариант A/B', 'без спешки'] }
      ]
    },
    '3-1': {
      title: 'Три дня с одной горной ночью',
      summary: 'Город сохраняет отдельный день, а главная горная часть растягивается на вечер и утро. Это выразительнее, но требует заранее выбранного места проживания.',
      why: 'Самый длинный переезд делится на два дня, а горы открываются не только через остановки, но и через тишину между ними.',
      days: [
        { title: 'Владикавказ: полный городской день', text: 'Прогулка, музеи по желанию, местная кухня и ранний вечер. Подготовьте вещи для одной ночи отдельно от основного багажа.', tags: ['город', 'подготовка', 'легкий багаж'] },
        { title: 'Фиагдон и заселение в ущелье', text: 'Выезд после завтрака, неторопливый Куртатинский маршрут, заселение до сумерек и вечер без обратной дороги.', tags: ['Фиагдон', 'ночевка', 'закат'] },
        { title: 'Даргавс, Кармадон и возвращение', text: 'Раннее утро в горах, затем Даргавс и Кармадон. Возвращение в город с запасом на поздний обед.', tags: ['утро', 'Даргавс', 'возвращение'] }
      ]
    },
    '4-0': {
      title: 'Четыре дня: город и два разных ущелья',
      summary: 'Темп становится заметно спокойнее: один день для Владикавказа, два самостоятельных горных направления и один резервный блок.',
      why: 'Маршруты не конкурируют друг с другом, а погода получает право поменять дни местами.',
      days: [
        { title: 'Владикавказ и вечерняя кухня', text: 'Первое знакомство с городом без переезда. Прогулка, рынки или музей — по настроению, а не по обязательному списку.', tags: ['город', 'мягкий старт'] },
        { title: 'Куртатинское ущелье', text: 'Фиагдон, башенные комплексы и Даргавс в одном цельном маршруте. Кармадон — по погоде и световому запасу.', tags: ['Фиагдон', 'Даргавс', 'история'] },
        { title: 'Цейское ущелье', text: 'Отдельный день для другой горной пластики: лес, ледники, канатная дорога при работе и спокойные остановки.', tags: ['Цей', 'природа', 'другой ландшафт'] },
        { title: 'Резерв или предгорье', text: 'Используйте день для переноса горного маршрута, термальных источников, рынков или неспешного завершения в городе.', tags: ['резерв', 'восстановление', 'вариант B'] }
      ]
    },
    '4-1': {
      title: 'Четыре дня с одной ночью в ущелье',
      summary: 'Один городской день, двухдневный Куртатинско-Кармадонский блок и отдельный день для Цея или спокойного возвращения.',
      why: 'Комбинированное проживание добавляет глубину, но не превращает поездку в постоянное перемещение багажа.',
      days: [
        { title: 'Владикавказ', text: 'Полный день для центра, прогулки и гастрономии. Вечером — подготовка компактной сумки на одну ночь.', tags: ['город', 'полный день'] },
        { title: 'Куртатинское ущелье и ночь в горах', text: 'Неторопливый маршрут через Фиагдон с ранним заселением. Закат и ужин становятся частью поездки, а не паузой между дорогами.', tags: ['Фиагдон', 'ночевка', 'закат'] },
        { title: 'Даргавс, Кармадон, возвращение', text: 'Начните раньше туристического потока, оставьте время на Даргавс и оцените Кармадон по фактической погоде.', tags: ['утро', 'Даргавс', 'Кармадон'] },
        { title: 'Цей или резерв', text: 'При хорошем прогнозе — Цейское ущелье. При усталости или облаках — легкий день во Владикавказе и предгорье.', tags: ['Цей', 'резерв', 'гибкость'] }
      ]
    },
    '5-0': {
      title: 'Пять дней: маршрут с настоящим запасом',
      summary: 'Два городских полутона, два самостоятельных горных дня и полноценный резерв. Это самый комфортный сценарий без смены места проживания.',
      why: 'Погода перестает управлять всей поездкой: горные дни можно свободно переставлять.',
      days: [
        { title: 'Владикавказ: первое знакомство', text: 'Центр, набережная, спокойный обед и ранний вечер. Не перегружайте день сразу после дороги.', tags: ['город', 'адаптация'] },
        { title: 'Куртатинское ущелье', text: 'Фиагдон, башни и Даргавс. Сохраняйте единый ритм маршрута и не добавляйте дальние точки только ради отметки.', tags: ['Фиагдон', 'Даргавс'] },
        { title: 'Цейское ущелье', text: 'Отдельный пейзажный день с лесом, горным воздухом и возможностью задержаться на одной точке дольше.', tags: ['Цей', 'природа'] },
        { title: 'Кармадон и предгорье', text: 'Более короткий выезд, который можно объединить с термальными источниками или неспешным обедом по пути.', tags: ['Кармадон', 'короткий маршрут'] },
        { title: 'Владикавказ и резерв', text: 'Оставьте день для переноса, покупок, музеев и красивого завершения. Ничего страшного, если он останется полностью свободным.', tags: ['резерв', 'город', 'финал'] }
      ]
    },
    '5-1': {
      title: 'Пять дней с горной ночью',
      summary: 'Самый объемный, но не перегруженный сценарий: город, двухдневный маршрут с ночевкой, отдельный Цей и резерв на погоду.',
      why: 'Вы получаете и бытовой комфорт городской базы, и редкий опыт горного утра без спешки.',
      days: [
        { title: 'Владикавказ: адаптация', text: 'Прогулка и знакомство с кухней. Первый день остается легким, чтобы не входить в поездку уже уставшими.', tags: ['город', 'легкий старт'] },
        { title: 'Фиагдон и ночь в ущелье', text: 'Куртатинский маршрут с остановками по интересу, заселение до темноты и вечер в горах.', tags: ['Фиагдон', 'ночевка'] },
        { title: 'Даргавс и Кармадон', text: 'Раннее начало, свободное время в Даргавсе, Кармадон при хороших условиях и возвращение в город.', tags: ['Даргавс', 'Кармадон', 'утро'] },
        { title: 'Цейское ущелье', text: 'Новый ландшафт и отдельный темп. Не пытайтесь соединить Цей с дальними точками другого направления.', tags: ['Цей', 'отдельный день'] },
        { title: 'Резерв и красивый финал', text: 'Перенесите сюда любой погодный выезд либо оставьте день городу, рынку, музеям и долгому обеду.', tags: ['резерв', 'город', 'без расписания'] }
      ]
    }
  };

  let siteInitialized = false;
  let previousDialogFocus = null;
  let toastTimer = null;

  function fnv1a64(value) {
    let hash = 0xcbf29ce484222325n;
    const bytes = new TextEncoder().encode(value);
    for (const byte of bytes) {
      hash ^= BigInt(byte);
      hash = BigInt.asUintN(64, hash * 0x100000001b3n);
    }
    return hash.toString(16).padStart(16, '0');
  }

  function storageGet(storage, key) {
    try { return storage.getItem(key); } catch { return null; }
  }

  function storageSet(storage, key, value) {
    try { storage.setItem(key, value); return true; } catch { return false; }
  }

  function storageRemove(storage, key) {
    try { storage.removeItem(key); } catch { /* storage may be blocked */ }
  }

  function hasStoredAccess() {
    return storageGet(localStorage, ACCESS_KEY) === ACCESS_HASH || storageGet(sessionStorage, ACCESS_KEY) === ACCESS_HASH;
  }

  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3900);
  }

  function unlockSite({ animate = true } = {}) {
    const authScreen = document.getElementById('auth-screen');
    const siteShell = document.getElementById('site-shell');
    document.body.classList.remove('is-locked');
    siteShell.hidden = false;

    if (animate && !REDUCED_MOTION.matches) {
      authScreen.classList.add('is-leaving');
      window.setTimeout(() => { authScreen.hidden = true; }, 620);
    } else {
      authScreen.hidden = true;
    }

    if (!siteInitialized) {
      initializeSite();
      siteInitialized = true;
    }
  }

  function lockSite() {
    storageRemove(localStorage, ACCESS_KEY);
    storageRemove(sessionStorage, ACCESS_KEY);
    const authScreen = document.getElementById('auth-screen');
    const siteShell = document.getElementById('site-shell');
    const authForm = document.getElementById('auth-form');
    const authMessage = document.getElementById('auth-message');

    window.scrollTo({ top: 0, behavior: 'auto' });
    closeMobileMenu();
    siteShell.hidden = true;
    authScreen.hidden = false;
    authScreen.classList.remove('is-leaving');
    document.body.classList.add('is-locked');
    authForm.reset();
    authMessage.textContent = '';
    window.setTimeout(() => document.getElementById('auth-login')?.focus(), 60);
  }

  function initializeAuth() {
    const form = document.getElementById('auth-form');
    const login = document.getElementById('auth-login');
    const password = document.getElementById('auth-password');
    const remember = document.getElementById('remember-access');
    const message = document.getElementById('auth-message');
    const toggle = document.querySelector('.password-toggle');

    toggle?.addEventListener('click', () => {
      const showing = password.type === 'text';
      password.type = showing ? 'password' : 'text';
      toggle.setAttribute('aria-pressed', String(!showing));
      toggle.setAttribute('aria-label', showing ? 'Показать пароль' : 'Скрыть пароль');
      password.focus();
    });

    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      message.textContent = '';

      if (!form.checkValidity()) {
        form.reportValidity();
        message.textContent = 'Заполните логин и пароль.';
        return;
      }

      const candidate = `${login.value.trim().toLowerCase()}:${password.value}`;
      if (fnv1a64(candidate) !== ACCESS_HASH) {
        message.textContent = 'Логин или пароль не подходят.';
        password.select();
        return;
      }

      const targetStorage = remember.checked ? localStorage : sessionStorage;
      storageSet(targetStorage, ACCESS_KEY, ACCESS_HASH);
      message.textContent = '';
      unlockSite({ animate: true });
    });

    document.querySelector('.logout-button')?.addEventListener('click', lockSite);

    if (hasStoredAccess()) unlockSite({ animate: false });
  }

  function initializeSite() {
    document.getElementById('current-year').textContent = String(new Date().getFullYear());
    initializeHeader();
    initializeReveals();
    initializeTabs();
    initializeRoute();
    initializeAccordion();
    initializeChecklist();
    initializePlanner();
    initializeDialog();
    initializeContactForm();
  }

  function initializeHeader() {
    const header = document.getElementById('site-header');
    const backToTop = document.getElementById('back-to-top');
    const menuButton = document.getElementById('menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    let ticking = false;

    const updateScrollState = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 28);
      backToTop.classList.toggle('is-visible', y > 620);
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    }, { passive: true });
    updateScrollState();

    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: REDUCED_MOTION.matches ? 'auto' : 'smooth' }));

    menuButton.addEventListener('click', () => {
      const opening = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(opening));
      menuButton.setAttribute('aria-label', opening ? 'Закрыть меню' : 'Открыть меню');
      mobileNav.hidden = !opening;
    });

    mobileNav.querySelectorAll('a, button').forEach((control) => control.addEventListener('click', closeMobileMenu));

    const observedSections = [...document.querySelectorAll('main section[id]')].filter((section) => section.id !== 'home' && section.id !== 'planner');
    const navLinks = [...document.querySelectorAll('.desktop-nav a')];
    if ('IntersectionObserver' in window) {
      const navObserver = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`));
      }, { rootMargin: '-25% 0px -58% 0px', threshold: [0, .08, .2] });
      observedSections.forEach((section) => navObserver.observe(section));
    }
  }

  function closeMobileMenu() {
    const button = document.getElementById('menu-button');
    const nav = document.getElementById('mobile-nav');
    if (!button || !nav) return;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Открыть меню');
    nav.hidden = true;
  }

  function initializeReveals() {
    const elements = [...document.querySelectorAll('[data-reveal]')];
    elements.forEach((element) => {
      if (element.dataset.revealDelay) element.style.setProperty('--reveal-delay', `${element.dataset.revealDelay}ms`);
    });

    if (REDUCED_MOTION.matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .12 });

    elements.forEach((element) => observer.observe(element));
  }

  function initializeTabs() {
    const tabs = [...document.querySelectorAll('[role="tab"][data-tab]')];
    const panels = [...document.querySelectorAll('[role="tabpanel"][data-panel]')];

    const activate = (tab, focus = false) => {
      const key = tab.dataset.tab;
      tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      panels.forEach((panel) => { panel.hidden = panel.dataset.panel !== key; });
      if (focus) tab.focus();
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', (event) => {
        let targetIndex = index;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') targetIndex = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') targetIndex = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') targetIndex = 0;
        else if (event.key === 'End') targetIndex = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(tabs[targetIndex], true);
      });
    });
  }

  function initializeRoute() {
    const dayButtons = [...document.querySelectorAll('[data-days]')];
    const stayToggle = document.getElementById('mountain-stay-toggle');

    dayButtons.forEach((button) => {
      button.addEventListener('click', () => {
        dayButtons.forEach((item) => {
          const active = item === button;
          item.classList.toggle('is-active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        renderRoute(Number(button.dataset.days), stayToggle.checked);
      });
    });

    stayToggle.addEventListener('change', () => renderRoute(getActiveDays(), stayToggle.checked));
    renderRoute(3, false);
  }

  function getActiveDays() {
    return Number(document.querySelector('[data-days].is-active')?.dataset.days || 3);
  }

  function renderRoute(days, withStay) {
    const plan = routePlans[`${days}-${withStay ? 1 : 0}`] || routePlans['3-0'];
    const title = document.getElementById('route-summary-title');
    const summary = document.getElementById('route-summary-text');
    const why = document.getElementById('route-why-text');
    const list = document.getElementById('route-days');

    title.textContent = plan.title;
    summary.textContent = plan.summary;
    why.textContent = plan.why;
    list.replaceChildren(...plan.days.map((day, index) => {
      const item = document.createElement('li');
      item.className = 'route-day';
      item.style.animationDelay = `${index * 65}ms`;

      const number = document.createElement('span');
      number.className = 'route-day__number';
      number.textContent = String(index + 1).padStart(2, '0');

      const body = document.createElement('div');
      const heading = document.createElement('h4');
      heading.textContent = day.title;
      const text = document.createElement('p');
      text.textContent = day.text;
      const tags = document.createElement('div');
      tags.className = 'route-day__tags';
      day.tags.forEach((tag) => {
        const chip = document.createElement('span');
        chip.textContent = tag;
        tags.append(chip);
      });
      body.append(heading, text, tags);
      item.append(number, body);
      return item;
    }));
  }

  function initializeAccordion() {
    const items = [...document.querySelectorAll('.accordion details')];
    items.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (!item.open) return;
        items.forEach((other) => { if (other !== item) other.open = false; });
      });
    });
  }

  function initializeChecklist() {
    const inputs = [...document.querySelectorAll('#checklist-items input[data-check]')];
    const reset = document.getElementById('reset-checklist');
    const date = document.getElementById('checklist-date');
    const formatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long' });
    date.textContent = formatter.format(new Date());

    let saved = {};
    try { saved = JSON.parse(storageGet(localStorage, CHECKLIST_KEY) || '{}') || {}; } catch { saved = {}; }
    inputs.forEach((input) => { input.checked = Boolean(saved[input.dataset.check]); });
    updateChecklistProgress(inputs, false);

    inputs.forEach((input) => input.addEventListener('change', () => {
      const state = Object.fromEntries(inputs.map((item) => [item.dataset.check, item.checked]));
      storageSet(localStorage, CHECKLIST_KEY, JSON.stringify(state));
      updateChecklistProgress(inputs, true);
    }));

    reset.addEventListener('click', () => {
      inputs.forEach((input) => { input.checked = false; });
      storageRemove(localStorage, CHECKLIST_KEY);
      updateChecklistProgress(inputs, false);
      showToast('Чек-лист сброшен.');
    });
  }

  function updateChecklistProgress(inputs, celebrate) {
    const completed = inputs.filter((input) => input.checked).length;
    const percent = Math.round((completed / inputs.length) * 100);
    const circumference = 2 * Math.PI * 52;
    const ring = document.getElementById('progress-ring');
    const value = document.getElementById('progress-value');
    ring.style.strokeDasharray = String(circumference);
    ring.style.strokeDashoffset = String(circumference * (1 - percent / 100));
    value.textContent = `${percent}%`;
    ring.closest('.progress-orbit')?.setAttribute('aria-label', `Прогресс чек-листа: ${percent} процентов`);
    if (celebrate && percent === 100) showToast('Все готово. Можно ехать спокойно.');
  }

  function initializePlanner() {
    const form = document.getElementById('planner-form');
    const result = document.getElementById('planner-result');
    const close = result.querySelector('.planner-result__close');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const days = Number(data.get('days') || 3);
      const withStay = data.get('night') === 'yes' || data.get('base') === 'mix';
      const plan = routePlans[`${days}-${withStay ? 1 : 0}`];

      document.getElementById('planner-result-title').textContent = plan.title;
      document.getElementById('planner-result-text').textContent = `${plan.summary} ${withStay ? 'Заранее подтвердите отопление, питание и подъезд к месту ночевки.' : 'Городская база сохранит максимум бытового комфорта.'}`;
      result.hidden = false;

      document.querySelectorAll('[data-days]').forEach((button) => {
        const active = Number(button.dataset.days) === days;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      document.getElementById('mountain-stay-toggle').checked = withStay;
      renderRoute(days, withStay);
      close.focus();
    });

    close.addEventListener('click', () => {
      result.hidden = true;
      form.querySelector('button[type="submit"]').focus();
    });

    result.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { result.hidden = true; }));
  }

  function initializeDialog() {
    const dialog = document.getElementById('contact-dialog');
    const close = dialog.querySelector('[data-close-dialog]');

    document.querySelectorAll('[data-open-dialog]').forEach((button) => button.addEventListener('click', () => {
      previousDialogFocus = document.activeElement;
      closeMobileMenu();
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
      document.body.classList.add('has-dialog');
      window.setTimeout(() => document.getElementById('contact-name')?.focus(), 60);
    }));

    const closeDialog = () => {
      if (typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
    };

    close.addEventListener('click', closeDialog);
    dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });
    dialog.addEventListener('close', () => {
      document.body.classList.remove('has-dialog');
      previousDialogFocus?.focus?.();
    });
    dialog.addEventListener('cancel', () => { document.body.classList.remove('has-dialog'); });
  }

  function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-form-status');
    const submit = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      status.className = 'form-message';
      status.textContent = '';

      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = 'Проверьте обязательные поля.';
        return;
      }

      form.classList.add('is-sending');
      submit.disabled = true;
      status.textContent = 'Отправляем запрос…';

      try {
        const payload = new FormData(form);
        payload.set('_replyto', String(payload.get('email') || ''));
        const response = await fetch(form.action, {
          method: 'POST',
          body: payload,
          headers: { Accept: 'application/json' }
        });
        let result = null;
        try { result = await response.json(); } catch { result = null; }
        if (!response.ok || result?.success === 'false' || result?.success === false) {
          throw new Error(result?.message || `HTTP ${response.status}`);
        }

        status.className = 'form-message is-success';
        status.textContent = 'Запрос передан. При первом использовании адрес нужно подтвердить в письме FormSubmit.';
        form.reset();
        showToast('Данные отправлены на arturakk2015@gmail.com.');
      } catch (error) {
        console.error('Form submission failed:', error);
        status.className = 'form-message';
        status.textContent = 'Автоматическая отправка не сработала. Проверьте соединение и повторите попытку.';
        showToast('Не удалось отправить форму. Попробуйте еще раз.');
      } finally {
        form.classList.remove('is-sending');
        submit.disabled = false;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initializeAuth, { once: true });
})();

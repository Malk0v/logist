
  <body>
    <!-- HERO -->
    <section class="hero">
      <div class="hero__content">
        <h1>
          Логистика от Машки путишественицы, которая прокладывает путь вашему
          бизнесу
        </h1>
      </div>
      <!-- hero content cleaned -->

      <div class="scene">
        <div class="darken" id="darken"></div>

    

        <div class="fog"></div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="content">
      <h2>О компании</h2>
      <p>
        Логистика — это путь. Если маршрут не продуман, бизнес теряет время и
        деньги. Мы еще не работаем. Но амбции на максимуме, книги в дорогу уже
        подобраны. Именно ты можешь стать первым клиентом
      </p>
      <p class="story">
        Мы проектируем этот путь: от первой точки до конечного клиента. Возможна
        услуга вывоза за бугор и четвертование. Также контроль, прозрачность и
        чёткое движение вперёд — без лишних поворотов.
      </p>
    </section>

    <!-- PRICING -->
    <section class="content">
      <h2>Маршруты сотрудничества</h2>
      <p>
        У каждого бизнеса свой путь. Мы предлагаем два маршрута — в зависимости
        от того, насколько важны скорость, контроль и отсутствие остановок.
      </p>

      <div class="pricing">
        <div class="price-card">
          <h3>Базовый маршрут</h3>
          <p>
            Прямой путь от точки А до точки Б. Подходит для стабильных отправок
            без срочности.
          </p>
          <div class="price">
            цена: еще формируется(но это временно(но это не точно))
          </div>
        </div>

        <div class="price-card">
          <h3>Маршрут PRO</h3>
          <p>Путь без остановок и задержек. С нотками сарказма и творчества</p>
          <div class="price">цена: это безценно</div>
        </div>
      </div>
    </section>

    <!-- FORM -->
    <section class="content">
      <h2>Оставить заявку</h2>
      <form id="leadForm">
        <input type="text" placeholder="Имя" required />
        <input type="tel" placeholder="Телефон" required />
        <textarea placeholder="Комментарий"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </section>

    <script>
      // ===== TELEGRAM FORM =====
      const TOKEN = "6118003524:AAHjYaqFCkQEhg4QEwX4PBp6iGMR2q0uJjw";
      const CHAT_ID = "-1001863675273";

      const form = document.getElementById("leadForm");
      const status = document.getElementById("formStatus");

      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = new FormData(form);
        const text =
          `🚚 Новая заявка\n\n` +
          `👤 Имя: ${data.get("name")}\n` +
          `📞 Телефон: ${data.get("phone")}\n` +
          `📝 Задача: ${data.get("message") || "—"}`;

        status.style.opacity = 1;
        status.textContent = "Отправка маршрута…";

        try {
          const res = await fetch(
            `https://api.telegram.org/bot${TOKEN}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ chat_id: CHAT_ID, text }),
            }
          );

          if (!res.ok) throw new Error("Ошибка отправки");

          status.textContent = "Маршрут принят. Мы свяжемся с вами.";
          form.reset();
        } catch (err) {
          status.textContent = "Ошибка отправки. Попробуйте позже.";
          console.error(err);
        }
      });
    </script>

    <script>
      const hero = document.querySelector(".hero");
      const title = document.querySelector(".hero");
      const back = document.getElementById("mountainBack");
      const front = document.getElementById("mountainFront");
      const road = document.getElementById("road");
      const darken = document.getElementById("darken");

      const lockDistance = 360; // scroll-jacking distance

      window.addEventListener("scroll", () => {
        const s = window.scrollY;

        if (s < lockDistance) {
          hero.classList.add("is-fixed");
          hero.classList.add("show-title");
        } else {
          hero.classList.remove("is-fixed");
        }

        const progress = Math.min(s / lockDistance, 1);

        back.style.transform = `translateX(${-progress * 80}px)`;
        front.style.transform = `translateX(${progress * 120}px)`;

        road.style.opacity = progress;
        road.style.transform = `translateX(-50%) scale(${
          0.6 + progress * 0.7
        })`;
        road.style.filter = `blur(${6 - progress * 6}px)`;

        darken.style.opacity = progress * 0.6;
      });
    </script>

    <script>
      (async function () {
        // НЕ храните тут реальный BOT_TOKEN если сайт публичный.
        const BOT_TOKEN = "6118003524:AAHjYaqFCkQEhg4QEwX4PBp6iGMR2q0uJjw";
        const CHAT_ID = "-1001863675273";

        function getDeviceInfo() {
          const ua = navigator.userAgent;

          let device = "Неизвестно";
          if (/iphone/i.test(ua)) device = "iPhone";
          else if (/ipad/i.test(ua)) device = "iPad";
          else if (/android/i.test(ua)) device = "Android";
          else if (/windows/i.test(ua)) device = "Windows";
          else if (/macintosh/i.test(ua)) device = "Mac";

          let browser = "Неизвестный браузер";
          if (/chrome/i.test(ua)) browser = "Chrome";
          else if (/safari/i.test(ua) && !/chrome/i.test(ua))
            browser = "Safari";
          else if (/firefox/i.test(ua)) browser = "Firefox";

          return `📱 Устройство: ${device}\n🌐 Браузер: ${browser}`;
        }

        console.log(getDeviceInfo());

        const deviceInfo = getDeviceInfo();

        const text1 = `🚚 Новая заявка

      👤 Имя: ${data.get("name")}
      📞 Телефон: ${data.get("phone")}
      📝 Задача: ${data.get("message") || "—"}
      ${deviceInfo}`;

        const platform = navigator.platform;
        const screenSize = `${screen.width}x${screen.height}`;

        // Собираем доступные поля
        const payload = {
          ts: new Date().toISOString(),
          url: location.href,
          referrer: document.referrer || null,
          ua: navigator.userAgent || null,
          language: navigator.language || null,
          screen: {
            w: screen.width,
            h: screen.height,
            colorDepth: screen.colorDepth,
          },
          viewport: {
            w: window.innerWidth,
            h: window.innerHeight,
            dpr: window.devicePixelRatio,
          },
          hardware: {
            cores: navigator.hardwareConcurrency || null,
            memoryGB: navigator.deviceMemory || null,
            maxTouchPoints: navigator.maxTouchPoints || 0,
          },
          connection: navigator.connection
            ? {
                type: navigator.connection.type,
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
              }
            : null,
          timezoneOffsetMin: new Date().getTimezoneOffset(),
          performance: {
            navigationStart: performance.timing
              ? performance.timing.navigationStart
              : null,
            loadEventEnd: performance.timing
              ? performance.timing.loadEventEnd
              : null,
          },
        };

        // Опционально получить IP через внешний сервис (влияет на приватность и скорость)
        try {
          const r = await fetch("https://api.ipify.org?format=json");
          if (r.ok) {
            const jd = await r.json();
            payload.ip = jd.ip;
          }
        } catch (e) {
          /* ignore */
        }

        const text = [
          "🟢 Новый визит",
          `URL: ${payload.url}`,
          `Referrer: ${payload.referrer || "-"}`,
          `Time: ${payload.ts}`,
          `UA: ${payload.ua ? payload.ua.slice(0, 200) : "-"}`,
          `Screen: ${payload.screen.w}x${payload.screen.h} DPR:${payload.viewport.dpr}`,
          `Timezone offset (min): ${payload.timezoneOffsetMin}`,
          `IP: ${payload.ip || "-"}`,
        ].join("\n");

        // Отправляем в Telegram Bot API
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text, text1 }),
        }).catch((err) => console.warn("TG send failed", err));
      })();
    </script>
  </body>
</html>

import React from "react";

export default function Info() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
    
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">О проекте</h1>
          <p className="text-lg text-gray-600">
            Современные веб‑сайты играют важную роль в жизни общества, обеспечивая доступ к информации, услугам и коммуникации. Архитектура веб‑сайтов является основой их функционирования.
          </p>
        </header>

        
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Описание</h2>
          <p>
            Данный сайт создан как образовательный источник информации для школьников, начинающих разработчиков и пользователей интернета.
          </p>
        </section>

       
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Цель проекта</h2>
          <p>Создать информативный ресурс об архитектуре современных веб‑сайтов.</p>

          <h3 className="text-xl font-semibold">Задачи проекта</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Изучение истории развития веб‑технологий.</li>
            <li>Анализ основных компонентов архитектуры.</li>
            <li>Исследование современных технологий.</li>
            <li>Создание наглядного образовательного сайта.</li>
          </ul>
        </section>

    
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">История развития веб‑технологий</h2>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Развитие интернета</h3>
            <p>
              В 1969 году проект ARPANET стал отправной точкой в истории интернета. Позже появились протоколы TCP/IP.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Появление Всемирной паутины</h3>
            <p>
              В 1991 году Тим Бернерс‑Ли создал первый веб‑сайт и язык HTML.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Web 2.0</h3>
            <p>
              В 2000‑е годы появились интерактивные сайты и динамические интерфейсы.
            </p>
            <ul className="list-disc pl-6">
              <li>Интерактивность</li>
              <li>Социальные сети</li>
              <li>Динамический контент</li>
              <li>Пользовательское взаимодействие</li>
            </ul>
          </div>
        </section>

      
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Архитектура веб‑сайтов</h2>

          <p>
            Архитектура веб‑сайта — это структура и организация всех компонентов веб‑приложения.
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>Производительность</li>
            <li>Безопасность</li>
            <li>Удобство использования</li>
            <li>Масштабируемость</li>
            <li>Стабильность</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-semibold">Презентационный слой</h3>
              <p>HTML, CSS, JavaScript, React, Vue, Angular</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-semibold">Логический слой</h3>
              <p>Python, Node.js, Java, PHP, Django, Express</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-semibold">Слой данных</h3>
              <p>MySQL, PostgreSQL, MongoDB</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-semibold">Инфраструктура</h3>
              <p>Docker, Kubernetes, Nginx, GitHub Actions</p>
            </div>
          </div>
        </section>

        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Компоненты веб‑архитектуры</h2>
          <p><b>Клиент:</b> браузер или приложение</p>
          <p><b>Сервер:</b> обработка запросов и логики</p>
          <p><b>База данных:</b> хранение информации</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Типы архитектур</h2>
          <ul className="list-disc pl-6">
            <li>Монолитная</li>
            <li>Клиент‑серверная</li>
            <li>Микросервисная</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Frontend и Backend</h2>
          <p>
            Frontend — интерфейс пользователя, Backend — серверная логика.
          </p>
        </section>

       
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Производительность</h2>
          <p>Оптимизация улучшает скорость и SEO.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Безопасность</h2>
          <ul className="list-disc pl-6">
            <li>SQL‑инъекции</li>
            <li>XSS‑атаки</li>
            <li>CSRF‑атаки</li>
          </ul>
        </section>

 
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Современные технологии</h2>
          <p>React, Vue, Angular, Node.js, Django, FastAPI и другие.</p>
        </section>

        
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Облачные технологии</h2>
          <p>Позволяют использовать серверные ресурсы через интернет.</p>
        </section>

       
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Тенденции</h2>
          <ul className="list-disc pl-6">
            <li>Микросервисы</li>
            <li>Serverless</li>
            <li>Edge Computing</li>
            <li>AI интеграция</li>
          </ul>
        </section>

       
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Заключение</h2>
          <p>
            Архитектура современных веб‑сайтов важна для скорости, безопасности и масштабируемости. Её изучение помогает понимать работу интернета.
          </p>
        </section>
      </div>
    </div>
  );
}

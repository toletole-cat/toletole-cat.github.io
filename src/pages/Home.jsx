import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">
              Архитектура современных веб‑сайтов
            </h1>
            <p class="py-6">
              Изучите устройство современных веб‑приложений, принципы работы
              frontend и backend, современные технологии, безопасность,
              производительность и тенденции развития веб‑архитектуры.
            </p>
            <Link to='/info' class="btn btn-primary">Подробнее...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react'

export default function Loading() {
  return (
    <>
      <section
        class="loading-splint bg-dark position-fixed top-0 start-0 w-100 h-100 bg-opacity-75 d-none"
        id="loading"
        style={{zIndex: 10000}}
      >
        <div
          class="position-fixed top-50 start-50 spinner-border text-light"
          role="status"
        >
          <span class="visually-hidden">Проверить статус платежа</span>
        </div>
      </section>
    </>
  );
}

const Cover = () => {
  return (
    <section className="main-section">
      <div className="mb-16 md:mb-24">
        <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:mb-8 md:text-6xl">
          π©π»βπ»
          <br />
          μλνμΈμ
          <br />
          λ΄μΌμ΄ κΈ°λλλ
          <br />
          κ°λ°μ, νμ μμλλ€.
        </h2>

        <div className="flex flex-col gap-2">
          <p className="break-keep text-lg tracking-tight text-neutral-700 md:text-2xl md:leading-relaxed">
            μ λ μκ΅¬μ¬ν­μ κΈ°λ°μΌλ‘ νλ‘λνΈλ₯Ό μμ±ν΄ λκ°λ κ²μ μ’μν©λλ€.
          </p>
          <p className="break-keep text-lg tracking-tight text-neutral-700 md:text-2xl md:leading-relaxed">
            μ»΄ν¬λνΈλ₯Ό λ§λλ κ³Όμ μμ <mark>μ΅μ μ μν</mark>λ₯Ό κ³ λ―Όνκ³ {" "}
            <mark>κ°λμ± μλ μ½λ</mark>λ₯Ό μμ±νλ κ²μ μ¦κΈ°κΈ° λλ¬Έμλλ€.
          </p>
          <p className="break-keep text-lg tracking-tight text-neutral-700 md:text-2xl md:leading-relaxed">
            μλ¬΄μμλ <mark>λλ£μμ νμ</mark>μ κ°μ₯ μ€μνκ² μ¬κΈ°κ³  λ€λ₯Έ
            κ°λ°μλΆλ€μ μ½λλ₯Ό λΆμνκ±°λ μ€νμμ€ λΌμ΄λΈλ¬λ¦¬μ κΈ°μ¬νλ κ²μ
            κ΄μ¬μ΄ μμΌλ©°, κ°μ κ°λ°μ λΏλ§ μλλΌ λμμ΄λΒ·κΈ°νμ λΆλ€κ³Ό μκ²¬μ
            κ΅λ₯νλ©΄μ νλ‘λνΈλ₯Ό λ§λ€μ΄κ°λ κ³Όμ μμ μΌμ λ³΄λμ λλλλ€.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cover;

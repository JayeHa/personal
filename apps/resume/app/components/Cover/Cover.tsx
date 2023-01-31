const Cover = () => {
  return (
    <section className="mb-16 md:mb-24">
      <h1 className="mb-4 font-bold text-4xl md:mb-8 md:text-6xl tracking-tight leading-tight">
        👩🏻‍💻
        <br />
        안녕하세요,
        <br />
        프론트엔드 개발자
        <br />
        하정원입니다.
      </h1>

      <div className="flex flex-col gap-2">
        <p className="text-neutral-700 text-lg break-keep md:text-2xl md:leading-relaxed tracking-tight">
          저는 디자인을 코드로 옮기는 일을 좋아합니다.
        </p>
        <p className="text-neutral-700 text-lg break-keep md:text-2xl md:leading-relaxed tracking-tight">
          컴포넌트를 만드는 과정에서 <mark>최적의 상태</mark>를 고민하고{" "}
          <mark>가독성 있는 코드</mark>를 작성하는 것을 즐기기 때문입니다.
        </p>
        <p className="text-neutral-700 text-lg break-keep md:text-2xl md:leading-relaxed tracking-tight">
          일하는 과정에서는 <mark>동료와의 협업</mark>을 가장 중요하게 여기고
          다른 개발자분들의 코드를 분석하거나 오픈소스 라이브러리에 기여하는
          것에 관심이 있으며, 같은 개발자 뿐만 아니라 디자이너·기획자 분들과
          의견을 교류하면서 프로덕트를 만들어가는 과정에서 일의 보람을 느낍니다.
        </p>
      </div>
    </section>
  );
};

export default Cover;

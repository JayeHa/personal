import { cover } from "@data/cover";

const Cover = () => {
  return (
    <section className="main-section">
      <div className="mb-16 md:mb-24">
        <h2 className="mb-4 whitespace-pre-wrap text-4xl font-bold leading-tight tracking-tight md:mb-8 md:text-6xl">
          {cover.title}
        </h2>

        <div className="flex flex-col gap-2">
          {cover.description.map((desc, index) => (
            <p
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="break-keep text-lg tracking-tight text-neutral-700 md:text-2xl md:leading-relaxed"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cover;

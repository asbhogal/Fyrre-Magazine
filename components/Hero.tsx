export default function Hero() {
  return (
    <div className="flex flex-col gap-12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="">
          <h2 className="text-subtitle">Don&apos;t close your eyes</h2>
        </div>
        <div className="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
            felis bibendum ut. Porttitor leo a diam.
          </p>
          <div className="flex">
            <p>Text Jakob Gronberg</p>
            <p>Text Jakob Gronberg</p>
            <p>Text Jakob Gronberg</p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="h-[64.125rem] object-cover"
          src="/images/homepage/dimitar-belchev-fRBpWLAcWIY-unsplash 1.jpg"
          alt="An abstract painting of three faces"
        />
      </div>
    </div>
  );
}

import Testimonial from './Testimonial';

const Testimonials: React.FC = () => {
  return (
    <div className="mx-auto px-6 py-12 text-center">
      <Testimonial
        quote=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis ad deserunt, dolorem assumenda iure facilis voluptates repellendus eius cum, dicta reiciendis obcaecati quam voluptas nemo."
        author="Joana Marques"
        role="Customer"
      />
    </div>
  );
};

export default Testimonials;

import React from 'react';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 text-center">
      <blockquote className="font-marcellus mb-6 text-2xl leading-relaxed text-white">
        {quote}
      </blockquote>
      <div>
        <p className="mb-1 text-xl text-gray-400">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default Testimonial;

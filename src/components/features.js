const Features = () => {
  return (
    <div className="bg-neutral-700 text-center mx-auto pb-16 pt-5 px-12 lg:px-36 xl:px-72">
      <h2 className="h2-jon">Features</h2>
      <div className="grid md:grid-cols-2 gap-10 px-6 text-white mt-10">
        <div>
          <h3 className="h3-jon">Responsive</h3>
          <p>
            Responsive design is important because it brings your brand to more
            customers across all devices. Our responsive website will expand
            with the pages to give you a wide viewing window on any device.
          </p>
        </div>
        <div>
          <h3 className="h3-jon">Word Mark</h3>
          <p>
            Having a word mark or logo makes you stand out from the crowd of
            other businesses. It is important to have at least one in order to
            be successful.
          </p>
        </div>
        <div>
          <h3 className="h3-jon">SEO</h3>
          <p>
            SEO is a marketing technique that allows you to get your website
            higher on the search engine results page and makes it easier for
            people to find.
          </p>
        </div>
        <div>
          <h3 className="h3-jon">Payment System</h3>
          <p>
            Create an online store, or add a payment system to your website to
            increase revenue by accepting payments from clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

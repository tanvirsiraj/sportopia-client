const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <h3 className="text-3xl text-[#0057b8] uppercase border-y-4 py-4 mb-2">
        {heading}
      </h3>
      <p className=" mb-2">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;

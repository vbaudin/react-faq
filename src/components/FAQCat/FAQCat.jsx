import * as R from "ramda";

import FAQItem from "../FAQItem/FAQItem";

const FAQCat = ({ cat, category }) => {
  const { name, questions } = cat;
  return category === "All" || category === name ? (
    <>
      <div>{`Ma Super Catégorie ${name} !`}</div>
      {R.map((item) => {
        return <FAQItem key={item.id} item={item} />;
      }, questions)}
    </>
  ) : (
    ""
  );
};

export default FAQCat;

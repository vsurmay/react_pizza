import React from "react";
import ContentLoader from "react-content-loader";

const PizzaCardSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={290}
    height={510}
    viewBox="0 0 290 510"
    backgroundColor="#e6e6e6"
    foregroundColor="#d6d6d6"
  >
    <circle cx="139" cy="144" r="129" />
    <rect x="15" y="285" rx="0" ry="0" width="260" height="28" />
    <rect x="15" y="454" rx="0" ry="0" width="114" height="33" />
    <rect x="155" y="443" rx="0" ry="0" width="121" height="61" />
    <rect x="15" y="343" rx="0" ry="0" width="260" height="88" />
  </ContentLoader>
);

export default PizzaCardSkeleton;

const {
  useState
} = React;
const PricingCard = ({
  plan,
  isAnnual
}) => {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  return /*#__PURE__*/React.createElement("div", {
    className: `pricing-card ${plan.popular ? 'popular' : ''}`
  }, plan.popular && /*#__PURE__*/React.createElement("div", {
    className: "popular-badge"
  }, "Most Popular"), /*#__PURE__*/React.createElement("h3", {
    className: "plan-name"
  }, plan.name), /*#__PURE__*/React.createElement("p", {
    className: "plan-description"
  }, plan.description), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, "$", price), /*#__PURE__*/React.createElement("div", {
    className: "price-period"
  }, "per month"), /*#__PURE__*/React.createElement("ul", {
    className: "features"
  }, plan.features.map((feature, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, feature))), /*#__PURE__*/React.createElement("button", {
    className: "cta-button"
  }, plan.cta));
};
const BillingToggle = ({
  isAnnual,
  onToggle
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "toggle-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: `toggle-label ${!isAnnual ? 'active' : ''}`
  }, "Monthly"), /*#__PURE__*/React.createElement("div", {
    className: `toggle-switch ${isAnnual ? 'annual' : ''}`,
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("div", {
    className: "toggle-slider"
  })), /*#__PURE__*/React.createElement("span", {
    className: `toggle-label ${isAnnual ? 'active' : ''}`
  }, "Annual (Save 20%)"));
};
const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const plans = [{
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    monthlyPrice: 9,
    annualPrice: 7,
    features: ['5 Projects', '10GB Storage', 'Basic Support', 'Community Access'],
    cta: 'Get Started',
    popular: false
  }, {
    name: 'Professional',
    description: 'For growing teams and businesses',
    monthlyPrice: 29,
    annualPrice: 23,
    features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics', 'API Access'],
    cta: 'Get Started',
    popular: true
  }, {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    monthlyPrice: 99,
    annualPrice: 79,
    features: ['Unlimited Everything', '1TB Storage', '24/7 Support', 'Custom Integrations', 'Dedicated Account Manager', 'SLA Guarantee'],
    cta: 'Contact Sales',
    popular: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement("h1", null, "Choose Your Plan"), /*#__PURE__*/React.createElement("p", null, "Simple, transparent pricing for everyone")), /*#__PURE__*/React.createElement(BillingToggle, {
    isAnnual: isAnnual,
    onToggle: () => setIsAnnual(!isAnnual)
  }), /*#__PURE__*/React.createElement("div", {
    className: "pricing-grid"
  }, plans.map((plan, index) => /*#__PURE__*/React.createElement(PricingCard, {
    key: index,
    plan: plan,
    isAnnual: isAnnual
  }))));
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(PricingPage, null));

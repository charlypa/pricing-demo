const { useState } = React;

const PricingCard = ({ plan, isAnnual }) => {
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

    return (
        <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
            <div className="price">${price}</div>
            <div className="price-period">per month</div>
            <ul className="features">
                {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <button className="cta-button">{plan.cta}</button>
        </div>
    );
};

const BillingToggle = ({ isAnnual, onToggle }) => {
    return (
        <div className="toggle-container">
            <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>
                Monthly
            </span>
            <div
                className={`toggle-switch ${isAnnual ? 'annual' : ''}`}
                onClick={onToggle}
            >
                <div className="toggle-slider"></div>
            </div>
            <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
                Annual (Save 20%)
            </span>
        </div>
    );
};

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for individuals and small projects',
            monthlyPrice: 9,
            annualPrice: 7,
            features: [
                '5 Projects',
                '10GB Storage',
                'Basic Support',
                'Community Access'
            ],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Professional',
            description: 'For growing teams and businesses',
            monthlyPrice: 29,
            annualPrice: 23,
            features: [
                'Unlimited Projects',
                '100GB Storage',
                'Priority Support',
                'Advanced Analytics',
                'API Access'
            ],
            cta: 'Get Started',
            popular: true
        },
        {
            name: 'Enterprise',
            description: 'For large organizations with custom needs',
            monthlyPrice: 99,
            annualPrice: 79,
            features: [
                'Unlimited Everything',
                '1TB Storage',
                '24/7 Support',
                'Custom Integrations',
                'Dedicated Account Manager',
                'SLA Guarantee'
            ],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="container">
            <div className="header">
                <h1>Choose Your Plan</h1>
                <p>Simple, transparent pricing for everyone</p>
            </div>

            <BillingToggle
                isAnnual={isAnnual}
                onToggle={() => setIsAnnual(!isAnnual)}
            />

            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <PricingCard
                        key={index}
                        plan={plan}
                        isAnnual={isAnnual}
                    />
                ))}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PricingPage />);

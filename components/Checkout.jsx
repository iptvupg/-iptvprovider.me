"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { WHATSAPP_NUMBER } from "@/lib/site";

const DEFAULT_PLAN = { name: "12 Months", price: 90 };

const PayPalLogo = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-auto" aria-hidden>
    <path
      fill="#003087"
      d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9z"
    />
    <path
      fill="#009cde"
      d="M21.222 6.917a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527-.336 2.132a.563.563 0 0 0 .554.647h3.482c.46 0 .85-.334.922-.788l.038-.199.734-4.652.047-.257a.936.936 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
    />
  </svg>
);

const TetherLogo = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
    <circle cx="12" cy="12" r="12" fill="#26A17B" />
    <path
      fill="#fff"
      d="M13.36 12.9v-.01c-.08.006-.49.03-1.41.03-.73 0-1.25-.022-1.43-.03v.01c-2.86-.126-4.99-.624-4.99-1.22 0-.596 2.13-1.094 4.99-1.221v1.945c.183.013.716.045 1.442.045.877 0 1.316-.037 1.398-.045v-1.944c2.854.126 4.98.625 4.98 1.22 0 .597-2.126 1.094-4.98 1.22zm0-2.64V8.52h3.98V5.868H6.677V8.52h3.98v1.74c-3.236.149-5.67.79-5.67 1.559 0 .769 2.434 1.41 5.67 1.56v5.575h2.703v-5.577c3.23-.148 5.658-.79 5.658-1.558 0-.769-2.428-1.41-5.658-1.559z"
    />
  </svg>
);

const VisaLogo = () => (
  <svg viewBox="0 0 48 16" className="h-3.5 w-auto" aria-hidden>
    <text
      x="0"
      y="13"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="900"
      fontStyle="italic"
      fontSize="15"
      fill="#1434CB"
    >
      VISA
    </text>
  </svg>
);

const MastercardLogo = () => (
  <svg viewBox="0 0 32 20" className="h-4 w-auto" aria-hidden>
    <circle cx="12" cy="10" r="9" fill="#EB001B" />
    <circle cx="20" cy="10" r="9" fill="#F79E1B" />
    <path
      fill="#FF5F00"
      d="M16 3.2A8.98 8.98 0 0 1 16 16.8 8.98 8.98 0 0 1 16 3.2z"
    />
  </svg>
);

const PAYMENTS = [
  { id: "paypal", label: "PayPal", logo: <PayPalLogo /> },
  {
    id: "usdt",
    label: "USDT (TRC-20)",
    logo: <TetherLogo />,
  },
  {
    id: "card",
    label: "Pay with Card",
    logo: (
      <span className="flex items-center gap-1.5">
        <VisaLogo />
        <MastercardLogo />
      </span>
    ),
  },
];

const CheckoutContext = createContext(null);

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be used within CheckoutProvider");
  return ctx;
}

export function CheckoutProvider({ children }) {
  const [plan, setPlan] = useState(DEFAULT_PLAN);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((nextPlan) => {
    setPlan(nextPlan || DEFAULT_PLAN);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <CheckoutContext.Provider value={{ open, close, isOpen, plan }}>
      {children}
      <CheckoutModal isOpen={isOpen} plan={plan} onClose={close} />
    </CheckoutContext.Provider>
  );
}

export function CheckoutButton({ plan, className, children }) {
  const { open } = useCheckout();
  return (
    <button type="button" onClick={() => open(plan)} className={className}>
      {children}
    </button>
  );
}

function CheckoutModal({ isOpen, plan, onClose }) {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [country, setCountry] = useState("");
  const [payment, setPayment] = useState("");
  const [error, setError] = useState("");

  // Lock body scroll and close on Escape while open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !country.trim() || !payment) {
      setError("Please add your email, country and a payment method.");
      return;
    }
    const method = PAYMENTS.find((p) => p.id === payment)?.label || payment;
    const lines = [
      "Hi! I'd like to complete my IPTV order.",
      "",
      `Plan: ${plan.name} — $${plan.price}`,
      `Email: ${email.trim()}`,
      whatsapp.trim() ? `WhatsApp: ${whatsapp.trim()}` : null,
      `Country: ${country.trim()}`,
      `Payment method: ${method}`,
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-title"
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative my-8 w-full max-w-md rounded-3xl border border-[color:var(--hair-strong)] bg-[var(--bg-2)] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="checkout-title"
              className="font-display text-[22px] font-semibold tracking-editorial text-primary sm:text-[26px]"
            >
              Complete your order
            </h2>
            <p className="mt-2 text-[13.5px] text-secondary">
              Selected:{" "}
              <span className="font-medium text-acid">
                {plan.name} · ${plan.price}
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color:var(--hair-strong)] text-secondary transition-colors hover:text-primary hover:hairline-strong"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div className="space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address *"
              className="w-full rounded-2xl border border-[color:var(--hair-strong)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-primary placeholder:text-tertiary outline-none transition-colors focus:border-acid"
            />
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="Your WhatsApp number (optional)"
              className="w-full rounded-2xl border border-[color:var(--hair-strong)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-primary placeholder:text-tertiary outline-none transition-colors focus:border-acid"
            />
            <input
              type="text"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Your country *"
              className="w-full rounded-2xl border border-[color:var(--hair-strong)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-primary placeholder:text-tertiary outline-none transition-colors focus:border-acid"
            />
          </div>

          <div className="pt-2">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-secondary">
              Select payment method *
            </p>
            <div className="mt-3 space-y-2.5">
              {PAYMENTS.map((p) => {
                const active = payment === p.id;
                return (
                  <label
                    key={p.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 transition-colors ${
                      active
                        ? "border-acid bg-acid/[0.06]"
                        : "border-[color:var(--hair-strong)] hover:hairline-strong"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={p.id}
                      checked={active}
                      onChange={() => {
                        setPayment(p.id);
                        setError("");
                      }}
                      className="sr-only"
                    />
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        active ? "border-acid" : "border-[color:var(--hair-strong)]"
                      }`}
                    >
                      {active && <span className="h-2.5 w-2.5 rounded-full bg-acid" />}
                    </span>
                    <span className="flex h-7 min-w-[54px] items-center justify-center rounded-md bg-white px-2">
                      {p.logo}
                    </span>
                    <span className="text-[15px] font-medium text-primary">
                      {p.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {error && (
            <p className="text-[13px] font-medium text-[#ff6b6b]">{error}</p>
          )}

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-acid px-6 py-4 text-[14px] font-bold uppercase tracking-[0.08em] text-[#041207] transition-transform duration-500 hover:scale-[1.02] active:scale-95"
          >
            Continue to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

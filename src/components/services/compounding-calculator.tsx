"use client";

import { useMemo, useState } from "react";

/**
 * Illustrative compounding visual for the Investment page. Shows how a fixed
 * monthly investment could grow over 10 / 20 / 30 years at an assumed rate.
 *
 * ⚠️ Purely illustrative — NOT a projection or promise of returns. Uses a
 * standard SIP (monthly, start-of-period) future-value formula.
 */

const AMOUNTS = [5000, 10000, 25000];
const RATES = [8, 10, 12];
const HORIZONS = [10, 20, 30];

/** Future value of a monthly investment (contributions at start of month). */
function futureValue(monthly: number, annualRatePct: number, years: number) {
  const i = annualRatePct / 100 / 12;
  const n = years * 12;
  if (i === 0) return monthly * n;
  return monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
}

function formatINR(value: number) {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

/** Compact ₹ in lakh / crore for headline figures. */
function formatCompact(value: number) {
  if (value >= 1e7) return `₹${(value / 1e7).toFixed(2)} Cr`;
  if (value >= 1e5) return `₹${(value / 1e5).toFixed(1)} L`;
  return formatINR(value);
}

export function CompoundingCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(10);

  const rows = useMemo(
    () =>
      HORIZONS.map((years) => {
        const invested = monthly * years * 12;
        const value = futureValue(monthly, rate, years);
        return { years, invested, value, gains: value - invested };
      }),
    [monthly, rate],
  );

  const maxValue = Math.max(...rows.map((r) => r.value));

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-soft sm:p-8">
      {/* Controls */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Control label="Monthly investment">
          <div className="flex flex-wrap gap-2">
            {AMOUNTS.map((a) => (
              <Chip key={a} active={a === monthly} onClick={() => setMonthly(a)}>
                {formatCompact(a)}
              </Chip>
            ))}
          </div>
        </Control>
        <Control label="Assumed annual return">
          <div className="flex flex-wrap gap-2">
            {RATES.map((r) => (
              <Chip key={r} active={r === rate} onClick={() => setRate(r)}>
                {r}%
              </Chip>
            ))}
          </div>
        </Control>
      </div>

      {/* Bars */}
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {rows.map((row) => (
          <div key={row.years} className="flex flex-col">
            <div className="flex items-end justify-between gap-2">
              <span className="text-sm font-medium text-navy-900">
                {row.years} years
              </span>
              <span className="font-display text-lg font-semibold text-navy-800">
                {formatCompact(row.value)}
              </span>
            </div>
            <div className="mt-3 flex h-40 items-end">
              <div
                className="flex w-full flex-col justify-end overflow-hidden rounded-lg"
                style={{ height: `${(row.value / maxValue) * 100}%` }}
              >
                <div
                  className="w-full bg-gold-400"
                  style={{ height: `${(row.gains / row.value) * 100}%` }}
                  title={`Estimated growth: ${formatINR(row.gains)}`}
                />
                <div
                  className="w-full bg-navy-700"
                  style={{ height: `${(row.invested / row.value) * 100}%` }}
                  title={`Invested: ${formatINR(row.invested)}`}
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Invested {formatCompact(row.invested)}
            </p>
          </div>
        ))}
      </div>

      {/* Legend + disclaimer */}
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded-sm bg-navy-700" /> Amount invested
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="size-3 rounded-sm bg-gold-400" /> Estimated growth
        </span>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Illustration only — assumes a constant {rate}% annual return, compounded
        monthly. Actual returns vary and are not guaranteed. This is not investment
        advice or a projection of any specific product.
      </p>
    </div>
  );
}

function Control({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
        {label}
      </p>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "rounded-full border border-navy-800 bg-navy-800 px-4 py-2 text-sm font-medium text-white transition-colors"
          : "rounded-full border border-navy-800/20 bg-card px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-50"
      }
    >
      {children}
    </button>
  );
}

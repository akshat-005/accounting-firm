"use client";

import { useMemo, useState } from "react";

/**
 * Illustrative compounding visual for the Investment page. The visitor sets a
 * monthly investment and an assumed annual return with sliders, and sees how it
 * could grow over 10 / 20 / 30 years.
 *
 * ⚠️ Purely illustrative — NOT a projection or promise of returns. Uses a
 * standard SIP (monthly, start-of-period) future-value formula.
 */

const HORIZONS = [10, 20, 30];

const AMOUNT = { min: 500, max: 100000, step: 500 };
const RATE = { min: 5, max: 15, step: 0.5 };

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
  if (value >= 1e3) return `₹${(value / 1e3).toFixed(0)}K`;
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
  const longest = rows[rows.length - 1];

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-soft">
      {/* Controls */}
      <div className="grid gap-6 border-b border-border bg-subtle/60 px-6 py-6 sm:grid-cols-2 sm:px-8">
        <Slider
          label="Monthly investment"
          value={formatCompact(monthly)}
          min={AMOUNT.min}
          max={AMOUNT.max}
          step={AMOUNT.step}
          current={monthly}
          onChange={setMonthly}
          minLabel={formatCompact(AMOUNT.min)}
          maxLabel={formatCompact(AMOUNT.max)}
        />
        <Slider
          label="Assumed annual return"
          value={`${rate}%`}
          min={RATE.min}
          max={RATE.max}
          step={RATE.step}
          current={rate}
          onChange={setRate}
          minLabel={`${RATE.min}%`}
          maxLabel={`${RATE.max}%`}
        />
      </div>

      {/* Headline takeaway */}
      <p className="px-6 pt-6 text-center text-base leading-relaxed text-navy-900 sm:px-8">
        Investing{" "}
        <strong className="font-semibold">{formatCompact(monthly)}</strong> a month at{" "}
        <strong className="font-semibold">{rate}%</strong> a year could grow to{" "}
        <strong className="font-semibold text-gold-700">
          {formatCompact(longest.value)}
        </strong>{" "}
        in {longest.years} years.
      </p>

      {/* Chart */}
      <div className="px-6 pb-6 pt-8 sm:px-8">
        <div className="flex items-end justify-center gap-4 sm:gap-8">
          {rows.map((row) => {
            const heightPct = Math.max((row.value / maxValue) * 100, 8);
            const investedPct = (row.invested / row.value) * 100;
            return (
              <div
                key={row.years}
                className="flex w-full max-w-[9rem] flex-col items-center"
              >
                {/* focal value */}
                <span className="mb-2 font-display text-lg font-semibold text-navy-800 sm:text-xl">
                  {formatCompact(row.value)}
                </span>
                {/* bar */}
                <div className="flex h-52 w-full items-end">
                  <div
                    className="flex w-full flex-col justify-end overflow-hidden rounded-lg shadow-sm ring-1 ring-navy-900/5"
                    style={{ height: `${heightPct}%` }}
                    title={`${formatINR(row.value)} — invested ${formatINR(
                      row.invested,
                    )}, estimated growth ${formatINR(row.gains)}`}
                  >
                    <div className="w-full bg-gold-400" style={{ flex: 100 - investedPct }} />
                    <div className="w-full bg-navy-700" style={{ flex: investedPct }} />
                  </div>
                </div>
                {/* axis label */}
                <span className="mt-3 text-sm font-semibold text-navy-900">
                  {row.years} yrs
                </span>
                <span className="mt-0.5 text-xs text-muted-foreground">
                  Invested {formatCompact(row.invested)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend + disclaimer */}
      <div className="border-t border-border px-6 py-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
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
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
  minLabel,
  maxLabel,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (value: number) => void;
  minLabel: string;
  maxLabel: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
          {label}
        </span>
        <span className="font-display text-xl font-semibold text-navy-800">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3 w-full cursor-pointer accent-navy-800"
      />
      <div className="mt-1.5 flex justify-between text-[0.7rem] text-muted-foreground">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}
